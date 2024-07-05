'use client'

import { type ReactNode } from 'react'
import { AppContextProvider } from '@/contexts/appContext'

export default function NextAppProviders({
  children,
}: {
  children: ReactNode
}) {
  return <AppContextProvider>{children}</AppContextProvider>
}
