"use client";

import { useState, useEffect } from "react";
import { siteConfig } from "@/lib/config";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#home", label: "الرئيسية" },
    { href: "#projects", label: "المشاريع" },
    { href: "#about", label: "عن الشركة" },
    { href: "#contact", label: "تواصل معنا" },
  ];

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-[1000] py-4 transition-all duration-400 ${
        scrolled
          ? "bg-navy/95 backdrop-blur-xl border-b border-gold/15 py-2.5"
          : ""
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 border-2 border-gold rounded-xl flex items-center justify-center font-[Playfair_Display] font-bold text-lg text-gold">
            CE
          </div>
          <div className="text-[15px] font-bold text-white leading-tight">
            سيتي إيدج
            <span className="block text-[11px] font-normal text-gold tracking-wider">
              CITY EDGE DEVELOPMENTS
            </span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-7 items-center">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-custom text-sm font-medium hover:text-gold transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:inline-block bg-gradient-to-bl from-gold to-gold-dark text-navy px-6 py-2.5 rounded-full font-bold text-[13px] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(197,164,90,0.3)] transition-all"
        >
          احجز الآن
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden border border-gold text-gold w-10 h-10 rounded-xl flex items-center justify-center text-xl"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-navy-light/95 backdrop-blur-xl border-t border-gold/10 mt-2">
          <div className="flex flex-col p-4 gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-gray-custom py-3 px-4 rounded-xl hover:bg-gold/5 hover:text-gold transition-all text-sm"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 bg-gradient-to-bl from-gold to-gold-dark text-navy text-center py-3 rounded-xl font-bold text-sm"
            >
              احجز الآن
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
