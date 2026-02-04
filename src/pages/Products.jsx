import { useEffect, useMemo, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const BRAND = "#7B1E1E";

const FloatingOrbs = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <style>{`
        @keyframes float-orb {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
          25% { transform: translate3d(28px, -28px, 0) scale(1.08); }
          50% { transform: translate3d(-18px, -42px, 0) scale(0.95); }
          75% { transform: translate3d(18px, -22px, 0) scale(1.04); }
        }

        @keyframes pulse-glow {
          0%, 100% { opacity: 0.25; filter: blur(60px); }
          50% { opacity: 0.55; filter: blur(85px); }
        }

        .orb {
          animation: float-orb 20s ease-in-out infinite, pulse-glow 8s ease-in-out infinite;
          will-change: transform, opacity, filter;
        }
      `}</style>

      <div
        className="orb absolute top-[-10%] right-[-5%] w-[520px] h-[520px] rounded-full bg-gradient-to-br from-[#7B1E1E]/25 via-[#9B2E2E]/15 to-transparent"
        style={{ animationDelay: "0s" }}
      />
      <div
        className="orb absolute bottom-[-15%] left-[-10%] w-[620px] h-[620px] rounded-full bg-gradient-to-tr from-[#7B1E1E]/22 via-[#9B2E2E]/12 to-transparent"
        style={{ animationDelay: "3s" }}
      />
      <div
        className="orb absolute top-[40%] left-[20%] w-[420px] h-[420px] rounded-full bg-gradient-to-br from-[#7B1E1E]/18 via-[#9B2E2E]/10 to-transparent"
        style={{ animationDelay: "6s" }}
      />
    </div>
  );
};

