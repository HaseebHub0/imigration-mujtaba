import type React from "react"
import type { Metadata } from "next"
import { Open_Sans, EB_Garamond } from "next/font/google"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import "./globals.css"

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-open-sans",
})

const garamond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-garamond",
})

export const metadata: Metadata = {
  title: "Mujtaba Sarwar - Canadian Immigration Consulting",
  description: "Expert Immigration Guidance with Transparent Assessment - RCIC License #R712505",
  generator: "v0.app",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/logo2.png", sizes: "32x32", type: "image/png" },
      { url: "/logo2.png", sizes: "16x16", type: "image/png" }
    ],
    apple: [
      { url: "/logo2.png", sizes: "180x180", type: "image/png" }
    ],
    shortcut: "/favicon.ico"
  },
  manifest: "/manifest.json",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${openSans.variable} ${garamond.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
