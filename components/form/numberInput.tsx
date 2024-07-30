'use client'

import { useContext, memo } from 'react'
import { AppStateDispatchContext } from '@/contexts/appContext'

interface Props {
  field: Field
  sectionID: number
  fieldID: number
}

function NumberInput({ field, sectionID, fieldID }: Props) {
  const dispatch = useContext(AppStateDispatchContext)!
  const { label, name, min, max, step, value, error } = field as NumberField

  return (
    <div className='w-full'>
      <span className='my-1'>{label}</span>
      <input
        className={
          error
            ? 'p-2 rounded ring-inset outline-none ring-red-700 ring-2 text-red-700 peer w-full'
            : 'p-2 rounded ring-inset outline-none focus:ring-sky-600 focus:ring-2 peer w-full'
        }
        type='number'
        name={name}
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => {
          dispatch({
            type: 'numberFieldChange',
            stringPayload: e.target.value,
            sectionID,
            fieldID,
          })
        }}
      />
      <span className='m-1 peer-invalid:visible text-red-700'>{error}</span>
    </div>
  )
}

export default memo(NumberInput)
