async function FetchDate() {
  // this will probably be replaced by the Box API at some point
  const res = await fetch('http://localhost:3000/api', {
    next: { tags: ['test'] },
  })

  const data = await res.json()
  return data
}

export default async function ServerTest() {
  const data = await FetchDate()
  return (
    <div className='bg-blue-300 rounded mt-4 h-48 p-5'>
      {JSON.stringify(data)}
    </div>
  )
}
