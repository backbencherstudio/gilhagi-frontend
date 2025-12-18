import React from "react";

interface StatusIndicatorProps {
  isBestTariff: boolean;
}

const StatusIndicator = ({ isBestTariff }: StatusIndicatorProps) => {
  if (isBestTariff) {
    return (
      <div className="inline-flex items-center gap-2 px-3 py-2 bg-[#ECFDF3] rounded-lg border border-[#ABEFC6]">
        <div className="w-2 h-2 rounded-full bg-[#17B26A] shrink-0"></div>
        <span className="text-sm font-medium text-[#085EC4]">
          Sie sind aktuell beim günstigsten Anbieter.
        </span>
      </div>
    );
  }

  return (
    <div className="inline-flex items-center gap-2 px-3 py-2 bg-[#FFFAEB] rounded-lg border border-[#FEDF89]">
      <div className="w-2 h-2 rounded-full bg-[#F79009] shrink-0"></div>
      <span className="text-sm font-medium text-[#085EC4]">
        Sie haben Sparpotenzial - ein Wechsel könnte sich lohnen.
      </span>
    </div>
  );
};

export default function StatsSection() {
  // This would typically come from your data/API
  // For now, you can set it based on your logic
  const isBestTariff = true; // Change to true if user is on cheapest tariff

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <StatCard
        title="Gesamte Einsparungen mit Wechselsicher"
        amount="€598"
      />
      
      {/* Status Indicator Card */}
      <div className="flex h-[214px] flex-col justify-between items-start flex-[1_0_0] border border-[color:var(--Gray-200,#E9EAEB)] [background:#FFF] shadow-[0_1px_2px_0_rgba(10,13,18,0.05)] p-5 rounded-2xl border-solid relative">
        <p className="font-semibold leading-6 text-[color:var(--Text-color-Text-01,#1C2022)]">
          Ihr Tarifstatus
        </p>

        <div className="flex-1 flex items-center justify-center w-full">
          <StatusIndicator isBestTariff={isBestTariff} />
        </div>

        <p className="text-[color:var(--Text-color-Text-02,#5F728B)] [font-family:Geist] text-sm font-medium leading-[140%] tracking-[0.07px]">
          {isBestTariff 
            ? "Kein weiteres Sparpotenzial verfügbar" 
            : "Verglichen mit verfügbaren Tarifen in Ihrer Region"
          }
        </p>

        <img className="absolute top-0 right-0" src="/bolt2.svg" alt="Icon" />
      </div>

      {/* <StatCard
        title="Ihr Standort"
        amount="4702"
        info="3 Tarifänderungen durchgeführt"
      /> */}
    </div>
  );
}

const StatCard = ({ title, amount, info }: any) => {
  return (
    <div className="flex h-[214px] flex-col justify-between items-start flex-[1_0_0] border border-[color:var(--Gray-200,#E9EAEB)] [background:#FFF] shadow-[0_1px_2px_0_rgba(10,13,18,0.05)] p-5 rounded-2xl border-solid relative">
      <p className="font-semibold leading-6 mb-6 text-[color:var(--Text-color-Text-01,#1C2022)]">
        {title}
      </p>

      <h3 className="self-stretch text-[color:var(--Text-color-Text-01,#1C2022)] [font-family:Geist] text-[40px] font-bold leading-[130%] mb-10">
        {amount}
      </h3>

      {info && (
        <p className="text-[color:var(--Text-color-Text-02,#5F728B)] [font-family:Geist] text-sm font-medium leading-[140%] tracking-[0.07px]">
          {info}
        </p>
      )}

      <img className="absolute top-0 right-0" src="/bolt2.svg" alt="Icon" />
    </div>
  );
};