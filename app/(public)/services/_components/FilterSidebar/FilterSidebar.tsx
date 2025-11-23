"use client";
import Leaf from "@/components/icons/LeafIcon";
import { PencilLine } from "lucide-react";

import { useState } from "react";
export default function FilterSidebar() {
  const cData = {
    pName: "Ihr aktueller Verbrauch",
    zip: 12121,
    city: "Dahsad",
    usage: 3.45,
  };
  return (
    <aside className="rounded-xl flex flex-col gap-6 h-fit">
      <div className="bg-white">
        <CurrentUsageBox data={cData} />
      </div>
      <div className="border rounded-xl p-5 divide-y  bg-white">
        <PriceToggle />
        <DurationSlider />
        <GreenSelector />
        <BonusSelector />
        <ResetFiltersButton />
      </div>
    </aside>
  );
}

function CurrentUsageBox({ data }: any) {
  return (
    <div className="border border-gray-200 rounded-lg p-5 filter-text">
      <div className="flex items-center justify-between  mb-4">
        <h3 className=" text-[#1C2022] font-semibold ">{data?.pName}</h3>
        <PencilLine className="w-[13px] h-[13px] text-[#085EC4] " />
      </div>
      <div className="text-[#5F728B] ">
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

function PriceToggle() {
  return (
    <div className="filter-text pb-4">
      <span className="font-medium mb-2 block">Preis anzeigen</span>
      <div className="bg-gray-200 rounded-full p-1.5 flex gap-2.5 font-medium">
        <button className="px-3 py-2 text-sm rounded-full flex-1 bg-[#085EC4] text-white ">
          jährlich
        </button>
        <button className="px-3 py-1 text-sm flex-1">monatlich</button>
      </div>
    </div>
  );
}

function DurationSlider() {
  const steps = [1, 3, 6, 12, 24];
  const [value, setValue] = useState(12);

  return (
    <div className="py-4">
      <label className="font-medium">Laufzeit in Monaten</label>

      <input
        type="range"
        min="1"
        max="24"
        step="1"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className="w-full mt-3 accent-blue-600"
      />

      <div className="text-xs text-gray-600 flex justify-between mt-1">
        {steps.map((s) => (
          <span
            key={s}
            className={
              s === value ? "text-blue-600 font-semibold" : "text-gray-500"
            }
          >
            {String(s).padStart(2, "0")}
          </span>
        ))}
      </div>

      <div className="mt-4 space-y-2 text-sm">
        <label className="flex items-center gap-2">
          <input type="checkbox" defaultChecked className="accent-blue-600" />
          Kürzere Laufzeiten anzeigen
        </label>

        <label className="flex items-center gap-2">
          <input type="checkbox" defaultChecked className="accent-blue-600" />
          Preisgarantie für Laufzeiten
        </label>
      </div>
    </div>
  );
}

function GreenSelector() {
  return (
    <div className="flex flex-col gap-2 py-4">
      <h4 className="font-medium mb-2">Grüne und Klimatarife</h4>
      <div className="px-3 py-2 flex items-center gap-1 bg-[#F9F9F9] rounded-md">
        <Leaf />
        <p className="text-[#5F728B]">Öko (alle grünen Tarife)</p>
      </div>
      <div className="px-3 py-2 flex items-center gap-1 bg-[#F9F9F9] rounded-md">
        <Leaf />
        <p className="text-[#5F728B]">
          Öko <span className="text-[#077A64] font-semibold">PLUS</span> (nur
          nachhaltig)
        </p>
      </div>
      <div className="px-3 py-2 flex items-center gap-1 bg-[#F9F9F9] rounded-md">
        <p className="text-[#5F728B]">Egal</p>
      </div>
    </div>
  );
}

function BonusSelector() {
  return (
    <div className="flex flex-col gap-2 py-4">
      <h4 className="font-medium mb-2">Grüne und Klimatarife</h4>
      <div className="px-3 py-2 flex items-center gap-1 bg-[#F9F9F9] rounded-md">
        <p className="text-[#5F728B]">Alle Boni</p>
      </div>
      <div className="px-3 py-2 flex items-center gap-1 bg-[#F9F9F9] rounded-md">
        <p className="text-[#5F728B]">Nur Sofortbonus</p>
      </div>
      <div className="px-3 py-2 flex items-center gap-1 bg-[#F9F9F9] rounded-md">
        <p className="text-[#5F728B]">Kein Sofortbonus</p>
      </div>
    </div>
  );
}

function ResetFiltersButton() {
  return (
    <button className="flex justify-center items-center gap-3 self-stretch border border-[#085EC4] hover:bg-[#085EC5] hover:text-white transition-colors duration-300 cursor-pointer px-8 py-3 rounded-4xl border-solid text-[#085EC4] w-full mt-16 font-medium">
      Filter zurücksetzen
    </button>
  );
}
