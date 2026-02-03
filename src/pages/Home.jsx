import { Link } from "react-router-dom";
import { useEffect, useMemo } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const BRAND = "#7B1E1E";

// Background animasi: gradient orbs (absolute, tidak mengubah layout)
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
  const particlesSmall = useMemo(() => {
    return [...Array(10)].map((_, i) => ({
      id: `s-${i}`,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      duration: `${10 + Math.random() * 10}s`,
      opacity: 0.15 + Math.random() * 0.15,
    }));
  }, []);

  const particlesMed = useMemo(() => {
    return [...Array(4)].map((_, i) => {
      const size = 40 + Math.random() * 70;
      return {
        id: `m-${i}`,
        size,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: `${Math.random() * 5}s`,
        duration: `${14 + Math.random() * 10}s`,
      };
    });
  }, []);

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

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
    });

    // ✅ set title tab untuk halaman beranda
    document.title = "Orinimo Store - Beranda";
  }, []);

  return (
    <div className="font-poppins">
      {/* Hero */}
      <section className="relative overflow-hidden bg-white">
        {/* Background layers (absolute) */}
        <GradientOrbs />
        <FloatingParticles />
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-transparent to-white" />

        <div className="container-page py-16 md:py-20 text-center relative z-10">
          <p
            data-aos="fade-up"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#7B1E1E]/12 to-[#7B1E1E]/6 px-4 py-2 text-sm font-semibold text-[#7B1E1E] shadow-sm border border-[#7B1E1E]/10"
          >
            <span aria-hidden className="animate-pulse">✨</span>
            Akses premium, harga bersahabat
          </p>

          <h1
            data-aos="fade-up"
            data-aos-delay="100"
            className="mt-6 text-4xl md:text-6xl font-bold text-slate-900 leading-tight"
          >
            Solusi Produk Digital Premium{" "}
            <span className="block bg-gradient-to-r from-[#7B1E1E] to-[#9B2E2E] bg-clip-text text-transparent">
              untuk kebutuhan kamu
            </span>
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="mt-5 max-w-2xl mx-auto text-base md:text-lg text-slate-600 leading-relaxed"
          >
            Dapatkan akun premium seperti Netflix, Spotify, Canva, VPN dan lainnya dengan proses cepat,
            aman, dan harga terbaik.
          </p>

          <div
            data-aos="zoom-in"
            data-aos-delay="300"
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <Link
              to="/produk"
              className="group relative inline-flex items-center justify-center w-full sm:w-auto rounded-lg bg-[#7B1E1E] px-6 py-3 text-white font-semibold hover:opacity-95 transition shadow-sm hover:shadow-xl hover:shadow-[#7B1E1E]/25 overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/18 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <span className="relative">Lihat Produk</span>
              <span className="relative ml-2 transition-transform group-hover:translate-x-1">→</span>
            </Link>

            <a
              href="https://wa.me/+6281325505028?text=Halo%20Orinimo%20Store,%20saya%20ingin%20bertanya%20tentang%20produk%20digital."
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center w-full sm:w-auto rounded-lg border border-[#7B1E1E] px-6 py-3 text-[#7B1E1E] font-semibold hover:bg-[#7B1E1E] hover:text-white transition overflow-hidden hover:shadow-xl hover:shadow-[#7B1E1E]/20"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/18 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <span className="relative">Hubungi via WhatsApp</span>
            </a>
          </div>

          {/* trust badges */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2 text-sm text-slate-600">
            {[
              { text: "✅ Proses cepat", delay: 350 },
              { text: "✅ Aman & terpercaya", delay: 450 },
              { text: "✅ Harga bersahabat", delay: 550 },
            ].map((b) => (
              <span
                key={b.text}
                data-aos="fade-up"
                data-aos-delay={b.delay}
                className="group rounded-full bg-white px-4 py-2 border border-slate-200 shadow-sm hover:shadow-md hover:border-[#7B1E1E]/25 transition cursor-default"
              >
                <span className="inline-block transition-transform group-hover:scale-110">
                  {b.text}
                </span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Feature */}
      <section className="py-14 bg-white relative overflow-hidden">
        <FloatingParticles />
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-transparent to-white pointer-events-none" />
        
        <div className="container-page relative z-10">
          <h2
            data-aos="fade-up"
            className="text-2xl md:text-3xl font-bold text-slate-900 text-center"
          >
            Benefit Belanja di{" "}
            <span className="bg-gradient-to-r from-[#7B1E1E] to-[#9B2E2E] bg-clip-text text-transparent">
              Orinimo Store
            </span>
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="mt-3 text-center text-slate-600 max-w-2xl mx-auto"
          >
            Keuntungan belanja di Orinimo Store: lebih aman, lebih jelas, dan dibantu sampai beres.
          </p>

          {/* ✅ 2:2 */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Customer Service Siap Membantu Sampai Berhasil",
                desc: (
                  <>
                    Jika Anda mengalami kesulitan, tim kami siap membantu langkah demi langkah sampai
                    aplikasi berhasil terpasang dan bisa digunakan dengan normal.
                    <span className="block mt-2 font-semibold text-slate-700">
                      Admin aktif setiap hari pukul 08.00 – 23.00 WIB.
                    </span>
                  </>
                ),
                icon: "💬",
                delay: 0,
                gradient: "from-rose-400/15 to-red-400/10",
              },
              {
                title: "Proses Cepat & Praktis",
                desc: (
                  <>
                    Setelah pembayaran terkonfirmasi, aplikasi atau akun akan segera diproses. Tanpa
                    ribet, tanpa menunggu lama — tinggal ikuti instruksi yang kami kirim.
                  </>
                ),
                icon: "⚡️",
                delay: 120,
                gradient: "from-amber-400/15 to-orange-400/10",
              },
              {
                title: "Beragam Metode Pembayaran",
                desc: (
                  <>
                    Kami mendukung berbagai metode pembayaran: transfer bank, e-wallet, dan metode lain
                    yang populer sehingga Anda bisa memilih yang paling nyaman.
                  </>
                ),
                icon: "💳",
                delay: 240,
                gradient: "from-blue-400/15 to-indigo-400/10",
              },
              {
                title: "Semua Akun Bergaransi",
                desc: (
                  <>
                    Setiap akun yang Anda dapatkan dilindungi garansi sesuai ketentuan toko. Jika terjadi
                    masalah yang sesuai dengan syarat garansi, kami siap membantu sampai ada solusi atau
                    penggantian.
                  </>
                ),
                icon: "🛡️",
                delay: 360,
                gradient: "from-emerald-400/15 to-teal-400/10",
              },
            ].map((it) => (
              <div
                key={it.title}
                data-aos="fade-up"
                data-aos-delay={it.delay}
                className="group relative rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm hover:shadow-lg transition overflow-hidden"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${it.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />
                <div className="relative z-10">
                  <div className="text-3xl inline-flex items-center justify-center rounded-xl bg-white/60 px-3 py-2 shadow-sm group-hover:shadow-md transition group-hover:scale-105 group-hover:-rotate-1">
                    {it.icon}
                  </div>
                  <h3 className="mt-4 font-bold text-lg text-slate-900 group-hover:text-[#7B1E1E] transition-colors">
                    {it.title}
                  </h3>
                  <p className="mt-2 text-slate-600 leading-relaxed">{it.desc}</p>
                </div>

                <div className="absolute -bottom-8 -right-8 w-28 h-28 rounded-full bg-[#7B1E1E]/8 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Produk Populer */}
      <section className="py-14 bg-slate-50 relative overflow-hidden">
        <FloatingParticles />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50/70 via-transparent to-slate-50 pointer-events-none" />
        
        <div className="container-page relative z-10">
          <div className="text-center mb-10">
            <h2
              data-aos="fade-up"
              className="text-2xl md:text-3xl font-bold text-slate-900"
            >
              Produk{" "}
              <span className="bg-gradient-to-r from-[#7B1E1E] to-[#9B2E2E] bg-clip-text text-transparent">
                Populer
              </span>
            </h2>
            <p
              data-aos="fade-up"
              data-aos-delay="100"
              className="mt-3 text-slate-600 max-w-2xl mx-auto"
            >
              Produk digital premium yang paling banyak dipilih pelanggan kami
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Netflix Premium",
                price: 12000,
                image: "/images/products/netflix.png",
                desc: "Streaming film & series dengan kualitas 4K",
                delay: 0,
              },
              {
                name: "Disney+ Hotstar",
                price: 4000,
                image: "/images/products/disney.png",
                desc: "Film Disney, Marvel, Pixar dan lainnya",
                delay: 100,
              },
              {
                name: "ChatGPT Plus",
                price: 3000,
                image: "/images/products/chatgpt.png",
                desc: "AI assistant premium untuk produktivitas",
                delay: 200,
              },
              {
                name: "Vidio Premium",
                price: 20000,
                image: "/images/products/vidio.png",
                desc: "Streaming tanpa batas konten lokal & internasional",
                delay: 300,
              },
            ].map((product) => (
              <div
                key={product.name}
                data-aos="fade-up"
                data-aos-delay={product.delay}
                className="group relative overflow-hidden bg-white border-2 border-slate-200 rounded-xl transition-all hover:scale-[1.03] hover:shadow-xl hover:border-[#7B1E1E]/30"
              >
                {/* Hover effects */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: "linear-gradient(135deg, rgba(123,30,30,0.08), rgba(255,255,255,0) 55%)",
                  }}
                />
                <div
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
                    />
                  </div>

                  <div className="p-5">
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{product.name}</h3>
                    <p className="text-slate-600 text-sm mb-3 line-clamp-2">{product.desc}</p>

                    <div className="mb-4">
                      <p className="text-xs uppercase tracking-wide text-slate-500">Mulai dari</p>
                      <p className="text-2xl font-bold text-[#7B1E1E]">
                        Rp {product.price.toLocaleString("id-ID")}
                      </p>
                    </div>

                    <Link
                      to="/produk"
                      className="group/btn relative w-full inline-flex items-center justify-center text-white py-3 rounded-lg font-bold transition-colors overflow-hidden bg-[#7B1E1E] hover:bg-[#5A1414]"
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/25 to-white/0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
                      <span className="relative">Lihat Detail</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10" data-aos="fade-up" data-aos-delay="400">
            <Link
              to="/produk"
              className="group inline-flex items-center justify-center rounded-lg border-2 border-[#7B1E1E] px-8 py-3 text-[#7B1E1E] font-semibold hover:bg-[#7B1E1E] hover:text-white transition overflow-hidden relative"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/18 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <span className="relative">Lihat Semua Produk</span>
              <span className="relative ml-2 transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Cara Pembelian */}
      <section className="py-14 bg-white relative overflow-hidden">
        <FloatingParticles />
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-transparent to-white pointer-events-none" />
        
        <div className="container-page relative z-10">
          <div className="text-center mb-10">
            <h2
              data-aos="fade-up"
              className="text-2xl md:text-3xl font-bold text-slate-900"
            >
              Cara{" "}
              <span className="bg-gradient-to-r from-[#7B1E1E] to-[#9B2E2E] bg-clip-text text-transparent">
                Pembelian
              </span>
            </h2>
            <p
              data-aos="fade-up"
              data-aos-delay="100"
              className="mt-3 text-slate-600 max-w-2xl mx-auto"
            >
              Proses order yang mudah dan cepat, hanya 5 langkah
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {[
              {
                step: 1,
                title: "Pilih Produk",
                desc: "Pilih produk dan paket yang kamu butuhkan",
                icon: "🛒",
                delay: 0,
              },
              {
                step: 2,
                title: "Pembayaran",
                desc: "Transfer sesuai nominal yang diberikan admin",
                icon: "💳",
                delay: 100,
              },
              {
                step: 3,
                title: "Menunggu Proses",
                desc: "Admin memproses pesanan setelah pembayaran dikonfirmasi",
                icon: "⏱️",
                delay: 200,
              },
              {
                step: 4,
                title: "Pesanan Diterima",
                desc: "Detail akun dikirim ke WhatsApp kamu",
                icon: "✅",
                delay: 300,
              },
              {
                step: 5,
                title: "Selesai!",
                desc: "Akun siap digunakan, jika ada kendala hubungi admin",
                icon: "🎉",
                delay: 400,
              },
            ].map((item) => (
              <div
                key={item.step}
                data-aos="zoom-in"
                data-aos-delay={item.delay}
                className="group relative"
              >
                <div className="relative bg-white rounded-2xl p-6 border-2 border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 h-full flex flex-col items-center text-center">
                  {/* Step Number Badge */}
                  <div className="absolute -top-3 -left-3 w-10 h-10 bg-gradient-to-br from-[#7B1E1E] to-[#9B2C2C] text-white rounded-full flex items-center justify-center font-bold text-lg shadow-md z-10">
                    {item.step}
                  </div>

                  {/* Icon Container */}
                  <div className="w-20 h-20 mb-4 flex items-center justify-center bg-gradient-to-br from-[#7B1E1E]/5 to-[#7B1E1E]/10 rounded-2xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <span className="text-4xl">{item.icon}</span>
                  </div>

                  {/* Title */}
                  <h3 className="font-bold text-slate-900 text-base mb-2">{item.title}</h3>

                  {/* Description */}
                  <p className="text-slate-600 text-sm leading-relaxed flex-1">{item.desc}</p>

                  {/* Hover indicator */}
                  <div className="mt-4 w-12 h-1 bg-gradient-to-r from-[#7B1E1E] to-[#9B2C2C] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10" data-aos="fade-up" data-aos-delay="500">
            <Link
              to="/cara-pembelian"
              className="group inline-flex items-center justify-center rounded-lg bg-[#7B1E1E] px-8 py-3 text-white font-semibold hover:opacity-95 transition shadow-sm hover:shadow-xl hover:shadow-[#7B1E1E]/25 overflow-hidden relative"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/18 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <span className="relative">Lihat Detail Cara Pembelian</span>
              <span className="relative ml-2 transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-white relative overflow-hidden">
        <FloatingParticles />
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-transparent to-white pointer-events-none" />
        
        <div className="container-page relative z-10">
          <div
            data-aos="fade-up"
            className="relative rounded-3xl bg-[#7B1E1E] text-white p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm overflow-hidden"
          >
            {/* decorative (absolute) */}
            <div className="absolute top-[-40px] right-[-40px] w-72 h-72 rounded-full bg-white/8 blur-3xl" />
            <div className="absolute bottom-[-48px] left-[-48px] w-64 h-64 rounded-full bg-white/6 blur-3xl" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/0 via-white/6 to-black/0 opacity-40" />

            <div
              className="text-center md:text-left relative z-10"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <h3 className="text-2xl md:text-3xl font-bold">Butuh rekomendasi produk?</h3>
              <p className="mt-2 text-white/90">
                Chat admin, kita bantu pilih paket yang paling cocok buat kamu.
              </p>
            </div>

            <a
              data-aos="zoom-in"
              data-aos-delay="200"
              href="https://wa.me/+6281325505028?text=Halo%20Orinimo%20Store,%20tolong%20rekomendasikan%20paket%20yang%20cocok%20untuk%20saya."
              target="_blank"
              rel="noopener noreferrer"
              className="group relative z-10 inline-flex items-center justify-center rounded-lg bg-white text-[#7B1E1E] px-6 py-3 font-semibold hover:opacity-95 transition shadow-sm hover:shadow-xl hover:shadow-black/15 overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-100 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <span className="relative">Konsultasi via WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;