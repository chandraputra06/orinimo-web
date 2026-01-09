const BRAND = "#7B1E1E";

const PrivacyPolicy = () => {
  return (
    <div className="font-poppins bg-slate-50">
      <style>{`
        @keyframes floatSoft {
          0%,100% { transform: translate3d(-2%, -2%, 0) scale(1); }
          50% { transform: translate3d(2%, 2%, 0) scale(1.06); }
        }
        @media (prefers-reduced-motion: reduce) {
          .bg-anim { animation: none !important; }
        }
      `}</style>

      <section className="py-14 relative overflow-hidden">
        <div
          aria-hidden
          className="bg-anim pointer-events-none absolute -top-28 -right-28 h-80 w-80 rounded-full blur-3xl opacity-60"
          style={{ backgroundColor: "rgba(123,30,30,0.14)", animation: "floatSoft 14s ease-in-out infinite" }}
        />
        <div
          aria-hidden
          className="bg-anim pointer-events-none absolute -bottom-28 -left-28 h-80 w-80 rounded-full blur-3xl opacity-55"
          style={{ backgroundColor: "rgba(123,30,30,0.12)", animation: "floatSoft 16s ease-in-out infinite" }}
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
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-50 via-slate-50/70 to-slate-50" />

        <div className="container-page relative">
          <p
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold border"
            style={{ backgroundColor: "rgba(123,30,30,0.10)", color: BRAND, borderColor: "rgba(123,30,30,0.12)" }}
          >
            <span aria-hidden>🔐</span>
            Privasi & keamanan
          </p>

          <h1 className="mt-4 text-3xl md:text-4xl font-bold text-slate-900">Kebijakan Privasi</h1>
          <p className="mt-3 text-slate-600 max-w-3xl">
            Privasi kamu penting. Berikut ringkasan kebijakan privasi Orinimo Store.
          </p>

          <div className="mt-8 space-y-4">
            {[
              {
                title: "Data yang dikumpulkan",
                desc: "Nama, email, dan informasi yang kamu kirim lewat form/WhatsApp untuk proses layanan.",
              },
              {
                title: "Penggunaan data",
                desc: "Untuk memproses pesanan, layanan pelanggan, dan peningkatan pengalaman pengguna.",
              },
              {
                title: "Keamanan",
                desc: "Kami berupaya melindungi data dengan praktik keamanan yang wajar.",
              },
              {
                title: "Pihak ketiga",
                desc: "Kami tidak menjual data pribadi. Data dapat dibagikan seperlunya untuk operasional (mis. payment) jika diperlukan.",
              },
              {
                title: "Kontak",
                desc: "Jika ada pertanyaan terkait privasi, silakan hubungi kami via halaman Hubungi Kami.",
              },
            ].map((it) => (
              <div
                key={it.title}
                className="group relative overflow-hidden rounded-2xl bg-white border border-slate-200 p-6 shadow-sm hover:shadow-md transition"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(123,30,30,0.06), rgba(255,255,255,0) 55%)",
                  }}
                />
                <div className="relative">
                  <h3 className="font-bold text-slate-900">{it.title}</h3>
                  <p className="mt-2 text-slate-600 leading-relaxed">{it.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8 text-sm text-slate-500">
            Catatan: Ini template ringkas. Sesuaikan lagi jika kamu sudah punya kebijakan privasi resmi.
          </p>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
