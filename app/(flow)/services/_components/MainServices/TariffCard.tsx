"use client";

import RatingStar from "@/components/icons/RatingStar";
import { Info, Leaf } from "lucide-react";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/redux/store/hooks";

interface Props {
  tariff: any; // ← consider typing this properly later (Tariff interface)
}

export default function TariffCard({ tariff }: Props) {
  const router = useRouter();
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);

  // ── Helper formatters ────────────────────────────────────────
  const formatPrice = (value: string | number | null | undefined, decimals = 2): string => {
    if (value == null || value === "" || value === "_") return "n/a";
    const num = typeof value === "string" ? parseFloat(value) : value;
    return isNaN(num) ? "n/a" : num.toFixed(decimals);
  };

  const formatMonths = (value: string | null | undefined): string => {
    if (!value) return "n/a";
    const match = value.match(/(\d+)/);
    return match ? match[1] : "n/a";
  };

  // ── Derived / formatted values ───────────────────────────────
  const values = {
    name:          tariff?.tariff_name           ?? "n/a",
    provider:      tariff?.vendor?.provider_name ?? "n/a",
    energyPrice:   formatPrice(tariff?.price_kwh),
    basePrice:     formatPrice(tariff?.basic_fee ? Number(tariff.basic_fee) / 12 : null),
    bonus:         formatPrice(tariff?.exchange_bonus),
    rating:        tariff?.rates ? Number(tariff.rates).toFixed(1) : "n/a",
    guarantee:     formatMonths(tariff?.price_guarantee),
    duration:      formatValue(tariff?.duration, " Monate"),
    monthlyPrice:  formatPrice(tariff?.price ?? (tariff?.basic_fee ? Number(tariff.basic_fee)/12 : null)),
    savings:       tariff?.savings ? `${tariff.savings} €` : null,
    isEco:         tariff?.renewable === 1,
  };

  const handleSwitch = () => {
    const nextUrl = `/services/provider/${tariff.id}`;
    if (!isAuthenticated) {
      sessionStorage.setItem("returnTo", nextUrl);
      router.push("/register");
      return;
    }
    router.push(nextUrl);
  };

  return (
    <div className="p-6 md:p-8 rounded-[14px] border border-[#D8DEE4] bg-[#F0F6FA] flex flex-col gap-6 lg:flex-row lg:justify-between lg:items-start">
      {/* LEFT */}
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <RatingStar key={i} filled={Number(values.rating) > i} /> 
            ))}
          </div>
          <span className="text-[#5F728B] font-medium text-sm md:text-base">
            {values.rating}
          </span>

          {values.isEco && (
            <span className="ml-2 flex items-center gap-1 text-xs font-bold text-green-600 bg-green-100 px-2 py-0.5 rounded-full">
              <Leaf className="w-3 h-3" /> Ökostrom
            </span>
          )}
        </div>

        <div className="mb-4">
          <h3 className="text-[#1C2022] text-xl md:text-2xl font-semibold">
            {values.name}
          </h3>
          <p className="text-[#5F728B] text-sm mt-1">von {values.provider}</p>
        </div>

        <div className="text-[#5F728B] text-sm md:text-base space-y-2 max-w-[520px]">
          <p className="leading-relaxed">
            Arbeitspreis: {values.energyPrice} ct/kWh&nbsp; | &nbsp;
            Grundpreis: {values.basePrice} €/Monat&nbsp; | &nbsp;
            Bonus: {values.bonus} €
          </p>

          <div className="flex flex-wrap gap-x-6 gap-y-1">
            <p className="flex items-center gap-1.5">
              <Info className="w-4 h-4" />
              Preisgarantie: {values.guarantee} Monate
            </p>
            <p className="flex items-center gap-1.5">
              <Info className="w-4 h-4" />
              Laufzeit: {values.duration}
            </p>
          </div>
        </div>
      </div>

      {/* RIGHT */}
      <div className="lg:text-right flex flex-col gap-5 items-center lg:items-end w-full lg:w-auto">
        <div>
          <div className="text-[#1C2022] text-3xl md:text-[40px] font-semibold leading-tight">
            {values.monthlyPrice} €<span className="text-xl md:text-2xl">/Monat</span>
          </div>

          {values.savings && (
            <p className="text-[#5F728B] text-sm md:text-base mt-1 font-medium">
              {values.savings} jährliche Einsparungen
            </p>
          )}
        </div>

        <div className="w-full lg:w-auto min-w-[180px]">
          <button
            onClick={handleSwitch}
            className="card-btn w-full py-3 px-6 text-base font-semibold cursor-pointer"
          >
            Jetzt wechseln
          </button>

          <p className="text-[#085EC4] text-center mt-3 text-sm md:text-base font-medium underline cursor-pointer hover:text-blue-700 transition-colors">
            Tarifdetails
          </p>
        </div>
      </div>
    </div>
  );
}

// Optional tiny helper (if you want to keep using it sometimes)
function formatValue(value: any, suffix = ""): string {
  if (value == null || value === "" || value === "_") return "n/a";
  return `${value}${suffix}`;
}