'use server'

// for testing
function timeout() {
  return new Promise((res) => setTimeout(res, 1000))
}

export async function RevalidateTest(prevState: any, formData: FormData) {
  const data = {
    // main arguments
    algo_name: formData.get('algorithm') as string,
    params: {
      res: formData.get('resolution') as string,
      k: formData.get('k core value') as string,
      i: formData.get('iterations') as string,
    },
    file_path: formData.get('input directory') as string,

    // extra arguments
    title: formData.get('title') as string,
    name: formData.get('name') as string,
    output_dir: formData.get('output directory') as string,
    message: 'success',
  }

  try {
    await timeout()
    const res = await fetch('http://127.0.0.1:8000/pipeline', {
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
