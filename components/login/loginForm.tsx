import CardWrapper from './cardWrapper'
import { useFormState } from 'react-dom'

export default function LoginForm() {
  return (
    <CardWrapper headerLabel='Login' backButtonLabel='Home' backButtonHref='/'>
      <form className='w-full flex flex-col gap-y-5'>
        <input
          type='text'
          placeholder='Email'
          className='w-full p-2 rounded outline-none focus:ring-2 focus:ring-slate-500'
        />
        <input
          type='password'
          placeholder='Password'
          className='w-full p-2 rounded outline-none focus:ring-2 focus:ring-slate-500'
        />
      </form>
    </CardWrapper>
  )
}
