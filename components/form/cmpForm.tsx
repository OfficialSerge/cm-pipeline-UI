'use client'

import { useActionState, useContext } from 'react'
import { AppStateContext } from '@/contexts/appContext'
import { RevalidateTest } from '@/actions/actions'

import AlgorithmSelector from '@/components/form/algorithmSelector'
import NumberInput from './numberInput'
import StringInput from './stringInput'
import FormPreview from './formPreview'
import SubmitButton from './submitButton'

function FormSection(props: { section: FormSection; sectionID: number }) {
  const { section, sectionID } = props
  return (
    <>
      <h2 className='font-bold'>{section.title}</h2>
      {section.fields.map((field, fieldID) => {
        const { label } = field
        return (
          <FormField
            field={field}
            sectionID={sectionID}
            fieldID={fieldID}
            key={label}
          />
        )
      })}
    </>
  )
}

function FormField(props: {
  field: Field
  sectionID: number
  fieldID: number
}) {
  const { field } = props

  switch (field.type) {
    case 'string':
      return <StringInput {...props} />
    case 'number':
      return <NumberInput {...props} />
  }
}

// cs597 ENGrit-help illinois.edu
export default function CMPForm() {
  const state = useContext(AppStateContext)!
  const [formState, formAction] = useActionState(RevalidateTest, {
    algo_name: '',
    params: {
      res: '',
      k: '',
      i: '',
    },
    file_path: '',
    title: '',
    name: '',
    output_dir: '',
    message: '',
  })

  return (
    <div className='max-w-screen-sm mx-auto flex gap-5 lg:gap-24'>
      <form
        className='flex flex-col gap-5 w-full max-w-80 group'
        action={formAction}
      >
        <h2 className='font-bold'>Algorithm</h2>
        <AlgorithmSelector />

        {state.form.map((section, sectionID) => {
          const { title } = section
          return (
            <FormSection section={section} sectionID={sectionID} key={title} />
          )
        })}
        <SubmitButton />
      </form>
      <FormPreview {...formState} />
    </div>
  )
}
