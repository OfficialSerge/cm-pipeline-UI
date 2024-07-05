'use client'

import { ReactNode, useContext } from 'react'
import { AppStateContext, AppStateDispatchContext } from '@/contexts/appContext'
import { RevalidateTest } from '@/actions/actions'
import AlgorithmSelector from '@/components/form/algorithmSelector'
import ParamsDetails from '@/components/form/paramsDetails'

interface Props {
  children: ReactNode
}

export default function BoxUploadForm(props: Props) {
  const state = useContext(AppStateContext)!
  const dispatch = useContext(AppStateDispatchContext)!

  // cs597 ENGrit-help illinois.edu

  return (
    <div className='bg-lime-300 rounded p-5'>
      <form
        className='flex flex-col gap-5 my-5 w-64 group'
        action={RevalidateTest}
      >
        <button
          className='bg-blue-300 p-5 w-full rounded mx-auto active:scale-95
          group-invalid:pointer-events-none
          group-invalid:opacity-30'
        >
          request
        </button>
      </form>
      {props.children}
    </div>
  )
}
