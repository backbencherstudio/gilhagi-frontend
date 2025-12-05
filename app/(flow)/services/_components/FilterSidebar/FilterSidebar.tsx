"use client";
import Leaf from "@/components/icons/LeafIcon";
import { PencilLine } from "lucide-react";
import { useState } from "react";
import MonthSlider from "./MonthlySlider";

export default function FilterSidebar() {
  const cData = {
    pName: "Ihr aktueller Verbrauch",
    zip: 12121,
    city: "Dahsad",
    usage: 3.45,
  };

  return (
    <aside
      className="
        rounded-xl flex flex-col gap-6 
        h-fit 
        w-full
        md:w-auto
      "
    >
      <div className="bg-white rounded-xl shadow-sm p-4 md:p-5">
        <CurrentUsageBox data={cData} />
      </div>

      <div
        className="
          border rounded-xl bg-white shadow-sm 
          p-4 md:p-5 
          divide-y
        "
      >
        <PriceToggle />
        <DurationSlider />
        <GreenSelector />
        <BonusSelector />
        <ResetFiltersButton />
      </div>
    </aside>
  );
}

/* -----------------------------
   CURRENT USAGE BOX
-------------------------------- */
function CurrentUsageBox({ data }:any) {
  return (
    <div className="border border-gray-200 rounded-lg p-4 md:p-5 text-sm md:text-base">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-[#1C2022] font-semibold">
          {data?.pName}
        </h3>
        <PencilLine className="w-4 h-4 text-[#085EC4]" />
      </div>

      <div className="text-[#5F728B] space-y-1">
        <p>
          <span className="text-[#1C2022] font-medium">Postleitzahl:</span>{" "}
          {data?.zip}
        </p>
        <p>
          <span className="text-[#1C2022] font-medium">Ort:</span> {data?.city}
        </p>
        <p>
          <span className="text-[#1C2022] font-medium">Verbrauch:</span>{" "}
          {data?.usage} kWh/Jahr
        </p>
      </div>
    </div>
  );
}

/* -----------------------------
   PRICE TOGGLE
-------------------------------- */
function PriceToggle() {
  return (
    <div className="pb-4 text-sm md:text-base">
      <span className="font-medium mb-2 block">Preis anzeigen</span>

      <div className="bg-gray-200 rounded-full p-1.5 flex gap-2 font-medium text-sm md:text-base">
        <button className="px-3 py-2 rounded-full flex-1 bg-[#085EC4] text-white">
          jährlich
        </button>
        <button className="px-3 py-2 rounded-full flex-1">monatlich</button>
      </div>
    </div>
  );
}

/* -----------------------------
   DURATION SLIDER
-------------------------------- */
function DurationSlider() {
  const [showShorterDurations, setShowShorterDurations] = useState(true);
  const [priceGuarantee, setPriceGuarantee] = useState(true);

  return (
    <div className="py-4 text-sm md:text-base">
      <label className="font-medium block mb-2">Laufzeit in Monaten</label>

      <MonthSlider />

      <div className="mt-4 space-y-3 text-sm md:text-base">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={showShorterDurations}
            onChange={(e) => setShowShorterDurations(e.target.checked)}
            className="accent-blue-600"
          />
          Kürzere Laufzeiten anzeigen
        </label>

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={priceGuarantee}
            onChange={(e) => setPriceGuarantee(e.target.checked)}
            className="accent-blue-600"
          />
          Preisgarantie für Laufzeiten
        </label>
      </div>
    </div>
  );
}

/* -----------------------------
   GREEN SELECTOR
-------------------------------- */
function GreenSelector() {
  return (
    <div className="flex flex-col gap-2 py-4 text-sm md:text-base">
      <h4 className="font-medium mb-1">Grüne und Klimatarife</h4>

      <SelectorItem>
        <Leaf />
        <span className="text-[#5F728B]">Öko (alle grünen Tarife)</span>
      </SelectorItem>

      <SelectorItem>
        <Leaf />
        <span className="text-[#5F728B]">
          Öko <span className="text-[#077A64] font-semibold">PLUS</span> (nur nachhaltig)
        </span>
      </SelectorItem>

      <SelectorItem>
        <span className="text-[#5F728B]">Egal</span>
      </SelectorItem>
    </div>
  );
}

function SelectorItem({ children }:any) {
  return (
    <div className="px-3 py-2 flex items-center gap-2 bg-[#F9F9F9] rounded-md">
      {children}
    </div>
  );
}

/* -----------------------------
   BONUS SELECTOR
-------------------------------- */
function BonusSelector() {
  return (
    <div className="flex flex-col gap-2 py-4 text-sm md:text-base">
      <h4 className="font-medium mb-1">Boni</h4>

      <SelectorItem>
        <span className="text-[#5F728B]">Alle Boni</span>
      </SelectorItem>

      <SelectorItem>
        <span className="text-[#5F728B]">Nur Sofortbonus</span>
      </SelectorItem>

      <SelectorItem>
        <span className="text-[#5F728B]">Kein Sofortbonus</span>
      </SelectorItem>
    </div>
  );
}

/* -----------------------------
   RESET BUTTON
-------------------------------- */
function ResetFiltersButton() {
  return (
    <button
      className="
        flex justify-center items-center gap-3 
        border border-[#085EC4] text-[#085EC4]
        hover:bg-[#085EC5] hover:text-white 
        transition-all duration-300 
        px-6 py-3 
        rounded-3xl 
        w-full mt-8 
        font-medium
        text-sm md:text-base
      "
    >
      Filter zurücksetzen
    </button>
  );
}
