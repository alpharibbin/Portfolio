import { NextRequest, NextResponse } from "next/server"
import { sendContactEmail } from "@/lib/email"
import { checkRateLimit } from "@/lib/rate-limit"
import { z } from "zod"

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Invalid email address").max(255),
  subject: z.string().min(3, "Subject must be at least 3 characters").max(200),
  message: z.string().min(10, "Message must be at least 10 characters").max(2000),
  recaptchaToken: z.string().optional(),
})

// Verify reCAPTCHA token
async function verifyRecaptcha(token: string | undefined): Promise<boolean> {
  if (!token) {
    return false
  }

  const secretKey = process.env.RECAPTCHA_SECRET_KEY
  if (!secretKey) {
    // If no secret key is set, allow requests (for development)
    console.warn("RECAPTCHA_SECRET_KEY not set, skipping verification")
    return true
  }

  try {
    const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `secret=${secretKey}&response=${token}`,
    })

    const data = await response.json()
    return data.success === true && data.score >= 0.5 // reCAPTCHA v3 score threshold
  } catch (error) {
    console.error("reCAPTCHA verification error:", error)
    return false
  }
}

// Get client IP address
function getClientIp(request: NextRequest): string {
  // Check various headers for the real IP
  const forwarded = request.headers.get("x-forwarded-for")
  const realIp = request.headers.get("x-real-ip")
  const cfConnectingIp = request.headers.get("cf-connecting-ip") // Cloudflare

  if (forwarded) {
    return forwarded.split(",")[0].trim()
  }
  if (realIp) {
    return realIp
  }
  if (cfConnectingIp) {
    return cfConnectingIp
  }

  // Fallback to a default (shouldn't happen in production)
  return "unknown"
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP
    const clientIp = getClientIp(request)

    // Check rate limit
    const rateLimit = checkRateLimit(clientIp)
    if (!rateLimit.allowed) {
      const resetTime = rateLimit.resetTime
               ? new Date(rateLimit.resetTime).toISOString()
        : "unknown"
      return NextResponse.json(
        {
          error: "Rate limit exceeded. You can only send one message per day. Please try again later.",
          resetTime,
        },
        { status: 429 }
      )
    }

    // Parse request body
    const body = await request.json()

    // Validate input
    const validationResult = contactSchema.safeParse(body)
    if (!validationResult.success) {
      return NextResponse.json(
        {
          error: "Validation failed",
          details: validationResult.error.errors,
        },
        { status: 400 }
      )
    }

    const data = validationResult.data

    // Verify reCAPTCHA
    const recaptchaValid = await verifyRecaptcha(data.recaptchaToken)
    if (!recaptchaValid) {
      return NextResponse.json(
        {
          error: "reCAPTCHA verification failed. Please try again.",
        },
        { status: 403 }
      )
    }

    // Additional security checks
    // Check for suspicious patterns
    const suspiciousPatterns = [
      /<script/i,
      /javascript:/i,
      /on\w+\s*=/i,
      /data:text\/html/i,
    ]

    const allText = `${data.name} ${data.email} ${data.subject} ${data.message}`
    if (suspiciousPatterns.some((pattern) => pattern.test(allText))) {
      return NextResponse.json(
        {
          error: "Invalid input detected.",
        },
        { status: 400 }
      )
    }

    // Check message length (prevent extremely long messages)
    if (data.message.length > 2000) {
      return NextResponse.json(
        {
          error: "Message is too long. Maximum 2000 characters allowed.",
        },
        { status: 400 }
      )
    }

    // Send email
    await sendContactEmail(data, clientIp)

    return NextResponse.json(
      {
        success: true,
        message: "Your message has been sent successfully!",
      },
      { status: 200 }
    )
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      {
        error: "An error occurred while sending your message. Please try again later.",
      },
      { status: 500 }
    )
  }
}

// Block other HTTP methods
export async function GET() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 })
}

