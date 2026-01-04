import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder: Kirim data ke API atau WhatsApp
    alert('Pesan terkirim (dummy). Hubungkan ke backend/WA API jika sudah siap.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="font-poppins bg-slate-50">
      <section className="py-14">
        <div className="container-page">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Hubungi Kami</h1>
            <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
              Ada pertanyaan soal produk, pembayaran, atau kendala akun? Kirim pesan, admin akan bantu.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Info */}
            <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900">Kontak</h2>
              <p className="mt-2 text-slate-600">
                Kamu bisa hubungi kami lewat WhatsApp atau email.
              </p>

              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold">
                    WA
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">WhatsApp</p>
                    <a
                      href="https://wa.me/6281234567890"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-600 hover:text-primary"
                    >
                      +62 812-3456-7890
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold">
                    @
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Email</p>
                    <a href="mailto:support@orinimo.store" className="text-slate-600 hover:text-primary">
                      support@orinimo.store
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold">
                    ⏰
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Jam Operasional</p>
                    <p className="text-slate-600">09.00 - 21.00 WIB</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="font-semibold text-slate-900">Sosial Media</h3>
                <div className="mt-3 flex items-center gap-3">
                  <a
                    href="https://instagram.com/orinimostore"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-slate-100 hover:bg-slate-200 transition"
                    aria-label="Instagram"
                    title="Instagram"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-slate-700">
                      <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3z" />
                      <path d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" />
                      <path d="M17.5 6.5a1 1 0 1 0 .001 2.001A1 1 0 0 0 17.5 6.5z" />
                    </svg>
                  </a>

                  <a
                    href="https://wa.me/6281234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-slate-100 hover:bg-slate-200 transition"
                    aria-label="WhatsApp"
                    title="WhatsApp"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-slate-700">
                      <path d="M20.52 3.48A11.86 11.86 0 0 0 12.02 0C5.4 0 .02 5.38.02 12c0 2.12.56 4.19 1.62 6.01L0 24l6.17-1.6a12 12 0 0 0 5.85 1.49h.01c6.62 0 12-5.38 12-12 0-3.2-1.25-6.21-3.51-8.41zM12.03 21.9h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.66.95.98-3.57-.24-.37A9.88 9.88 0 0 1 2.12 12c0-5.46 4.45-9.9 9.91-9.9 2.65 0 5.14 1.03 7.01 2.9a9.84 9.84 0 0 1 2.9 7 9.9 9.9 0 0 1-9.92 9.9z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900">Kirim Pesan</h2>
              <p className="mt-2 text-slate-600">
                Isi form di bawah ini, nanti kami balas secepatnya.
              </p>

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-800">Nama</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Nama kamu"
                    className="mt-2 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-800">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="email@contoh.com"
                    className="mt-2 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-800">Pesan</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tulis pesan kamu..."
                    rows={5}
                    className="mt-2 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-primary px-6 py-3 text-white font-semibold hover:opacity-95 transition"
                >
                  Kirim Pesan
                </button>

                <p className="text-xs text-slate-500 text-center">
                  * Ini masih dummy (belum terhubung ke backend). Nanti bisa disambungkan ke API/Email/WA gateway.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
