const PrivacyPolicy = () => {
  return (
    <div className="font-poppins bg-slate-50">
      <section className="py-14">
        <div className="container-page">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Kebijakan Privasi</h1>
          <p className="mt-3 text-slate-600 max-w-3xl">
            Privasi kamu penting. Berikut ringkasan kebijakan privasi Orinimo Store.
          </p>

          <div className="mt-8 space-y-4">
            {[
              {
                title: 'Data yang dikumpulkan',
                desc: 'Nama, email, dan informasi yang kamu kirim lewat form/WhatsApp untuk proses layanan.',
              },
              {
                title: 'Penggunaan data',
                desc: 'Untuk memproses pesanan, layanan pelanggan, dan peningkatan pengalaman pengguna.',
              },
              {
                title: 'Keamanan',
                desc: 'Kami berupaya melindungi data dengan praktik keamanan yang wajar.',
              },
              {
                title: 'Pihak ketiga',
                desc: 'Kami tidak menjual data pribadi. Data dapat dibagikan seperlunya untuk operasional (mis. payment) jika diperlukan.',
              },
              {
                title: 'Kontak',
                desc: 'Jika ada pertanyaan terkait privasi, silakan hubungi kami via halaman Hubungi Kami.',
              },
            ].map((it) => (
              <div
                key={it.title}
                className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm"
              >
                <h3 className="font-bold text-slate-900">{it.title}</h3>
                <p className="mt-2 text-slate-600 leading-relaxed">{it.desc}</p>
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
