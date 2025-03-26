import type { Metadata } from "next"
import { Geist, Geist_Mono, Erica_One } from "next/font/google"
import "./globals.css"
import RotatedWord from "./RotatedWord"
import Instructions from "./Instructions"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

const ericaOne = Erica_One({
  variable: "--font-erica-one",
  subsets: ["latin"],
  weight: "400",
})

export const metadata: Metadata = {
  title: "Memory Game",
  description: "A Game for 2 Players",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${ericaOne.variable} container px-4 pb-16 mx-auto antialiased bg-stone-100`}
      >
        <header className="mb-8 lg:mb-12 mx-auto text-center">
          <Instructions />
          <h1 className="font-serif text-4xl sm:text-6xl mt-4">
            <RotatedWord word="MEMORY" /> <RotatedWord word="GAME" />
          </h1>
        </header>
        <main>{children}</main>
      </body>
    </html>
  )
}
