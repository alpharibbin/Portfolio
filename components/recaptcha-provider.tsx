"use client"

import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3"
import { ReactNode } from "react"

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""

export function ReCaptchaProvider({ children }: { children: ReactNode }) {
  if (!RECAPTCHA_SITE_KEY) {
    // If no site key, render children without reCAPTCHA (for development)
    return <>{children}</>
  }

  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={RECAPTCHA_SITE_KEY}
      scriptProps={{
        async: false,
        defer: false,
        appendTo: "head",
        nonce: undefined,
      }}
    >
      {children}
    </GoogleReCaptchaProvider>
  )
}

