export default function ProfilePage() {
  const user = {
    name: 'Ilham Pujianto',
    email: 'Ilhampujianto@gmail.com',
    bio: ' Tech Enthusiast | UI/UX Learner',
    imageUrl: '/images/profile.jpg', // Letakkan gambar ini di folder /public/images/
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow p-6 mt-8">
      <div className="flex items-center space-x-6">
        <img
          src={user.imageUrl}
          alt={user.name}
          className="w-24 h-24 rounded-full object-cover border border-gray-300"
        />
        <div>
          <h2 className="text-2xl font-bold">{user.name}</h2>
          <p className="text-gray-600">{user.email}</p>
          <p className="mt-2 text-sm text-gray-500">{user.bio}</p>
        </div>
      </div>
    </div>
  );
}
