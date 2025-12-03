import React from "react";
import { FileText, User, Clock, CheckCircle } from "lucide-react"; // Updated icons based on the image

// Color mapping for different types of stats
const colorMap: any = {
  activeContracts: "bg-blue-100 text-blue-500",
  pendingChanges: "bg-purple-100 text-purple-500",
  upcomingChanges: "bg-orange-100 text-orange-500",
  completedSwitches: "bg-green-100 text-green-500",
};

const StatCard = ({ icon, color, title, value }: any) => {
  // Dynamically map the color class
  const cardColor = colorMap[color] || "bg-gray-100 text-gray-500"; // Default gray

  return (
    <div className="flex items-center gap-8 border border-[#E9EAEB] bg-white shadow-[0_1px_2px_0_rgba(10,13,18,0.05)] p-6 rounded-2xl border-solid">
      <div className="flex flex-col items-start gap-8">
        {/* Icon box with dynamic background color */}
        <div className={`p-4 rounded-full ${cardColor.split(" ")[0]}`}>
          {icon}
        </div>
        {/* Text content */}
        <div className="space-y-2">
          <p className="text-[#5F728B] mb-2 text-sm font-medium leading-[140%] tracking-[0.07px]">
            {title}
          </p>
          {/* Explicit text color */}
          <p className="self-stretch text-[#1C2022] text-[40px] font-bold leading-[130%]">
            {value}
          </p>
        </div>
      </div>
    </div>
  );
};

export default function StatsCards() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-5">
      {/* Stats Cards */}
      <StatCard
        icon={<FileText className="w-10 h-10 text-blue-500" />}
        color="activeContracts"
        title="Aktive Verträge"
        value="1.923"
      />
      <StatCard
        icon={<User className="w-10 h-10 text-purple-500" />}
        color="pendingChanges"
        title="Warten auf Bearbeitung"
        value="156"
      />
      <StatCard
        icon={<Clock className="w-10 h-10 text-orange-500" />}
        color="upcomingChanges"
        title="Läuft diesen Monat ab"
        value="45"
      />
      <StatCard
        icon={<CheckCircle className="w-10 h-10 text-green-500" />}
        color="completedSwitches"
        title="Abgeschlossene Wechsel"
        value="847"
      />
    </section>
  );
}
