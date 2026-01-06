import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const BRAND = "#7B1E1E";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out",
      once: true,
      offset: 80,
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section (soft, biar ga nabrak navbar/footer) */}
      <section className="relative overflow-hidden bg-white py-16 px-4 text-center">
        {/* brand blobs */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-28 -right-28 h-80 w-80 rounded-full blur-3xl"
          style={{ backgroundColor: "rgba(123, 30, 30, 0.12)" }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -top-28 -left-28 h-80 w-80 rounded-full blur-3xl"
          style={{ backgroundColor: "rgba(123, 30, 30, 0.10)" }}
        />

        <div className="max-w-4xl mx-auto relative">
          <p
            data-aos="fade-up"
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold"
            style={{ backgroundColor: "rgba(123, 30, 30, 0.10)", color: BRAND }}
          >
            <span aria-hidden>✨</span>
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
            className="text-xl text-slate-600 max-w-3xl mx-auto"
          >
            Misi kami memudahkan akses ke layanan digital premium untuk semua orang di Indonesia.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 data-aos="fade-up" className="text-3xl font-bold text-gray-900 mb-6">
            Cerita Kami
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-gray-700 text-lg leading-relaxed mb-6"
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
            Dengan fokus pada transparansi, kejujuran, kemudahan, dan keamanan, kami berkomitmen untuk
            memastikan pengalaman terbaik bagi setiap pelanggan. Kami hanya menyediakan produk dari
            sumber resmi dan terpercaya.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2
            data-aos="fade-up"
            className="text-3xl font-bold text-center text-gray-900 mb-12"
          >
            Nilai-Nilai Kami
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🔒",
                title: "Legal & Terpercaya",
                desc: "Semua produk bersumber dari penyedia resmi dan aman digunakan. Kami tidak pernah menjual akun bajakan atau ilegal.",
              },
              {
                icon: "💬",
                title: "Support Responsif",
                desc: "Tim customer service kami siap membantu Anda 24/7 via WhatsApp atau Telegram untuk menjawab pertanyaan dan keluhan.",
              },
              {
                icon: "👥",
                title: "Fokus Pengguna",
                desc: "Kepuasan dan kemudahan pelanggan adalah prioritas utama kami. Kami terus berinovasi untuk pengalaman yang lebih baik.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                data-aos="fade-up"
                data-aos-delay={Math.min(idx * 100, 200)}
                className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-all hover:scale-105 border border-slate-100"
              >
                <div className="text-6xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2
            data-aos="fade-up"
            className="text-3xl font-bold text-center text-gray-900 mb-12"
          >
            Mengapa Memilih Kami?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all hover:scale-105"
              >
                <div className="flex items-start">
                  <div className="text-4xl mr-4">{item.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA (soft, bukan maroon full biar ga nabrak footer) */}
      <section className="relative overflow-hidden py-16 px-4 bg-white">
        {/* tint */}
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full blur-3xl"
          style={{ backgroundColor: "rgba(123, 30, 30, 0.12)" }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full blur-3xl"
          style={{ backgroundColor: "rgba(123, 30, 30, 0.10)" }}
        />

        <div className="max-w-4xl mx-auto text-center relative">
          <h2 data-aos="fade-up" className="text-3xl font-bold mb-4 text-slate-900">
            Punya Pertanyaan?
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-lg text-slate-600 mb-8"
          >
            Tim kami siap membantu Anda. Hubungi kami kapan saja!
          </p>

          <div
            data-aos="zoom-in"
            data-aos-delay="200"
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <a
              href="https://wa.me/6281234567890"
              className="px-8 py-4 rounded-lg font-bold transition-all hover:scale-105 inline-flex items-center justify-center"
              style={{ backgroundColor: BRAND, color: "white" }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#5A1414")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = BRAND)}
            >
              💬 Chat WhatsApp
            </a>
          </div>

          {/* small trust row */}
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="mt-8 flex flex-wrap items-center justify-center gap-2 text-sm text-slate-600"
          >
            <span className="rounded-full bg-white px-4 py-2 border border-slate-200 shadow-sm">
              ✅ Legal & terpercaya
            </span>
            <span className="rounded-full bg-white px-4 py-2 border border-slate-200 shadow-sm">
              ✅ Support responsif
            </span>
            <span className="rounded-full bg-white px-4 py-2 border border-slate-200 shadow-sm">
              ✅ Proses cepat
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
