"use client";

import TickIcon from "@/components/icons/TickIcon";
import { useGetCurrentContractQuery } from "@/redux/features/userOver/userOverviewApi";

export default function CurrentContract() {
  const {
    data: currentContract,
    isLoading: isLoadingCurrentContract,
    isError: isErrorCurrentContract,
    error: errorCurrentContract,
  } = useGetCurrentContractQuery(null);

  const data = currentContract?.data; 

  if (isLoadingCurrentContract) {
    return (
      <div className="p-5 text-sm text-gray-500">
        Loading current contract...
      </div>
    );
  }

  if (isErrorCurrentContract) {
    const message =
      (errorCurrentContract as any)?.data?.message ||
      "Something went wrong. Please try again.";
    return <div className="text-red-600/70 ">{message} !!</div>;
  }
  
  const isActive = data.status === "Active";

  return (
    <div className="space-y-8 self-stretch border border-[#E9E9EA] bg-white shadow-[0_1px_2px_0_rgba(10,13,18,0.05)] p-5 rounded-2xl">
      {/* Header */}
      <div className="flex items-center justify-between w-full">
        <div>
          <p className="text-[#1C2022] text-lg font-semibold leading-[160%]">
            Aktueller Vertrag
          </p>
          <p className="text-[#5F728B] text-base font-normal leading-[140%] tracking-[0.08px]">
            Ihr aktueller Stromtarif
          </p>
        </div>

        {isActive && (
          <div className="flex items-center gap-1 bg-[rgba(14,181,128,0.15)] pl-2 pr-3 py-1.5 rounded-[45px] text-green-500">
            <TickIcon className="w-3.5 h-3.5" />
            <span>Aktiv</span>
          </div>
        )}
      </div>

      {/* Contract Details */}
      <div className="space-y-6 self-stretch border border-[#E9E9EA] bg-[#F8FCFD] p-5 rounded-lg">
        <div className="flex items-center justify-between gap-6">
          <div>
            <p className="text-[#5F728B] text-base font-normal leading-[140%] tracking-[0.08px]">
              Vertragsbeginn
            </p>
            <p className="text-[#1C2022] text-lg font-semibold leading-[160%]">
              {data.start_date}
            </p>
          </div>

          <div className="w-33">
            <p className="text-[#5F728B] text-base font-normal leading-[140%] tracking-[0.08px]">
              Laufzeit
            </p>
            <p className="text-[#1C2022] text-lg font-semibold leading-[160%]">
              {data.duration}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between gap-6">
          <div>
            <p className="text-[#5F728B] text-base font-normal leading-[140%] tracking-[0.08px]">
              Anbieter
            </p>
            <p className="text-[#1C2022] text-2xl font-semibold leading-[130%] tracking-[0.12px]">
              {data.provider || "Unbekannter Anbieter"}
            </p>
          </div>

          <div className="w-33">
            <p className="text-[#5F728B] text-base font-normal leading-[140%] tracking-[0.08px]">
              Monatlicher Preis
            </p>
            <p className="text-[#085EC4] text-2xl font-semibold leading-[130%] tracking-[0.12px]">
              €{data.monthly_price}
            </p>
          </div>
        </div>
      </div>

      {/* CTA (optional) */}
      {/*
      <Button className="primary-btn">
        Jetzt wechseln
      </Button>
      */}
    </div>
  );
}
