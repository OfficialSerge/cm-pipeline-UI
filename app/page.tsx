'use client'

import { useRouter } from 'next/navigation'

export default function Page() {
  const router = useRouter()

  function handleClick(e) {
    e.preventDefault()
    router.push('/cmpipeline')
  }

  return (
    <main className='w-full max-w-screen-md p-5 mx-auto'>
      This is the home page, maybe we build login functionality at some point.
      For now just pick the feature you want to use.
      <button
        className='font-bold hover:underline mt-5 block'
        onClick={(e) => handleClick(e)}
      >
        &#8226; cm pipeline route
      </button>
    </main>
  )
}
