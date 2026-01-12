import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const BRAND = "#7B1E1E";

// Mesh Gradient Background Component
const MeshGradient = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <style>{`
      @keyframes mesh-move {
        0% { transform: translate3d(0,0,0) scale(1); filter: blur(70px); }
        50% { transform: translate3d(18px,-14px,0) scale(1.05); filter: blur(85px); }
        100% { transform: translate3d(0,0,0) scale(1); filter: blur(70px); }
      }
      @keyframes mesh-move-2 {
        0% { transform: translate3d(0,0,0) scale(1); filter: blur(80px); }
        50% { transform: translate3d(-16px,12px,0) scale(1.06); filter: blur(95px); }
        100% { transform: translate3d(0,0,0) scale(1); filter: blur(80px); }
      }
      @media (prefers-reduced-motion: reduce) {
        .mesh { animation: none !important; }
      }
    `}</style>

    <div
      className="mesh absolute -top-40 -left-40 h-[34rem] w-[34rem] rounded-full"
      style={{
        background:
          "radial-gradient(circle at 30% 30%, rgba(123,30,30,0.35), rgba(155,46,46,0.12) 50%, transparent 70%)",
        animation: "mesh-move 14s ease-in-out infinite",
      }}
    />
    <div
      className="mesh absolute -top-44 -right-44 h-[36rem] w-[36rem] rounded-full"
      style={{
        background:
          "radial-gradient(circle at 60% 40%, rgba(155,46,46,0.30), rgba(123,30,30,0.10) 55%, transparent 72%)",
        animation: "mesh-move-2 16s ease-in-out infinite",
      }}
    />
    <div
      className="mesh absolute top-[30%] left-[18%] h-[28rem] w-[28rem] rounded-full"
      style={{
        background:
          "radial-gradient(circle at 40% 60%, rgba(123,30,30,0.22), rgba(155,46,46,0.10) 55%, transparent 74%)",
        animation: "mesh-move 18s ease-in-out infinite",
      }}
    />
    <div
      className="mesh absolute bottom-[-45%] right-[-30%] h-[40rem] w-[40rem] rounded-full"
      style={{
        background:
          "radial-gradient(circle at 35% 40%, rgba(123,30,30,0.25), rgba(155,46,46,0.08) 55%, transparent 75%)",
        animation: "mesh-move-2 20s ease-in-out infinite",
      }}
    />

    {/* Dot pattern overlay */}
    <div
      aria-hidden
      className="absolute inset-0 opacity-[0.10]"
      style={{
        backgroundImage:
          "radial-gradient(circle at 1px 1px, rgba(123,30,30,0.22) 1px, transparent 0)",
        backgroundSize: "22px 22px",
      }}
    />
  </div>
);

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 850,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
    });
  }, []);

  return (
    <div className="min-h-screen bg-white font-poppins">
      {/* Hero Section dengan Mesh Gradient */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50/30 to-white py-14 px-4 text-center">
        {/* Mesh Gradient Background */}
        <MeshGradient />
        
        {/* Gradient Overlay untuk smooth transition */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10">
          <p
            data-aos="fade-up"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#7B1E1E]/10 to-[#7B1E1E]/5 px-5 py-2.5 text-sm font-semibold text-[#7B1E1E] shadow-sm border border-[#7B1E1E]/10"
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

          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 text-sm text-slate-600">
            {["✅ Legal & aman", "✅ Proses cepat", "✅ Support responsif"].map((t, i) => (
              <span
                key={t}
                data-aos="fade-up"
                data-aos-delay={320 + i * 80}
                className="rounded-full bg-white px-4 py-2 border border-slate-200 shadow-sm hover:shadow-md hover:border-[#7B1E1E]/20 transition-all cursor-default"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section - Padding dikurangi */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 data-aos="fade-up" className="text-3xl font-bold text-gray-900 mb-6">
            Cerita Kami
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-gray-700 text-lg leading-relaxed mb-5"
          >
            Orinimo Store didirikan untuk memberikan solusi produk digital premium yang legal, aman,
            dan terjangkau. Kami memahami bahwa harga langganan digital resmi seringkali terlalu mahal
            bagi sebagian besar masyarakat Indonesia.
          </p>

          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-gray-700 text-lg leading-relaxed"
          >
            Dengan fokus pada <span className="font-semibold text-slate-800">transparansi, kejujuran, kemudahan, dan keamanan</span>, kami berkomitmen untuk
            memastikan pengalaman terbaik bagi setiap pelanggan. Kami hanya menyediakan produk dari
            sumber resmi dan terpercaya.
          </p>
        </div>
      </section>

      {/* Values Section - Padding dikurangi */}
      <section className="py-12 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 data-aos="fade-up" className="text-3xl font-bold text-center text-gray-900 mb-10">
            Nilai-Nilai Kami
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "🔒",
                title: "Legal & Terpercaya",
                desc: "Semua produk bersumber dari penyedia resmi dan aman digunakan. Kami tidak pernah menjual akun bajakan atau ilegal.",
                gradient: "from-[#7B1E1E]/8 to-transparent",
              },
              {
                icon: "💬",
                title: "Support Responsif",
                desc: "Tim customer service kami siap membantu Anda 24/7 via WhatsApp atau Telegram untuk menjawab pertanyaan dan keluhan.",
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
                {/* Gradient overlay on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />
                
                {/* Decorative glow */}
                <div className="absolute -bottom-8 -right-8 w-28 h-28 bg-[#7B1E1E]/8 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="text-5xl mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#7B1E1E] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - Padding dikurangi */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2
            data-aos="fade-up"
            className="text-3xl font-bold text-center text-gray-900 mb-10"
          >
            Mengapa Memilih Kami?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: "💰", title: "Harga Terjangkau", desc: "Hemat hingga 70% dibanding langganan resmi tanpa mengurangi kualitas layanan" },
              { icon: "⚡", title: "Proses Cepat", desc: "Akun langsung dikirim setelah pembayaran terverifikasi, tidak perlu menunggu lama" },
              { icon: "🔄", title: "Garansi Penggantian", desc: "Jika terjadi masalah dengan akun, kami siap mengganti dengan yang baru" },
              { icon: "🎁", title: "Promo Menarik", desc: "Dapatkan diskon, cashback, dan bonus untuk pembelian dalam jumlah tertentu" },
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

      {/* CTA Section - Padding dikurangi */}
      <section className="py-12 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 data-aos="fade-up" className="text-3xl font-bold mb-3 text-slate-900">
            Punya Pertanyaan?
          </h2>
          <p data-aos="fade-up" data-aos-delay="100" className="text-lg text-slate-600 mb-8">
            Tim kami siap membantu Anda. Hubungi kami kapan saja!
          </p>

          <div data-aos="zoom-in" data-aos-delay="200" className="flex justify-center gap-3">
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#7B1E1E] to-[#9B2E2E] px-8 py-4 text-white font-bold hover:shadow-2xl hover:shadow-[#7B1E1E]/30 transition-all duration-300 hover:scale-105 overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/18 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <span className="relative">💬 Chat WhatsApp</span>
            </a>
          </div>

          {/* Trust badges bottom */}
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="mt-8 flex flex-wrap items-center justify-center gap-2 text-sm text-slate-600"
          >
            {["✅ Legal & terpercaya", "✅ Support responsif", "✅ Proses cepat"].map((badge, i) => (
              <span
                key={badge}
                className="rounded-full bg-white px-4 py-2 border border-slate-200 shadow-sm"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;