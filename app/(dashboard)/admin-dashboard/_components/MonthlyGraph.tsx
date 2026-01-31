"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { Button } from "@/components/ui/button";
import { useMonthlySwitchedStatsQuery } from "@/redux/features/adminOverview/AdminOverviewApi";
type MonthlyData = {
  month: string;
  switches: number;
};

type ApiMonthlyStats = {
  labels: string[];
  data: number[];
};

export function convertMonthlyApiToChartData(
  api: ApiMonthlyStats
): MonthlyData[] {
  return api.labels.map((month, index) => ({
    month,
    switches: api.data[index] ?? 0,
  }));
}

const data:MonthlyData[] = [
  { month: "Jan", switches: 98 },
  { month: "Feb", switches: 65 },
  { month: "Mar", switches: 98 },
  { month: "Apr", switches: 128 },
  { month: "May", switches: 198 },
  { month: "Jun", switches: 128 },
  { month: "Jul", switches: 168 },
  { month: "Aug", switches: 228 },
  { month: "Oct", switches: 108 },
  { month: "Sep", switches: 278 },
  { month: "Nov", switches: 158 },
  { month: "Dec", switches: 218 },
];

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{
    value: number;
    name: string;
  }>;
  label?: string;
}

const CustomTooltip = ({ active, payload }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border border-blue-300 rounded-lg p-3 shadow-md">
        <p className="text-blue-600 font-semibold text-sm">
          {payload[0].value} Customers
        </p>
        <p className="text-gray-500 text-xs">Switched </p>
      </div>
    );
  }
  return null;
};

export function MonthlyChart() {
  const currentMonth = new Date().toLocaleString('default', { month: 'long' });
  // console.log("currentMonth", currentMonth.slice(0, 3));

  const { data: monthlySwitchedStats, isLoading: isLoadingMonthlySwitchedStats, isError: isErrorMonthlySwitchedStats } = useMonthlySwitchedStatsQuery(null);
  // console.log("monthlySwitchedStats", monthlySwitchedStats);
  const chartData: MonthlyData[] =
  monthlySwitchedStats
    ? convertMonthlyApiToChartData(monthlySwitchedStats)
    : [];
  // console.log("chartData", chartData);
  return (
    <div className="w-full bg-[] rounded-lg border border-gray-200 p-5">
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div>
          <h2 className="text-[#1C2022]  text-lg font-semibold leading-[160%] mb-1">
            Monthly Switches
          </h2>
          <p className="text-[#5F728B]  text-base font-normal leading-[140%] tracking-[0.08px]">
            Your current electricity tariff
          </p>
        </div>
      </div>

      {/* Chart */}
      <div className="bg-[#F8FCFD] rounded-2xl ">
        <div className="w-full h-96">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={chartData}
              margin={{ top: 40, right: 40, left: 10, bottom: 40 }}
            >
              <CartesianGrid
                strokeDasharray="0"
                stroke="#f0f0f0"
                vertical={false}
              />
              <XAxis
                dataKey="month"
                stroke="#999"
                style={{ fontSize: "14px" }}
              />
              <YAxis
                stroke="#999"
                style={{ fontSize: "14px" }}
                // domain={[0, 5]}
                domain={[0, Math.max(...chartData.map(entry => entry.switches))+5]}
              />
              <Tooltip
              
                content={<CustomTooltip />}
                cursor={{ fill: "transparent" }}
              />
              <Bar
                dataKey="switches"
                radius={[4, 4, 0, 0]}
                // onClick={(data:any) => {
                //   if (data?.month === "May") {
                //     console.log("May clicked:", data);
                //   }
                // }}
              >
                {chartData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={entry.month == currentMonth ? "#0B5ED7" : "#0B5ED77A"}
                    
                   
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
