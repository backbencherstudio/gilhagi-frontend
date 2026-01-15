"use client";

import RatingStar from "@/components/icons/RatingStar";
import { Info } from "lucide-react";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/redux/store/hooks";

interface Props {
  tariff: any;
}

export default function TariffCard({ tariff }: Props) {
  const router = useRouter();

  const isAuthenticated = useAppSelector(
    (state: any) => state.auth.isAuthenticated
  );

  // Extract data from API response structure
  const tariffName = tariff?.tariff_name || tariff?.name || "_";
  const energyPrice = tariff?.price_kwh
    ? parseFloat(tariff.price_kwh).toFixed(2)
    : tariff?.energyPrice || "_";
  const basePrice = tariff?.basic_fee
    ? (parseFloat(tariff.basic_fee) / 12).toFixed(2) // Convert annual to monthly
    : tariff?.basePrice || "_";
  const newCustomerBonus = tariff?.exchange_bonus
    ? parseFloat(tariff.exchange_bonus).toFixed(2)
    : tariff?.newCustomerBonus || "_";
  const instantBonus = tariff?.instantBonus || "_";

  // Extract number from price_guarantee string (e.g., "Fixed for 10 months" -> 10)
  const getGuaranteeMonths = () => {
    if (tariff?.price_guarantee) {
      const match = tariff.price_guarantee.match(/(\d+)/);
      return match ? match[1] : "_";
    }
    return tariff?.guarantee || "_";
  };
  const guarantee = getGuaranteeMonths();

  const duration = tariff?.duration || "_";
  const rating = tariff?.rating || "4.5";
  const monthlyPrice = tariff?.price || "_";
  const savings = tariff?.savings || "_";
  const providerName = tariff?.vendor?.provider_name || "_";

  const handleSwitch = () => {
    const nextUrl = `/services/provider/${tariff.id}`;

    if (!isAuthenticated) {
      sessionStorage.setItem("returnTo", nextUrl);
      return router.push("/register");
    }

    router.push(nextUrl);
  };

  return (
    <div
      className="
        p-6 md:p-8 
        rounded-[14px] border border-[#D8DEE4] bg-[#F0F6FA]
        flex flex-col gap-6
        lg:flex-row lg:justify-between lg:items-start
      "
    >
      {/* LEFT SIDE */}
      <div className="flex-1">
        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <RatingStar key={i} />
            ))}
          </div>
          <span className="text-[#5F728B] font-medium text-sm md:text-base">
            {rating}
          </span>
        </div>

        {/* Title */}
        <div className="mb-3">
          <p className="text-[#1C2022] text-xl md:text-2xl font-semibold">
            {tariffName}
          </p>
          {providerName !== "_" && (
            <p className="text-[#5F728B] text-sm mt-1">von {providerName}</p>
          )}
        </div>

        {/* Info */}
        <div className="text-[#5F728B] text-sm md:text-base space-y-2 max-w-[500px]">
          <p className="leading-relaxed">
            Arbeitspreis: {energyPrice} ct/kWh | Grundpreis: {basePrice} €/Monat
            | Neukundenbonus: {newCustomerBonus} €{" "}
            {instantBonus !== "_" && `| Sofortbonus: ${instantBonus} €`}
          </p>

          {guarantee !== "_" && (
            <p className="flex gap-1 items-center">
              <Info className="w-4 h-4" />
              Preisgarantie: {guarantee} Monate
            </p>
          )}
          {duration !== "_" && (
            <p className="flex gap-1 items-center">
              <Info className="w-4 h-4" />
              Mindestlaufzeit: {duration} Monate
            </p>
          )}
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div
        className="
          lg:text-right 
          flex flex-col gap-4 
          items-center lg:items-end
          w-full lg:w-auto
        "
      >
        <div>
          {monthlyPrice !== "_" ? (
            <h2 className="text-[#1C2022] text-3xl md:text-[40px] font-semibold">
              {monthlyPrice} €/Monat
            </h2>
          ) : (
            <h2 className="text-[#1C2022] text-3xl md:text-[40px] font-semibold">
              {basePrice !== "_" ? `${basePrice} €/Monat` : "_"}
            </h2>
          )}
          {savings !== "_" && (
            <p className="text-[#5F728B] text-sm md:text-lg font-medium">
              {savings} € jährliche Einsparungen
            </p>
          )}
        </div>

        <div className="w-full lg:w-auto">
          <button
            onClick={handleSwitch}
            className="card-btn w-full cursor-pointer"
          >
            Jetzt wechseln
          </button>
          <p className="text-[#085EC4] text-center mt-3 text-sm md:text-lg font-medium underline cursor-pointer">
            Tarifdetails
          </p>
        </div>
      </div>
    </div>
  );
}
// API has but not displayed: vendor_id, renewable, status, vendor.service_areas
// Component expects but API doesn't provide: instantBonus, duration, rating, price, savings
// Recommendations:
// Display vendor.service_areas if relevant
// Show a renewable energy indicator if renewable === 1
// Consider showing status if needed for active/inactive
// The missing duration, rating, price, and savings may need to come from another endpoint or be calculated