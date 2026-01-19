import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const WHATSAPP =
  "https://wa.me/6281234567890?text=Halo%20Orinimo%20Store,%20saya%20ingin%20order%20produk%20digital.%20Tolong%20dibantu%20ya.";

const HowToBuy = () => {
  const [activeStep, setActiveStep] = useState(1);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out",
      once: true,
      offset: 80,
    });

    // ✅ set judul tab untuk halaman Cara Pembelian
    document.title = "Orinimo Store - Cara Pembelian";
  }, []);

  // ✅ Refresh AOS setiap kali activeStep berubah
  useEffect(() => {
    AOS.refresh();
  }, [activeStep]);

  const steps = useMemo(
    () => [
      {
        id: 1,
        title: "Pilih Produk",
        desc:
          "Buka halaman Produk, lalu pilih layanan/paket yang kamu butuhkan (Netflix, Spotify, Canva, VPN, dll).",
        tips: [
          "Kalau bingung pilih paket, kamu bisa konsultasi dulu.",
          "Cek durasi paket dan ketentuan akun (sharing/private).",
        ],
        icon: "🛒",
      },
      {
        id: 2,
        title: "Kirim Detail Pesanan",
        desc:
          "Hubungi admin via WhatsApp dan kirimkan detail produk + paket. Admin akan konfirmasi stok & harga.",
        tips: [
          "Format cepat: Nama • Produk • Paket • Durasi",
          "Contoh: R • Netflix • 1 Bulan • Private",
        ],
        icon: "💬",
      },
      {
        id: 3,
        title: "Lakukan Pembayaran",
        desc:
          "Admin akan kirim metode pembayaran. Setelah transfer, kirim bukti pembayaran agar pesanan diproses.",
        tips: ["Pastikan nominal sesuai.", "Simpan bukti transfer sampai order selesai."],
        icon: "💳",
      },
      {
        id: 4,
        title: "Proses & Aktivasi",
        desc:
          "Admin memproses pesanan dan mengirimkan detail akun/aktivasi + panduan penggunaan.",
        tips: ["Ikuti panduan login/aktivasi yang diberikan.", "Jangan ubah data akun kalau tidak diminta."],
        icon: "⚡️",
      },
      {
        id: 5,
        title: "Selesai & Support",
        desc:
          "Kalau ada kendala, kamu bisa chat admin. Kami bantu sampai akun kamu aman digunakan.",
        tips: ["Kirim screenshot error jika ada.", "Sebutkan produk + paket agar admin cepat cek."],
        icon: "🛡️",
      },
    ],
    []
  );

  const active = steps.find((s) => s.id === activeStep);

  return (
    <div className="bg-white font-poppins">
      <style>{`
        @keyframes floatSoft {
          0%,100% { transform: translate3d(-2%, -2%, 0) scale(1); }
          50% { transform: translate3d(2%, 2%, 0) scale(1.06); }
        }
        @keyframes shimmerX {
          0% { transform: translateX(-120%); }
          100% { transform: translateX(120%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .bg-anim { animation: none !important; }
          .shimmer { animation: none !important; }
        }
      `}</style>

      {/* Hero */}
      <section className="relative overflow-hidden bg-white">
        <div
          aria-hidden
          className="bg-anim pointer-events-none absolute -top-28 -left-28 h-80 w-80 rounded-full blur-3xl opacity-60"
          style={{ background: "rgba(123,30,30,0.18)", animation: "floatSoft 14s ease-in-out infinite" }}
        />
        <div
          aria-hidden
          className="bg-anim pointer-events-none absolute -bottom-28 -right-28 h-80 w-80 rounded-full blur-3xl opacity-50"
          style={{ background: "rgba(123,30,30,0.14)", animation: "floatSoft 16s ease-in-out infinite" }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(123,30,30,0.18) 1px, transparent 0)",
            backgroundSize: "22px 22px",
          }}
        />
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-white/70 to-white" />

        <div className="container-page py-14 md:py-16 text-center relative">
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
                <span className="shimmer absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/25 to-transparent"
                  style={{ animation: "shimmerX 1.2s ease-in-out infinite" }} />
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
                <span className="shimmer absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/22 to-transparent"
                  style={{ animation: "shimmerX 1.2s ease-in-out infinite" }} />
              </span>
              <span className="relative">Order via WhatsApp</span>
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 text-sm text-slate-600">
            {[
              { t: "✅ Proses cepat", d: 380 },
              { t: "✅ Aman & terpercaya", d: 460 },
              { t: "✅ Support responsif", d: 540 },
            ].map((b) => (
              <span
                key={b.t}
                data-aos="fade-up"
                data-aos-delay={b.d}
                className="rounded-full bg-white px-4 py-2 border border-slate-200 shadow-sm hover:shadow-md transition"
              >
                {b.t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-12 bg-white">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Step list */}
            <div className="lg:col-span-5">
              <h2 data-aos="fade-up" className="text-2xl font-bold text-slate-900">
                Langkah-langkah
              </h2>
              <p data-aos="fade-up" data-aos-delay="100" className="mt-2 text-slate-600">
                Klik langkah di bawah untuk melihat detail dan tipsnya.
              </p>

              <div className="mt-6 space-y-3">
                {steps.map((s, idx) => {
                  const isActive = s.id === activeStep;
                  return (
                    <button
                      key={s.id}
                      onClick={() => setActiveStep(s.id)}
                      data-aos="fade-up"
                      data-aos-delay={Math.min(idx * 80, 240)}
                      className={[
                        "group w-full text-left rounded-2xl border p-4 transition hover:shadow-sm",
                        isActive
                          ? "border-[#7B1E1E]/30 bg-[#7B1E1E]/5 shadow-sm"
                          : "border-slate-200 bg-white hover:bg-slate-50",
                      ].join(" ")}
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className={[
                            "h-10 w-10 rounded-xl flex items-center justify-center text-lg transition-transform group-hover:scale-105",
                            isActive ? "bg-[#7B1E1E] text-white" : "bg-slate-100 text-slate-700",
                          ].join(" ")}
                        >
                          {s.icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between gap-3">
                            <p className="font-bold text-slate-900">
                              {s.id}. {s.title}
                            </p>
                            {isActive && (
                              <span className="text-xs font-semibold text-[#7B1E1E]">Aktif</span>
                            )}
                          </div>
                          <p className="mt-1 text-sm text-slate-600">{s.desc}</p>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step detail */}
            <div className="lg:col-span-7">
              <div
                data-aos="fade-left"
                className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 p-6 md:p-8 shadow-sm"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute -top-10 -right-10 h-32 w-32 rounded-full blur-2xl"
                  style={{ backgroundColor: "rgba(123,30,30,0.18)" }}
                />

                <div className="relative">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-2xl bg-[#7B1E1E] text-white flex items-center justify-center text-xl">
                      {active?.icon}
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-slate-900">
                        {activeStep}. {active?.title}
                      </h3>
                      <p className="mt-2 text-slate-600 leading-relaxed">{active?.desc}</p>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h4 data-aos="fade-up" data-aos-delay="100" className="font-bold text-slate-900">
                      Tips biar cepat diproses
                    </h4>
                    <ul className="mt-3 space-y-2 text-slate-700">
                      {active?.tips?.map((t, idx) => (
                        <li
                          key={idx}
                          data-aos="fade-up"
                          data-aos-delay={150 + idx * 80}
                          className="flex gap-2"
                        >
                          <span className="mt-0.5">✅</span>
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div
                    data-aos="zoom-in"
                    data-aos-delay="220"
                    className="mt-7 flex flex-col sm:flex-row gap-3"
                  >
                    <a
                      href={WHATSAPP}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative overflow-hidden inline-flex items-center justify-center rounded-lg bg-white border border-slate-200 px-5 py-3 font-semibold text-slate-900 hover:bg-slate-100 transition"
                    >
                      <span
                        aria-hidden
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition"
                      >
                        <span
                          className="shimmer absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-slate-200/60 to-transparent"
                          style={{ animation: "shimmerX 1.3s ease-in-out infinite" }}
                        />
                      </span>
                      <span className="relative">Tanya Admin via WhatsApp</span>
                    </a>

                    <Link
                      to="/produk"
                      className="group relative overflow-hidden inline-flex items-center justify-center rounded-lg bg-[#7B1E1E] px-5 py-3 font-semibold text-white hover:opacity-95 transition"
                    >
                      <span
                        aria-hidden
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition"
                      >
                        <span
                          className="shimmer absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/25 to-transparent"
                          style={{ animation: "shimmerX 1.2s ease-in-out infinite" }}
                        />
                      </span>
                      <span className="relative">Lihat Produk</span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* FAQ mini */}
              <div
                data-aos="fade-up"
                className="mt-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition"
              >
                <h4 className="font-bold text-slate-900">Pertanyaan singkat</h4>
                <div className="mt-4 space-y-3 text-slate-700">
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
                  ].map((it, idx) => (
                    <div key={it.q} data-aos="fade-up" data-aos-delay={100 + idx * 80}>
                      <p className="font-semibold">{it.q}</p>
                      <p className="text-slate-600">{it.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-12 bg-white">
        <div className="container-page">
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