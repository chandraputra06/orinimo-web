import { useMemo, useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

const BRAND = "#7B1E1E";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = useMemo(
    () => [
      { label: "Beranda", to: "/" },
      { label: "Produk", to: "/produk" },
      { label: "Cara Pembelian", to: "/cara-pembelian" },
      { label: "Tentang Kami", to: "/tentang-kami" },
      { label: "FAQ", to: "/faq" },
      { label: "Hubungi Kami", to: "/contact" },
    ],
    []
  );

  // Tutup menu mobile kalau pindah route (lebih enak UX)
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const navLinkClass = ({ isActive }) =>
    [
      "px-3 py-2 rounded-lg text-sm font-semibold transition",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#7B1E1E]",
      isActive
        ? "bg-white/15 text-white"
        : "text-white/90 hover:bg-white/10 hover:text-white",
    ].join(" ");

  return (
    <header className="sticky top-0 z-50">
      <nav className="bg-[#7B1E1E] text-white shadow-sm">
        <div className="container-page">
          <div className="flex items-center justify-between py-3">
            <Link
              to="/"
              className="font-bold text-lg tracking-wide flex items-center gap-2"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/10">
                <span className="text-base">O</span>
              </span>
              <span>Orinimo Store</span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-2">
              {navItems.map((item) => (
                <NavLink key={item.to} to={item.to} className={navLinkClass}>
                  {item.label}
                </NavLink>
              ))}
            </div>

            {/* Mobile button */}
            <button
              className="md:hidden inline-flex items-center justify-center rounded-lg p-2 hover:bg-white/10 transition"
              aria-label="Toggle menu"
              onClick={() => setIsOpen((v) => !v)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {isOpen ? (
                  <>
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </>
                ) : (
                  <>
                    <path d="M4 6h16" />
                    <path d="M4 12h16" />
                    <path d="M4 18h16" />
                  </>
                )}
              </svg>
            </button>
          </div>

          {/* Mobile menu */}
          {isOpen && (
            <div className="md:hidden pb-4">
              <div className="flex flex-col gap-2 rounded-2xl bg-white/10 p-3 border border-white/10">
                {navItems.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    className={navLinkClass}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* subtle divider */}
      <div className="h-px bg-black/5" />
    </header>
  );
};

export default Navbar;
