import React, { useState } from 'react';

// Data dummy produk (bisa diganti dengan API)
const products = [
  { id: 1, name: 'Netflix Premium 1 Bulan', category: 'Streaming', price: 50000, discount: 20, description: 'Akses Netflix Premium tanpa batas selama 1 bulan.', benefits: ['HD & 4K', 'Bebas iklan', 'Multi-device'], duration: '1 Bulan' },
  { id: 2, name: 'Spotify Premium 3 Bulan', category: 'Music', price: 75000, discount: 15, description: 'Nikmati musik tanpa iklan dengan Spotify Premium.', benefits: ['Offline download', 'Audio berkualitas tinggi', 'Skip unlimited'], duration: '3 Bulan' },
  { id: 3, name: 'Canva Pro 1 Tahun', category: 'Creative', price: 120000, discount: 30, description: 'Alat desain kreatif untuk semua kebutuhan.', benefits: ['Template premium', 'Kolaborasi tim', 'Brand kit'], duration: '1 Tahun' },
  // Tambahkan lebih banyak produk sesuai kebutuhan
];

const categories = ['Semua', 'Streaming', 'Music', 'Productivity', 'Creative', 'Security/VPN', 'Entertainment'];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('Terpopuler');
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Filter dan sort produk
  const filteredProducts = products
    .filter(product => (selectedCategory === 'Semua' || product.category === selectedCategory) &&
                       product.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => {
      if (sortBy === 'Harga Termurah') return a.price - b.price;
      if (sortBy === 'Harga Tertinggi') return b.price - a.price;
      if (sortBy === 'Terbaru') return b.id - a.id; // Asumsi ID lebih tinggi = lebih baru
      return 0; // Terpopuler default
    });

  return (
    <div className="min-h-screen bg-white font-['Poppins']">
      {/* Hero Section */}
      <section className="bg-white py-16 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Koleksi Produk Digital Premium</h1>
        <p className="text-lg text-gray-600 mb-8">Temukan akun dan langganan digital yang legal, aman, dan hemat hingga 70%.</p>
        <input
          type="text"
          placeholder="Cari produk..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7B1E1E] mb-4"
        />
      </section>

      {/* Filter & Sort */}
      <section className="px-4 py-8 bg-gray-50">
        <div className="flex flex-wrap justify-center gap-4 mb-4">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-lg font-semibold ${selectedCategory === cat ? 'bg-[#7B1E1E] text-white' : 'bg-white text-[#7B1E1E] border border-[#7B1E1E]'}`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="text-center">
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="px-4 py-2 border border-gray-300 rounded-lg">
            <option>Terpopuler</option>
            <option>Harga Termurah</option>
            <option>Harga Tertinggi</option>
            <option>Terbaru</option>
          </select>
        </div>
      </section>

      {/* Product Grid */}
      <section className="px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredProducts.map(product => (
            <div key={product.id} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <p className="text-[#7B1E1E] font-bold text-lg mb-2">Rp {product.price.toLocaleString()} {product.discount && <span className="text-sm text-gray-500">(-{product.discount}%)</span>}</p>
              <button
                onClick={() => setSelectedProduct(product)}
                className="w-full bg-[#7B1E1E] text-white py-2 rounded-lg font-semibold hover:bg-opacity-90"
              >
                Lihat Detail
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{selectedProduct.name}</h2>
            <p className="text-gray-600 mb-4">{selectedProduct.description}</p>
            <p className="text-[#7B1E1E] font-bold text-lg mb-4">Rp {selectedProduct.price.toLocaleString()} ({selectedProduct.duration})</p>
            <ul className="mb-4">
              {selectedProduct.benefits.map((benefit, idx) => <li key={idx} className="text-gray-700">• {benefit}</li>)}
            </ul>
            <div className="flex gap-4">
              <button className="bg-[#7B1E1E] text-white py-2 px-4 rounded-lg font-semibold">Tambah ke Keranjang</button>
              <button className="border border-[#7B1E1E] text-[#7B1E1E] py-2 px-4 rounded-lg font-semibold">Beli Sekarang</button>
            </div>
            <button onClick={() => setSelectedProduct(null)} className="mt-4 text-gray-500 underline">Tutup</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;