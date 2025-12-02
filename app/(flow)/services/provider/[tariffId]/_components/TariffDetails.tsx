import TickIcon from "@/components/icons/TickIcon";
import { Button } from "@/components/ui/button";
import React from "react";

const TariffDetails = ({ handleSwitch }: { handleSwitch: () => void }) => {
  return (
    <div className="p-6 border border-[#E2E8EE)] bg-[#F8FCFD] rounded-2xl border-solid ">
      {/* basic info */}
      <div className="divide-y">
        {/* first part */}
        <div className="flex items-start justify-between pb-8">
          {/* right */}
          <div>
            <h1>Logo</h1>
            <div className="flex flex-col">
              <p className="flex items-center gap-4 text-[#5F728B]  text-base font-normal leading-[140%] tracking-[0.08px]">
                {" "}
                <TickIcon className="text-[#0EB580]" /> Switch online for free
              </p>
              <p className="flex items-center gap-4 text-[#5F728B]  text-base font-normal leading-[140%] tracking-[0.08px]">
                {" "}
                <TickIcon className="text-[#0EB580]" /> No exchange fee
              </p>
            </div>
          </div>

          {/* left */}
          <div className="text-right ">
            <h2 className="text-[#1C2022)] text-[40px] font-semibold leading-[130%]">
              €50.60
            </h2>
            <p className="text-[#5F728B)] text-lg font-normal leading-[160%]">
              Average per month
            </p>
            <p className="text-[#0EB580] text-lg font-medium leading-[160%]">
              270€ saved per year
            </p>

            <Button
              onClick={handleSwitch}
              className="rounded-btn border ml-auto mt-6"
            >
              Switch Now
            </Button>
          </div>
        </div>

        {/* second part */}
        <div className="flex items-center justify-end pt-8">
          <div className="min-w-[372px] divide-y">
            <InfoRow label="Grundpreis:" value="14,02 €/Monat" />
            <InfoRow label="Arbeitspreis:" value="23,90 ct/kWh" />
            <InfoRow label="Erstlaufzeit:" value="12 Monate" />
            <InfoRow label="Begrenzte Preisgarantie:" value="12 Monate" />
          </div>
        </div>
      </div>

      {/* price info */}
      <div className="">
        <h3 className="text-[#1C2022]  text-base font-medium leading-[140%] mb-5">
          Mehr Details
        </h3>

        <div className="border border-t-0 rounded-lg bg-white">
          {/* header */}
          <div className="  [background:#E4EBF2] px-4 py-3 rounded-lg border border-b ">
            Preis
          </div>
          {/* details */}
          <div className="p-4 divide-y ">
            <InfoRow2
              label="Ihre Verbrauchszahl"
              value="für 2.500 kWh pro Jahr"
            />
            <InfoRow2 label="Energiepreis pro kWh" value="32,32 Cent pro kWh" />
            <InfoRow2
              label="Gesamter Arbeitskosten"
              value="808,04 € pro Jahr"
            />
            <InfoRow2
              label="Grundpreis"
              value="123,99 € pro Jahr (10,33 € pro Monat)"
            />

            <div className=" p-3  bg-[#F5F9FD] space-y-2">
              <div className="flex justify-between items-center">
                <p className="text-[#1C2022]  text-sm font-medium leading-[140%] tracking-[0.07px]">
                  Gesamtpreis im ersten Jahr ohne Bonus
                </p>
                <p className="text-[#1C2022]  text-sm font-medium leading-[140%] tracking-[0.07px]">
                  932,03 € pro Jahr
                </p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-[#1C2022]  text-sm font-medium leading-[140%] tracking-[0.07px]">
                  Durchschnitt pro Monat
                </p>
                <p className="text-[#1C2022]  text-sm font-medium leading-[140%] tracking-[0.07px]">
                  77,67 € pro Monat
                </p>
              </div>
            </div>

            <InfoRow2 label="Neukundenbonus" value="139,80 €" />
            <InfoRow2 label="Sofortbonus" value="190,00 €" />

            <div className=" p-3  bg-[#F5F9FD] space-y-2">
              <div className="flex justify-between items-center">
                <p className="text-[#1C2022]  text-sm font-medium leading-[140%] tracking-[0.07px]">
                  Gesamtpreis im ersten Jahr ohne Bonus
                </p>
                <p className="text-[#1C2022]  text-sm font-medium leading-[140%] tracking-[0.07px]">
                  932,03 € pro Jahr
                </p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-[#1C2022]  text-sm font-medium leading-[140%] tracking-[0.07px]">
                  Durchschnitt pro Monat
                </p>
                <p className="text-[#1C2022]  text-sm font-medium leading-[140%] tracking-[0.07px]">
                  77,67 € pro Monat
                </p>
              </div>
            </div>

            <div className="gap-6 p-3 space-y-2">
              <div className="flex gap-6">
                <p className="text-[#5F728B]  text-sm font-normal leading-[130%] tracking-[0.07px]">
                  Geschätzte monatliche Zahlung{" "}
                  <span className="text-[10px]">
                    (monatliche Kontobelastung)
                  </span>
                </p>
                <p className="text-[#1C2022] text-sm font-normal leading-[130%] tracking-[0.07px]">
                  ungefähr 77,67 € pro Monat
                </p>
              </div>

              <div>
                <p className="text-[#1C2022]  text-[10px] font-normal leading-[132%] tracking-[0.05px]">
                  Hinweis:{" "}
                </p>
                <p className="flex-[1_0_0] text-[#5F728B]  text-[10px] font-normal leading-[132%] tracking-[0.05px]">
                  Mit diesem Tarif zahlen Sie voraussichtlich 12 monatliche
                  Raten. Die geschätzte monatliche Zahlung wird auf Basis des
                  Gesamtpreises ohne mögliche Boni im ersten Jahr berechnet.
                  Mögliche Boni sind in dieser Berechnung nicht enthalten, da
                  sie Ihnen als einmalige Zahlung im ersten Jahr gutgeschrieben
                  werden können.
                </p>
              </div>

              <div>
                <p className="text-[#5F728B]  text-sm font-normal leading-[130%] tracking-[0.07px] ">
                  Bruttopreise gültig seit: 5. November 2025
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TariffDetails;

const InfoRow = ({ label, value, className = "" }: any) => {
  return (
    <div
      className={`flex justify-between items-center   py-3 
  first:pb-3 first:pt-0
  last:pt-3 last:pb-0 ${className}`}
    >
      <span className="text-[#5F728B] text-sm font-medium leading-[140%] tracking-[0.07px]">
        {label}
      </span>

      <span className="text-[#1C2022] text-base font-medium leading-[140%]">
        {value}
      </span>
    </div>
  );
};

const InfoRow2 = ({ label, value, className = "" }: any) => {
  return (
    <div
      className={`flex justify-between items-center px-3  py-3 
  first:pb-3 first:pt-0
  last:pt-3 last:pb-0 ${className}`}
    >
      <span className="text-[#5F728B]  text-sm font-normal leading-[130%] tracking-[0.07px]">
        {label}
      </span>

      <span className="text-[#1C2022]  text-sm font-normal leading-[130%] tracking-[0.07px]">
        {value}
      </span>
    </div>
  );
};
