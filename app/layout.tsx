import type React from "react"
import type { Metadata } from "next"
import { Montserrat, Playfair_Display, Cormorant_Garamond } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
})

export const metadata: Metadata = {
  title: "Rajesh Interior's Professional Interior Designs",
  description:
    "Transforming spaces with elegant and functional interior design solutions. Rajesh Interior specializes in residential and commercial interior design.",
    generator: 'Abdullah Shaikh'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${playfair.variable} ${cormorant.variable} font-sans bg-cream-50 text-stone-800`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}


import './globals.css'