import { type NextRequest, NextResponse } from 'next/server'

export async function GET() {
  try {
    const res = await fetch('http://localhost:8000/test', {
      next: { tags: ['test'] },
    })

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`)
    }

    const data = await res.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error('Error fetching data:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
