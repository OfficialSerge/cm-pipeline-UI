import LoginForm from '@/components/login/loginForm'

export default async function Page() {
  return (
    <div className='p-5 h-full flex flex-col justify-center items-center bg-slate-100'>
      <LoginForm />
    </div>
  )
}
