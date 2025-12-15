"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import ThunderIcon from "../icons/ThunderIcon";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 py-4 z-50 w-full border-b border-gray-400/50 shadow backdrop-blur-md transition-colors duration-300 ${
        scrolled || !isHome ? "bg-[#0B2839]" : "bg-[#F2F6F50D]"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-[1320px] mx-auto px-4 text-white">
        {/* Logo */}
        <Link href="/" className="flex gap-1 items-center">
          <ThunderIcon />
          <h1 className="text-xl font-bold">Wechselsicher</h1>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-20 items-center">
          <ul className="flex gap-10">
            <li className="whitespace-nowrap hover:text-gray-300 transition">
              <Link href="/#customer-reviews">Kundenbewertungen</Link>
            </li>
            <li className="whitespace-nowrap hover:text-gray-300 transition">
              <Link href="/#how-it-works">Wie es funktioniert</Link>
            </li>
            <li className="whitespace-nowrap hover:text-gray-300 transition">
              <Link href="/#contact">Kontakt</Link>
            </li>
          </ul>
          <Link href={"/register"}>
            <button className="px-8 py-4 bg-[#085EC4] rounded-full hover:bg-[#064DA1] transition font-medium text-lg cursor-pointer">
              Jetzt registrieren
            </button>
          </Link>
        </div>

        {/* Hamburger */}
        <div
          className="md:hidden flex flex-col gap-1 cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <span
            className={`h-[3px] w-7 bg-white rounded transition-all ${
              open ? "rotate-45 translate-y-1.5" : ""
            }`}
          ></span>
          <span
            className={`h-[3px] w-7 bg-white rounded transition-all ${
              open ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`h-[3px] w-7 bg-white rounded transition-all ${
              open ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          ></span>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden flex flex-col items-center gap-6 mt-4 overflow-hidden transition-all duration-300 z-100 text-white ${
          open ? "max-h-[300px] opacity-100 bg-" : "max-h-0 opacity-0"
        }`}
      >
        <Link href="/#customer-reviews" onClick={() => setOpen(false)}>
          Kundenbewertungen
        </Link>

        <Link href="./#how-it-works" onClick={() => setOpen(false)}>
          Wie es funktioniert
        </Link>
        <Link href="./#contact" onClick={() => setOpen(false)}>
          Kontakt
        </Link>
        <button className="px-8 py-4 bg-[#085EC4] rounded-full hover:bg-[#064DA1] transition font-medium text-lg">
          Jetzt registrieren
        </button>
      </div>
    </nav>
  );
}
