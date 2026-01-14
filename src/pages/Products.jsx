import { useEffect, useMemo, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const BRAND = "#7B1E1E";

// Geometric Shapes Background Component
const GeometricShapes = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
      <style>{`
        @keyframes rotate-shape {
          0% { transform: rotate(0deg) translateY(0px); }
          100% { transform: rotate(360deg) translateY(-20px); }
        }
        
        @keyframes float-shape {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
          50% { transform: translateY(-30px) translateX(20px) rotate(180deg); }
        }
        
        .shape-rotate {
          animation: rotate-shape 30s linear infinite;
        }
        
        .shape-float {
          animation: float-shape 15s ease-in-out infinite;
        }
      `}</style>
      
      {/* Triangles */}
      {[...Array(6)].map((_, i) => (
        <div
          key={`triangle-${i}`}
          className="shape-float absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            width: 0,
            height: 0,
            borderLeft: `${20 + Math.random() * 30}px solid transparent`,
            borderRight: `${20 + Math.random() * 30}px solid transparent`,
            borderBottom: `${30 + Math.random() * 40}px solid rgba(123, 30, 30, 0.15)`,
          }}
        />
      ))}
      
      {/* Squares */}
      {[...Array(8)].map((_, i) => (
        <div
          key={`square-${i}`}
          className="shape-rotate absolute border-2 border-[#7B1E1E]/20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${30 + Math.random() * 50}px`,
            height: `${30 + Math.random() * 50}px`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${20 + Math.random() * 20}s`,
          }}
        />
      ))}
      
      {/* Circles */}
      {[...Array(10)].map((_, i) => (
        <div
          key={`circle-${i}`}
          className="shape-float absolute rounded-full border-2 border-[#7B1E1E]/15"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${20 + Math.random() * 40}px`,
            height: `${20 + Math.random() * 40}px`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}
    </div>
  );
};

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
    <div className="min-h-screen bg-white">
      <style>{`
        @keyframes shimmerX {
          0% { transform: translateX(-120%); }
          100% { transform: translateX(120%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .shimmer { animation: none !important; }
        }
      `}</style>

      {/* Hero Section dengan Geometric Shapes Background */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50/30 to-white py-14 px-4">
        {/* Geometric Shapes Background */}
        <GeometricShapes />
        
        {/* Gradient Overlay untuk smooth transition */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p
            data-aos="fade-up"
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold bg-[#7B1E1E]/10 text-[#7B1E1E] border border-[#7B1E1E]/10"
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
            <div className="relative group">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">🔍</span>
              <input
                type="text"
                placeholder="Cari produk yang Anda butuhkan..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-5 py-4 rounded-xl bg-white text-slate-900 border-2 border-slate-200 focus:outline-none focus:border-[#7B1E1E]/40 focus:ring-4 focus:ring-[#7B1E1E]/10 transition-all"
                style={{ boxShadow: "0 4px 20px rgba(123,30,30,0.08)" }}
              />
              {/* shimmer effect */}
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-xl overflow-hidden opacity-0 group-hover:opacity-100 transition"
              >
                <span
                  className="shimmer absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/35 to-transparent"
                  style={{ animation: "shimmerX 1.2s ease-in-out infinite" }}
                />
              </span>
            </div>
          </div>

          {/* Trust badges */}
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="mt-8 flex flex-wrap items-center justify-center gap-2 text-sm text-slate-600"
          >
            {["✅ Garansi replace", "✅ Instant delivery", "✅ Support responsif"].map((badge, i) => (
              <span 
                key={badge}
                data-aos="fade-up"
                data-aos-delay={420 + i * 80}
                className="rounded-full bg-white px-4 py-2 border border-slate-200 shadow-sm hover:shadow-md hover:border-[#7B1E1E]/20 transition-all cursor-default"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Categories - Padding dikurangi */}
      <section className="py-6 px-4 bg-white sticky top-16 z-40 shadow-md">
        <div className="max-w-7xl mx-auto">
          <div data-aos="fade-up" className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`group relative overflow-hidden px-6 py-2.5 rounded-lg font-semibold transition-all hover:scale-105 ${
                    active
                      ? "text-white shadow-lg"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                  style={active ? { backgroundColor: BRAND } : {}}
                >
                  <span
                    aria-hidden
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition"
                  >
                    <span
                      className="shimmer absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      style={{ animation: "shimmerX 1.4s ease-in-out infinite" }}
                    />
                  </span>
                  <span className="relative">{cat}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Products Grid - Padding dikurangi */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-16" data-aos="fade-up">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Produk tidak ditemukan</h3>
              <p className="text-gray-600">Coba kata kunci atau kategori lain</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product, idx) => (
                <div
                  key={product.id}
                  data-aos="fade-up"
                  data-aos-delay={Math.min(idx * 80, 240)}
                  className="group relative overflow-hidden bg-white border-2 border-gray-200 rounded-xl p-6 transition-all hover:scale-105 hover:shadow-xl"
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(123,30,30,0.45)")}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(229,231,235,1)")}
                >
                  {/* Hover effects */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: "linear-gradient(135deg, rgba(123,30,30,0.08), rgba(255,255,255,0) 55%)",
                    }}
                  />
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -top-8 -right-8 h-24 w-24 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ backgroundColor: "rgba(123,30,30,0.18)" }}
                  />

                  <div className="relative">
                    <div className="text-5xl mb-4 transition-transform duration-300 group-hover:-rotate-2 group-hover:scale-105">
                      {product.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{product.name}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
                    <p className="text-3xl font-bold mb-4" style={{ color: BRAND }}>
                      Rp {product.price.toLocaleString()}
                    </p>

                    <button
                      onClick={() => setSelectedProduct(product)}
                      className="group/btn relative w-full text-white py-3 rounded-lg font-bold transition-colors overflow-hidden"
                      style={{ backgroundColor: BRAND }}
                      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#5A1414")}
                      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = BRAND)}
                    >
                      <span
                        aria-hidden
                        className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition"
                      >
                        <span
                          className="shimmer absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/25 to-transparent"
                          style={{ animation: "shimmerX 1.2s ease-in-out infinite" }}
                        />
                      </span>
                      <span className="relative">Lihat Detail</span>
                    </button>
                  </div>
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
            className="relative bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -top-10 -right-10 h-32 w-32 rounded-full blur-2xl"
              style={{ backgroundColor: "rgba(123,30,30,0.18)" }}
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-70"
              style={{
                background: "linear-gradient(135deg, rgba(123,30,30,0.06), rgba(255,255,255,0) 55%)",
              }}
            />

            <div className="relative">
              <div className="text-5xl mb-4">{selectedProduct.icon}</div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{selectedProduct.name}</h2>
              <p className="text-gray-600 mb-4">{selectedProduct.description}</p>
              <p className="text-4xl font-bold mb-6" style={{ color: BRAND }}>
                Rp {selectedProduct.price.toLocaleString()}
              </p>

              <div className="space-y-3 mb-6">
                {["Legal & Aman", "Garansi Replace", "Instant Delivery", "Support 24/7"].map((t, i) => (
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
                <a
                  href={`https://wa.me/6281234567890?text=${encodeURIComponent(
                    `Halo Orinimo Store, saya ingin order ${selectedProduct?.name}.\n\n` +
                      `Kategori: ${selectedProduct?.category}\n` +
                      `Harga: Rp ${selectedProduct?.price?.toLocaleString("id-ID")}\n\n` +
                      `Tolong diproses ya. Terima kasih 🙏`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden flex-1 text-white py-3 rounded-lg font-bold transition-colors text-center"
                  style={{ backgroundColor: BRAND }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#5A1414")}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = BRAND)}
                >
                  <span
                    aria-hidden
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition"
                  >
                    <span
                      className="shimmer absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/25 to-transparent"
                      style={{ animation: "shimmerX 1.2s ease-in-out infinite" }}
                    />
                  </span>
                  <span className="relative">Beli Sekarang</span>
                </a>


                <button
                  onClick={() => setSelectedProduct(null)}
                  className="flex-1 border-2 border-gray-300 text-gray-700 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;