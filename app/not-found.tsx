// /app/not-found.tsx

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 text-white px-4">
      <h1 className="text-6xl font-bold mb-4 animate-bounce">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Oops! Halaman tidak ditemukan.</h2>
      <p className="text-center mb-6 max-w-md">
        Halaman yang kamu cari sepertinya hilang atau belum dibuat. Coba kembali ke halaman sebelumnya atau ke dashboard.
      </p>
      <a
        href="/"
        className="bg-white text-indigo-600 px-5 py-2 rounded-full font-semibold shadow hover:bg-gray-200 transition"
      >
        Kembali ke Beranda
      </a>
    </div>
  );
}
