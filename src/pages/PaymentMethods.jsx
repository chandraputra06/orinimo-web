const PaymentMethods = () => {
  return (
    <div className="font-poppins bg-slate-50">
      <section className="py-14">
        <div className="container-page">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
            Metode Pembayaran
          </h1>
          <p className="mt-3 text-slate-600 max-w-2xl">
            Pilih metode pembayaran yang paling nyaman. Setelah transfer, konfirmasi ke admin.
          </p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Transfer Bank', desc: 'BCA / BRI / Mandiri (sesuai info admin).' },
              { title: 'E-Wallet', desc: 'DANA / OVO / GoPay (sesuai ketersediaan).' },
              { title: 'QRIS', desc: 'Scan QRIS untuk pembayaran cepat.' },
              { title: 'Konfirmasi', desc: 'Kirim bukti transfer via WhatsApp agar pesanan segera diproses.' },
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

export default PaymentMethods;
