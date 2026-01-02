import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#7B1E1E] via-[#5A1414] to-[#3A0A0A] text-white py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-yellow-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-400 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Solusi Produk Digital Premium <br/>
            <span className="text-yellow-300">Harga Terjangkau</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            Akses Netflix, Spotify, Canva, Adobe, VPN, dan lebih dari 200+ produk digital premium yang legal, aman, dan hemat hingga 70%
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
            <Link to="/produk" className="bg-yellow-400 text-[#7B1E1E] px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-all hover:scale-105 shadow-lg">
              🛍️ Belanja Sekarang
            </Link>
            <Link to="/tentang-kami" className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-[#7B1E1E] transition-all hover:scale-105">
              Pelajari Lebih Lanjut
            </Link>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-semibold border border-white/30">
              ✅ 100% Legal & Aman
            </span>
            <span className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-semibold border border-white/30">
              ⚡ Support 24/7
            </span>
            <span className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-semibold border border-white/30">
              💰 Hemat hingga 70%
            </span>
          </div>
        </div>
      </section>

      {/* Trust Stats */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Dipercaya Ribuan Pengguna di Indonesia
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: '👥', number: '50,000+', label: 'Total Pengguna' },
              { icon: '✅', number: '100,000+', label: 'Transaksi Sukses' },
              { icon: '📦', number: '200+', label: 'Produk Premium' },
              { icon: '⭐', number: '98%', label: 'Kepuasan Pelanggan' }
            ].map((stat, idx) => (
              <div key={idx} className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition-all hover:scale-105">
                <div className="text-4xl mb-3">{stat.icon}</div>
                <h3 className="text-3xl font-bold text-[#7B1E1E] mb-2">{stat.number}</h3>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Keunggulan Orinimo Store
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: '💰', title: 'Hemat hingga 70%', desc: 'Harga jauh lebih terjangkau dibanding harga resmi.' },
              { icon: '🔒', title: 'Legal & Aman', desc: 'Semua produk legal dan aman digunakan tanpa risiko.' },
              { icon: '⚡', title: 'Support 24/7', desc: 'Dukungan pelanggan cepat via WhatsApp atau Telegram.' },
              { icon: '🚀', title: 'Instant Delivery', desc: 'Akun langsung dikirim setelah pembayaran terverifikasi.' },
              { icon: '🔄', title: 'Garansi Replace', desc: 'Garansi penggantian jika terjadi masalah pada akun.' },
              { icon: '🎁', title: 'Promo Menarik', desc: 'Dapatkan diskon dan bonus untuk pembelian tertentu.' }
            ].map((benefit, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all hover:scale-105">
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Produk Digital Terpopuler
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Netflix Premium', price: 'Rp 50.000', period: '/bulan', badge: 'Terlaris', icon: '🎬' },
              { name: 'Spotify Premium', price: 'Rp 25.000', period: '/bulan', badge: 'Hemat', icon: '🎵' },
              { name: 'Canva Pro', price: 'Rp 120.000', period: '/tahun', badge: 'Promo', icon: '🎨' }
            ].map((product, idx) => (
              <div key={idx} className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-xl p-6 hover:border-[#7B1E1E] transition-all hover:scale-105 relative overflow-hidden">
                <div className="absolute top-4 right-4 bg-yellow-400 text-[#7B1E1E] text-xs font-bold px-3 py-1 rounded-full">
                  {product.badge}
                </div>
                <div className="text-5xl mb-4">{product.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{product.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-[#7B1E1E]">{product.price}</span>
                  <span className="text-gray-600">{product.period}</span>
                </div>
                <Link to="/produk" className="block w-full bg-[#7B1E1E] text-white text-center py-3 rounded-lg font-bold hover:bg-[#5A1414] transition-colors">
                  Beli Sekarang
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/produk" className="inline-block bg-gradient-to-r from-[#7B1E1E] to-[#5A1414] text-white px-8 py-4 rounded-lg font-bold text-lg hover:scale-105 transition-transform shadow-lg">
              Lihat Semua Produk →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-gradient-to-r from-[#7B1E1E] to-[#5A1414] text-white py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Siap Nikmati Akses Premium <br/>Tanpa Bikin Dompet Menangis?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Mulai belanja sekarang dan rasakan kemudahan akses digital premium dengan harga terjangkau
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/produk" className="bg-yellow-400 text-[#7B1E1E] px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-all hover:scale-105 shadow-lg">
              Lihat Paket Lengkap
            </Link>
            <a href="https://wa.me/6281234567890" className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-[#7B1E1E] transition-all hover:scale-105">
              💬 Hubungi via WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;