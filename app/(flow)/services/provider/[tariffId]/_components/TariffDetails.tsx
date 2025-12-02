import Leaf from "@/components/icons/LeafIcon";
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
            <div className="inline-flex items-center gap-2 self-stretch">
              <img className=" w-[182px] h-12" src={"/company/com_6.svg"}></img>
              <GreenEnergyBadge title="Grüne Energie" />
            </div>
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

// ============================Others Components===========================

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

const GreenEnergyBadge = ({ title }: { title: string }) => {
  return (
    <span className="flex items-center gap-1 [background:#D2F2E7] px-2.5 py-1.5 rounded-3xl text-[#00B57A] shrink-0 ">
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_9_9867)">
          <path
            d="M4.75 10C2.208 10 0.5 8.493 0.5 6.25C0.5 4.521 1.5475 0.5 11.25 0.5C11.2995 0.499912 11.3479 0.514526 11.3891 0.54199C11.4303 0.569455 11.4624 0.608532 11.4814 0.654269C11.5004 0.700005 11.5053 0.750342 11.4956 0.798896C11.4859 0.84745 11.4621 0.892036 11.427 0.927C10.55 1.8045 9.4805 3.0945 8.9945 5.304C8.633 6.945 7.9605 10 4.75 10ZM10.66 1.005C1.956 1.158 1 4.7055 1 6.25C1 8.194 2.507 9.5 4.75 9.5C7.342 9.5 8.0475 7.2785 8.506 5.1965C8.945 3.199 9.8335 1.9145 10.66 1.005Z"
            fill="#00B57A"
            stroke="#00B57A"
            stroke-width="0.5"
          />
          <path
            d="M0.75 11.4995C0.683696 11.4995 0.620107 11.4732 0.573223 11.4263C0.526339 11.3794 0.5 11.3159 0.5 11.2495C0.5 9.76305 3.0775 4.99355 7.141 3.02455C7.19998 3.00039 7.26594 2.99963 7.32547 3.0224C7.38499 3.04518 7.43359 3.08979 7.46138 3.14715C7.48916 3.2045 7.49404 3.27029 7.47502 3.33112C7.456 3.39195 7.41451 3.44324 7.359 3.47455C3.2555 5.46305 1 10.081 1 11.2495C1 11.3159 0.973661 11.3794 0.926777 11.4263C0.879893 11.4732 0.816304 11.4995 0.75 11.4995Z"
            fill="#00B57A"
            stroke="#00B57A"
            stroke-width="0.5"
          />
        </g>
        <defs>
          <clipPath id="clip0_9_9867">
            <rect width="12" height="12" fill="white" />
          </clipPath>
        </defs>
      </svg>

      <p>{title}</p>
    </span>
  );
};
