import TickIcon from "@/components/icons/TickIcon";
import { Button } from "@/components/ui/button";
import React from "react";

export default function CurrentContract() {
  return (
    <div className="space-y-8 self-stretch border border-[color:var(--Gray-Black-50,#E9E9EA)] [background:#FFF] shadow-[0_1px_2px_0_rgba(10,13,18,0.05)] p-5 rounded-2xl border-solid ">
      {/* first div */}
      <div className=" flex items-center justify-between w-full">
        <div>
          <p className="self-stretch text-[color:var(--Text-color-Text-01,#1C2022)] [font-family:Geist] text-lg font-semibold leading-[160%]">
            Aktueller Vertrag
          </p>
          <p className="text-[color:var(--Text-color-Text-02,#5F728B)] [font-family:Geist] text-base font-normal leading-[140%] tracking-[0.08px]">
            Ihr aktueller Stromtarif
          </p>
        </div>

        <div className="flex justify-center items-center gap-1 [background:rgba(14,181,128,0.15)] pl-2 pr-3 py-1.5 rounded-[45px] text-green-500">
          <TickIcon className="w-3.5 h-3.5" />
          <span> Aktiv</span>
        </div>
      </div>

      {/* second div */}
      <div className=" space-y-6 self-stretch border border-[color:var(--Gray-Black-50,#E9E9EA)] [background:var(--BG-soft,#F8FCFD)] p-5 rounded-lg border-solid ">
        <div className="flex items-center justify-between gap-6">
          <div>
            <p className="text-[color:var(--Text-color-Text-02,#5F728B)] [font-family:Geist] text-base font-normal leading-[140%] tracking-[0.08px]">
              Vertragsbeginn
            </p>
            <p className="text-[color:var(--Text-color-Text-01,#1C2022)] [font-family:Geist] text-lg font-semibold leading-[160%]">
              01.02.2025
            </p>
          </div>

          <div className="w-33 ">
            <p className="text-[color:var(--Text-color-Text-02,#5F728B)] [font-family:Geist] text-base font-normal leading-[140%] tracking-[0.08px]">
              Laufzeit
            </p>
            <p className="text-[color:var(--Text-color-Text-01,#1C2022)] [font-family:Geist] text-lg font-semibold leading-[160%]">
              12+ Monate
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between gap-6 ">
          <div>
            <p className="text-[color:var(--Text-color-Text-02,#5F728B)] [font-family:Geist] text-base font-normal leading-[140%] tracking-[0.08px]">
              Anbieter
            </p>
            <p className="text-[color:var(--Text-color-Text-01,#1C2022)] [font-family:Geist] text-2xl font-semibold leading-[130%] tracking-[0.12px]">
              Wien Energie
            </p>
          </div>

          <div className="w-33">
            <p className="text-[color:var(--Text-color-Text-02,#5F728B)] [font-family:Geist] text-base font-normal leading-[140%] tracking-[0.08px]">
              Monatlicher Preis
            </p>
            <p className="text-[color:var(--Primary,#085EC4)] [font-family:Geist] text-2xl font-semibold leading-[130%] tracking-[0.12px]">
              €85
            </p>
          </div>
        </div>
      </div>

      {/* 3rd div */}
      <Button className="primary-btn">
        Jetzt wechseln
      </Button>
    </div>
  );
}
