"use client";

import { DataTable, StatusBadge } from "@/components/dashoboard/DataTable";
import { Button } from "@/components/ui/button";
import { Eye, Edit, Trash2, View, EyeIcon, CloudCog, } from "lucide-react";
import Link from "next/link";
import { useGetWaitingContractsQuery, useApproveContractMutation, useRejectContractMutation } from "@/redux/features/contracts/contractsApi";
import { formatValue } from "@/lib/utils";
import { toast } from "sonner";

// Define columns for the table
const columns = [
  {
    key: "vertragsId",
    header: "Vertrags-ID",
  },
  {
    key: "benutzer",
    header: "Benutzer",
  },
  {
    key: "anbieter",
    header: "Anbieter",
  },
  {
    key: "tarif",
    header: "Tarif",
  },
  {
    key: "monatsKosten",
    header: "Monatliche Kosten",
  },
  {
    key: "enddatum",
    header: "Enddatum",
  },
  {
    key: "status",
    header: "Status",
    render: (value: string, row: Record<string, unknown>) => (
      <StatusBadge status={value} />
    ),
  },
  {
    key: "action",
    header: "Aktionen",
    render: (value: string, row: Record<string, unknown>) => (
      <Link
        href={`/admin-dashboard/contacts/${row.vertragsId}`}
        className="border rounded-md inline-flex px-2 py-1 items-center justify-center"
      >
        <EyeIcon className="w-5 h-5" />
      </Link>
    ),
  },
];


const mapApiWaitingContractsToTable = (orders: any[]) => {
  return orders?.map((order) => ({
    vertragsId: `USR-${order.id}`,
    benutzer: formatValue(order?.user, (u) => `${u.first_name} ${u.last_name}`),
    anbieter: formatValue(order?.tariff?.vendor?.provider_name || "N/A"),
    tarif: formatValue(order?.tariff?.tariff_name),
    monatsKosten: formatValue(order?.tariff?.price_kwh, (p) => `${p} €/kWh`),
    enddatum: formatValue(order?.created_at?.split("T")[0]),
    status: order?.status === 1 ? "Aktiv" : "Pending",
  })) ?? [];
};  



export function ContactProcessingTable() {
  const { data: waitingContracts } = useGetWaitingContractsQuery(null);
 
  // console.log("waiting contracts", waitingContracts?.data ?? []  );
  const tableData = mapApiWaitingContractsToTable(waitingContracts?.data ?? []);
  console.log("tableData", tableData);

  
  return (
    <>
      <DataTable
        columns={columns}
        data={tableData}
      // onView={(row) => console.log("View", row)}
      // onEdit={(row) => console.log("Edit", row)}
      // onDelete={(row) => console.log("Delete", row)}
      />
    </>
  );
}
