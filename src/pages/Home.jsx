import { Link } from "react-router-dom";

const BRAND = "#7B1E1E";

const Home = () => {
  return (
    <div className="font-poppins">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-slate-50">
        {/* blobs */}
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[#7B1E1E]/10 blur-3xl" aria-hidden />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#7B1E1E]/10 blur-3xl" aria-hidden />

        <div className="container-page py-16 md:py-20 text-center">
          <p className="inline-flex items-center gap-2 rounded-full bg-[#7B1E1E]/10 px-4 py-2 text-sm font-semibold text-[#7B1E1E]">
            <span aria-hidden>✨</span>
            Akses premium, harga bersahabat
          </p>

          <h1 className="mt-6 text-4xl md:text-6xl font-bold text-slate-900 leading-tight">
            Solusi Produk Digital Premium
            <span className="block text-[#7B1E1E]">untuk kebutuhan kamu</span>
          </h1>

          <p className="mt-5 max-w-2xl mx-auto text-base md:text-lg text-slate-600 leading-relaxed">
            Dapatkan akun premium seperti Netflix, Spotify, Canva, VPN dan lainnya dengan proses cepat,
            aman, dan harga terbaik.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            {/* pakai Link supaya SPA (lebih cepat, ga reload) */}
            <Link
              to="/produk"
              className="inline-flex items-center justify-center w-full sm:w-auto rounded-lg bg-[#7B1E1E] px-6 py-3 text-white font-semibold hover:opacity-95 transition shadow-sm"
            >
              Lihat Produk
            </Link>

            <a
              href="https://wa.me/6281234567890?text=Halo%20Orinimo%20Store,%20saya%20ingin%20bertanya%20tentang%20produk%20digital."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full sm:w-auto rounded-lg border border-[#7B1E1E] px-6 py-3 text-[#7B1E1E] font-semibold hover:bg-[#7B1E1E] hover:text-white transition"
            >
              Hubungi via WhatsApp
            </a>
          </div>

          {/* trust badges */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2 text-sm text-slate-600">
            <span className="rounded-full bg-white px-4 py-2 border border-slate-200 shadow-sm">
              ✅ Proses cepat
            </span>
            <span className="rounded-full bg-white px-4 py-2 border border-slate-200 shadow-sm">
              ✅ Aman & terpercaya
            </span>
            <span className="rounded-full bg-white px-4 py-2 border border-slate-200 shadow-sm">
              ✅ Harga bersahabat
            </span>
          </div>
        </div>
      </section>

      {/* Feature */}
      <section className="py-14 bg-white">
        <div className="container-page">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center">
            Kenapa pilih Orinimo?
          </h2>
          <p className="mt-3 text-center text-slate-600 max-w-2xl mx-auto">
            Fokus kami: cepat, jelas, dan aman.
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Proses Cepat",
                desc: "Order diproses cepat dan transparan, kamu selalu tahu statusnya.",
                icon: "⚡️",
              },
              {
                title: "Aman & Terpercaya",
                desc: "Akun legal, support responsif, dan panduan penggunaan yang jelas.",
                icon: "🛡️",
              },
              {
                title: "Harga Bersahabat",
                desc: "Harga kompetitif dengan kualitas layanan yang tetap maksimal.",
                icon: "💸",
              },
            ].map((it) => (
              <div
                key={it.title}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm hover:shadow-md transition"
              >
                <div className="text-3xl">{it.icon}</div>
                <h3 className="mt-4 font-bold text-lg text-slate-900">{it.title}</h3>
                <p className="mt-2 text-slate-600 leading-relaxed">{it.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-slate-50">
        <div className="container-page">
          <div className="rounded-3xl bg-[#7B1E1E] text-white p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold">Butuh rekomendasi produk?</h3>
              <p className="mt-2 text-white/90">
                Chat admin, kita bantu pilih paket yang paling cocok buat kamu.
              </p>
            </div>

            <a
              href="https://wa.me/6281234567890?text=Halo%20Orinimo%20Store,%20tolong%20rekomendasikan%20paket%20yang%20cocok%20untuk%20saya."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-white text-[#7B1E1E] px-6 py-3 font-semibold hover:opacity-95 transition shadow-sm"
            >
              Konsultasi via WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;