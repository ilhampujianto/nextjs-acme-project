import { NextResponse } from 'next/server';

let products = [
  { id: '1', name: 'MacBook Pro M3', price: 28000000 },
  { id: '2', name: 'iPhone 15 Pro', price: 20000000 },
  { id: '3', name: 'AirPods Pro 2', price: 3500000 },
];

export async function GET() {
  return NextResponse.json(products);
}

export async function POST(req: Request) {
  const body = await req.json();
  const newProduct = { ...body, id: Date.now().toString() };
  products.push(newProduct);
  return NextResponse.json(newProduct);
}

export async function PUT(req: Request) {
  const body = await req.json();
  const index = products.findIndex((p) => p.id === body.id);
  if (index === -1) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  products[index] = { ...products[index], ...body };
  return NextResponse.json(products[index]);
}

export async function DELETE(req: Request) {
  const { id } = await req.json();
  products = products.filter((p) => p.id !== id);
  return NextResponse.json({ success: true });
}
