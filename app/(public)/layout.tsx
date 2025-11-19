import Navber from "@/components/common/Navber";
import ThunderIcon from "@/components/icons/ThunderIcon";
import React from "react";

export default function PublicLayout({ children }: { children: any }) {
  return (
    <div>
      <nav className="absolute top-0 left-0  py-4  z-20 w-full bg-[#F2F6F50D] border-b border-gray-400/50 shadow">
        <div className="w-full flex flex-wrap justify-between items-center max-w-[1320px] mx-auto">
          <div className="flex gap-1">
            <ThunderIcon/>
            <h1 className="text-xl font-bold">Switchfy</h1>
          </div>
          <ul className="flex flex-wrap gap-4 md:gap-6">
            <li className="whitespace-nowrap">Kundenbewertungen</li>
            <li className="whitespace-nowrap">Wie es funktioniert</li>
            <li className="whitespace-nowrap">Kontakt</li>
          </ul>
          <button className="mt-2 md:mt-0 ml-0 md:ml-4 px-8 py-4 bg-[#085EC4] rounded-full hover:bg-[#064DA1] transition font-medium text-lg cursor-pointer">
            Jetzt registrieren
          </button>
        </div>
      </nav>
      {children}
    </div>
  );
}