const FloatingParticles = () => {
  const particlesSmall = useMemo(() => {
    return [...Array(18)].map((_, i) => ({
      id: `s-${i}`,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      duration: `${10 + Math.random() * 10}s`,
      opacity: 0.15 + Math.random() * 0.15,
    }));
  }, []);

  const particlesMed = useMemo(() => {
    return [...Array(8)].map((_, i) => {
      const size = 40 + Math.random() * 70;
      const isFilled = Math.random() > 0.5; // 50% filled, 50% border only
      return {
        id: `m-${i}`,
        size,
        isFilled,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: `${Math.random() * 5}s`,
        duration: `${14 + Math.random() * 10}s`,
        opacity: 0.12 + Math.random() * 0.18,
      };
    });
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-60">
      <style>{`
        @keyframes float-particle {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(20px, -20px) rotate(90deg); }
          50% { transform: translate(-10px, -40px) rotate(180deg); }
          75% { transform: translate(10px, -20px) rotate(270deg); }
        }
      `}</style>

      {particlesSmall.map((p) => (
        <div
          key={p.id}
          className="absolute w-1 h-1 bg-[#7B1E1E] rounded-full"
          style={{
            left: p.left,
            top: p.top,
            opacity: p.opacity,
            animation: `float-particle ${p.duration} ease-in-out infinite`,
            animationDelay: p.delay,
          }}
        />
      ))}

      {particlesMed.map((p) => (
        <div
          key={p.id}
          className={`absolute rounded-full ${
            p.isFilled ? "bg-[#7B1E1E]" : "border border-[#7B1E1E]/20"
          }`}
          style={{
            width: `${p.size}px`,
            height: `${p.size}px`,
            left: p.left,
            top: p.top,
            opacity: p.isFilled ? p.opacity : 1,
            animation: `float-particle ${p.duration} ease-in-out infinite`,
            animationDelay: p.delay,
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
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out",
      once: true,
      offset: 80,
    });

    document.title = "Orinimo Store - Produk";
  }, []);

  const products = [
    // STREAMING
    {
      id: 1,
      name: "Netflix Premium",
      category: "Streaming",
      price: 12000,
      image: "/images/products/netflix.png",
      description:
        "Akses Netflix Premium dengan berbagai paket fleksibel (1p1u, semi private, 1p2u).",
      variants: [
        { label: "1p1u • 7 Hari", price: 12000 },
        { label: "1p1u • 1 Bulan", price: 37000 },
        { label: "Semiprivate • 1 Bulan", price: 40000 },
        { label: "1p2u • 1 Bulan", price: 27000 },
      ],
    },
    {
      id: 2,
      name: "Disney+ Hotstar",
      category: "Streaming",
      price: 4000,
      image: "/images/products/disney.png",
      description: "Streaming film & series Disney, Marvel, Pixar, dan lainnya.",
      variants: [
        { label: "1 Hari", price: 4000 },
        { label: "3 Hari", price: 8000 },
        { label: "7 Hari", price: 12000 },
        { label: "1 Bulan", price: 25000 },
      ],
    },
    {
      id: 3,
      name: "Vidio Platinum",
      category: "Streaming",
      price: 20000,
      image: "/images/products/vidio.png",
      description: "Akses Vidio Platinum untuk streaming tanpa batas.",
      variants: [{ label: "1 Bulan", price: 20000 }],
    },
    {
      id: 4,
      name: "WeTV",
      category: "Streaming",
      price: 13000,
      image: "/images/products/wetv.png",
      description: "Nonton drama Asia favorit dengan WeTV.",
      variants: [{ label: "1 Bulan", price: 13000 }],
    },
    {
      id: 5,
      name: "VIU",
      category: "Streaming",
      price: 10000,
      image: "/images/products/viu.png",
      description: "Drama Korea & Asia dengan kualitas terbaik di VIU.",
      variants: [
        { label: "1 Bulan", price: 10000 },
        { label: "2 Bulan", price: 12000 },
        { label: "Anti Limit • 1 Bulan", price: 15000 },
        { label: "Anti Limit • 2 Bulan", price: 18000 },
      ],
    },
    {
      id: 6,
      name: "YouTube Premium",
      category: "Streaming",
      price: 10000,
      image: "/images/products/youtube.png",
      description: "Tanpa iklan (Ad-Free) + background play.",
      variants: [{ label: "1 Bulan", price: 10000 }],
    },
    {
      id: 7,
      name: "HBO Max",
      category: "Streaming",
      price: 27000,
      image: "/images/products/hbo.png",
      description: "Akses film & series eksklusif HBO Max.",
      variants: [{ label: "1 Bulan", price: 27000 }],
    },
    {
      id: 8,
      name: "Prime Video",
      category: "Streaming",
      price: 15000,
      image: "/images/products/prime.png",
      description: "Film & series pilihan di Prime Video dengan akun premium.",
      variants: [
        { label: "Sharing • 1 Bulan", price: 15000 },
        { label: "Private • 1 Bulan", price: 20000 },
      ],
    },
    {
      id: 9,
      name: "Loklok",
      category: "Streaming",
      price: 20000,
      image: "/images/products/loklok.png",
      description: "Aplikasi streaming Loklok dengan opsi sharing & private.",
      variants: [
        { label: "Sharing • 1 Bulan", price: 20000 },
        { label: "Private • 1 Bulan", price: 40000 },
      ],
    },
    {
      id: 10,
      name: "iQIYI Premium",
      category: "Streaming",
      price: 10000,
      image: "/images/products/iqiyi.png",
      description:
        "Streaming iQIYI dengan paket sharing, anti limit, hingga private.",
      variants: [
        { label: "Sharing • 1 Bulan", price: 10000 },
        { label: "Anti Limit • 1 Bulan", price: 15000 },
        { label: "Private • 1 Bulan", price: 37000 },
      ],
    },

    // CREATIVE
    {
      id: 12,
      name: "Canva Pro",
      category: "Creative",
      price: 1000,
      image: "/images/products/canva.png",
      description:
        "Semua template, font & elemen premium untuk desain. Cocok untuk freelance & bisnis.",
      variants: [
        { label: "1 Hari", price: 1000 },
        { label: "3 Hari", price: 2000 },
        { label: "7 Hari", price: 3000 },
        { label: "1 Bulan", price: 6000 },
        { label: "1 Tahun", price: 30000 },
      ],
    },
    {
      id: 13,
      name: "CapCut Pro",
      category: "Creative",
      price: 8000,
      image: "/images/products/capcut.png",
      description: "CapCut pro sharing dan private tanpa watermark.",
      variants: [
        { label: "Sharing • 7 Hari", price: 8000 },
        { label: "Sharing • 1 Bulan", price: 15000 },
        { label: "Private • 7 Hari", price: 13000 },
        { label: "Private • 1 Bulan", price: 25000 },
      ],
    },

    // PRODUCTIVITY / UTILITIES
    {
      id: 14,
      name: "ChatGPT Plus",
      category: "Productivity",
      price: 3000,
      image: "/images/products/chatgpt.png",
      description: "AI assistant premium untuk produktivitas maksimal (sharing).",
      variants: [
        { label: "Sharing • 1 Hari", price: 3000 },
        { label: "Sharing • 3 Hari", price: 8000 },
        { label: "Sharing • 5 Hari", price: 10000 },
        { label: "Sharing • 1 Bulan", price: 20000 },
      ],
    },
    {
      id: 15,
      name: "Scribd Premium",
      category: "Productivity",
      price: 10000,
      image: "/images/products/scribd.png",
      description: "Akses buku, audiobook, dan dokumen premium di Scribd.",
      variants: [
        { label: "Sharing • 1 Bulan", price: 10000 },
        { label: "Private • 1 Bulan", price: 22000 },
      ],
    },
    {
      id: 16,
      name: "Zoom Premium",
      category: "Productivity",
      price: 2000,
      image: "/images/products/zoom.png",
      description: "Zoom premium untuk meeting tanpa batasan durasi singkat.",
      variants: [
        { label: "1 Jam", price: 2000 },
        { label: "3 Jam", price: 4000 },
        { label: "1 Hari", price: 7000 },
        { label: "7 Hari", price: 15000 },
      ],
    },
    {
      id: 17,
      name: "GetContact Premium",
      category: "Productivity",
      price: 17000,
      image: "/images/products/get-contact.png",
      description:
        "Lihat info nama kontak & spam protection dengan GetContact Premium.",
      variants: [{ label: "1 Bulan", price: 17000 }],
    },

    // MUSIC
    {
      id: 18,
      name: "Apple Music",
      category: "Music",
      price: 15000,
      image: "/images/products/appmus.png",
      description: "Streaming musik premium Apple Music paket sharing.",
      variants: [{ label: "Sharing • 1 Bulan", price: 15000 }],
    },
  ];

  const categories = ["Semua", "Streaming", "Music", "Creative", "Productivity"];

  const filteredProducts = useMemo(() => {
    return products.filter(
      (product) =>
        (selectedCategory === "Semua" || product.category === selectedCategory) &&
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [products, selectedCategory, searchTerm]);

  const selectedVariant =
    selectedProduct?.variants && selectedVariantIndex !== null
      ? selectedProduct.variants[selectedVariantIndex]
      : null;

  const waText =
    selectedProduct && selectedVariant
      ? `Halo Orinimo Store, saya ingin order ${selectedProduct.name}.\n\n` +
        `Kategori: ${selectedProduct.category}\n` +
        `Paket: ${selectedVariant.label}\n` +
        `Harga: Rp ${selectedVariant.price.toLocaleString("id-ID")}\n\n` +
        `Tolong diproses ya. Terima kasih!!`
      : "";

  const canOrder = !!selectedVariant;
  const waHref = canOrder
    ? `https://wa.me/+6281325505028?text=${encodeURIComponent(waText)}`
    : "#";

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

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50/30 to-white py-14 px-4">
        <FloatingOrbs />
        <FloatingParticles />
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p
            data-aos="fade-up"
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold bg-[#7B1E1E]/10 text-[#7B1E1E] border border-[#7B1E1E]/10"
          >
            <span aria-hidden>✨</span>
            Hemat sampai 70% • Terpercaya & Aman
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
            Temukan akun dan langganan digital yang aman, dan hemat dengan proses cepat.
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

      {/* Filter Categories */}
      <section className="py-6 px-4 bg-white sticky top-16 z-40 shadow-md">
        <div className="max-w-7xl mx-auto">
          <div data-aos="fade-up" className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`group relative overflow-hidden px-6 py-2.5 rounded-lg font-semibold transition-all hover:scale-105 cursor-pointer ${
                    active ? "text-white shadow-lg" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                  style={active ? { backgroundColor: BRAND } : {}}
                >
                  <span aria-hidden className="absolute inset-0 opacity-0 group-hover:opacity-100 transition">
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

      {/* Products Grid */}
      <section className="py-12 px-4 bg-slate-50 relative overflow-hidden">
        <FloatingOrbs />
        <FloatingParticles />

        {/* Subtle pattern overlay */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, rgba(123,30,30,0.4) 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-16" data-aos="fade-up">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Produk tidak ditemukan</h3>
              <p className="text-gray-600">Coba kata kunci atau kategori lain</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {filteredProducts.map((product, idx) => (
                <div
                  key={product.id}
                  data-aos="fade-up"
                  data-aos-delay={Math.min(idx * 80, 240)}
                  className="group relative overflow-hidden bg-white border-2 border-gray-200 rounded-xl transition-all hover:scale-[1.03] hover:shadow-xl"
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(123,30,30,0.45)")}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(229,231,235,1)")}
                >
                  {/* Hover effects */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(123,30,30,0.08), rgba(255,255,255,0) 55%)",
                    }}
                  />
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -top-8 -right-8 h-24 w-24 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ backgroundColor: "rgba(123,30,30,0.18)" }}
                  />

                  <div className="relative">
                    <div className="overflow-hidden rounded-t-xl bg-slate-100 aspect-square">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover object-center"
                        loading="lazy"
                        draggable="false"
                      />
                    </div>

                    <div className="p-5">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{product.name}</h3>
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                        {product.description}
                      </p>

                      <div className="mb-4">
                        <p className="text-xs uppercase tracking-wide text-slate-500">
                          Mulai dari
                        </p>
                        <p className="text-2xl font-bold" style={{ color: BRAND }}>
                          Rp {product.price.toLocaleString("id-ID")}
                        </p>
                      </div>

                      <button
                        onClick={() => {
                          setSelectedProduct(product);
                          setSelectedVariantIndex(null);
                        }}
                        className="group/btn relative w-full text-white py-3 rounded-lg font-bold transition-colors overflow-hidden cursor-pointer"
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
          onClick={() => {
            setSelectedProduct(null);
            setSelectedVariantIndex(null);
          }}
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
                background:
                  "linear-gradient(135deg, rgba(123,30,30,0.06), rgba(255,255,255,0) 55%)",
              }}
            />

            <div className="relative">
              <div className="overflow-hidden rounded-xl bg-slate-100 mb-5 aspect-square max-h-[380px]">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                  draggable="false"
                />
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-3">
                {selectedProduct.name}
              </h2>
              <p className="text-gray-600 mb-4">{selectedProduct.description}</p>

              <div className="mb-6">
                <p className="text-xs uppercase tracking-wide text-slate-500">
                  Harga mulai dari
                </p>
                <p className="text-4xl font-bold" style={{ color: BRAND }}>
                  Rp {selectedProduct.price.toLocaleString("id-ID")}
                </p>
              </div>

              {selectedProduct.variants && selectedProduct.variants.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-slate-900 mb-2">
                    Pilih paket:
                  </h3>
                  <div className="space-y-2">
                    {selectedProduct.variants.map((v, index) => {
                      const active = index === selectedVariantIndex;
                      return (
                        <button
                          type="button"
                          key={v.label}
                          onClick={() => setSelectedVariantIndex(index)}
                          className={`w-full flex items-center justify-between rounded-lg border px-3 py-2 text-left text-sm transition cursor-pointer ${
                            active
                              ? "border-[#7B1E1E] bg-[#7B1E1E]/5"
                              : "border-slate-200 bg-white hover:border-[#7B1E1E]/50"
                          }`}
                        >
                          <span>{v.label}</span>
                          <span className="font-semibold" style={{ color: BRAND }}>
                            Rp {v.price.toLocaleString("id-ID")}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                  <p className="mt-2 text-xs text-slate-500">
                    Pilih salah satu paket di atas sebelum lanjut ke WhatsApp.
                  </p>
                </div>
              )}

              <div className="flex gap-3">
                <a
                  href={waHref}
                  onClick={(e) => {
                    if (!canOrder) e.preventDefault();
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative overflow-hidden flex-1 text-white py-3 rounded-lg font-bold transition-colors text-center cursor-pointer ${
                    canOrder ? "" : "opacity-70"
                  }`}
                  style={{ backgroundColor: canOrder ? BRAND : "#9CA3AF" }}
                >
                  <span
                    aria-hidden
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition"
                  >
                    {canOrder && (
                      <span
                        className="shimmer absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/25 to-transparent"
                        style={{ animation: "shimmerX 1.2s ease-in-out infinite" }}
                      />
                    )}
                  </span>
                  <span className="relative">Beli Sekarang</span>
                </a>

                <button
                  onClick={() => {
                    setSelectedProduct(null);
                    setSelectedVariantIndex(null);
                  }}
                  className="flex-1 border-2 border-gray-300 text-gray-700 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors cursor-pointer"
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