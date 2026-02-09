import Leaf from "@/components/icons/LeafIcon";
import TickIcon from "@/components/icons/TickIcon";
import { Button } from "@/components/ui/button";
import React from "react";

interface TariffDetailsProps {
  handleSwitch: () => void;
  tariffData?: {
    tariff_name?: string;
    price_kwh?: string;
    basic_fee?: string;
    exchange_bonus?: string;
    rates?: string;
    price_guarantee?: string;
    renewable?: number;
    vendor?: {
      provider_name?: string;
    };
  };
}

const TariffDetails = ({ handleSwitch, tariffData }: TariffDetailsProps) => {
  const formatValue = (value: string | number | undefined | null): string => {
    if (value === undefined || value === null || value === "") return "N/A";
    return String(value);
  };

  const formatCurrency = (
    value: string | undefined | null,
    suffix: string = "€"
  ): string => {
    if (!value) return "N/A";
    const numValue = parseFloat(value);
    if (isNaN(numValue)) return "N/A";
    return `${numValue.toLocaleString("de-DE", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })} ${suffix}`;
  };

  const calculateMonthlyAverage = (): string => {
    if (!tariffData?.basic_fee) return "N/A";

    const basicFee = parseFloat(tariffData.basic_fee);
    if (isNaN(basicFee)) return "N/A";

    const monthlyBasic = basicFee / 12;
    const pricePerKwh = tariffData.price_kwh
      ? parseFloat(tariffData.price_kwh)
      : 0;

    const monthlyConsumption = (2500 / 12) * (pricePerKwh / 100);
    const totalMonthly = monthlyBasic + monthlyConsumption;

    return formatCurrency(totalMonthly.toFixed(2), "€");
  };

  const formatBasicFeePerMonth = (): string => {
    if (!tariffData?.basic_fee) return "N/A";
    const basicFee = parseFloat(tariffData.basic_fee);
    if (isNaN(basicFee)) return "N/A";
    return formatCurrency((basicFee / 12).toFixed(2), "€/Monat");
  };

  const formatPricePerKwh = (): string => {
    if (!tariffData?.price_kwh) return "N/A";
    const price = parseFloat(tariffData.price_kwh);
    if (isNaN(price)) return "N/A";
    return `${price.toLocaleString("de-DE", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })} ct/kWh`;
  };

  const formatPricePerKwhDetails = (): string => {
    if (!tariffData?.price_kwh) return "N/A";
    const price = parseFloat(tariffData.price_kwh);
    if (isNaN(price)) return "N/A";
    return `${price.toLocaleString("de-DE", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })} Cent pro kWh`;
  };

  const formatExchangeBonus = (): string => {
    return formatCurrency(tariffData?.exchange_bonus, "€");
  };

  const showRenewableBadge = tariffData?.renewable === 1;




  const calculateEstimatedMonthlyPayment = (): string => {
    if (!tariffData?.price_kwh || !tariffData?.basic_fee) return "N/A";

    const pricePerKwhCents = parseFloat(tariffData.price_kwh);
    const basicFeeYearly = parseFloat(tariffData.basic_fee);
    const bonusYearly = tariffData.exchange_bonus
      ? parseFloat(tariffData.exchange_bonus)
      : 0;

    if (
      isNaN(pricePerKwhCents) ||
      isNaN(basicFeeYearly) ||
      isNaN(bonusYearly)
    ) {
      return "N/A";
    }

    const yearlyConsumption = 2500;

    const monthlyEnergyCost =
      (yearlyConsumption * pricePerKwhCents) / 100 / 12;

    const monthlyBaseCost = basicFeeYearly / 12;
    const monthlyBonus = bonusYearly / 12;

    const totalMonthly =
      monthlyEnergyCost + monthlyBaseCost - monthlyBonus;

    return formatCurrency(totalMonthly.toFixed(2), "€ pro Monat");
  };



  return (
    <div className="p-1 md:p-6 border border-[#E2E8EE] bg-[#F8FCFD] rounded-2xl">
      <div className="divide-y">
        <div className="flex flex-col lg:flex-row justify-between gap-6 pb-8">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <img
                className="w-[140px] md:w-[182px] h-10 md:h-12 object-contain"
                src="/company/com_6.svg"
                alt="provider"
              />
              {showRenewableBadge && (
                <GreenEnergyBadge title="Grüne Energie" />
              )}
            </div>

            <div className="flex flex-col gap-2">
              <p className="flex items-center gap-3 text-[#5F728B] text-[14px] md:text-base">
                <TickIcon className="text-[#0EB580]" /> Switch online for free
              </p>
              <p className="flex items-center gap-3 text-[#5F728B] text-[14px] md:text-base">
                <TickIcon className="text-[#0EB580]" /> No exchange fee
              </p>
            </div>
          </div>

          <div className="text-right lg:min-w-[250px]">
            <h2 className="text-[#1C2022] text-3xl md:text-[40px] font-semibold">
              {calculateMonthlyAverage()}
            </h2>
            <p className="text-[#5F728B] text-[14px] md:text-lg">
              Average per month
            </p>
            <p className="text-[#0EB580] text-[14px] md:text-lg font-medium">
              {formatExchangeBonus()} saved per year
            </p>

            <Button
              onClick={handleSwitch}
              className="rounded-btn mt-4 md:mt-6 ml-auto"
            >
              Switch Now
            </Button>
          </div>
        </div>

        <div className="pt-8 flex justify-start lg:justify-end">
          <div className="w-full lg:w-[360px] divide-y">
            <InfoRow label="Grundpreis:" value={formatBasicFeePerMonth()} />
            <InfoRow label="Arbeitspreis:" value={formatPricePerKwh()} />
            <InfoRow label="Erstlaufzeit:" value="12 Monate" />
            <InfoRow
              label="Begrenzte Preisgarantie:"
              value={formatValue(tariffData?.price_guarantee)}
            />
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-[#1C2022] text-base font-medium mb-4">
          Mehr Details
        </h3>

        <div className="border rounded-lg bg-white overflow-hidden">
          <div className="bg-[#E4EBF2] px-1 md:px-4 py-3 font-medium">
            Preis
          </div>

          <div className="p-0 md:p-4 divide-y text-[14px]">
            <InfoRow2
              label="Ihre Verbrauchszahl"
              value="für 2.500 kWh pro Jahr"
            />
            <InfoRow2
              label="Energiepreis pro kWh"
              value={formatPricePerKwhDetails()}
            />
            <InfoRow2
              label="Grundpreis"
              value={
                tariffData?.basic_fee
                  ? `${formatCurrency(
                    tariffData.basic_fee,
                    "€"
                  )} pro Jahr (${formatBasicFeePerMonth()})`
                  : "N/A"
              }
            />
            <InfoRow2
              label="Neukundenbonus"
              value={formatExchangeBonus()}
            />

            <div className="px-1 md:px-0 py-4 space-y-4">
              <div className="flex flex-col md:flex-row md:justify-between gap-2">
                <p className="text-[#5F728B] text-[14px]">
                  Geschätzte monatliche Zahlung{" "}
                  <span className="text-[14px]">
                    (monatliche Kontobelastung)
                  </span>
                </p>
                <p className="text-[#1C2022] text-[14px]">
                  ungefähr {calculateEstimatedMonthlyPayment()} pro Monat
                </p>
              </div>


              <div className="space-y-1"><p className="text-[#1C2022] text-[11px] font-medium">Hinweis:</p><p className="text-[#5F728B] text-[11px] leading-relaxed">Mit diesem Tarif zahlen Sie 12 monatliche Raten. Die geschätzte monatliche Zahlung basiert auf dem Gesamtpreis ohne Boni. Boni werden i.d.R. einmalig gutgeschrieben und nicht in die monatliche Zahlung eingerechnet.</p></div>

              {/* <p className="text-[#5F728B] text-[14px]">
                Bruttopreise gültig seit: 5. November 2025
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TariffDetails;

const InfoRow = ({ label, value }: any) => (
  <div className="flex justify-between py-3 text-[14px]">
    <span className="text-[#5F728B]">{label}</span>
    <span className="text-[#1C2022] font-medium">{value}</span>
  </div>
);

const InfoRow2 = ({ label, value }: any) => (
  <div className="flex justify-between py-3 text-[14px] px-1">
    <span className="text-[#5F728B]">{label}</span>
    <span className="text-[#1C2022]">{value}</span>
  </div>
);

const GreenEnergyBadge = ({ title }: { title: string }) => (
  <span className="flex items-center gap-1 bg-[#D2F2E7] px-2.5 py-1.5 rounded-3xl text-[#00B57A] text-[14px] shrink-0">
    <Leaf className="w-3 h-3" />
    {title}
  </span>
);
