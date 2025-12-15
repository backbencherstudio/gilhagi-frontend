"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative px-4 md:px-12 lg:px-[124px] py-16 md:py-20 bg-[#0A2443] overflow-hidden">
      {/* Decorative Background Images */}
      <Image
        className="absolute bottom-0 left-0 w-32 md:w-48 opacity-80"
        src="/images/ft1.svg"
        alt=""
        width={192}
        height={192}
        priority
      />
      <Image
        className="absolute top-0 right-0 w-40 md:w-64 opacity-80"
        src="/images/ft2.svg"
        alt=""
        width={256}
        height={256}
        priority
      />
      <Image
        className="absolute right-0 inset-y-0"
        src="/images/ft3.svg"
        alt=""
        width={260}
        height={900}
        priority
      />
      <Image
        className="absolute left-0 inset-y-0"
        src="/images/ft4.svg"
        alt=""
        width={260}
        height={900}
        priority
      />

      {/* Main Content */}
      <div className="relative z-10 max-w-[1320px] mx-auto space-y-16">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-20">
          {/* Company Info */}
          <div className="w-full lg:w-[30%]">
            <Link href="/" className="inline-block">
              {/* <h2 className="text-white text-[32px] md:text-[36px] font-semibold mb-4">
                Wechselsicher
              </h2> */}
              <Image className="w-70 mb-4" src={"/Wechselsicher-logo2.svg"} alt="Wechselsicher Logo" width={150} height={40}>
              </Image>
            </Link>

            <p className="text-[#C9D7E2] text-lg leading-relaxed">
              Immer der beste Stromvertrag
            </p>

            {/* Social Icons */}
            <div className="mt-8 flex items-center gap-4 text-white">
              <p className="text-lg">Folgen Sie uns</p>
              <span>|</span>

              <div className="flex items-center gap-5">
                <Link
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="hover:scale-110 transition inline-flex"
                >
                  <FaFacebook className="w-7 h-7" />
                </Link>

                <Link
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="hover:scale-110 transition inline-flex"
                >
                  <FaInstagram className="w-7 h-7" />
                </Link>

                <Link
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="hover:scale-110 transition inline-flex"
                >
                  <FaLinkedin className="w-7 h-7" />
                </Link>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="w-full lg:w-[60%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {/* Column 1 */}
            <div>
              <ul>
                <li className="text-[#F2F9FF] text-xl font-semibold mb-5">
                  Unternehmen
                </li>
                {/* <li className="mb-2">
                  <Link
                    href="/about"
                    className="text-[#C9D7E2] text-lg hover:text-white transition"
                  >
                    Über
                  </Link>
                </li> */}
                <li className="mb-2">
                  <Link
                    href="#how-it-works"
                    className="text-[#C9D7E2] text-lg hover:text-white transition"
                  >
                    Wie es funktioniert
                  </Link>
                </li>
                
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <ul>
                <li className="text-[#F2F9FF] text-xl font-semibold mb-5">
                  Unterstützung
                </li>
                <li className="mb-2">
                  <Link
                    href="#contact"
                    className="text-[#C9D7E2] text-lg hover:text-white transition"
                  >
                    Kontakt
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    href="/faq"
                    className="text-[#C9D7E2] text-lg hover:text-white transition"
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <ul>
                <li className="text-[#F2F9FF] text-xl font-semibold mb-5">
                  Rechtliches
                </li>
                <li className="mb-2">
                  <Link
                    href="/impressum"
                    className="text-[#C9D7E2] text-lg hover:text-white transition"
                  >
                    Impressum
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    href="/privacy-policy"
                    className="text-[#C9D7E2] text-lg hover:text-white transition"
                  >
                    Datenschutzrichtlinie
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[#5F728B] pt-6">
          <p className="text-[#9AB0C7] text-center text-lg">
            © 2025-2026 Wechselsicher GmbH. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
}