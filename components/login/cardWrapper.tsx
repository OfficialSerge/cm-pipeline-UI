'use client'

import { ReactNode } from 'react'
import { useRouter } from 'next/navigation'

interface Props {
  children?: ReactNode
  headerLabel?: string
  backButtonLabel?: string
  backButtonHref: string
  showSocial?: boolean
}

export default function CardWrapper(props: Props) {
  const { children, headerLabel, backButtonLabel, backButtonHref, showSocial } =
    props

  const router = useRouter()

  function handleClick(e) {
    e.preventDefault()
    router.push(backButtonHref)
  }

  return (
    <div className='w-1/3 h-1/2 shadow-slate-400 shadow-lg bg-blue-400 rounded flex flex-col justify-end items-center gap-y-5 p-5'>
      <h1 className='text-2xl font-bold'>{headerLabel}</h1>
      {children}
      <button
        className='font-bold hover:underline mt-auto'
        onClick={(e) => handleClick(e)}
      >
        {backButtonLabel}
      </button>
    </div>
  )
}
