// app/layout.tsx
import './globals.css'  // relative to app/
  // <--- add this line if missing

export const metadata = {
  title: 'Manisha Raparthi – Portfolio',
  description: 'Portfolio website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

