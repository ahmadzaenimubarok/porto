import type { Metadata } from "next"
import "./globals.css"
import { site } from "@/lib/data"
import Shell from "@/components/shell"

export const metadata: Metadata = {
  title: `${site.name} — ${site.role}`,
  description: site.tagline,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" data-js="off" data-motion="on">
      <body>
        <Shell>{children}</Shell>
      </body>
    </html>
  )
}
