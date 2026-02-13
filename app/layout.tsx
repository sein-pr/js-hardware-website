import type { Metadata, Viewport } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
})

export const metadata: Metadata = {
  title: "JS Hardware CC | Architectural Ironmongery & Security Solutions",
  description:
    "Namibia's leading specialist in architectural ironmongery, high-security access solutions, and professional hardware consultancy. Authorized Assa Abloy partner.",
  icons: {
    icon: "/images/js-hardware-logo.jpg",
    shortcut: "/images/js-hardware-logo.jpg",
    apple: "/images/js-hardware-logo.jpg",
  },
  keywords: [
    "JS Hardware",
    "architectural ironmongery",
    "Namibia",
    "Windhoek",
    "security solutions",
    "Assa Abloy",
    "door hardware",
    "access control",
  ],
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0d0d0d" },
  ],
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
