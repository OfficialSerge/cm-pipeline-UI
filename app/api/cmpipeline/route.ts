export async function POST(request: Request) {
  try {
    const form = await request.formData()

    const name = form.get('name')
    const algorithm = form.get('algorithm')
    const title = form.get('title')
    const outputDir = form.get('output directory')
    const inputDir = form.get('input directory')
    const resolution = form.get('resolution')
    const kCoreValue = form.get('k core value')

    const data = {
      title,
      name,
      input_file: inputDir,
      output_dir: outputDir,
      algorithm,
      resolution,
      kCoreValue,
    }

    //const res = await fetch('http://localhost:8000/test', {})

    //if (!res.ok) {
    //  throw new Error(`HTTP error! status: ${res.status}`)
    //}
    //const data = await res.json()

    return Response.json({ ...data }, { status: 200 })
  } catch (error) {
    return Response.json({ request: 'ERROR' }, { status: 500 })
  }
}
