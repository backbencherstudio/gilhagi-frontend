"use client";

import { DataTable, StatusBadge } from "@/components/dashoboard/DataTable";
import { Button } from "@/components/ui/button";
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

// Sample data to display in the table
const data = [
  {
    vertragsId: "USROOI",
    benutzer: "Max Müller",
    anbieter: "Vattenfall",
    tarif: "Grün Basis",
    monatsKosten: "89 €/Monat",
    enddatum: "2025-01-01",
    status: "active",
  },
  {
    vertragsId: "USROO2",
    benutzer: "Max Müller",
    anbieter: "Vattenfall",
    tarif: "Grün Basis",
    monatsKosten: "89 €/Monat",
    enddatum: "2025-01-01",
    status: "active",
  },
  // Add more data as needed
];

export function ContactTable() {


  
  const { data: approvedContracts } = useGetApprovedContractsQuery(null);
  console.log("approved contracts", approvedContracts);
  return (
    <>
      <DataTable
        columns={columns}
        data={data}
        // onView={(row) => console.log("View", row)}
        // onEdit={(row) => console.log("Edit", row)}
        // onDelete={(row) => console.log("Delete", row)}
      />
    </>
  );
}
