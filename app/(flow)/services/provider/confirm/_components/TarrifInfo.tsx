import React from "react";

export default function TarrifInfo() {
  return (
    <div className="rounded-2xl border border-[#E2E8EE] p-6">
      <div className="flex items-center justify-between">
        <div>
          <img className=" w-[121px] h-8 " src="/company/com_6.svg" alt="" />
        </div>

        <div className="text-right">
          <h2 className="text-[#1C2022]  text-xl font-semibold leading-[130%] tracking-[0.1px]">
            50,60 €
          </h2>
          <p className="text-[#5F728B]  text-xs font-normal leading-[132%] tracking-[0.06px]">
            Durchschnitt pro Monat
          </p>
        </div>
      </div>
      <h4 className="text-[#1C2022]  text-lg font-semibold leading-[160%]">
        PBNZE Flow12
      </h4>
    </div>
  );
}
