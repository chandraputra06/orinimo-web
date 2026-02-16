import { useMemo, useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const location = useLocation();

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

  // Close when resizing to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Close on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Close when clicking outside (anywhere)
  useEffect(() => {
    if (!isOpen) return;

    const onPointerDown = (e) => {
      const menuEl = menuRef.current;
      const btnEl = buttonRef.current;

      const clickedMenu = menuEl && menuEl.contains(e.target);
      const clickedBtn = btnEl && btnEl.contains(e.target);

      if (!clickedMenu && !clickedBtn) setIsOpen(false);
    };

    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [isOpen]);

  // Lock body scroll on mobile menu open (optional but nice)
  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

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

            {/* Mobile button (animated) */}
            <button
              ref={buttonRef}
              className="md:hidden inline-flex items-center justify-center rounded-lg p-2 hover:bg-white/10 transition"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              onClick={() => setIsOpen((v) => !v)}
            >
              <span className="relative block h-5 w-6">
                <span
                  className={[
                    "absolute left-0 top-0 block h-0.5 w-6 rounded-full bg-white transition-transform duration-300",
                    isOpen ? "translate-y-2 rotate-45" : "translate-y-0 rotate-0",
                  ].join(" ")}
                />
                <span
                  className={[
                    "absolute left-0 top-2 block h-0.5 w-6 rounded-full bg-white transition-all duration-300",
                    isOpen ? "opacity-0 translate-x-2" : "opacity-100 translate-x-0",
                  ].join(" ")}
                />
                <span
                  className={[
                    "absolute left-0 top-4 block h-0.5 w-6 rounded-full bg-white transition-transform duration-300",
                    isOpen ? "translate-y-[-8px] -rotate-45" : "translate-y-0 rotate-0",
                  ].join(" ")}
                />
              </span>
            </button>
          </div>
        </div>

        {/* Overlay + Mobile menu panel */}
        <div
          className={[
            "md:hidden fixed inset-0 z-50",
            isOpen ? "pointer-events-auto" : "pointer-events-none",
          ].join(" ")}
          aria-hidden={!isOpen}
        >
          {/* dark overlay */}
          <div
            className={[
              "absolute inset-0 bg-black/40 backdrop-blur-[2px] transition-opacity duration-200",
              isOpen ? "opacity-100" : "opacity-0",
            ].join(" ")}
            onClick={() => setIsOpen(false)}
          />

          {/* panel */}
          <div
            ref={menuRef}
            className={[
              "absolute left-1/2 top-16 -translate-x-1/2 w-[92%] max-w-sm",
              "rounded-2xl bg-[#7B1E1E] border border-white/10 shadow-xl overflow-hidden",
              "transition-all duration-200",
              isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2",
            ].join(" ")}
            role="dialog"
            aria-label="Mobile navigation"
          >
            <div className="p-3">
              <div className="flex flex-col items-center text-center gap-2 rounded-2xl bg-white/10 p-3 border border-white/10">
                {navItems.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    className={(args) =>
                      [
                        navLinkClass(args),
                        "w-full justify-center flex", // center item
                      ].join(" ")
                    }
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>

              <button
                className="mt-3 w-full rounded-xl border border-white/15 bg-white/10 py-2 text-sm font-semibold hover:bg-white/15 transition"
                onClick={() => setIsOpen(false)}
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* subtle divider */}
      <div className="h-px bg-black/5" />
    </header>
  );
};

export default Navbar;
