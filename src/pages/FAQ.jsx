import React, { useMemo, useState } from "react";

const BRAND = "#7B1E1E";

const faqs = [
  {
    category: "Produk",
    question: "Produk apa saja yang tersedia?",
    answer:
      "Kami menyediakan akun dan langganan premium seperti Netflix, Spotify, Canva, VPN, dan produk digital lainnya (tersedia sesuai stok/admin).",
  },
  {
    category: "Pembelian",
    question: "Bagaimana cara membeli?",
    answer:
      "Pilih produk, lakukan pemesanan sesuai arahan admin, lalu pembayaran via metode yang tersedia (transfer/e-wallet/QRIS). Setelah itu, kirim bukti pembayaran agar pesanan diproses.",
  },
  {
    category: "Keamanan",
    question: "Apakah produk ini legal dan aman?",
    answer:
      "Kami mengutamakan keamanan. Panduan penggunaan diberikan agar akun tetap aman, dan dukungan admin tersedia jika ada kendala.",
  },
  {
    category: "Pembayaran",
    question: "Metode pembayaran apa saja yang tersedia?",
    answer:
      "Umumnya transfer bank, e-wallet (DANA/GoPay), dan QRIS (sesuai ketersediaan). Detail selalu mengikuti informasi admin.",
  },
  {
    category: "Garansi",
    question: "Apakah ada garansi?",
    answer:
      "Untuk beberapa produk tersedia garansi sesuai ketentuan. Silakan tanyakan ke admin sebelum order agar jelas masa berlaku & cakupannya.",
  },
  {
    category: "Support",
    question: "Kalau ada masalah setelah beli gimana?",
    answer:
      "Hubungi admin via WhatsApp, jelaskan kendala dan sertakan screenshot bila perlu. Kami bantu pengecekan dan solusi secepatnya.",
  },
];

const CATEGORIES = ["Semua", "Produk", "Pembelian", "Pembayaran", "Keamanan", "Garansi", "Support"];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const [query, setQuery] = useState("");
  const [activeCat, setActiveCat] = useState("Semua");

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
    <div className="min-h-screen bg-white font-['Poppins']">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <style>{`
          @keyframes floatSoft {
            0%,100% { transform: translate(-2%, -2%) scale(1); }
            50% { transform: translate(2%, 2%) scale(1.06); }
          }
          @media (prefers-reduced-motion: reduce) {
            .bg-anim { animation: none !important; }
          }
        `}</style>

        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div
            className="bg-anim absolute -top-24 -left-24 h-[22rem] w-[22rem] rounded-full blur-3xl opacity-60"
            style={{
              background: "rgba(123,30,30,0.22)",
              animation: "floatSoft 14s ease-in-out infinite",
            }}
          />
          <div
            className="bg-anim absolute -bottom-24 -right-24 h-[26rem] w-[26rem] rounded-full blur-3xl opacity-50"
            style={{
              background: "rgba(123,30,30,0.16)",
              animation: "floatSoft 16s ease-in-out infinite",
            }}
          />
          <div
            className="absolute inset-0 opacity-[0.18]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(123,30,30,0.20) 1px, transparent 0)",
              backgroundSize: "22px 22px",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/70 to-slate-50" />
        </div>

        <div className="container-page relative z-10 py-14 md:py-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#7B1E1E]/10 px-4 py-2 text-sm font-semibold text-[#7B1E1E]">
            <span aria-hidden>❓</span>
            Bantuan & Informasi
          </div>

          <h1 className="mt-4 text-4xl md:text-5xl font-bold text-slate-900">
            Pertanyaan Umum
            <span className="block text-[#7B1E1E]">Orinimo Store</span>
          </h1>

          <p className="mt-3 text-lg text-slate-600 max-w-2xl mx-auto">
            Jawaban singkat dan jelas tentang produk, pembelian, pembayaran, dan keamanan.
          </p>

          {/* Search */}
          <div className="mt-8 max-w-2xl mx-auto">
            <div className="flex items-center gap-3 rounded-2xl bg-white/80 backdrop-blur border border-slate-200 shadow-sm px-4 py-3">
              <span className="text-slate-400">🔎</span>
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
                  className="text-sm font-semibold text-[#7B1E1E] hover:opacity-80"
                >
                  Reset
                </button>
              )}
            </div>
          </div>

          {/* Categories */}
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {CATEGORIES.map((c) => {
              const active = c === activeCat;
              return (
                <button
                  key={c}
                  onClick={() => {
                    setActiveCat(c);
                    setOpenIndex(null);
                  }}
                  className={[
                    "px-4 py-2 rounded-full text-sm font-semibold border transition",
                    active
                      ? "bg-[#7B1E1E] text-white border-[#7B1E1E]"
                      : "bg-white/70 text-slate-700 border-slate-200 hover:bg-white",
                  ].join(" ")}
                >
                  {c}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="px-4 pb-16">
        <div className="max-w-4xl mx-auto">
          {/* Result count */}
          <div className="mt-2 text-sm text-slate-500">
            Menampilkan <span className="font-semibold text-slate-700">{filtered.length}</span> pertanyaan
          </div>

          <div className="mt-6 space-y-3">
            {filtered.length === 0 ? (
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-slate-600">
                Tidak ada hasil untuk pencarian <span className="font-semibold">"{query}"</span>.
                Coba kata kunci lain ya.
              </div>
            ) : (
              filtered.map((faq, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div
                    key={`${faq.category}-${faq.question}-${idx}`}
                    className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFAQ(idx)}
                      className="w-full text-left px-5 py-4 flex items-start justify-between gap-4 hover:bg-slate-50 transition"
                      aria-expanded={isOpen}
                    >
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-[#7B1E1E]/10 text-[#7B1E1E]">
                            {faq.category}
                          </span>
                        </div>

                        <h3 className="mt-2 text-lg font-bold text-slate-900">
                          {faq.question}
                        </h3>
                      </div>

                      <span
                        className={[
                          "mt-1 inline-flex h-10 w-10 items-center justify-center rounded-xl border transition",
                          isOpen
                            ? "bg-[#7B1E1E] text-white border-[#7B1E1E]"
                            : "bg-white text-[#7B1E1E] border-slate-200",
                        ].join(" ")}
                        aria-hidden
                      >
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>

                    <div
                      className={[
                        "grid transition-all duration-300 ease-out",
                        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                      ].join(" ")}
                    >
                      <div className="overflow-hidden">
                        <div className="px-5 pb-5 text-slate-600 leading-relaxed">
                          {faq.answer}
                          <div className="mt-4 h-px bg-slate-100" />
                          <p className="mt-3 text-sm text-slate-500">
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

          {/* Bottom CTA */}
          <div className="mt-10 rounded-3xl bg-[#7B1E1E] text-white p-7 md:p-8 flex flex-col md:flex-row items-center justify-between gap-5 shadow-sm">
            <div>
              <h4 className="text-xl md:text-2xl font-bold">Butuh bantuan cepat?</h4>
              <p className="mt-1 text-white/90">
                Chat admin, kami bantu jawab pertanyaan kamu.
              </p>
            </div>
            <a
              href="https://wa.me/6281234567890?text=Halo%20Orinimo%20Store,%20saya%20ingin%20bertanya%20tentang%20produk."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-white text-[#7B1E1E] px-6 py-3 font-semibold hover:opacity-95 transition shadow-sm"
            >
              Chat WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
