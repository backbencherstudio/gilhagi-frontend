import Leaf from "@/components/icons/LeafIcon";
import TickIcon from "@/components/icons/TickIcon";
import { Button } from "@/components/ui/button";
import React from "react";

const TariffDetails = ({ handleSwitch }: { handleSwitch: () => void }) => {
  return (
    <div className="p-4 md:p-6 border border-[#E2E8EE] bg-[#F8FCFD] rounded-2xl">
      
      {/* ===================== TOP SECTION ===================== */}
      <div className="divide-y">
        
        {/* TOP ROW */}
        <div className="flex flex-col lg:flex-row justify-between gap-6 pb-8">
          
          {/* LEFT INFO */}
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <img
                className="w-[140px] md:w-[182px] h-10 md:h-12 object-contain"
                src="/company/com_6.svg"
                alt="provider"
              />

              <GreenEnergyBadge title="Grüne Energie" />
            </div>

            {/* Perks */}
            <div className="flex flex-col gap-2">
              <p className="flex items-center gap-3 text-[#5F728B] text-sm md:text-base leading-snug">
                <TickIcon className="text-[#0EB580]" /> Switch online for free
              </p>
              <p className="flex items-center gap-3 text-[#5F728B] text-sm md:text-base leading-snug">
                <TickIcon className="text-[#0EB580]" /> No exchange fee
              </p>
            </div>
          </div>

          {/* RIGHT PRICING */}
          <div className="text-right lg:min-w-[250px]">
            <h2 className="text-[#1C2022] text-3xl md:text-[40px] font-semibold">
              €50.60
            </h2>
            <p className="text-[#5F728B] text-sm md:text-lg">Average per month</p>
            <p className="text-[#0EB580] text-sm md:text-lg font-medium">
              270€ saved per year
            </p>

            <Button onClick={handleSwitch} className="rounded-btn mt-4 md:mt-6">
              Switch Now
            </Button>
          </div>
        </div>

        {/* ===================== DETAILS ROW ===================== */}
        <div className="pt-8 flex justify-start lg:justify-end">
          <div className="w-full lg:w-[360px] divide-y">
            <InfoRow label="Grundpreis:" value="14,02 €/Monat" />
            <InfoRow label="Arbeitspreis:" value="23,90 ct/kWh" />
            <InfoRow label="Erstlaufzeit:" value="12 Monate" />
            <InfoRow label="Begrenzte Preisgarantie:" value="12 Monate" />
          </div>
        </div>
      </div>

      {/* ===================== PRICE INFO ===================== */}
      <div className="mt-8">
        <h3 className="text-[#1C2022] text-base font-medium mb-4">Mehr Details</h3>

        <div className="border rounded-lg bg-white overflow-hidden">
          
          {/* Table Header */}
          <div className="bg-[#E4EBF2] px-4 py-3 font-medium">Preis</div>

          {/* Table Body */}
          <div className="p-4 divide-y text-sm">

            <InfoRow2 label="Ihre Verbrauchszahl" value="für 2.500 kWh pro Jahr" />
            <InfoRow2 label="Energiepreis pro kWh" value="32,32 Cent pro kWh" />
            <InfoRow2 label="Gesamter Arbeitskosten" value="808,04 € pro Jahr" />
            <InfoRow2 label="Grundpreis" value="123,99 € pro Jahr (10,33 €/Monat)" />

            {/* Highlight Section */}
            <HighlightBlock
              rows={[
                {
                  label: "Gesamtpreis im ersten Jahr ohne Bonus",
                  value: "932,03 € pro Jahr",
                },
                {
                  label: "Durchschnitt pro Monat",
                  value: "77,67 € pro Monat",
                },
              ]}
            />

            <InfoRow2 label="Neukundenbonus" value="139,80 €" />
            <InfoRow2 label="Sofortbonus" value="190,00 €" />

            <HighlightBlock
              rows={[
                {
                  label: "Gesamtpreis im ersten Jahr ohne Bonus",
                  value: "932,03 € pro Jahr",
                },
                {
                  label: "Durchschnitt pro Monat",
                  value: "77,67 € pro Monat",
                },
              ]}
            />

            {/* Monthly payment estimate */}
            <div className="py-4 space-y-4">
              <div className="flex flex-col md:flex-row md:justify-between gap-2">
                <p className="text-[#5F728B] text-sm">
                  Geschätzte monatliche Zahlung{" "}
                  <span className="text-[10px]">(monatliche Kontobelastung)</span>
                </p>
                <p className="text-[#1C2022] text-sm">
                  ungefähr 77,67 € pro Monat
                </p>
              </div>

              <div className="space-y-1">
                <p className="text-[#1C2022] text-[11px] font-medium">Hinweis:</p>
                <p className="text-[#5F728B] text-[11px] leading-relaxed">
                  Mit diesem Tarif zahlen Sie voraussichtlich 12 monatliche Raten.
                  Die geschätzte monatliche Zahlung basiert auf dem Gesamtpreis ohne
                  Boni. Boni werden i.d.R. einmalig gutgeschrieben und nicht in die
                  monatliche Zahlung eingerechnet.
                </p>
              </div>

              <p className="text-[#5F728B] text-sm">
                Bruttopreise gültig seit: 5. November 2025
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default TariffDetails;

const InfoRow = ({ label, value }: any) => (
  <div className="flex justify-between py-3 text-sm">
    <span className="text-[#5F728B]">{label}</span>
    <span className="text-[#1C2022] font-medium">{value}</span>
  </div>
);
const InfoRow2 = ({ label, value }: any) => (
  <div className="flex justify-between py-3 text-sm px-1">
    <span className="text-[#5F728B]">{label}</span>
    <span className="text-[#1C2022]">{value}</span>
  </div>
);
const HighlightBlock = ({ rows }: any) => (
  <div className="p-3 bg-[#F5F9FD] space-y-2">
    {rows.map((row:any, i:number) => (
      <div key={i} className="flex justify-between items-center text-sm">
        <p className="text-[#1C2022] font-medium">{row.label}</p>
        <p className="text-[#1C2022] font-medium">{row.value}</p>
      </div>
    ))}
  </div>
);
const GreenEnergyBadge = ({ title }: { title: string }) => (
  <span className="flex items-center gap-1 bg-[#D2F2E7] px-2.5 py-1.5 rounded-3xl text-[#00B57A] text-sm shrink-0">
    <Leaf className="w-3 h-3" />
    {title}
  </span>
);
