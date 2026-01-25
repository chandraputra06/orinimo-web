import React, { useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const BRAND = "#7B1E1E";

const WHATSAPP =
  "https://wa.me/+6281325505028?text=Halo%20Orinimo%20Store,%20saya%20ingin%20order%20produk%20digital.%20Tolong%20dibantu%20ya.";

// 🔴 Background animasi yang sama dengan Home
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
  const particlesSmall = useMemo(
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

  const particlesMed = useMemo(
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

// Icon 1-tone (pakai svg, ikut warna text / currentColor)
const StepIcon = ({ id }) => {
  const base = "w-10 h-10 md:w-12 md:h-12";
  switch (id) {
    case 1:
      return (
        <svg viewBox="0 0 24 24" className={base} fill="none">
          <path
            d="M4 5h2l2 11h9l2-8H8"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="10" cy="19" r="1.4" stroke="currentColor" strokeWidth="1.6" />
          <circle cx="17" cy="19" r="1.4" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      );
    case 2:
      return (
        <svg viewBox="0 0 24 24" className={base} fill="none">
          <rect
            x="3.5"
            y="6"
            width="17"
            height="12"
            rx="2.5"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <rect x="6" y="11" width="6" height="1.7" fill="currentColor" />
          <rect x="6" y="14.5" width="3.5" height="1.4" fill="currentColor" />
        </svg>
      );
    case 3:
      return (
        <svg viewBox="0 0 24 24" className={base} fill="none">
          <circle cx="12" cy="12" r="7.5" stroke="currentColor" strokeWidth="1.8" />
          <path
            d="M12 8v4l2.5 2.5"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case 4:
      return (
        <svg viewBox="0 0 24 24" className={base} fill="none">
          <circle cx="12" cy="12" r="7.5" stroke="currentColor" strokeWidth="1.8" />
          <path
            d="M8.5 12.2 11 14.5 15.3 9.5"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" className={base} fill="none">
          <path
            d="M12 4.5 13.4 9 18 10.5 13.4 12 12 16.5 10.6 12 6 10.5 10.6 9 12 4.5Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
      );
  }
};

const HowToBuy = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out",
      once: true,
      offset: 80,
    });

    document.title = "Orinimo Store - Cara Pembelian";
  }, []);

  const steps = useMemo(
  () => [
    {
      id: 1,
      title: "Pilih produk yang diinginkan",
      desc: "Pilih layanan/paket yang kamu butuhkan (Netflix, Disney, Canva, ChatGPT dll).",
    },
    {
      id: 2,
      title: "Mengisi data diri",
      desc: "Kirimkan data yang diminta admin (nama, email/akun, dan info lain yang diperlukan).",
    },
    {
      id: 3,
      title: "Melakukan Pembayaran",
      desc: "Admin akan kirim metode pembayaran. Transfer sesuai nominal yang diberikan.",
    },
    {
      id: 4,
      title: "Akun akan dikirim melalui WhatsApp",
      desc: "Setelah pembayaran terkonfirmasi, detail akun/aktivasi dan panduan penggunaan dikirim via WhatsApp.",
    },
    {
      id: 5,
      title: "Selesai",
      desc: "Akun siap digunakan. Jika ada kendala, hubungi admin untuk bantuan.",
    },
  ],
  []
);


  return (
    <div className="bg-white font-poppins">
      <style>{`
        @keyframes shimmerX {
          0% { transform: translateX(-120%); }
          100% { transform: translateX(120%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .shimmer { animation: none !important; }
        }
      `}</style>

      {/* Hero – animasi sama seperti Home */}
      <section className="relative overflow-hidden bg-white pb-8">
        <GradientOrbs />
        <FloatingParticles />
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-transparent to-white pointer-events-none" />

        <div className="container-page py-14 md:py-16 text-center relative z-10">
          <p
            data-aos="fade-up"
            className="inline-flex items-center gap-2 rounded-full bg-[#7B1E1E]/10 px-4 py-2 text-sm font-semibold text-[#7B1E1E]"
          >
            <span aria-hidden>📌</span>
            Panduan order yang gampang
          </p>

          <h1
            data-aos="fade-up"
            data-aos-delay="100"
            className="mt-5 text-3xl md:text-5xl font-bold text-slate-900"
          >
            Cara Pembelian di <span className="text-[#7B1E1E]">Orinimo Store</span>
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="mt-4 max-w-2xl mx-auto text-slate-600 leading-relaxed"
          >
            Ikuti langkah-langkah ini supaya pesananmu cepat diproses. Cukup 5 langkah: pilih produk,
            chat admin, bayar, aktivasi, selesai.
          </p>

          <div
            data-aos="zoom-in"
            data-aos-delay="300"
            className="mt-8 flex flex-col sm:flex-row gap-3 justify-center"
          >
            <Link
              to="/produk"
              className="group relative overflow-hidden inline-flex items-center justify-center rounded-lg bg-[#7B1E1E] px-6 py-3 text-white font-semibold hover:opacity-95 transition shadow-sm"
            >
              <span aria-hidden className="absolute inset-0 opacity-0 group-hover:opacity-100 transition">
                <span
                  className="shimmer absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/25 to-transparent"
                  style={{ animation: "shimmerX 1.2s ease-in-out infinite" }}
                />
              </span>
              <span className="relative">Lihat Produk</span>
            </Link>

            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden inline-flex items-center justify-center rounded-lg border border-[#7B1E1E] px-6 py-3 text-[#7B1E1E] font-semibold hover:bg-[#7B1E1E] hover:text-white transition"
            >
              <span aria-hidden className="absolute inset-0 opacity-0 group-hover:opacity-100 transition">
                <span
                  className="shimmer absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/22 to-transparent"
                  style={{ animation: "shimmerX 1.2s ease-in-out infinite" }}
                />
              </span>
              <span className="relative">Order via WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* Steps + FAQ */}
      <section className="py-20 bg-white relative overflow-hidden">
        <GradientOrbs />
        <FloatingParticles />
        <div className="absolute inset-0 bg-gradient-to-b from-white/85 via-white/70 to-white pointer-events-none" />

        <div className="container-page relative z-10">
          
          {/* Steps Grid – card merah, font putih */}
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {steps.map((step, idx) => (
                <div
                  key={step.id}
                  data-aos="zoom-in"
                  data-aos-delay={idx * 100}
                  className="group relative"
                >
                  <div className="relative bg-gradient-to-br from-[#7B1E1E] to-[#9B2C2C] text-white rounded-3xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col items-center text-center border border-[#8F1F1F]">
                    {/* Number badge – mirip contoh, simple circle */}
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                      <div className="flex items-center justify-center w-11 h-11 rounded-full border border-white/70 bg-[#A52A2A] text-white text-sm font-semibold shadow-[0_4px_14px_rgba(0,0,0,0.25)]">
                        {step.id}
                      </div>
                    </div>

                    {/* Icon container – kotak rounded, 1 tone */}
                    <div className="mt-5 mb-5 w-24 h-24 flex items-center justify-center rounded-2xl bg-[#B93737] border border-white/10 shadow-[0_10px_25px_rgba(0,0,0,0.18)]">
                      <div className="text-white">
                        <StepIcon id={step.id} />
                      </div>
                    </div>

                    {/* Title & desc */}
                    <h3 className="font-bold text-white text-lg mb-2">
                      {step.title}
                    </h3>
                    <p className="text-white/90 text-sm leading-relaxed flex-1">
                      {step.desc}
                    </p>

                    <div className="mt-4 w-16 h-1 bg-white/80 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ Section – lebar sama dengan steps */}
          <div className="mt-10 max-w-7xl mx-auto">
            <div
              data-aos="fade-up"
              className="bg-white rounded-3xl p-8 shadow-md border border-slate-100"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center flex items-center justify-center gap-2">
                <span>❓</span> Pertanyaan Singkat
              </h3>
              <div className="space-y-5">
                {[
                  {
                    q: "Berapa lama prosesnya?",
                    a: "Umumnya cepat setelah pembayaran dikonfirmasi. Jika ramai, admin akan info estimasi.",
                  },
                  {
                    q: "Kalau ada kendala login?",
                    a: "Chat admin + kirim screenshot error. Kami bantu sampai aman.",
                  },
                  {
                    q: "Bisa konsultasi sebelum beli?",
                    a: "Bisa. Klik tombol WhatsApp dan bilang kebutuhanmu.",
                  },
                ].map((faq, idx) => (
                  <div
                    key={idx}
                    data-aos="fade-up"
                    data-aos-delay={100 + idx * 80}
                    className="bg-slate-50 rounded-xl p-5 border-l-4 border-[#7B1E1E] hover:bg-slate-100 transition"
                  >
                    <p className="font-semibold text-slate-900 mb-2">{faq.q}</p>
                    <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-white relative overflow-hidden">
        <GradientOrbs />
        <FloatingParticles />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/70 to-white pointer-events-none" />

        <div className="container-page relative z-10">
          <div
            data-aos="fade-up"
            className="relative overflow-hidden rounded-3xl bg-[#7B1E1E] text-white p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-40"
              style={{
                background:
                  "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.10) 50%, rgba(255,255,255,0) 100%)",
              }}
            />

            <div
              className="text-center md:text-left relative"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <h3 className="text-2xl md:text-3xl font-bold">Siap order sekarang?</h3>
              <p className="mt-2 text-white/90">
                Chat admin dan tulis produk + paket yang kamu mau. Kami bantu sampai selesai.
              </p>
            </div>

            <a
              data-aos="zoom-in"
              data-aos-delay="200"
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden inline-flex items-center justify-center rounded-lg bg-white text-[#7B1E1E] px-6 py-3 font-semibold hover:opacity-95 transition shadow-sm"
            >
              <span
                aria-hidden
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition"
              >
                <span
                  className="shimmer absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-slate-200/70 to-transparent"
                  style={{ animation: "shimmerX 1.2s ease-in-out infinite" }}
                />
              </span>
              <span className="relative">Order via WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowToBuy;
