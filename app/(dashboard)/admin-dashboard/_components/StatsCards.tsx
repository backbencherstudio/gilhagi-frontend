"use client";
import { User, CheckCircle, Clock, ChartArea } from "lucide-react"; // Import Lucide icons
import { useGetAdminOverviewStatsQuery } from "@/redux/features/adminOverview/AdminOverviewApi";

// Color mapping for different types of stats
const colorMap: any = {
  clients: "bg-blue-100 text-blue-500",
  activeContracts: "bg-green-100 text-green-500",
  pendingChanges: "bg-orange-100 text-orange-100",
};

const StatCard = ({ icon, color, title, value=0, label, labelIcon }: any) => {
  // Dynamically map the color class
  const cardColor = colorMap[color] || "bg-gray-100 text-gray-500"; // Default gray

  return (
    <div className="flex items-center gap-8 border border-[#E9EAEB] bg-white shadow-[0_1px_2px_0_rgba(10,13,18,0.05)] p-6 rounded-2xl border-solid">
      <div className="flex items-center gap-4">
        {/* Icon box with dynamic background color */}
        <div className={`p-4 rounded-full ${cardColor.split(" ")[0]}`}>
          {icon}
        </div>
        {/* Text content */}
        <div className="space-y-2">
          <p className=" text-[#5F728B]  text-sm font-medium leading-[140%] tracking-[0.07px]">
            {title}
          </p>
          {/* Explicit text color */}
          <p className="self-stretch text-[#1C2022]  text-[40px] font-bold leading-[130%]">
            {value}
          </p>
          {/* Explicit text color */}
          <p className="text-[#5F728B]  text-sm font-normal leading-[130%] tracking-[0.07px] flex items-center gap-1">
            <span className="text-green-600/80">{labelIcon}</span>
            {label}
          </p>
          {/* Explicit text color */}
        </div>
      </div>
    </div>
  );
};



export default function   StatsCards() {
  const { data: adminOverviewStats, isLoading: isLoadingAdminOverviewStats, isError: isErrorAdminOverviewStats } = useGetAdminOverviewStatsQuery(null);


  console.log("adminOverviewStats", adminOverviewStats);

  const { Active_contracts, Outstanding_bills, Total_number_of_customers } = adminOverviewStats || {};
 

  if (isLoadingAdminOverviewStats) {
    return <div>Loading...</div>;
  }

  if (isErrorAdminOverviewStats) {
    return <div>Error loading admin overview stats</div>;
  }
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
      {/* Stats Cards */}
      <StatCard
        icon={<User className="w-10 h-10 text-blue-500" />}
        color="clients"
        title="Gesamtzahl der Kunden"
        value={Total_number_of_customers}
        label="+in diesem Monat"
        labelIcon = {<ChartArea className="w-4 h-4" />}
      />
      <StatCard
        icon={<CheckCircle className="w-10 h-10 text-green-500" />}
        color="activeContracts"
        title="Aktive Verträge"
        value={Active_contracts}
        label="in diesem Monat"
      />
      <StatCard
        icon={<Clock className="w-10 h-10 text-red-500" />}
        color="pendingChanges"
        title="Ausstehende Wechsel"
        value={Outstanding_bills }
        label="heute abgeschlossen"
      />
    </section>
  );
}
