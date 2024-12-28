import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Milnatas - Milena & Jonatas',
  description: 'Manual dos convidados',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col bg-primary-blue">
          <div className="flex w-full flex-1 flex-col px-2 pb-6 pt-2">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
