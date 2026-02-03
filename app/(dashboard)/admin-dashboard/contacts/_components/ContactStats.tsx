"use client";


import React from "react";
import { FileText, User, CheckCircle } from "lucide-react";
import { useGetAdminOrderOverviewQuery, useGetAdminOrderStatsQuery } from "@/redux/features/adminOverview/AdminOverviewApi";

// Color mapping
const colorMap: Record<string, string> = {
  activeContracts: "bg-blue-100 text-blue-500",
  pendingChanges: "bg-purple-100 text-purple-500",
  completedSwitches: "bg-green-100 text-green-500",
};

interface StatCardProps {
  icon: React.ReactNode;
  color: keyof typeof colorMap;
  title: string;
  value: string;
}

const StatCard: React.FC<StatCardProps> = ({
  icon,
  color,
  title,
  value,
}) => {
  // Extract background color safely
  const cardColor = colorMap[color] ?? "bg-gray-100 text-gray-500";
  const bgColorClass = cardColor.split(" ")[0]; // Gets 'bg-blue-100', etc.

  const { data: adminOrderOverview, isLoading: isLoadingAdminOrderOverview, isError: isErrorAdminOrderOverview } = useGetAdminOrderOverviewQuery(null);

  // console.log("adminOrderOverview", adminOrderOverview);

  return (
    <div className="flex items-center border border-[#E9EAEB] bg-white shadow-[0_1px_2px_0_rgba(10,13,18,0.05)] p-4 sm:p-6 rounded-2xl">
      <div className="flex flex-col gap-6 sm:gap-8 w-full">
        {/* Icon - Added 'w-fit' to prevent stretching */}
        <div
          className={`p-3 sm:p-4 rounded-full w-fit ${bgColorClass}`}
        >
          {icon}
        </div>

        {/* Text */}
        <div className="space-y-1 sm:space-y-2">
          <p className="text-[#5F728B] text-xs sm:text-sm font-medium leading-[140%] tracking-[0.07px]">
            {title}
          </p>
          <p className="text-[#1C2022] font-bold leading-[130%] text-2xl sm:text-3xl lg:text-[40px]">
            {value}
          </p>
        </div>
      </div>
    </div>
  );
};
// {
//   "Active Contracts": 3,
//   "Waiting for processing": 3,
//   "Completed bills of exchange": 3
// // }
export default function StatsCards() {

  const { data: adminOrderStats, isLoading: isLoadingAdminOrderStats, isError: isErrorAdminOrderStats } = useGetAdminOrderStatsQuery(null);

  const { "Active Contracts": active_contracts, "Waiting for processing": pending_changes, "Completed bills of exchange": completed_switches } = adminOrderStats || {};

  
  if (isLoadingAdminOrderStats) {
    return <div>Loading...</div>;
  }
  if (isErrorAdminOrderStats) {
    return <div>Error loading admin order stats</div>;
  }
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-5">
      <StatCard
        icon={<FileText className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500" />}
        color="activeContracts"
        title="Aktive Verträge"
        value={active_contracts}
      />
      <StatCard
        icon={<User className="w-6 h-6 sm:w-8 sm:h-8 text-purple-500" />}
        color="pendingChanges"
        title="Warten auf Bearbeitung"
        value={pending_changes}
      />
      <StatCard
        icon={<CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-green-500" />}
        color="completedSwitches"
        title="Abgeschlossene Wechsel"
        value={completed_switches}
      />
    </section>
  );
}