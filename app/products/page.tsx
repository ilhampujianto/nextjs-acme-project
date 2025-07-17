
'use client';
import { useEffect, useState } from 'react';

interface Product {
  id: string;
  name: string;
  price: number;
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [editId, setEditId] = useState<string | null>(null);

  useEffect(() => {
    fetch('/api/products')
      .then((res) => res.json())
      .then(setProducts);
  }, []);

  const handleSubmit = async () => {
    const payload = { name, price: Number(price) };

    if (editId) {
      const res = await fetch('/api/products', {
        method: 'PUT',
        body: JSON.stringify({ ...payload, id: editId }),
      });
      const updated = await res.json();
      setProducts((prev) => prev.map((p) => (p.id === updated.id ? updated : p)));
      setEditId(null);
    } else {
      const res = await fetch('/api/products', {
        method: 'POST',
        body: JSON.stringify(payload),
      });
      const newProduct = await res.json();
      setProducts((prev) => [...prev, newProduct]);
    }

    setName('');
    setPrice('');
  };

  const handleDelete = async (id: string) => {
    await fetch('/api/products', {
      method: 'DELETE',
      body: JSON.stringify({ id }),
    });
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  const handleEdit = (product: Product) => {
    setName(product.name);
    setPrice(product.price.toString());
    setEditId(product.id);
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-4">
      <h1 className="text-2xl font-bold mb-4">Product List</h1>
      <div className="mb-4 space-y-2">
        <input
          className="w-full p-2 border rounded"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="w-full p-2 border rounded"
          placeholder="Price"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded"
          onClick={handleSubmit}
        >
          {editId ? 'Update' : 'Add'} Product
        </button>
      </div>
      <ul className="space-y-3">
        {products.map((p) => (
          <li
            key={p.id}
            className="flex justify-between items-center border p-2 rounded"
          >
            <div>
              <p className="font-semibold">{p.name}</p>
              <p className="text-sm text-gray-500">Rp {p.price.toLocaleString()}</p>
            </div>
            <div className="space-x-2">
              <button
                className="text-blue-600"
                onClick={() => handleEdit(p)}
              >Edit</button>
              <button
                className="text-red-600"
                onClick={() => handleDelete(p.id)}
              >Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
