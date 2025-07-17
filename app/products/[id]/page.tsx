import { notFound } from 'next/navigation';

const products = [
  { id: '1', name: 'MacBook Pro M3', price: 28000000, description: 'Laptop performa tinggi dengan chip Apple Silicon.' },
  { id: '2', name: 'iPhone 15 Pro', price: 20000000, description: 'Smartphone flagship Apple dengan kamera pro dan titanium body.' },
  { id: '3', name: 'AirPods Pro 2', price: 3500000, description: 'Earphone wireless dengan ANC dan spatial audio.' },
];

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;  // ✅ Penanganan Promise
  const product = products.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <p className="text-lg text-gray-700 mb-2">Harga: Rp {product.price.toLocaleString()}</p>
      <p className="text-gray-600">{product.description}</p>
    </div>
  );
}
