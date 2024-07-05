'use client'

import { AppStateContext } from '@/contexts/appContext'
import { useContext } from 'react'
import SelectorRow from './selectorRow'

/**
 * CM Pipeline algorithms
 * */
const algorithms = ['Leiden-CPM', 'Leiden-Mod', 'IKC', 'InfoMap']

export default function AlgorithmSelector() {
  const state = useContext(AppStateContext)!

  return (
    <div
      className='relative rounded bg-slate-50 p-2 
          hover:cursor-pointer group/algo' // maybe use javascript idk
    >
      {state.form}
      <div
        className='absolute top-11 left-0 w-full invisible flex flex-col
            group-hover/algo:visible'
      >
        {algorithms.map((algorithm) => (
          <SelectorRow stringPayload={algorithm} />
        ))}
      </div>
    </div>
  )
}
