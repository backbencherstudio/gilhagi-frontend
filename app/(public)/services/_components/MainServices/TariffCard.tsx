"use client"

import Leaf from "@/components/icons/LeafIcon";
import RatingStar from "@/components/icons/RatingStar";
import { Info  } from "lucide-react";



interface Props {
  tariff: any;
}

export default function TariffCard({ tariff }: Props) {

    console.log("tar", tariff)
  return (
    <div className="p-8 rounded-[14px] border border-[#D8DEE4] bg-[#F0F6FA] flex justify-between">
      {/* LEFT */}
      <div>
        {/* rating */}
        <div className="flex gap-2.5 mb-3">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <RatingStar key={i} />
            ))}
          </div>
          <span className="text-[#5F728B] font-medium">{tariff.rating}</span>
        </div>

        {/* title + badge */}
        <div className="flex gap-4 mb-2">
          <p className="text-[#1C2022] text-2xl font-semibold">
            {tariff.name}
          </p>
          <div className="flex items-center gap-1.5 border px-3 py-1 rounded-3xl border-[#00B57A]">
            <Leaf />
            <span className="text-[#00B57A] text-xs font-medium">
              Grüne Energie
            </span>
          </div>
        </div>

        {/* info */}
        <div className="max-w-[494px]">
          <p className="text-[#5F728B] text-lg mb-4">
            Arbeitspreis: {tariff.energyPrice} ct/kWh |
            Grundpreis: {tariff.basePrice} €/Monat |
            Neukundenbonus: {tariff.newCustomerBonus} € |
            Sofortbonus: {tariff.instantBonus} €
          </p>

          <div className="text-[#5F728B]">
            <p className="flex gap-1 items-center">
              <Info className="w-[18px]" />
              Preisgarantie: {tariff.guarantee} Monate
            </p>
            <p className="flex gap-1 items-center">
              <Info className="w-[18px]" />
              Mindestlaufzeit: {tariff.duration} Monate
            </p>
          </div>
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex flex-col justify-between text-right">
        <div>
          <h2 className="text-[#1C2022] text-[40px] font-semibold">
            {tariff.price} €/Monat
          </h2>
          <p className="text-[#5F728B] text-lg font-medium">
            {tariff.savings} € jährliche Einsparungen
          </p>
        </div>

        <div>
          <button className="card-btn w-full">Jetzt wechseln</button>
          <p className="text-[#085EC4] text-center mt-4 text-lg font-medium underline">
            Tarifdetails
          </p>
        </div>
      </div>
    </div>
  );
}
