import BoxUploadForm from '@/components/form/boxUploadForm'
import ServerTest from '@/components/serverTest'

export default async function Page() {
  return (
    <div className='w-9/12 h-full p-5 float-end '>
      <BoxUploadForm>
        <ServerTest />
      </BoxUploadForm>
    </div>
  )
}
