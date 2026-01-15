import { useMemo, useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = useMemo(
    () => [
      { label: "Beranda", to: "/" },
      { label: "Produk", to: "/produk" },
      { label: "Cara Pembelian", to: "/cara-pembelian" },
      { label: "Tentang Kami", to: "/tentang-kami" },
      { label: "FAQ", to: "/faq" },
    ],
    []
  );

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const navLinkClass = ({ isActive }) =>
    [
      "relative px-3 py-2 rounded-lg text-sm font-semibold transition",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#7B1E1E]",
      "after:content-[''] after:absolute after:left-3 after:right-3 after:-bottom-0.5 after:h-px after:rounded-full after:bg-white/70 after:origin-left after:scale-x-0 after:transition-transform after:duration-300",
      isActive
        ? "bg-white/15 text-white after:scale-x-100"
        : "text-white/90 hover:bg-white/10 hover:text-white hover:after:scale-x-100",
    ].join(" ");

  return (
    <header className="sticky top-0 z-50">
      <nav className="relative overflow-hidden bg-[#7B1E1E] text-white shadow-sm">
        {/* subtle shine overlay */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-40"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 rounded-full bg-white/10 blur-3xl"
        />

        <div className="container-page relative">
          <div className="flex items-center justify-between py-3">
            <Link
              to="/"
              className="group font-bold text-lg tracking-wide flex items-center gap-2"
            >
              <span className="relative inline-flex items-center justify-center overflow-hidden rounded-full">
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <img
                  src="/logo-orinimo.png"
                  alt="Orinimo Store"
                  className="relative h-10 w-10 md:h-11 md:w-11 object-contain drop-shadow-sm"
                  draggable="false"
                />
              </span>
              <span className="relative">
                Orinimo Store
                <span className="block h-px bg-white/0 group-hover:bg-white/40 transition" />
              </span>
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
              <div className="flex flex-col gap-2 rounded-2xl bg-white/10 p-3 border border-white/10 shadow-sm">
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
