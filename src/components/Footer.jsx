import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#7B1E1E] text-white font-poppins">
      {/* decorative overlay (absolute) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-35"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-28 -left-28 w-80 h-80 rounded-full bg-white/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-28 -right-28 w-80 h-80 rounded-full bg-white/8 blur-3xl"
      />

      <div className="container-page py-12 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <h3 className="font-bold text-lg">Orinimo Store</h3>
            <p className="text-sm mt-2 text-white/90 leading-relaxed max-w-sm">
              Penyedia produk digital premium yang aman, dan terjangkau untuk pengguna di Indonesia.
            </p>

            <div className="mt-4 flex items-center gap-3">
              <a
                href="https://www.instagram.com/orinimo.premapps"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white/10 hover:bg-white/15 transition hover:shadow-lg hover:shadow-black/10"
                aria-label="Instagram"
                title="Instagram"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 transition-transform group-hover:scale-110"
                >
                  <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3z" />
                  <path d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" />
                  <path d="M17.5 6.5a1 1 0 1 0 .001 2.001A1 1 0 0 0 17.5 6.5z" />
                </svg>
              </a>

              <a
                href="https://wa.me/+6281325505028"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white/10 hover:bg-white/15 transition hover:shadow-lg hover:shadow-black/10"
                aria-label="WhatsApp"
                title="WhatsApp"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 transition-transform group-hover:scale-110"
                >
                  <path d="M20.52 3.48A11.86 11.86 0 0 0 12.02 0C5.4 0 .02 5.38.02 12c0 2.12.56 4.19 1.62 6.01L0 24l6.17-1.6a12 12 0 0 0 5.85 1.49h.01c6.62 0 12-5.38 12-12 0-3.2-1.25-6.21-3.51-8.41zM12.03 21.9h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.66.95.98-3.57-.24-.37A9.88 9.88 0 0 1 2.12 12c0-5.46 4.45-9.9 9.91-9.9 2.65 0 5.14 1.03 7.01 2.9a9.84 9.84 0 0 1 2.9 7 9.9 9.9 0 0 1-9.92 9.9zm5.78-7.42c-.32-.16-1.89-.93-2.18-1.04-.29-.1-.5-.16-.71.16-.21.32-.82 1.04-1.01 1.25-.18.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.6-.95-.85-1.59-1.9-1.78-2.22-.18-.32-.02-.49.14-.65.14-.14.32-.37.48-.55.16-.18.21-.32.32-.53.1-.21.05-.4-.03-.55-.08-.16-.71-1.7-.97-2.33-.26-.62-.53-.53-.71-.53h-.61c-.21 0-.55.08-.85.4-.29.32-1.12 1.09-1.12 2.66 0 1.57 1.15 3.08 1.31 3.29.16.21 2.26 3.45 5.46 4.83.76.33 1.35.53 1.81.68.76.24 1.45.21 2 .13.61-.09 1.89-.77 2.16-1.52.27-.75.27-1.39.19-1.52-.08-.13-.29-.21-.61-.37z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Informasi */}
          <div>
            <h4 className="font-semibold">Informasi</h4>
            <ul className="mt-3 space-y-2 text-sm text-white/90">
              {[
                { label: "Cara Pembelian", to: "/cara-pembelian" },
                { label: "Metode Pembayaran", to: "/metode-pembayaran" },
                { label: "Kebijakan Privasi", to: "/kebijakan-privasi" },
              ].map((it) => (
                <li key={it.to}>
                  <Link
                    className="relative inline-flex items-center hover:text-white transition after:content-[''] after:absolute after:left-0 after:right-0 after:-bottom-0.5 after:h-px after:bg-white/60 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
                    to={it.to}
                  >
                    {it.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h4 className="font-semibold">Kontak</h4>
            <ul className="mt-3 space-y-2 text-sm text-white/90">
              <li>Instagram: @orinimo.premapps</li>
              <li>WA: +62 812-3456-7890</li>
              <li>Jam: 09.00 - 21.00 WIB</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-white/80">
          <p>&copy; {new Date().getFullYear()} Orinimo Store. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
