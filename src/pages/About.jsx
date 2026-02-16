import React, { useEffect, useMemo } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const BRAND = "#7B1E1E";
const WHATSAPP = "https://wa.me/+6281325505028";

// ✅ Background animasi (sama seperti halaman lain)
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
        @media (prefers-reduced-motion: reduce) {
          .orb { animation: none !important; }
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
        @media (prefers-reduced-motion: reduce) {
          .particle { animation: none !important; }
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

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 850,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
    });
    document.title = "Orinimo Store - Tentang Kami";
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen bg-white font-poppins">
      <style>{`
        @keyframes shimmerX {
          0% { transform: translateX(-120%); }
          100% { transform: translateX(120%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .shimmer { animation: none !important; }
        }
      `}</style>

      {/* Hero – ✅ sama animasinya */}
      <section className="relative overflow-hidden bg-white py-14 px-4 text-center">
        <GradientOrbs />
        <FloatingParticles />
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-transparent to-white pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10">
          <p
            data-aos="fade-up"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#7B1E1E]/10 px-5 py-2.5 text-sm font-semibold text-[#7B1E1E] shadow-sm border border-[#7B1E1E]/10"
          >
            <span aria-hidden className="animate-pulse">✨</span>
            Tentang kami
          </p>

          <h1
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-4xl md:text-5xl font-bold mb-4 mt-6 text-slate-900"
          >
            Tentang <span style={{ color: BRAND }}>Orinimo Store</span>
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto"
          >
            Misi kami memudahkan akses ke layanan digital premium untuk semua orang di Indonesia.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-12 px-4 bg-white relative overflow-hidden">
        <GradientOrbs />
        <FloatingParticles />
        <div className="absolute inset-0 bg-gradient-to-b from-white/85 via-white/70 to-white pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 data-aos="fade-up" className="text-3xl font-bold text-gray-900 mb-6">
            Cerita Kami
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-gray-700 text-lg leading-relaxed mb-5"
          >
            Orinimo Store didirikan untuk memberikan solusi produk digital premium yang aman dan
            terjangkau. Kami memahami bahwa harga langganan digital resmi seringkali terlalu mahal
            bagi sebagian besar masyarakat Indonesia.
          </p>

          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-gray-700 text-lg leading-relaxed"
          >
            Dengan fokus pada{" "}
            <span className="font-semibold text-slate-800">
              transparansi, kejujuran, kemudahan, dan keamanan
            </span>
            , kami berkomitmen memastikan pengalaman terbaik bagi setiap pelanggan. Kami hanya
            menyediakan produk dari sumber resmi dan terpercaya.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-12 px-4 bg-slate-50 relative overflow-hidden">
        <GradientOrbs />
        <FloatingParticles />
        <div className="absolute inset-0 bg-gradient-to-b from-white/85 via-white/70 to-white pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <h2 data-aos="fade-up" className="text-3xl font-bold text-center text-gray-900 mb-10">
            Nilai-Nilai Kami
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "🔒",
                // ✅ hilangin kata LEGAL
                title: "Terpercaya",
                desc: "Semua produk bersumber dari penyedia resmi dan aman digunakan. Kami tidak pernah menjual akun bajakan atau ilegal.",
                gradient: "from-[#7B1E1E]/8 to-transparent",
              },
              {
                icon: "💬",
                title: "Support Responsif",
                desc: "Tim customer service kami siap membantu Anda via WhatsApp atau Telegram untuk menjawab pertanyaan dan keluhan.",
                gradient: "from-[#9B2E2E]/8 to-transparent",
              },
              {
                icon: "👥",
                title: "Fokus Pengguna",
                desc: "Kepuasan dan kemudahan pelanggan adalah prioritas utama kami. Kami terus berinovasi untuk pengalaman yang lebih baik.",
                gradient: "from-[#7B1E1E]/7 to-transparent",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                data-aos="fade-up"
                data-aos-delay={Math.min(idx * 120, 240)}
                className="group relative overflow-hidden bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-slate-100"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />
                <div className="absolute -bottom-8 -right-8 w-28 h-28 bg-[#7B1E1E]/8 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="text-5xl mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#7B1E1E] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 px-4 bg-white relative overflow-hidden">
        <GradientOrbs />
        <FloatingParticles />
        <div className="absolute inset-0 bg-gradient-to-b from-white/85 via-white/70 to-white pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <h2 data-aos="fade-up" className="text-3xl font-bold text-center text-gray-900 mb-10">
            Mengapa Memilih Kami?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: "💰", title: "Harga Terjangkau", desc: "Hemat hingga 70% dibanding langganan resmi tanpa mengurangi kualitas layanan" },
              { icon: "⚡", title: "Proses Cepat", desc: "Akun langsung dikirim setelah pembayaran terverifikasi, tidak perlu menunggu lama" },
              { icon: "🔄", title: "Garansi Penggantian", desc: "Jika terjadi masalah dengan akun, kami siap mengganti dengan yang baru" },
              { icon: "🎁", title: "Promo Menarik", desc: "Dapatkan diskon, dan bonus untuk pembelian dalam jumlah tertentu" },
            ].map((item, idx) => (
              <div
                key={idx}
                data-aos="fade-up"
                data-aos-delay={Math.min(idx * 100, 200)}
                className="group bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-[#7B1E1E]/30 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl transition-transform group-hover:scale-110 group-hover:rotate-6 duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#7B1E1E] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ CTA – samakan style seperti halaman lain (panel merah + shimmer) */}
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

            <div className="text-center md:text-left relative" data-aos="fade-right" data-aos-delay="100">
              <h3 className="text-2xl md:text-3xl font-bold">Punya pertanyaan?</h3>
              <p className="mt-2 text-white/90">
                Chat admin kapan saja. Kami bantu sampai jelas dan beres.
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
              <span aria-hidden className="absolute inset-0 opacity-0 group-hover:opacity-100 transition">
                <span
                  className="shimmer absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-slate-200/70 to-transparent"
                  style={{ animation: "shimmerX 1.2s ease-in-out infinite" }}
                />
              </span>
              <span className="relative">💬 Chat WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
