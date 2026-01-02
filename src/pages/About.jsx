import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-white font-['Poppins']">
      <section className="bg-white py-16 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Tentang Orinimo Store</h1>
        <p className="text-lg text-gray-600">Misi kami memudahkan akses ke layanan digital premium untuk semua orang di Indonesia.</p>
      </section>

      <section className="px-4 py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">Cerita Kami</h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            Orinimo Store didirikan untuk memberikan solusi produk digital premium yang legal, aman, dan terjangkau. Kami fokus pada transparansi, kejujuran, kemudahan, dan keamanan untuk memastikan pengalaman terbaik bagi pengguna Indonesia.
          </p>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-[#7B1E1E] rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white text-2xl">🔒</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Legal & Terpercaya</h3>
            <p className="text-gray-600">Semua produk kami bersumber dari penyedia resmi dan aman digunakan.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-[#7B1E1E] rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white text-2xl">💬</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Support Responsif</h3>
            <p className="text-gray-600">Tim kami siap membantu 24/7 via WhatsApp atau Telegram.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-[#7B1E1E] rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white text-2xl">👥</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Fokus Pengguna</h3>
            <p className="text-gray-600">Kami prioritaskan kemudahan dan kepuasan pelanggan.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;