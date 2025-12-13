"use client";

import Leaf from "@/components/icons/LeafIcon";
import RatingStar from "@/components/icons/RatingStar";
import { Info } from "lucide-react";
import { useRouter } from "next/navigation";

interface Props {
  tariff: any;
}

export default function TariffCard({ tariff }: Props) {
  const router = useRouter();
  const isAuthenticated = true;

  const handleSwitch = () => {
    if (!isAuthenticated) {
      return router.push("/register");
    }
    router.push(`/services/provider/${tariff.id}`);
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
            {tariff.rating}
          </span>
        </div>

        {/* Title */}
        <div className="mb-3">
          <p className="text-[#1C2022] text-xl md:text-2xl font-semibold">
            {tariff.name}
          </p>
        </div>

        {/* Info */}
        <div className="text-[#5F728B] text-sm md:text-base space-y-2 max-w-[500px]">
          <p className="leading-relaxed">
            Arbeitspreis: {tariff.energyPrice} ct/kWh | Grundpreis:{" "}
            {tariff.basePrice} €/Monat | Neukundenbonus:{" "}
            {tariff.newCustomerBonus} € | Sofortbonus: {tariff.instantBonus} €
          </p>

          <p className="flex gap-1 items-center">
            <Info className="w-4 h-4" />
            Preisgarantie: {tariff.guarantee} Monate
          </p>
          <p className="flex gap-1 items-center">
            <Info className="w-4 h-4" />
            Mindestlaufzeit: {tariff.duration} Monate
          </p>
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
          <h2 className="text-[#1C2022] text-3xl md:text-[40px] font-semibold">
            {tariff.price} €/Monat
          </h2>
          <p className="text-[#5F728B] text-sm md:text-lg font-medium">
            {tariff.savings} € jährliche Einsparungen
          </p>
        </div>

        <div className="w-full lg:w-auto">
          <button onClick={handleSwitch} className="card-btn w-full">
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
