import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dota 2 Store',
  description: 'Dota 2 best store',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html data-theme="forest" lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
