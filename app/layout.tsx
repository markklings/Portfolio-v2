import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Mark Julian Guerrero ― Full Stack Web & Mobile App Developer",
  description: "A Full Stack Website and Mobile App Developer"
}

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
})

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap"
})

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}