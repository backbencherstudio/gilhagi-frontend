"use client";

import { ChevronDown } from "lucide-react";
import React, { useState } from "react";
import ElectricityGauge from "./ElectricityGauge";
const months = [
  "Januar",
  "Februar",
  "März",
  "April",
  "Mai",
  "Juni",
  "Juli",
  "August",
  "September",
  "Oktober",
  "November",
  "Dezember",
];
export default function MonthlyConsumption() {
  const [selectedMonth, setSelectedMonth] = useState("Januar");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  return (
    <div className="section-div">
      {/* title and filter */}
      <div className="flex flex-wrap gap-2 items-center justify-between">
        <h3>Monthly Consumption</h3>

        {/* Month Dropdown */}
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-background hover:bg-secondary transition-colors w-30"
          >
            {selectedMonth}
            <ChevronDown
              className={` transition-transform duration-300 ${
                dropdownOpen ? "" : "rotate-180"
              }`}
              size={18}
            />
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 top-full mt-2 w-35 bg-card border border-border rounded-lg shadow-lg z-10">
              {months.map((month) => (
                <button
                  key={month}
                  onClick={() => {
                    setSelectedMonth(month);
                    setDropdownOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2 hover:bg-secondary transition-colors ${
                    month === selectedMonth ? "bg-muted" : ""
                  }`}
                >
                  {month}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* chart */}
      <div className="flex items-center justify-center">
        <ElectricityGauge />
      </div>
      {/* 2 cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
        <UsageCard
          title="Stromverbrauch"
          usage="308 kWh"
          subtitle="Diesen Monat"
        />
        <UsageCard title="Stromkosten" usage="€38,00" subtitle="Diesen Monat" />
      </div>

      {/* below cards */}
      <div className=" border border-[#E9E9EA] [background:var(--Background-White,#FFF)] shadow-[0_1px_2px_0_rgba(10,13,18,0.05)] p-5 rounded-lg border-solid">
        <h5 className="self-stretch text-[#1C2022]  text-xl font-medium leading-[130%] tracking-[0.1px] mb-6">
          Total Expenses
        </h5>
        <h3 className="text-[#0EB580]  text-[32px] font-medium leading-[130%] mb-3">
          115 kWh lower
        </h3>
        <p className="text-[#5F728B]  text-sm font-medium leading-[140%] tracking-[0.07px]">
          This month comared to April
        </p>
      </div>
    </div>
  );
}

// ======================= components =================

interface UsageCardProps {
  title: string;
  usage: string;
  subtitle: string;
}

const UsageCard: React.FC<UsageCardProps> = ({ title, usage, subtitle }) => {
  return (
    <div className="flex flex-col items-start gap-6 flex-[1_0_0] border border-[#E9E9EA] [background:var(--BG-soft,#F8FCFD)] shadow-[0_1px_2px_0_rgba(10,13,18,0.05)] p-5 rounded-lg border-solid">
      <p className="text-[#1C2022]  text-base font-semibold leading-[160%] tracking-[0.08px]">
        {title}
      </p>
      <p className="text-[#1C2022]  text-2xl font-semibold leading-[100%] tracking-[0.12px]">
        {usage}
      </p>
      <p className="text-[#5F728B]  text-sm font-medium leading-[140%] tracking-[0.07px]">
        {subtitle}
      </p>
    </div>
  );
};
