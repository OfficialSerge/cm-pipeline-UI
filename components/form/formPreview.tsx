interface Props {
  title: string
  name: string
  input_file: string
  output_dir: string
  algorithm: string
  resolution: string
  kCoreValue: string
  message: string
}

export default function FormPreview(props: Props) {
  return (
    <div className='flex flex-col gap-5'>
      <h2 className='font-bold'>Request Preview</h2>
      <p>title: {props.title}</p>
      <p>name: {props.name}</p>
      <p>inuput_file: {props.input_file}</p>
      <p>output_dir: {props.output_dir}</p>
      <p>algorithm: {props.algorithm}</p>
      <p>resolution: {props.resolution}</p>
      <p>k core value: {props.kCoreValue}</p>
      <p>message: {props.message}</p>
    </div>
  )
}
