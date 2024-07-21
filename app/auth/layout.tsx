import { ReactNode } from 'react'
import type { Metadata } from 'next'

interface Props {
  children: ReactNode
}

export const metadata: Metadata = {
  title: 'CM Auth',
  description: 'UIUC web application',
}

export default function Layout({ children }: Props) {
  return children
}
