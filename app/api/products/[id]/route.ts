import { NextResponse } from 'next/server'

let products = [
  { id: '1', name: 'MacBook Pro M3', price: 28000000 },
  { id: '2', name: 'iPhone 15 Pro', price: 20000000 },
  { id: '3', name: 'AirPods Pro 2', price: 3500000 },
]

// Update produk (PUT)
export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const id = params.id
  const updatedData = await req.json()

  const index = products.findIndex((p) => p.id === id)
  if (index === -1) return NextResponse.json({ message: 'Not found' }, { status: 404 })

  products[index] = { ...products[index], ...updatedData }

  return NextResponse.json({ message: 'Updated', data: products[index] })
}

// Hapus produk (DELETE)
export async function DELETE(_req: Request, { params }: { params: { id: string } }) {
  const id = params.id
  const index = products.findIndex((p) => p.id === id)
  if (index === -1) return NextResponse.json({ message: 'Not found' }, { status: 404 })

  const deleted = products.splice(index, 1)
  return NextResponse.json({ message: 'Deleted', data: deleted[0] })
}
