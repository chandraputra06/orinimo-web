const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#7B1E1E] to-[#5A1414] text-white py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Tentang Orinimo Store</h1>
          <p className="text-xl text-gray-200">
            Misi kami memudahkan akses ke layanan digital premium untuk semua orang di Indonesia
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Cerita Kami</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Orinimo Store didirikan untuk memberikan solusi produk digital premium yang legal, aman, dan terjangkau. 
            Kami memahami bahwa harga langganan digital resmi seringkali terlalu mahal bagi sebagian besar masyarakat Indonesia.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Dengan fokus pada transparansi, kejujuran, kemudahan, dan keamanan, kami berkomitmen untuk memastikan 
            pengalaman terbaik bagi setiap pelanggan. Kami hanya menyediakan produk dari sumber resmi dan terpercaya.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Nilai-Nilai Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: '🔒', 
                title: 'Legal & Terpercaya', 
                desc: 'Semua produk bersumber dari penyedia resmi dan aman digunakan. Kami tidak pernah menjual akun bajakan atau ilegal.' 
              },
              { 
                icon: '💬', 
                title: 'Support Responsif', 
                desc: 'Tim customer service kami siap membantu Anda 24/7 via WhatsApp atau Telegram untuk menjawab pertanyaan dan keluhan.' 
              },
              { 
                icon: '👥', 
                title: 'Fokus Pengguna', 
                desc: 'Kepuasan dan kemudahan pelanggan adalah prioritas utama kami. Kami terus berinovasi untuk pengalaman yang lebih baik.' 
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-all hover:scale-105">
                <div className="text-6xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Mengapa Memilih Kami?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { 
                icon: '💰', 
                title: 'Harga Terjangkau', 
                desc: 'Hemat hingga 70% dibanding langganan resmi tanpa mengurangi kualitas layanan' 
              },
              { 
                icon: '⚡', 
                title: 'Proses Cepat', 
                desc: 'Akun langsung dikirim setelah pembayaran terverifikasi, tidak perlu menunggu lama' 
              },
              { 
                icon: '🔄', 
                title: 'Garansi Penggantian', 
                desc: 'Jika terjadi masalah dengan akun, kami siap mengganti dengan yang baru' 
              },
              { 
                icon: '🎁', 
                title: 'Promo Menarik', 
                desc: 'Dapatkan diskon, cashback, dan bonus untuk pembelian dalam jumlah tertentu' 
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all hover:scale-105">
                <div className="flex items-start">
                  <div className="text-4xl mr-4">{item.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team/Contact CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-[#7B1E1E] to-[#5A1414] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Punya Pertanyaan?</h2>
          <p className="text-lg text-gray-200 mb-8">
            Tim kami siap membantu Anda. Hubungi kami kapan saja!
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href="https://wa.me/6281234567890" 
              className="bg-yellow-400 text-[#7B1E1E] px-8 py-4 rounded-lg font-bold hover:bg-yellow-300 transition-all hover:scale-105 inline-block"
            >
              💬 Chat WhatsApp
            </a>
            <a 
              href="https://t.me/orinimostore" 
              className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-[#7B1E1E] transition-all hover:scale-105 inline-block"
            >
              ✈️ Chat Telegram
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;