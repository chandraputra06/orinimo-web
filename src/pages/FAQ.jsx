import React, { useMemo, useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const BRAND = "#7B1E1E";

// Dot Matrix Background Component
const DotMatrix = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <style>{`
        @keyframes dot-pulse {
          0%, 100% { opacity: 0.15; transform: scale(1); }
          50% { opacity: 0.45; transform: scale(1.4); }
        }
        
        .dot {
          animation: dot-pulse 3s ease-in-out infinite;
        }
      `}</style>
      
      <div className="absolute inset-0 grid grid-cols-12 gap-8 p-8">
        {[...Array(96)].map((_, i) => (
          <div
            key={i}
            className="dot w-2 h-2 rounded-full bg-[#7B1E1E]"
            style={{
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

const faqs = [
  {
    category: "Sharing",
    question: "Apa itu premium aplikasi sharing?",
    answer:
      "Premium aplikasi sharing adalah layanan premium yang digunakan bersama dalam satu akun oleh beberapa pengguna, sehingga biayanya lebih murah dibanding akun private.",
  },
  {
    category: "Keamanan",
    question: "Apakah akun sharing aman?",
    answer:
      "Aman selama digunakan sesuai aturan yang diberikan penjual, seperti:\n" +
      "1. Tidak mengganti password\n" +
      "2. Tidak logout perangkat lain\n" +
      "3. Tidak mengubah profil utama\n" +
      "dll",
  },
  {
    category: "Kendala",
    question: "Kalau tiba-tiba logout sendiri bagaimana?",
    answer:
      "Silakan hubungi admin. Biasanya disebabkan oleh:\n" +
      "1. Terlalu banyak login\n" +
      "2. Update sistem aplikasi\n" +
      "3. Maintenance akun",
  },
  {
    category: "Garansi",
    question: "Apakah ada garansi?",
    answer:
      "Iya, dan setiap aplikasi memiliki durasi garansi yang berbeda-beda. Pastikan mematuhi SnK produk untuk mendapatkan garansi.",
  },
  {
    category: "Pemakaian",
    question: "Apakah cocok untuk pemakaian jangka panjang?",
    answer:
      "Cocok jika mengikuti aturan dan tidak sering login–logout.",
  },
  {
    category: "Order",
    question: "Cara order bagaimana?",
    answer:
      "Bisa lihat pada halaman Cara Pembelian.",
  },
  {
    category: "Berlangganan",
    question: "Cara berlangganan (step by step)?",
    answer:
      "1. Pilih produk yang diinginkan\n" +
      "2. Mengisi data diri\n" +
      "3. Melakukan pembayaran\n" +
      "4. Akun akan dikirim melalui WhatsApp\n" +
      "5. Selesai",
  },
];

const CATEGORIES = ["Semua", ...Array.from(new Set(faqs.map((f) => f.category)))];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const [query, setQuery] = useState("");
  const [activeCat, setActiveCat] = useState("Semua");

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
    });
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return faqs.filter((f) => {
      const catOk = activeCat === "Semua" ? true : f.category === activeCat;
      const qOk =
        !q ||
        f.question.toLowerCase().includes(q) ||
        f.answer.toLowerCase().includes(q);
      return catOk && qOk;
    });
  }, [query, activeCat]);

  const toggleFAQ = (idx) => setOpenIndex(openIndex === idx ? null : idx);

  return (
    <div className="min-h-screen bg-white font-poppins">
      {/* Hero Section dengan Dot Matrix Background */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50/30 to-white py-14 px-4">
        {/* Dot Matrix Background */}
        <DotMatrix />
        
        {/* Gradient Overlay untuk smooth transition */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white pointer-events-none" />

        <div className="container-page relative z-10 text-center">
          <div
            data-aos="fade-up"
            className="inline-flex items-center gap-2 rounded-full bg-[#7B1E1E]/10 px-4 py-2 text-sm font-semibold text-[#7B1E1E] border border-[#7B1E1E]/10"
          >
            <span aria-hidden className="animate-pulse">❓</span>
            Bantuan & Informasi
          </div>

          <h1
            data-aos="fade-up"
            data-aos-delay="100"
            className="mt-5 text-4xl md:text-5xl font-bold text-slate-900"
          >
            Pertanyaan Umum
            <span className="block text-[#7B1E1E]">Orinimo Store</span>
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto"
          >
            Jawaban singkat dan jelas tentang produk, pembelian, pembayaran, dan keamanan.
          </p>

          {/* Search */}
          <div data-aos="zoom-in" data-aos-delay="300" className="mt-8 max-w-2xl mx-auto">
            <div className="group flex items-center gap-3 rounded-2xl bg-white border-2 border-slate-200 shadow-sm px-4 py-3 hover:border-[#7B1E1E]/30 focus-within:border-[#7B1E1E]/40 focus-within:ring-4 focus-within:ring-[#7B1E1E]/10 transition-all">
              <span className="text-slate-400 group-focus-within:text-[#7B1E1E] transition-colors">🔎</span>
              <input
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setOpenIndex(null);
                }}
                placeholder="Cari pertanyaan... (contoh: pembayaran, garansi)"
                className="w-full bg-transparent outline-none text-slate-700 placeholder:text-slate-400"
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  className="text-sm font-semibold text-[#7B1E1E] hover:opacity-70 transition-opacity"
                >
                  Reset
                </button>
              )}
            </div>
          </div>

          {/* Categories */}
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="mt-6 flex flex-wrap justify-center gap-2"
          >
            {CATEGORIES.map((c, i) => {
              const active = c === activeCat;
              return (
                <button
                  key={c}
                  data-aos="fade-up"
                  data-aos-delay={420 + i * 50}
                  onClick={() => {
                    setActiveCat(c);
                    setOpenIndex(null);
                  }}
                  className={[
                    "px-4 py-2 rounded-full text-sm font-semibold border transition-all hover:scale-105",
                    active
                      ? "bg-[#7B1E1E] text-white border-[#7B1E1E] shadow-md"
                      : "bg-white text-slate-700 border-slate-200 hover:border-[#7B1E1E]/30",
                  ].join(" ")}
                >
                  {c}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Content Section - Padding dikurangi */}
      <section className="px-4 py-10 bg-white">
        <div className="max-w-4xl mx-auto">
          {/* Result count */}
          <div className="mb-4 text-sm text-slate-500">
            Menampilkan <span className="font-semibold text-slate-700">{filtered.length}</span> pertanyaan
          </div>

          <div className="space-y-3">
            {filtered.length === 0 ? (
              <div
                data-aos="fade-up"
                className="rounded-2xl border border-slate-200 bg-slate-50 p-8 text-center"
              >
                <div className="text-5xl mb-3">🔍</div>
                <p className="text-slate-600">
                  Tidak ada hasil untuk pencarian <span className="font-semibold">"{query}"</span>.
                  <br />
                  Coba kata kunci lain ya.
                </p>
              </div>
            ) : (
              filtered.map((faq, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div
                    key={`${faq.category}-${faq.question}-${idx}`}
                    data-aos="fade-up"
                    data-aos-delay={Math.min(idx * 80, 240)}
                    className="group rounded-2xl border-2 border-slate-200 bg-white shadow-sm hover:shadow-md hover:border-[#7B1E1E]/30 transition-all overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFAQ(idx)}
                      className="w-full text-left px-5 py-4 flex items-start justify-between gap-4 hover:bg-slate-50 transition"
                      aria-expanded={isOpen}
                    >
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-[#7B1E1E]/10 text-[#7B1E1E] group-hover:bg-[#7B1E1E]/15 transition-colors">
                            {faq.category}
                          </span>
                        </div>

                        <h3 className="mt-2 text-lg font-bold text-slate-900 group-hover:text-[#7B1E1E] transition-colors">
                          {faq.question}
                        </h3>
                      </div>

                      <span
                        className={[
                          "mt-1 flex-shrink-0 inline-flex h-10 w-10 items-center justify-center rounded-xl border transition-all",
                          isOpen
                            ? "bg-[#7B1E1E] text-white border-[#7B1E1E] scale-110"
                            : "bg-white text-[#7B1E1E] border-slate-200 group-hover:border-[#7B1E1E]/40",
                        ].join(" ")}
                        aria-hidden
                      >
                        <span className="text-xl font-bold">{isOpen ? "−" : "+"}</span>
                      </span>
                    </button>

                    <div
                      className={[
                        "grid transition-all duration-300 ease-out",
                        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                      ].join(" ")}
                    >
                      <div className="overflow-hidden">
                        <div className="px-5 pb-5 text-slate-600 leading-relaxed whitespace-pre-line">
                          {faq.answer}
                          <div className="mt-4 h-px bg-slate-100" />
                          <p className="mt-3 text-sm text-slate-500 flex items-center gap-2">
                            <span>💡</span>
                            Masih bingung? Hubungi admin via WhatsApp untuk bantuan.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Bottom CTA - Margin dikurangi */}
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="mt-8 relative rounded-3xl bg-gradient-to-r from-[#7B1E1E] to-[#9B2E2E] text-white p-7 md:p-8 flex flex-col md:flex-row items-center justify-between gap-5 shadow-xl shadow-[#7B1E1E]/20 overflow-hidden"
          >
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/5 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <h4 className="text-xl md:text-2xl font-bold">Butuh bantuan cepat?</h4>
              <p className="mt-1 text-white/90">
                Chat admin, kami bantu jawab pertanyaan kamu.
              </p>
            </div>
            
            <a
              href="https://wa.me/6281234567890?text=Halo%20Orinimo%20Store,%20saya%20ingin%20bertanya%20tentang%20produk."
              target="_blank"
              rel="noopener noreferrer"
              className="group relative z-10 inline-flex items-center justify-center rounded-xl bg-white text-[#7B1E1E] px-6 py-3 font-bold hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-100 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <span className="relative">💬 Chat WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;