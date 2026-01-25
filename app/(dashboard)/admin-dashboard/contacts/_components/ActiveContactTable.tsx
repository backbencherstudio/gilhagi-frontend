"use client";

import { DataTable, StatusBadge } from "@/components/dashoboard/DataTable";
import { Button } from "@/components/ui/button";
import { mapToTable } from "@/lib/helpers/mapToTable";
import { formatValue } from "@/lib/utils";
import { useGetApprovedContractsQuery } from "@/redux/features/contracts/contractsApi";
import {  EyeIcon, } from "lucide-react";
import Link from "next/link";


// Define columns for the table
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



export function ContactTable() {


  
  const { data: approvedContracts, isLoading: isLoadingApprovedContracts, isError: isErrorApprovedContracts} = useGetApprovedContractsQuery(null);
 

  const tableData = mapToTable(approvedContracts?.data ?? [], (item: any) => ({
    vertragsId: `USR-${item.id}`,
    benutzer: formatValue(item?.user, (u) => `${u.first_name} ${u.last_name}`),
    anbieter: formatValue(item.vendor?.provider_name),
    tarif: formatValue(item?.tariff?.tariff_name),
    monatsKosten: formatValue(item?.tariff?.price_kwh, (p) => `${p} €/kWh`),
    enddatum: formatValue(item?.created_at?.split("T")[0]),
    status: item?.tariff?.status === 1 ? "Aktiv" : "Pending",
  }));
  console.log("tableDataa", tableData);
  return (
    <>
      <DataTable
        columns={columns}
        data={tableData}
        loading={isLoadingApprovedContracts}
        emptyStateMessage="Keine Verträge gefunden"
        isError={isErrorApprovedContracts}
        // onView={(row) => console.log("View", row)}
        // onEdit={(row) => console.log("Edit", row)}
        // onDelete={(row) => console.log("Delete", row)}
      />
    </>
  );
}
