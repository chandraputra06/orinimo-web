import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const BRAND = "#7B1E1E";

// ✅ Background animasi (sama seperti HowToBuy / Home)
const GradientOrbs = () => {
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
  const particlesSmall = React.useMemo(
    () =>
      [...Array(18)].map((_, i) => ({
        id: `s-${i}`,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: `${Math.random() * 5}s`,
        duration: `${10 + Math.random() * 10}s`,
        opacity: 0.15 + Math.random() * 0.15,
      })),
    []
  );

  const particlesMed = React.useMemo(
    () =>
      [...Array(8)].map((_, i) => {
        const size = 40 + Math.random() * 70;
        return {
          id: `m-${i}`,
          size,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          delay: `${Math.random() * 5}s`,
          duration: `${14 + Math.random() * 10}s`,
        };
      }),
    []
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translate3d(0, 0, 0); }
          25% { transform: translate3d(10px, -18px, 0); }
          50% { transform: translate3d(-10px, -36px, 0); }
          75% { transform: translate3d(6px, -18px, 0); }
        }
        .particle {
          animation-name: float;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
          will-change: transform;
        }
      `}</style>

      {particlesSmall.map((p) => (
        <div
          key={p.id}
          className="particle absolute w-2 h-2 rounded-full bg-[#7B1E1E]/20"
          style={{
            left: p.left,
            top: p.top,
            animationDelay: p.delay,
            animationDuration: p.duration,
            opacity: p.opacity,
          }}
        />
      ))}

      {particlesMed.map((p) => (
        <div
          key={p.id}
          className="particle absolute rounded-full bg-gradient-to-br from-[#7B1E1E]/10 to-transparent"
          style={{
            width: `${p.size}px`,
            height: `${p.size}px`,
            left: p.left,
            top: p.top,
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        />
      ))}
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
    answer: "Cocok jika mengikuti aturan dan tidak sering login–logout.",
  },
  {
    category: "Order",
    question: "Cara order bagaimana?",
    answer: "Bisa lihat pada halaman Cara Pembelian.",
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

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
    });

    document.title = "Orinimo Store - FAQ";
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const toggleFAQ = (idx) => setOpenIndex(openIndex === idx ? null : idx);

  return (
    <div className="min-h-screen bg-white font-poppins">
      {/* HERO */}
      <section className="relative overflow-hidden bg-white py-14 px-4">
        <GradientOrbs />
        <FloatingParticles />
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-transparent to-white pointer-events-none" />

        <div className="container-page relative z-10 text-center">
          <div
            data-aos="fade-up"
            className="inline-flex items-center gap-2 rounded-full bg-[#7B1E1E]/10 px-4 py-2 text-sm font-semibold text-[#7B1E1E] border border-[#7B1E1E]/10"
          >
            <span aria-hidden className="animate-pulse">
              ❓
            </span>
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
        </div>
      </section>

      {/* CONTENT */}
      <section className="relative overflow-hidden px-4 py-10 bg-white">
        <GradientOrbs />
        <FloatingParticles />
        <div className="absolute inset-0 bg-gradient-to-b from-white/85 via-white/70 to-white pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="space-y-3">
            {faqs.map((faq, idx) => {
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
            })}
          </div>

          {/* Bottom CTA */}
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="mt-8 relative rounded-3xl bg-gradient-to-r from-[#7B1E1E] to-[#9B2E2E] text-white p-7 md:p-8 flex flex-col md:flex-row items-center justify-between gap-5 shadow-xl shadow-[#7B1E1E]/20 overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/5 rounded-full blur-3xl" />

            <div className="relative z-10">
              <h4 className="text-xl md:text-2xl font-bold">Butuh bantuan cepat?</h4>
              <p className="mt-1 text-white/90">Chat admin, kami bantu jawab pertanyaan kamu.</p>
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
