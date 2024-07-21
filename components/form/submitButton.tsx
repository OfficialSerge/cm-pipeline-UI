'use client'

import { useFormStatus } from 'react-dom'

export default function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <button
      className={
        pending
          ? 'bg-blue-300 p-5 w-full rounded mx-auto active:scale-95 opacity-30 pointer-events-none'
          : 'bg-blue-300 p-5 w-full rounded mx-auto active:scale-95'
      }
    >
      {pending ? 'pending...' : 'request'}
    </button>
  )
}
