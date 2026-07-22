import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Emil Shanayev — AI Systems & Scientific Software',
  description: 'Portfolio of Emil Shanayev: AI-native systems, scientific software, graphics and infrastructure.',
  authors: [{ name: 'Emil Shanayev' }],
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
