"use client";

import Leaf from "@/components/icons/LeafIcon";
import { PencilLine } from "lucide-react";
import { useState } from "react";
import MonthSlider from "./MonthlySlider";

/* -----------------------------
   TYPES
-------------------------------- */
type PriceView = "yearly" | "monthly";
type GreenType = "eco" | "eco_plus" | "any";
type BonusType = "all" | "instant" | "none";

interface Filters {
  priceView: PriceView;
  duration: number;
  showShorter: boolean;
  priceGuarantee: boolean;
  green: GreenType;
  bonus: BonusType;
}

/* -----------------------------
   MAIN SIDEBAR
-------------------------------- */
export default function FilterSidebar() {
  const cData = {
    pName: "Ihr aktueller Verbrauch",
    zip: 12121,
    city: "Dahsad",
    usage: 3.45,
  };

  const [filters, setFilters] = useState<Filters>({
    priceView: "yearly",
    duration: 12,
    showShorter: true,
    priceGuarantee: true,
    green: "any",
    bonus: "all",
  });

  const resetFilters = () => {
    setFilters({
      priceView: "yearly",
      duration: 12,
      showShorter: true,
      priceGuarantee: true,
      green: "any",
      bonus: "all",
    });
  };

  return (
    <aside className="rounded-xl flex flex-col gap-6 h-fit w-full md:w-auto">
      <div className="bg-white rounded-xl shadow-sm p-4 md:p-5">
        <CurrentUsageBox data={cData} />
      </div>

      <div className="border rounded-xl bg-white shadow-sm p-4 md:p-5 divide-y">
        <PriceToggle
          value={filters.priceView}
          onChange={(priceView: PriceView) => setFilters({ ...filters, priceView })}
        />

        <DurationSlider filters={filters} setFilters={setFilters} />

        <GreenSelector
          value={filters.green}
          onChange={(green: GreenType) => setFilters({ ...filters, green })}
        />

        <BonusSelector
          value={filters.bonus}
          onChange={(bonus: BonusType) => setFilters({ ...filters, bonus })}
        />

        <ResetFiltersButton onReset={resetFilters} />
      </div>
    </aside>
  );
}

/* -----------------------------
   CURRENT USAGE
-------------------------------- */
function CurrentUsageBox({ data }: any) {
  return (
    <div className="border border-gray-200 rounded-lg p-4 md:p-5">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold">{data.pName}</h3>
        <PencilLine className="w-4 h-4 text-[#085EC4]" />
      </div>

      <div className="text-[#5F728B] space-y-1">
        <p>
          <b>Postleitzahl:</b> {data.zip}
        </p>
        <p>
          <b>Ort:</b> {data.city}
        </p>
        <p>
          <b>Verbrauch:</b> {data.usage} kWh/Jahr
        </p>
      </div>
    </div>
  );
}

/* -----------------------------
   PRICE TOGGLE
-------------------------------- */
function PriceToggle({ value, onChange }: any) {
  return (
    <div className="pb-4">
      <span className="font-medium mb-2 block">Preis anzeigen</span>

      <div className="bg-gray-200 rounded-full p-1.5 flex gap-2">
        {["yearly", "monthly"].map((v) => (
          <button
            key={v}
            onClick={() => onChange(v)}
            className={`px-3 py-2 rounded-full flex-1 transition ${
              value === v ? "bg-[#085EC4] text-white" : "bg-transparent"
            }`}
          >
            {v === "yearly" ? "jährlich" : "monatlich"}
          </button>
        ))}
      </div>
    </div>
  );
}

/* -----------------------------
   DURATION SLIDER
-------------------------------- */
function DurationSlider({ filters, setFilters }: any) {
  return (
    <div className="py-4">
      <label className="font-medium block mb-2">Laufzeit in Monaten</label>

      <MonthSlider
        value={filters.duration}
        onChange={(duration: number) => setFilters({ ...filters, duration })}
      />

      {/* <div className="mt-4 space-y-3">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={filters.showShorter}
            onChange={(e) =>
              setFilters({ ...filters, showShorter: e.target.checked })
            }
          />
          Kürzere Laufzeiten anzeigen
        </label>

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={filters.priceGuarantee}
            onChange={(e) =>
              setFilters({ ...filters, priceGuarantee: e.target.checked })
            }
          />
          Preisgarantie für Laufzeiten
        </label>
      </div> */}
    </div>
  );
}

/* -----------------------------
   GREEN SELECTOR
-------------------------------- */
function GreenSelector({ value, onChange }: any) {
  return (
    <div className="py-4 space-y-2">
      <h4 className="font-medium">Grüne und Klimatarife</h4>
      <SelectorItem active={value === "any"} onClick={() => onChange("any")}>
        Egal
      </SelectorItem>

      <SelectorItem active={value === "eco"} onClick={() => onChange("eco")}>
        <Leaf /> Öko
      </SelectorItem>

      <SelectorItem
        active={value === "eco_plus"}
        onClick={() => onChange("eco_plus")}
      >
        <Leaf /> Öko <span className="font-semibold text-[#077A64]">PLUS</span>
      </SelectorItem>
    </div>
  );
}

/* -----------------------------
   BONUS SELECTOR
-------------------------------- */
function BonusSelector({ value, onChange }: any) {
  return (
    <div className="py-4 space-y-2">
      <h4 className="font-medium">Boni</h4>

      <SelectorItem active={value === "all"} onClick={() => onChange("all")}>
        Alle Boni
      </SelectorItem>

      <SelectorItem
        active={value === "instant"}
        onClick={() => onChange("instant")}
      >
        Nur Sofortbonus
      </SelectorItem>

      <SelectorItem active={value === "none"} onClick={() => onChange("none")}>
        Kein Sofortbonus
      </SelectorItem>
    </div>
  );
}

/* -----------------------------
   SHARED SELECTOR ITEM
-------------------------------- */
function SelectorItem({ children, active, onClick }: any) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-2 rounded-md flex items-center gap-2 w-full transition ${
        active ? "bg-[#085EC4] text-white" : "bg-[#F9F9F9] text-[#5F728B]"
      }`}
    >
      {children}
    </button>
  );
}

/* -----------------------------
   RESET BUTTON
-------------------------------- */
function ResetFiltersButton({ onReset }: any) {
  return (
    <button
      onClick={onReset}
      className="mt-8 w-full px-6 py-3 rounded-3xl border border-[#085EC4]
        text-[#085EC4] hover:bg-[#085EC4] hover:text-white transition"
    >
      Filter zurücksetzen
    </button>
  );
}
