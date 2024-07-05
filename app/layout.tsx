import './globals.css'
import NextAppProviders from './providers'
import Aside from '@/components/aside'
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
      <body className='w-full h-[100vh] bg-slate-100'>
        <NextAppProviders>
          <Aside />
          {children}
        </NextAppProviders>
      </body>
    </html>
  )
}
