'use server'

// for testing
function timeout() {
  return new Promise((res) => setTimeout(res, 1000))
}

export async function RevalidateTest(prevState: any, formData: FormData) {
  const data = {
    title: formData.get('title') as string,
    name: formData.get('name') as string,
    input_file: formData.get('input directory') as string,
    output_dir: formData.get('output directory') as string,
    algorithm: formData.get('algorithm') as string,
    resolution: formData.get('resolution') as string,
    kCoreValue: formData.get('k core value') as string,
    message: 'success',
  }

  try {
    await timeout()
    const res = await fetch('http://localhost:8000/pipeline', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    if (!res.ok) {
      return { ...data, message: `ERROR fetching: ${res.status}` }
    }

    const responseData = await res.json()
    return responseData
  } catch (error) {
    return { ...data, message: 'ERROR: An unexpected error occurred' }
  }
}
