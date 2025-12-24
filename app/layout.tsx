import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"
import { personalInfo } from "@/data/personal"
import { ReCaptchaProvider } from "@/components/recaptcha-provider"
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: `${personalInfo.name} - ${personalInfo.role}`,
    template: `%s | ${personalInfo.name}`,
  },
  description: personalInfo.tagline,
  keywords: ["portfolio", "developer", "full stack", "web developer", "MERN stack", "Flutter", "Next.js"],
  authors: [{ name: personalInfo.name }],
  creator: personalInfo.name,
  icons: {
    icon: [
      { url: "/img.jpg", sizes: "any" },
      { url: "/img.jpg", type: "image/jpeg" },
    ],
    apple: [
      { url: "/img.jpg", sizes: "180x180", type: "image/jpeg" },
    ],
    shortcut: "/img.jpg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://santhosh-sanapathi-0911.vercel.app/",
    title: `${personalInfo.name} - ${personalInfo.role}`,
    description: personalInfo.tagline,
    siteName: `${personalInfo.name} Portfolio`,
    images: [
      {
        url: "/img.jpg",
        width: 1200,
        height: 630,
        alt: `${personalInfo.name} - ${personalInfo.role}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${personalInfo.name} - ${personalInfo.role}`,
    description: personalInfo.tagline,
    images: ["/img.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Global site tag (gtag.js) */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-9LTG3TSLVK`}
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config','G-9LTG3TSLVK', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ReCaptchaProvider>
            <div className="flex min-h-screen flex-col">
              <Navbar />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
            <Toaster />
          </ReCaptchaProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

