import React from 'react';

const Auth = () => {
  return (
    <div className="font-poppins bg-slate-50">
      <section className="py-14">
        <div className="container-page">
          <div className="max-w-xl mx-auto rounded-2xl bg-white border border-slate-200 p-6 shadow-sm">
            <h1 className="text-2xl md:text-3xl font-bold text-slate-900">Login / Daftar</h1>
            <p className="mt-2 text-slate-600">
              Halaman ini masih placeholder. Nanti bisa kamu sambungkan ke backend auth (Firebase, Supabase, custom API, dll).
            </p>

            <div className="mt-6 grid gap-4">
              <div>
                <label className="block text-sm font-semibold text-slate-800">Email</label>
                <input
                  type="email"
                  className="mt-2 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm"
                  placeholder="email@contoh.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-800">Password</label>
                <input
                  type="password"
                  className="mt-2 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm"
                  placeholder="••••••••"
                />
              </div>

              <button
                type="button"
                className="w-full rounded-lg bg-primary px-6 py-3 text-white font-semibold hover:opacity-95 transition"
              >
                Masuk (dummy)
              </button>

              <p className="text-xs text-slate-500 text-center">
                * Dummy page (belum ada logic).
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Auth;
