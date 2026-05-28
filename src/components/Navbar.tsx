"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const pathname = usePathname();
  const { t, locale, switchLocale } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (
    pathname === "/promo" ||
    pathname.startsWith("/construction") ||
    pathname.startsWith("/restaurant") ||
    pathname.startsWith("/school")
  ) {
    return null;
  }

  const navLinks = [
    { href: "/", label: t("nav.home") as string },
    { href: "/services", label: t("nav.services") as string },
    { href: "/portfolio", label: t("nav.portfolio") as string },
    { href: "/contact", label: t("nav.contact") as string },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass shadow-lg shadow-primary-500/5 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-12 h-12 relative flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
            <Image 
              src="/logo-photoroom.png" 
              alt="BigHero Logo" 
              fill 
              className="object-contain"
              sizes="48px"
              priority
            />
          </div>
          <span className="text-xl font-bold text-navy">
            BigHero <span className="gradient-text">Studio</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-2 rounded-lg text-sm font-medium text-slate-600 hover:text-primary-600 hover:bg-primary-50 transition-all duration-300"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Language Switch + CTA */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={switchLocale}
            className="px-3 py-1.5 rounded-lg text-xs font-semibold border border-slate-200 text-slate-500 hover:border-primary-300 hover:text-primary-600 hover:bg-primary-50 transition-all duration-300"
            aria-label="Switch language"
          >
            {t("nav.language") as string}
          </button>
          <Link
            href="/contact"
            className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-700 hover:to-primary-600 shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 transition-all duration-300 hover:-translate-y-0.5"
          >
            {locale === "th" ? "ปรึกษาฟรี" : "Free Consult"}
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
          aria-label="Toggle menu"
        >
          <div className="w-5 h-5 flex flex-col justify-center gap-1">
            <span
              className={`block h-0.5 w-5 bg-slate-600 transition-all duration-300 ${
                mobileOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-slate-600 transition-all duration-300 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-slate-600 transition-all duration-300 ${
                mobileOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-4 glass mt-2 mx-4 rounded-2xl space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block px-4 py-3 rounded-xl text-sm font-medium text-slate-600 hover:text-primary-600 hover:bg-primary-50 transition-all"
            >
              {link.label}
            </Link>
          ))}
          <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
            <button
              onClick={switchLocale}
              className="px-3 py-2 rounded-lg text-xs font-semibold border border-slate-200 text-slate-500"
            >
              {t("nav.language") as string}
            </button>
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="flex-1 text-center px-4 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-primary-600 to-primary-500"
            >
              {locale === "th" ? "ปรึกษาฟรี" : "Free Consult"}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
