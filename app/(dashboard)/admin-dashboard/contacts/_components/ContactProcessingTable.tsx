"use client";

import { DataTable, StatusBadge } from "@/components/dashoboard/DataTable";
import { Button } from "@/components/ui/button";
import { Eye, Edit, Trash2, View, EyeIcon, CloudCog, } from "lucide-react";
import Link from "next/link";
import { useGetWaitingContractsQuery } from "@/redux/features/contracts/contractsApi";

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
    status: "pending",
  },
  {
    vertragsId: "USROO2",
    benutzer: "Max Müller",
    anbieter: "Vattenfall",
    tarif: "Grün Basis",
    monatsKosten: "89 €/Monat",
    enddatum: "2025-01-01",
    status: "pending",
  },
  {
    vertragsId: "USROO2",
    benutzer: "Max Müller",
    anbieter: "Vattenfall",
    tarif: "Grün Basis",
    monatsKosten: "89 €/Monat",
    enddatum: "2025-01-01",
    status: "pending",
  },
  // Add more data as needed
];
// {

//   "id": 4,

//   "vendor_id": 6,

//   "tariff_name": "desco",

//   "price_kwh": "15.50",

//   "basic_fee": "1000.00",

//   "exchange_bonus": "100.00",

//   "rates": "4.50",

//   "price_guarantee": "Fixed for 10 months 12",

//   "renewable": 1,

//   "status": 1,

//   "created_at": "2026-01-22T10:09:58.000000Z",

//   "updated_at": "2026-01-22T10:09:58.000000Z",

//   "vendor": {

//       "id": 6,

//       "provider_name": "Avram",

//       "service_areas": "101235",

//       "renewable": 0,

//       "status": 0,

//       "created_at": "2026-01-22T08:50:16.000000Z",

//       "updated_at": "2026-01-22T08:50:16.000000Z"

//   }

// },

const mapApiWaitingContractsToTable = (orders: any) => {
  return orders?.map(mapOrderToTableData);
}

const mapOrderToTableData = (order: any) => {

  return {
    vertragsId: `USROO${order.id}`,
    benutzer: order?.user?.first_name + " " + order?.user?.last_name,
    anbieter: order.vendor?.provider_name,
    tarif: order?.tariff_name,
    monatsKosten: order.price_kwh + " €/kWh",
    enddatum: order?.created_at?.split("T")[0],
    status: order?.status === 1 ? "Aktiv" : "Pending",
  }
}

export function ContactProcessingTable() {
  const { data: waitingContracts } = useGetWaitingContractsQuery(null);
  // console.log("waiting contracts", waitingContracts?.data ?? []  );
  const tableData = mapApiWaitingContractsToTable(waitingContracts?.data ?? []);
  console.log("tableData", tableData);

  
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
