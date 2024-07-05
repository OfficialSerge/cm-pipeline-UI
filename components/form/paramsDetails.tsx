'use client'

import { useContext } from 'react'
import { AppStateContext, AppStateDispatchContext } from '@/contexts/appContext'

// TODO: make errors more granular!
interface Parameter {
  value: string
  error: string
}

function Parameter(param: Parameter) {
  const dispatch = useContext(AppStateDispatchContext)!

  return (
    <div>
      <input
        className={
          param.error
            ? 'p-2 rounded ring-inset outline-none ring-red-500 ring-2 text-red-500 peer w-full'
            : 'p-2 rounded ring-inset outline-none focus:ring-slate-300 focus:ring-2 peer w-full'
        }
        type='number'
        placeholder='resolution'
        min='0.01'
        max='100'
        step='0.0001'
        value={param.value}
        onChange={(e) => {
          dispatch({
            type: 'resolutionChange',
            stringPayload: e.target.value,
          })
        }}
      />
      <span className='mx-1 invisible peer-invalid:visible text-red-500'>
        {param.error}
      </span>
    </div>
  )
}

function Run(paramList: AlgorithmParams) {
  return paramList.map((param) => <Parameter param={param} />)
}

//TODO: maybe rename this idk
export default function ParamsDetails() {
  const state = useContext(AppStateContext)!

  state.runParamsList.map((run) => <Run />)
}
