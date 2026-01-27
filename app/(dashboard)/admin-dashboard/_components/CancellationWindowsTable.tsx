"use client";

import { useMemo, useState } from "react";
import { DataTable, StatusBadge } from "@/components/dashoboard/DataTable";
import TableTitle from "@/components/dashoboard/TableTitle";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useUpcomingContractsStatsQuery } from "@/redux/features/adminOverview/AdminOverviewApi";

type CancellationRow = {
  contractId: string;
  customer: string;
  provider: string;
  tariff: string;
  windowStart: string;
  windowEnd: string;
  renewalDate?: string;
  status: "now" | "soon" | "deadline_soon" | "upcoming";
};

type FilterPreset = "all" | "now" | "7" | "14" | "30";

const columns = [
  { key: "customer", header: "Customer" },
  { key: "provider", header: "Provider/Contract" },
  { key: "tariff", header: "Tariff" },
  { key: "windowStart", header: "Window Start" },
  { key: "windowEnd", header: "Window End" },
  {
    key: "status",
    header: "Status",
    render: (value: string) => (
      <StatusBadge
        status={
          value === "now"
            ? "active"
            : value === "deadline_soon"
            ? "pending"
            : "open"
        }
      />
    ),
  },
];

export default function CancellationWindowsTable() {
  const router = useRouter();
  const [filter, setFilter] = useState<FilterPreset>("all");

  const {
    data: upcomingContractsStats,
    isLoading,
    isError,
  } = useUpcomingContractsStatsQuery(filter);

  /**
   * ✅ Transform backend data → table rows
   */
  const rows: CancellationRow[] = useMemo(() => {
    if (!upcomingContractsStats?.data) return [];

    return upcomingContractsStats.data.map((item: any) => ({
      contractId: String(item.id),
      customer: `${item.first_name} ${item.last_name}`,
      provider: item.vendor?.name ?? "N/A",
      tariff: item.tariff?.tariff_name ?? "N/A",
      windowStart: item.window_start,
      windowEnd: item.window_end,
      renewalDate: item.renewal_date,
      status: item.status === "approved" ? "upcoming" : "upcoming", // backend-driven
    }));
  }, [upcomingContractsStats]);

  const handleView = (row: Record<string, unknown>) => {
    const id = String(row.contractId || "");
    if (id) router.push(`/admin-dashboard/contacts/USR-${id}`);
  };

  const handleEdit = (row: Record<string, unknown>) => {
    const id = String(row.contractId || "");
    if (id) router.push(`/admin-dashboard/contacts/${id}`);
  };


  if (isError) {
    return (
      <div className="p-6 text-sm text-red-500">
        Failed to load upcoming contracts
      </div>
    );
  }

  return (
    <div className="mt-8">
      {/* Header */}
      <div className="flex flex-col items-start md:flex-row md:justify-between mb-6 gap-4">
        <TableTitle
          title="Bevorstehende Fristen / Stornierungszeiträume"
          subtitle="Vertragskündigungsfristen verwalten und automatische Verlängerungen vermeiden"
        />

        {/* Backend-driven filters */}
        <div className="flex items-center gap-2.5">
          <Button
            variant={filter === "all" ? "default" : "outline"}
            onClick={() => setFilter("all")}
          >
            All
          </Button>
          {/* <Button
            variant={filter === "now" ? "default" : "outline"}
            onClick={() => setFilter("now")}
          >
            Now
          </Button> */}
          <Button
            variant={filter === "7" ? "default" : "outline"}
            onClick={() => setFilter("7")}
          >
            7 days
          </Button>
          <Button
            variant={filter === "14" ? "default" : "outline"}
            onClick={() => setFilter("14")}
          >
            14 days
          </Button>
          <Button
            variant={filter === "30" ? "default" : "outline"}
            onClick={() => setFilter("30")}
          >
            30 days
          </Button>
        </div>
      </div>

      {/* Table */}
      <DataTable
        loading={isLoading}
        isError={isError}
        columns={columns}
        data={rows}
        onView={handleView}
        
        // onEdit={handleEdit}
      />
    </div>
  );
}
