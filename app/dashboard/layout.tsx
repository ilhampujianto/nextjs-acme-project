import SideNav from '@/app/ui/dashboard/sidenav';
import Link from 'next/link';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      {/* Sidebar */}
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>

      {/* Main Area */}
      <div className="flex-grow flex flex-col md:overflow-y-auto">
        {/* Top Navbar */}
        <header className="bg-white border-b px-6 py-4 flex items-center justify-between shadow-sm sticky top-0 z-10">
          <div className="flex gap-4 items-center">
            <Link href="/dashboard" className="text-blue-600 font-bold hover:underline">
              Dashboard
            </Link>
            <Link href="/dashboard/customers" className="text-gray-600 hover:text-blue-600">
              Customers
            </Link>
            <Link href="/dashboard/invoices" className="text-gray-600 hover:text-blue-600">
              Invoices
            </Link>
            <Link href="/dashboard/profile" className="text-gray-600 hover:text-blue-600">
              Profile
            </Link>
            <Link href="/products" className="text-gray-600 hover:text-blue-600">Products</Link>
          </div>
          <div className="text-sm text-gray-500 hidden md:block">
            Halo, Ilham 👋
          </div>
        </header>

        {/* Page content */}
        <main className="flex-grow p-6 md:p-12 bg-gray-50">
          {children}
        </main>
      </div>
    </div>
  );
}
