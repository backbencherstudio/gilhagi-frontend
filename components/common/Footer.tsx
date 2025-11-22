import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className="w-full bg-center bg-cover text-white 
                 py-12 md:py-20 px-6 md:px-12 lg:px-[124px]"
      style={{ backgroundImage: "url('/images/footer-bg.svg')" }}
    >
      <div className="max-w-[1320px] mx-auto space-y-16">
        
        {/* ------------------ Company + Links ------------------ */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12 lg:gap-20">
          
          {/* Company Info */}
          <div className="w-full lg:w-[30%]">
            <h2 className="text-[32px] md:text-[35.2px] font-semibold mb-4">
              Switchfy
            </h2>
            <p className="text-[#C9D7E2] text-lg leading-[160%]">
              Immer der beste Strom für Ihre
            </p>

            <div className="mt-10 flex items-center gap-4">
              <p>Folgen Sie uns</p>
              <span>|</span>
              <div className="flex items-center gap-5">
                <FaFacebook className="w-7 h-7" />
                <FaInstagram className="w-7 h-7" />
                <FaLinkedin className="w-7 h-7" />
              </div>
            </div>
          </div>

          {/* Useful Links */}
          <div className="w-full lg:w-[54%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            <div>
              <ul>
                <li className="mb-6 text-[#F2F9FF] text-xl font-semibold">
                  Unternehmen
                </li>
                <li className="text-[#C9D7E2] text-lg leading-[160%] mb-2">Über</li>
                <li className="text-[#C9D7E2] text-lg leading-[160%] mb-2">
                  So funktioniert es
                </li>
                <li className="text-[#C9D7E2] text-lg leading-[160%] mb-2">
                  Geschäft
                </li>
              </ul>
            </div>

            <div>
              <ul>
                <li className="mb-6 text-[#F2F9FF] text-xl font-semibold">
                  Unterstützung
                </li>
                <li className="text-[#C9D7E2] text-lg leading-[160%] mb-2">
                  Kontakt
                </li>
                <li className="text-[#C9D7E2] text-lg leading-[160%] mb-2">
                  Häufig gestellte Fragen
                </li>
              </ul>
            </div>

            <div>
              <ul>
                <li className="mb-6 text-[#F2F9FF] text-xl font-semibold">
                  Rechtliches
                </li>
                <li className="text-[#C9D7E2] text-lg leading-[160%] mb-2">
                  Impressum
                </li>
                <li className="text-[#C9D7E2] text-lg leading-[160%] mb-2">
                  Datenschutzrichtlinie
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* ---------------- Copy Right ---------------- */}
        <div className="border-t border-[#5F728B] pt-6">
          <p className="text-[#9AB0C7] text-center text-lg leading-[160%]">
            Copyright © 2025-2026 switchfy. Alle Rechte vorbehalten.
          </p>
        </div>

      </div>
    </footer>
  );
}
