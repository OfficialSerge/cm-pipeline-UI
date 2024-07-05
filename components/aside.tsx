'use client'

import { useContext } from 'react'
import { AppStateDispatchContext } from '@/contexts/appContext'

export default function Aside() {
  const dispatch = useContext(AppStateDispatchContext)!
  return (
    <aside className='fixed h-full w-3/12 p-5 bg-blue-400'>
      LOGIN STUFF IDK
    </aside>
  )
}
