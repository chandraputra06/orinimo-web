import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const BRAND = "#7B1E1E";

const PaymentMethods = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out",
      once: true,
      offset: 80,
    });
  }, []);

  const methods = [
    {
      title: "Transfer Bank",
      desc: "SeaBank (detail rekening mengikuti info admin).",
      icon: "🏦",
      aos: "fade-up",
      delay: 0,
    },
    {
      title: "E-Wallet",
      desc: "DANA / GoPay (menyesuaikan ketersediaan).",
      icon: "📲",
      aos: "fade-up",
      delay: 120,
    },
    {
      title: "QRIS",
      desc: "Scan QRIS untuk pembayaran cepat & praktis.",
      icon: "🧾",
      aos: "fade-up",
      delay: 240,
    },
    {
      title: "Konfirmasi",
      desc: "Kirim bukti transfer via WhatsApp agar pesanan segera diproses.",
      icon: "✅",
      aos: "fade-up",
      delay: 360,
    },
  ];

  const steps = [
    {
      title: "Pilih metode pembayaran",
      desc: "Tentukan metode yang paling nyaman (bank / e-wallet / QRIS).",
    },
    {
      title: "Lakukan pembayaran",
      desc: "Transfer sesuai nominal yang diinformasikan admin.",
    },
    {
      title: "Kirim bukti pembayaran",
      desc: "Kirim screenshot/struk ke WhatsApp admin agar cepat diproses.",
    },
    {
      title: "Pesanan diproses",
      desc: "Admin konfirmasi dan pesanan kamu langsung diproses.",
    },
  ];

  return (
    <div className="font-poppins bg-slate-50">
      {/* Subtle background accent */}
      <style>{`
        @keyframes floatSoft {
          0%, 100% { transform: translate(-2%, -2%) scale(1); }
          50% { transform: translate(2%, 2%) scale(1.06); }
        }
        @media (prefers-reduced-motion: reduce) {
          .bg-anim { animation: none !important; }
        }
      `}</style>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div
            className="bg-anim absolute -top-24 -left-24 h-[22rem] w-[22rem] rounded-full blur-3xl opacity-60"
            style={{
              background: "rgba(123,30,30,0.20)",
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
                "radial-gradient(circle at 1px 1px, rgba(123,30,30,0.18) 1px, transparent 0)",
              backgroundSize: "22px 22px",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/70 to-slate-50" />
        </div>

        <div className="container-page relative z-10 py-12 md:py-16">
          <div
            data-aos="fade-up"
            className="inline-flex items-center gap-2 rounded-full bg-[#7B1E1E]/10 px-4 py-2 text-sm font-semibold text-[#7B1E1E]"
          >
            <span aria-hidden>💳</span>
            Pembayaran cepat & aman
          </div>

          <h1
            data-aos="fade-up"
            data-aos-delay="120"
            className="mt-4 text-3xl md:text-4xl font-bold text-slate-900 leading-tight"
          >
            Metode Pembayaran
            <span className="block text-[#7B1E1E]">yang tersedia</span>
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="220"
            className="mt-3 text-slate-600 max-w-2xl"
          >
            Pilih metode pembayaran yang paling nyaman. Setelah transfer,{" "}
            <span className="font-semibold text-slate-800">konfirmasi ke admin</span>{" "}
            agar pesanan segera diproses.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="pb-16">
        <div className="container-page">
          {/* Payment method cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {methods.map((it) => (
              <div
                key={it.title}
                data-aos={it.aos}
                data-aos-delay={it.delay}
                className="group rounded-3xl bg-white border border-slate-200 p-6 shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-2xl bg-[#7B1E1E]/10 flex items-center justify-center text-2xl">
                    {it.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-slate-900 text-lg">
                      {it.title}
                    </h3>
                    <p className="mt-2 text-slate-600 leading-relaxed">
                      {it.desc}
                    </p>

                    <div className="mt-4 h-px bg-slate-100" />

                    <p className="mt-3 text-sm text-slate-500">
                      Tips: pastikan nominal{" "}
                      <span className="font-semibold text-slate-700">
                        sesuai instruksi admin
                      </span>{" "}
                      agar verifikasi cepat.
                    </p>
                  </div>
                </div>

                <div className="mt-5 flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#7B1E1E] bg-[#7B1E1E]/10 px-3 py-1 rounded-full">
                    Aman & Praktis
                  </span>
                  <span className="text-xs text-slate-400 group-hover:text-slate-600 transition">
                    Hover untuk fokus ✨
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Steps */}
          <div className="mt-10">
            <div
              data-aos="fade-up"
              className="rounded-3xl bg-white border border-slate-200 p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center justify-between flex-wrap gap-3">
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                    Alur Pembayaran
                  </h2>
                  <p className="mt-2 text-slate-600">
                    Biar makin jelas, ikuti langkah ini ya.
                  </p>
                </div>

                <a
                  href="https://wa.me/+6281325505028?text=Halo%20Orinimo%20Store,%20saya%20ingin%20konfirmasi%20pembayaran."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-xl bg-[#7B1E1E] px-5 py-3 text-white font-semibold hover:opacity-95 transition shadow-sm"
                  data-aos="zoom-in"
                  data-aos-delay="150"
                >
                  Konfirmasi via WhatsApp
                </a>
              </div>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
                {steps.map((s, idx) => (
                  <div
                    key={s.title}
                    data-aos="fade-up"
                    data-aos-delay={120 + idx * 90}
                    className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                  >
                    <div className="flex items-center gap-2">
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-[#7B1E1E] text-white font-bold">
                        {idx + 1}
                      </span>
                      <h3 className="font-bold text-slate-900">{s.title}</h3>
                    </div>
                    <p className="mt-2 text-slate-600 leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div
                data-aos="fade-up"
                data-aos-delay="520"
                className="mt-8 rounded-2xl border border-[#7B1E1E]/20 bg-[#7B1E1E]/5 p-5"
              >
                <p className="text-slate-700">
                  <span className="font-bold text-[#7B1E1E]">Catatan:</span>{" "}
                  Jika pembayaran sudah dilakukan tapi belum diproses, biasanya karena belum ada bukti transfer.
                  Silakan kirim bukti pembayaran ke WhatsApp admin ya 🙌
                </p>
              </div>
            </div>
          </div>

          {/* Small FAQ strip */}
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4"
          >
            {[
              {
                q: "Berapa lama verifikasi?",
                a: "Biasanya cepat setelah bukti pembayaran diterima.",
                icon: "⏱️",
              },
              {
                q: "Bisa bayar selain yang tertera?",
                a: "Tanyakan admin, tergantung ketersediaan metode.",
                icon: "🔁",
              },
              {
                q: "Salah transfer gimana?",
                a: "Segera hubungi admin agar dibantu pengecekan.",
                icon: "🆘",
              },
            ].map((f, i) => (
              <div
                key={f.q}
                data-aos="fade-up"
                data-aos-delay={240 + i * 120}
                className="rounded-2xl bg-white border border-slate-200 p-5 shadow-sm"
              >
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-xl bg-[#7B1E1E]/10 flex items-center justify-center">
                    {f.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{f.q}</h4>
                    <p className="mt-1 text-slate-600">{f.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PaymentMethods;
