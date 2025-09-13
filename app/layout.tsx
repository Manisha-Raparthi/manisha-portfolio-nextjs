import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Manisha Raparthi – Portfolio',
  description: 'Portfolio website for Manisha Raparthi',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  )
}
