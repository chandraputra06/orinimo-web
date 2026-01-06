import { useEffect, useMemo, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const BRAND = "#7B1E1E";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out",
      once: true,
      offset: 80,
    });
  }, []);

  const products = [
    { id: 1, name: "Netflix Premium 1 Bulan", category: "Streaming", price: 50000, icon: "🎬", description: "Akses Netflix Premium tanpa batas selama 1 bulan dengan kualitas HD & 4K" },
    { id: 2, name: "Spotify Premium 3 Bulan", category: "Music", price: 75000, icon: "🎵", description: "Nikmati musik tanpa iklan dengan Spotify Premium selama 3 bulan" },
    { id: 3, name: "Canva Pro 1 Tahun", category: "Creative", price: 120000, icon: "🎨", description: "Alat desain kreatif profesional untuk semua kebutuhan" },
    { id: 4, name: "Disney+ Premium", category: "Streaming", price: 45000, icon: "🎭", description: "Streaming Disney+ dengan konten eksklusif" },
    { id: 5, name: "YouTube Premium", category: "Streaming", price: 35000, icon: "📺", description: "Tonton YouTube tanpa iklan dengan fitur premium" },
    { id: 6, name: "Adobe Creative Cloud", category: "Creative", price: 200000, icon: "🖼️", description: "Akses penuh ke semua aplikasi Adobe Creative Cloud" },
    { id: 7, name: "ChatGPT Plus", category: "Productivity", price: 150000, icon: "🤖", description: "AI assistant premium untuk produktivitas maksimal" },
    { id: 8, name: "NordVPN Premium", category: "Security", price: 80000, icon: "🔐", description: "VPN terbaik untuk privasi dan keamanan online" },
  ];

  const categories = ["Semua", "Streaming", "Music", "Creative", "Productivity", "Security"];

  const filteredProducts = useMemo(() => {
    return products.filter(
      (product) =>
        (selectedCategory === "Semua" || product.category === selectedCategory) &&
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [products, selectedCategory, searchTerm]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section (lebih soft biar ga nabrak navbar/footer) */}
      <section className="relative overflow-hidden bg-white py-16 px-4">
        {/* blobs / tint brand */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-28 -right-28 h-80 w-80 rounded-full blur-3xl"
          style={{ backgroundColor: "rgba(123, 30, 30, 0.12)" }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-28 -left-28 h-80 w-80 rounded-full blur-3xl"
          style={{ backgroundColor: "rgba(123, 30, 30, 0.10)" }}
        />

        <div className="max-w-4xl mx-auto text-center relative">
          <p
            data-aos="fade-up"
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold"
            style={{
              backgroundColor: "rgba(123, 30, 30, 0.10)",
              color: BRAND,
            }}
          >
            <span aria-hidden>✨</span>
            Hemat sampai 70% • Legal & Aman
          </p>

          <h1
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-4xl md:text-5xl font-bold mb-4 mt-6 text-slate-900"
          >
            Koleksi Produk Digital <span style={{ color: BRAND }}>Premium</span>
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto"
          >
            Temukan akun dan langganan digital yang legal, aman, dan hemat dengan proses cepat.
          </p>

          <div data-aos="zoom-in" data-aos-delay="300" className="max-w-2xl mx-auto">
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">🔍</span>
              <input
                type="text"
                placeholder="Cari produk yang Anda butuhkan..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-5 py-4 rounded-xl bg-white text-slate-900 border border-slate-200 focus:outline-none focus:ring-4"
                style={{ boxShadow: "0 6px 24px rgba(123,30,30,0.10)" }}
              />
            </div>
          </div>

          {/* mini trust */}
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="mt-8 flex flex-wrap items-center justify-center gap-2 text-sm text-slate-600"
          >
            <span className="rounded-full bg-white px-4 py-2 border border-slate-200 shadow-sm">✅ Garansi replace</span>
            <span className="rounded-full bg-white px-4 py-2 border border-slate-200 shadow-sm">✅ Instant delivery</span>
            <span className="rounded-full bg-white px-4 py-2 border border-slate-200 shadow-sm">✅ Support responsif</span>
          </div>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-8 px-4 bg-white sticky top-16 z-40 shadow-md">
        <div className="max-w-7xl mx-auto">
          <div data-aos="fade-up" className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                data-aos="fade-up"
                data-aos-delay={cat === "Semua" ? 0 : 80}
                className={`px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105 ${
                  selectedCategory === cat
                    ? "text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
                style={selectedCategory === cat ? { backgroundColor: BRAND } : {}}
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
            <div className="text-center py-20" data-aos="fade-up">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Produk tidak ditemukan</h3>
              <p className="text-gray-600">Coba kata kunci atau kategori lain</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product, idx) => (
                <div
                  key={product.id}
                  data-aos="fade-up"
                  data-aos-delay={Math.min(idx * 80, 240)}
                  className="bg-white border-2 border-gray-200 rounded-xl p-6 transition-all hover:scale-105 hover:shadow-xl"
                  style={{ borderColor: "rgba(0,0,0,0.08)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(123,30,30,0.45)")}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(0,0,0,0.08)")}
                >
                  <div className="text-5xl mb-4">{product.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
                  <p className="text-3xl font-bold mb-4" style={{ color: BRAND }}>
                    Rp {product.price.toLocaleString()}
                  </p>
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="w-full text-white py-3 rounded-lg font-bold transition-colors"
                    style={{ backgroundColor: BRAND }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#5A1414")}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = BRAND)}
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
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            data-aos="zoom-in"
            className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-5xl mb-4">{selectedProduct.icon}</div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{selectedProduct.name}</h2>
            <p className="text-gray-600 mb-4">{selectedProduct.description}</p>
            <p className="text-4xl font-bold mb-6" style={{ color: BRAND }}>
              Rp {selectedProduct.price.toLocaleString()}
            </p>

            <div className="space-y-3 mb-6">
              {[
                "Legal & Aman",
                "Garansi Replace",
                "Instant Delivery",
                "Support 24/7",
              ].map((t, i) => (
                <div
                  key={t}
                  data-aos="fade-up"
                  data-aos-delay={100 + i * 80}
                  className="flex items-center text-gray-700"
                >
                  <span className="mr-2">✅</span> {t}
                </div>
              ))}
            </div>

            <div className="flex gap-3">
              <button
                className="flex-1 text-white py-3 rounded-lg font-bold transition-colors"
                style={{ backgroundColor: BRAND }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#5A1414")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = BRAND)}
              >
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
