export default function CustomersPage() {
  const customers = [
    { id: 1, name: 'Andi Saputra', email: 'andi@example.com', status: 'Active' },
    { id: 2, name: 'Siti Aminah', email: 'siti@example.com', status: 'Inactive' },
    { id: 3, name: 'Budi Raharjo', email: 'budi@example.com', status: 'Active' },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Customers</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-3 border-b">Name</th>
              <th className="p-3 border-b">Email</th>
              <th className="p-3 border-b">Status</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.id} className="hover:bg-gray-50">
                <td className="p-3 border-b">{customer.name}</td>
                <td className="p-3 border-b">{customer.email}</td>
                <td className="p-3 border-b">
                  <span
                    className={`inline-block px-2 py-1 text-xs rounded ${
                      customer.status === 'Active'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {customer.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
