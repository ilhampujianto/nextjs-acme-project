export default function InvoicesPage() {
  const invoices = [
    { id: 'INV001', customer: 'Andi Saputra', amount: 1500000, status: 'Paid' },
    { id: 'INV002', customer: 'Siti Aminah', amount: 2000000, status: 'Unpaid' },
    { id: 'INV003', customer: 'Budi Raharjo', amount: 1750000, status: 'Paid' },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Invoices</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-3 border-b">Invoice ID</th>
              <th className="p-3 border-b">Customer</th>
              <th className="p-3 border-b">Amount</th>
              <th className="p-3 border-b">Status</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((invoice) => (
              <tr key={invoice.id} className="hover:bg-gray-50">
                <td className="p-3 border-b">{invoice.id}</td>
                <td className="p-3 border-b">{invoice.customer}</td>
                <td className="p-3 border-b">Rp {invoice.amount.toLocaleString()}</td>
                <td className="p-3 border-b">
                  <span
                    className={`inline-block px-2 py-1 text-xs rounded ${
                      invoice.status === 'Paid'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}
                  >
                    {invoice.status}
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
