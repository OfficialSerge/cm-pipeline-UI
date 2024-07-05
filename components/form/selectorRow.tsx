'use client'

import { useContext } from 'react'
import { AppStateDispatchContext } from '@/contexts/appContext'

interface Props {
  stringPayload: string
}

export default function SelectorRow(props: Props) {
  const dispatch = useContext(AppStateDispatchContext)!

  return (
    <p
      className='p-2 bg-slate-50 hover:bg-slate-200
       first:rounded-t last:rounded-b'
      onClick={() => {
        dispatch({
          type: 'algorithmChange',
          stringPayload: props.stringPayload,
        })
      }}
    >
      {props.stringPayload}
    </p>
  )
}
