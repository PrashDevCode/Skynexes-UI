"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/how-we-work", label: "How We Work" },
  { href: "/hire-developer", label: "Hire Developer" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (open) setOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-primary/95 backdrop-blur-md border-b border-slate-800 shadow-lg"
          : "bg-primary border-b border-slate-800"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        {/* LOGO */}
        <Link
          href="/"
          className="text-xl sm:text-2xl font-bold text-secondary shrink-0"
        >
          Skynexes
        </Link>

        {/* DESKTOP LINKS */}
        <ul className="hidden lg:flex items-center gap-6 text-sm">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`transition hover:text-secondary ${
                  pathname === link.href ? "text-secondary" : "text-white"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* DESKTOP CTA */}
        <Link href="/contact" className="hidden lg:block">
          <button className="bg-secondary text-black px-4 py-2 rounded-md text-sm font-semibold hover:bg-accent transition shrink-0">
            Start Project
          </button>
        </Link>

        {/* HAMBURGER */}
        <button
          className="lg:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-slate-800 bg-primary px-4 py-4 space-y-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`block px-4 py-3 rounded-lg text-sm transition hover:bg-slate-800 hover:text-secondary ${
                pathname === link.href
                  ? "text-secondary bg-slate-900"
                  : "text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2 pb-1">
            <Link href="/contact" onClick={() => setOpen(false)}>
              <button className="w-full bg-secondary text-black py-3 rounded-md font-semibold text-sm hover:bg-accent transition">
                Start Project
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
