import { useState } from 'react';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    { id: 1, name: 'Netflix Premium 1 Bulan', category: 'Streaming', price: 50000, icon: '🎬', description: 'Akses Netflix Premium tanpa batas selama 1 bulan dengan kualitas HD & 4K' },
    { id: 2, name: 'Spotify Premium 3 Bulan', category: 'Music', price: 75000, icon: '🎵', description: 'Nikmati musik tanpa iklan dengan Spotify Premium selama 3 bulan' },
    { id: 3, name: 'Canva Pro 1 Tahun', category: 'Creative', price: 120000, icon: '🎨', description: 'Alat desain kreatif profesional untuk semua kebutuhan' },
    { id: 4, name: 'Disney+ Premium', category: 'Streaming', price: 45000, icon: '🎭', description: 'Streaming Disney+ dengan konten eksklusif' },
    { id: 5, name: 'YouTube Premium', category: 'Streaming', price: 35000, icon: '📺', description: 'Tonton YouTube tanpa iklan dengan fitur premium' },
    { id: 6, name: 'Adobe Creative Cloud', category: 'Creative', price: 200000, icon: '🖼️', description: 'Akses penuh ke semua aplikasi Adobe Creative Cloud' },
    { id: 7, name: 'ChatGPT Plus', category: 'Productivity', price: 150000, icon: '🤖', description: 'AI assistant premium untuk produktivitas maksimal' },
    { id: 8, name: 'NordVPN Premium', category: 'Security', price: 80000, icon: '🔐', description: 'VPN terbaik untuk privasi dan keamanan online' }
  ];

  const categories = ['Semua', 'Streaming', 'Music', 'Creative', 'Productivity', 'Security'];

  const filteredProducts = products.filter(product => 
    (selectedCategory === 'Semua' || product.category === selectedCategory) &&
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#7B1E1E] to-[#5A1414] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Koleksi Produk Digital Premium
          </h1>
          <p className="text-lg text-gray-200 mb-8">
            Temukan akun dan langganan digital yang legal, aman, dan hemat hingga 70%
          </p>
          <div className="max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="🔍 Cari produk yang Anda butuhkan..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-6 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-4 focus:ring-yellow-300 text-lg"
            />
          </div>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-8 px-4 bg-white sticky top-16 z-40 shadow-md">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105 ${
                  selectedCategory === cat 
                    ? 'bg-[#7B1E1E] text-white shadow-lg' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Produk tidak ditemukan</h3>
              <p className="text-gray-600">Coba kata kunci atau kategori lain</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map(product => (
                <div key={product.id} className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-[#7B1E1E] transition-all hover:scale-105 hover:shadow-xl">
                  <div className="text-5xl mb-4">{product.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
                  <p className="text-3xl font-bold text-[#7B1E1E] mb-4">
                    Rp {product.price.toLocaleString()}
                  </p>
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="w-full bg-[#7B1E1E] text-white py-3 rounded-lg font-bold hover:bg-[#5A1414] transition-colors"
                  >
                    Lihat Detail
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fadeIn">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl">
            <div className="text-5xl mb-4">{selectedProduct.icon}</div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{selectedProduct.name}</h2>
            <p className="text-gray-600 mb-4">{selectedProduct.description}</p>
            <p className="text-4xl font-bold text-[#7B1E1E] mb-6">
              Rp {selectedProduct.price.toLocaleString()}
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-gray-700">
                <span className="mr-2">✅</span> Legal & Aman
              </div>
              <div className="flex items-center text-gray-700">
                <span className="mr-2">✅</span> Garansi Replace
              </div>
              <div className="flex items-center text-gray-700">
                <span className="mr-2">✅</span> Instant Delivery
              </div>
              <div className="flex items-center text-gray-700">
                <span className="mr-2">✅</span> Support 24/7
              </div>
            </div>
            <div className="flex gap-3">
              <button className="flex-1 bg-[#7B1E1E] text-white py-3 rounded-lg font-bold hover:bg-[#5A1414] transition-colors">
                Beli Sekarang
              </button>
              <button 
                onClick={() => setSelectedProduct(null)}
                className="flex-1 border-2 border-gray-300 text-gray-700 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;