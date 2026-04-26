import type { Metadata } from "next"
import { Cairo } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/toaster"

const cairo = Cairo({ subsets: ["arabic", "latin"], weight: ["300","400","600","700","900"] })

export const metadata: Metadata = {
  title: "City Edge | العالمين – جاردن سيتي العاصمة – المقصد",
  description: "City Edge Developments — العالمين في العاصمة الإدارية، جاردن سيتي العاصمة، المقصد. مشاريع حصرية بأسعار مميزة لفترة محدودة.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body className={cairo.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
