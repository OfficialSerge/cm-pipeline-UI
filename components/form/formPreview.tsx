interface Props {
  title: string
  name: string
  params: {
    res: string
    k: string
    i: string
  }
  file_path: string
  output_dir: string
  algo_name: string
  message: string
}

function NestedP(params: Props['params']) {
  const { res, k, i } = params

  return (
    <div className='flex flex-col gap-y-5 font-bold'>
      Params:
      <p className='ml-6'>res: {res}</p>
      <p className='ml-6'>k: {k}</p>
      <p className='ml-6'>i: {i}</p>
    </div>
  )
}

export default function FormPreview(props: Props) {
  return (
    <div className='flex flex-col gap-5'>
      <h2 className='font-bold'>Request Preview</h2>
      <p>title: {props.title}</p>
      <p>name: {props.name}</p>
      <p className='font-bold'>algo_name: {props.algo_name}</p>
      <NestedP {...props.params} />
      <p className='font-bold'>file_path: {props.file_path}</p>
      <p>output_dir: {props.output_dir}</p>
      <p>message: {props.message}</p>
    </div>
  )
}
