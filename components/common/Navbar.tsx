"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import ThunderIcon from "../icons/ThunderIcon";
import { useAppSelector } from "@/redux/store/hooks";

type UserType = "admin" | "customer" | string;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const pathname = usePathname();
  const isHome = pathname === "/";

  const isAuthenticated = useAppSelector(
    (state: any) => state.auth.isAuthenticated
  );
  const userType: UserType | undefined = useAppSelector(
    (state: any) => state.auth.user?.user_type
  );

  // Decide dashboard link once
  const dashboardHref = useMemo(() => {
    if (!isAuthenticated) return "/register";
    return userType === "admin" ? "/admin-dashboard" : "/user-dashboard";
  }, [isAuthenticated, userType]);

  const ctaLabel = isAuthenticated ? "Dashboard" : "Jetzt registrieren";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll(); // set initial
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const navBgClass = scrolled || !isHome ? "bg-[#0B2839]" : "bg-[#F2F6F50D]";

  const toggleOpen = () => setOpen((v) => !v);
  const closeMenu = () => setOpen(false);

  const links = [
    { href: "/faq", label: "FAQ" },
    { href: "/#how-it-works", label: "Wie es funktioniert" },
    { href: "/#contact", label: "Kontakt" },
  ] as const;

  return (
    <nav
      className={[
        "fixed top-0 left-0 right-0 z-50 w-full py-4",
        "border-b border-gray-400/50 shadow backdrop-blur-md",
        "transition-colors duration-300",
        navBgClass,
      ].join(" ")}
    >
      <div className="mx-auto flex w-full max-w-[1320px] items-center justify-between px-4 text-white">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1">
          <ThunderIcon />
          <h1 className="text-xl font-bold">Wechselsicher</h1>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-20 md:flex">
          <ul className="flex gap-10">
            {links.map((l) => (
              <li
                key={l.href}
                className="whitespace-nowrap transition hover:text-gray-300"
              >
                <Link href={l.href}>{l.label}</Link>
              </li>
            ))}
          </ul>

          <Link href={dashboardHref}>
            <button className="rounded-full bg-[#085EC4] px-8 py-4 text-lg font-medium transition hover:bg-[#064DA1] cursor-pointer">
              {ctaLabel}
            </button>
          </Link>
        </div>

        {/* Hamburger */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={toggleOpen}
          className="flex cursor-pointer flex-col gap-1 md:hidden"
        >
          <span
            className={[
              "h-[3px] w-7 rounded bg-white transition-all",
              open ? "translate-y-1.5 rotate-45" : "",
            ].join(" ")}
          />
          <span
            className={[
              "h-[3px] w-7 rounded bg-white transition-all",
              open ? "opacity-0" : "",
            ].join(" ")}
          />
          <span
            className={[
              "h-[3px] w-7 rounded bg-white transition-all",
              open ? "-translate-y-1.5 -rotate-45" : "",
            ].join(" ")}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={[
          "md:hidden",
          "overflow-hidden text-white transition-all duration-300",
          open
            ? "max-h-[320px] opacity-100"
            : "max-h-0 opacity-0 pointer-events-none",
        ].join(" ")}
      >
        <div className="mx-auto mt-4 flex max-w-[1320px] flex-col items-center gap-6 px-4">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={closeMenu}>
              {l.label}
            </Link>
          ))}

          <Link href={dashboardHref} onClick={closeMenu}>
            <button className="rounded-full bg-[#085EC4] px-8 py-4 text-lg font-medium transition hover:bg-[#064DA1] cursor-pointer">
              {ctaLabel}
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
