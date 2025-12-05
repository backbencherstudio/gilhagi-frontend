import React from "react";

export default function StatsSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <StatCard
        title="Gesamte Einsparungen mit Switchify"
        amount="€598"
        info="Jahresstatistik"
      />
      <StatCard
        title="Aktuelle Einsparungen"
        amount="€125"
        info="Im Vergleich zum Vorjahr"
      />
      <StatCard
        title="Ihr Standort"
        amount="4702"
        info="3 Tarifänderungen durchgeführt"
      />
    </div>
  );
}

const StatCard = ({ title, amount, info }:any) => {
  return (
    <div className="flex h-[214px] flex-col justify-between items-start flex-[1_0_0] border border-[color:var(--Gray-200,#E9EAEB)] [background:#FFF] shadow-[0_1px_2px_0_rgba(10,13,18,0.05)] p-5 rounded-2xl border-solid relative">
      <p className=" font-semibold leading-6 mb-6 text-[color:var(--Text-color-Text-01,#1C2022)] ">
        {title}
      </p>

      <h3 className="self-stretch text-[color:var(--Text-color-Text-01,#1C2022)] [font-family:Geist] text-[40px] font-bold leading-[130%] mb-10">
        {amount}
      </h3>

      <p className="text-[color:var(--Text-color-Text-02,#5F728B)] [font-family:Geist] text-sm font-medium leading-[140%] tracking-[0.07px]">
        {info}
      </p>

      <img className="absolute top-0 right-0 " src="/bolt2.svg" alt="Icon" />
    </div>
  );
};
