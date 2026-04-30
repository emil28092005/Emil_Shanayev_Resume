import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Emil Shanayev — DevOps & Backend Engineer',
  description:
    'Portfolio of Emil Shanayev — DevOps Engineer and Backend Developer specializing in Python/FastAPI, Kubernetes, Docker, and Linux infrastructure.',
  keywords: ['DevOps', 'Backend', 'Python', 'Go', 'Kubernetes', 'Docker', 'FastAPI'],
  authors: [{ name: 'Emil Shanayev' }],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-mono">{children}</body>
    </html>
  )
}
