import './globals.css'
import NextAppProviders from './providers'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CM Pipeline',
  description: 'UIUC web application',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className='w-[100vw] h-[100vh] bg-gradient-to-b from-blue-300 to-slate-100'>
        <NextAppProviders>{children}</NextAppProviders>
      </body>
    </html>
  )
}
