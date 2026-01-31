"use client";

import Leaf from "@/components/icons/LeafIcon";
import { House } from "lucide-react";
import MonthSlider from "./MonthlySlider";

type EcoType = "" | "eco" | "austria";

export default function FilterSidebar({
  calculationDetails,
  duration,
  eco,
  setDuration,
  setEco,
}: {
  calculationDetails: any;
  duration: number;
  eco: EcoType;
  setDuration: (duration: number) => void;
  setEco: (eco: EcoType) => void;
}) {
  return (
    <aside className="rounded-xl flex flex-col gap-6 h-fit w-full md:w-auto">
      <div className="bg-white rounded-xl shadow-sm p-4 md:p-5">
        <CurrentUsageBox data={calculationDetails} />
      </div>

      <div className="border rounded-xl bg-white shadow-sm p-4 md:p-5 divide-y">
        <DurationSlider value={duration} onChange={setDuration} />
        <GreenSelector value={eco} onChange={setEco} />
      </div>
    </aside>
  );
}

function CurrentUsageBox({ data }: { data: any }) {
  const { postal_code, city, annual_consumption } = data?.saving || {};

  console.log("this is data", data);
  return (
    <div className="border border-gray-200 rounded-lg p-4 md:p-5">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold">Ihr aktueller Anbieter</h3>
      </div>

      <div className="text-[#5F728B] space-y-1">
        <p>
          <b>Postleitzahl:</b> {postal_code}
        </p>
        <p>
          <b>Ort:</b> {city}
        </p>
        <p>
          <b>Verbrauch:</b> {annual_consumption} kWh/Jahr
        </p>
      </div>
    </div>
  );
}

function DurationSlider({
  value,
  onChange,
}: {
  value: number;
  onChange: (v: number) => void;
}) {
  return (
    <div className="py-4">
      <label className="font-medium block mb-2">Laufzeit in Monaten</label>
      <MonthSlider value={value} onChange={onChange} />
    </div>
  );
}

function GreenSelector({
  value,
  onChange,
}: {
  value: EcoType;
  onChange: (v: EcoType) => void;
}) {
  return (
    <div className="py-4 space-y-2">
      <h4 className="font-medium">Grüne und Klimatarife</h4>

      <SelectorItem active={value === ""} onClick={() => onChange("")}>
        Alle
      </SelectorItem>

      <SelectorItem active={value === "eco"} onClick={() => onChange("eco")}>
        <Leaf /> Öko
      </SelectorItem>

      <SelectorItem
        active={value === "austria"}
        onClick={() => onChange("austria")}
      >
        <House className="w-4 h-4" /> Nur Österreich
      </SelectorItem>
    </div>
  );
}

function SelectorItem({
  children,
  active,
  onClick,
}: {
  children: React.ReactNode;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`px-3 py-2 rounded-md flex items-center gap-2 w-full transition cursor-pointer ${
        active ? "bg-[#085EC4] text-white" : "bg-[#F9F9F9] text-[#5F728B]"
      }`}
    >
      {children}
    </button>
  );
}
