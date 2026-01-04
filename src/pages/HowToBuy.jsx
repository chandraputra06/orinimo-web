const HowToBuy = () => {
  return (
    <div className="font-poppins bg-slate-50">
      <section className="py-14">
        <div className="container-page">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Cara Pembelian</h1>
          <p className="mt-3 text-slate-600 max-w-2xl">
            Berikut langkah mudah untuk membeli produk di Orinimo Store.
          </p>

          <div className="mt-8 grid gap-4">
            {[
              {
                title: '1) Pilih Produk',
                desc: 'Buka halaman Produk, lalu pilih paket yang kamu butuhkan.',
              },
              {
                title: '2) Hubungi Admin / Checkout',
                desc: 'Klik tombol WhatsApp atau lanjutkan ke proses pembelian.',
              },
              {
                title: '3) Lakukan Pembayaran',
                desc: 'Transfer sesuai metode pembayaran yang tersedia.',
              },
              {
                title: '4) Produk Diproses',
                desc: 'Admin akan memproses pesanan dan mengirim detail akun/aktivasi.',
              },
              {
                title: '5) Selesai',
                desc: 'Jika ada kendala, langsung kontak admin melalui halaman Hubungi Kami.',
              },
            ].map((it) => (
              <div
                key={it.title}
                className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm"
              >
                <h3 className="font-bold text-slate-900">{it.title}</h3>
                <p className="mt-2 text-slate-600">{it.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowToBuy;
