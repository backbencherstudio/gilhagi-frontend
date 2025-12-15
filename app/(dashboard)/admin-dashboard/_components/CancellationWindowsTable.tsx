"use client";

import { useMemo, useState } from "react";
import { DataTable, StatusBadge } from "@/components/dashoboard/DataTable";
import TableTitle from "@/components/dashoboard/TableTitle";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

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

const sampleData: CancellationRow[] = [
  {
    contractId: "C-1001",
    customer: "Max Müller",
    provider: "Vattenfall",
    tariff: "Grün Basis",
    windowStart: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000)
      .toISOString()
      .slice(0, 10),
    windowEnd: new Date(Date.now() + 4 * 24 * 60 * 60 * 1000)
      .toISOString()
      .slice(0, 10),
    renewalDate: new Date(Date.now() + 34 * 24 * 60 * 60 * 1000)
      .toISOString()
      .slice(0, 10),
    status: "now",
  },
  {
    contractId: "C-1002",
    customer: "Anna Schmidt",
    provider: "Wien Energie",
    tariff: "Öko Fair",
    windowStart: new Date(Date.now() + 6 * 24 * 60 * 60 * 1000)
      .toISOString()
      .slice(0, 10),
    windowEnd: new Date(Date.now() + 20 * 24 * 60 * 60 * 1000)
      .toISOString()
      .slice(0, 10),
    renewalDate: new Date(Date.now() + 50 * 24 * 60 * 60 * 1000)
      .toISOString()
      .slice(0, 10),
    status: "soon",
  },
  {
    contractId: "C-1003",
    customer: "Peter Weber",
    provider: "NaturEnergie",
    tariff: "Max",
    windowStart: new Date(Date.now() - 12 * 24 * 60 * 60 * 1000)
      .toISOString()
      .slice(0, 10),
    windowEnd: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000)
      .toISOString()
      .slice(0, 10),
    renewalDate: new Date(Date.now() + 32 * 24 * 60 * 60 * 1000)
      .toISOString()
      .slice(0, 10),
    status: "deadline_soon",
  },
  {
    contractId: "C-1004",
    customer: "Theresa Webb",
    provider: "EcoPower",
    tariff: "Green Basic",
    windowStart: new Date(Date.now() + 20 * 24 * 60 * 60 * 1000)
      .toISOString()
      .slice(0, 10),
    windowEnd: new Date(Date.now() + 40 * 24 * 60 * 60 * 1000)
      .toISOString()
      .slice(0, 10),
    renewalDate: new Date(Date.now() + 70 * 24 * 60 * 60 * 1000)
      .toISOString()
      .slice(0, 10),
    status: "upcoming",
  },
];

type FilterPreset = "all" | "now" | "7" | "14" | "30";

export default function CancellationWindowsTable() {
  const router = useRouter();
  const [filter, setFilter] = useState<FilterPreset>("all");

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const enriched = useMemo(() => {
    return sampleData
      .map((row) => {
        const start = new Date(row.windowStart);
        const end = new Date(row.windowEnd);
        const daysToStart = Math.ceil(
          (start.getTime() - today.getTime()) / (24 * 60 * 60 * 1000)
        );
        const daysToEnd = Math.ceil(
          (end.getTime() - today.getTime()) / (24 * 60 * 60 * 1000)
        );
        const isNow = today >= start && today <= end;
        const soon7 = !isNow && daysToStart <= 7 && daysToStart >= 0;
        const soon14 = !isNow && daysToStart <= 14 && daysToStart >= 0;
        const soon30 = !isNow && daysToStart <= 30 && daysToStart >= 0;
        const deadlineSoon = daysToEnd <= 7 && daysToEnd >= 0;
        let status: CancellationRow["status"] = row.status;
        if (isNow) status = "now";
        else if (deadlineSoon) status = "deadline_soon";
        else if (soon7 || soon14 || soon30) status = "soon";
        return {
          ...row,
          status,
          daysToStart,
          daysToEnd,
          sortKey: end.getTime(),
        } as any;
      })
      .sort((a: any, b: any) => a.sortKey - b.sortKey);
  }, [filter]);

  const filtered = useMemo(() => {
    if (filter === "all") return enriched as any;
    if (filter === "now")
      return (enriched as any).filter((r: any) => r.status === "now");
    const threshold = parseInt(filter, 10);
    return (enriched as any).filter(
      (r: any) => r.daysToStart >= 0 && r.daysToStart <= threshold
    );
  }, [enriched, filter]);

  const handleView = (row: Record<string, unknown>) => {
    const id = String(row.contractId || "");
    if (id) router.push(`/admin-dashboard/contacts/${id}`);
  };

  const handleEdit = (row: Record<string, unknown>) => {
    const id = String(row.contractId || "");
    if (id) router.push(`/admin-dashboard/contacts/${id}`);
  };

  return (
    <div className="mt-8">
      <div className="flex flex-col items-start md:flex-row md:justify-between mb-6 gap-4">
        <TableTitle
          title="Upcoming Deadlines / Cancellation Windows"
          subtitle="Manage contract cancellation periods and avoid auto-renewals"
        />

        <div className="flex items-center gap-2.5">
          <Button
            variant={filter === "all" ? "default" : "outline"}
            className="md:w-auto"
            onClick={() => setFilter("all")}
          >
            All
          </Button>
          <Button
            variant={filter === "now" ? "default" : "outline"}
            className="md:w-auto"
            onClick={() => setFilter("now")}
          >
            Now
          </Button>
          <Button
            variant={filter === "7" ? "default" : "outline"}
            className="md:w-auto"
            onClick={() => setFilter("7")}
          >
            7 days
          </Button>
          <Button
            variant={filter === "14" ? "default" : "outline"}
            className="md:w-auto"
            onClick={() => setFilter("14")}
          >
            14 days
          </Button>
          <Button
            variant={filter === "30" ? "default" : "outline"}
            className="md:w-auto"
            onClick={() => setFilter("30")}
          >
            30 days
          </Button>
        </div>
      </div>

      <DataTable
        columns={columns}
        data={filtered as any}
        onView={handleView}
        onEdit={handleEdit}
      />
    </div>
  );
}
