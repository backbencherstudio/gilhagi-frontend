"use client";

import Image from "next/image";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import TableTitle from "@/components/dashoboard/TableTitle";
import { useGetConractHistoryQuery } from "@/redux/features/userOver/userOverviewApi";

const tableHeading =
  "text-[color:var(--Text-color-Text-02,#5F728B)] font-medium leading-[18px] px-5 py-3";

function ElectricityTable() {
  const {
    data: contractHistory,
    isLoading: isLoadingContractHistory,
    isError: isErrorContractHistory,
  } = useGetConractHistoryQuery(null);

  const rows = contractHistory?.data ?? [];

  if (isLoadingContractHistory) {
    return (
      <div className="p-5 text-sm text-gray-500">
        Loading contract history...
      </div>
    );
  }

  if (isErrorContractHistory) {
    return (
      <div className="p-5 text-sm text-red-500">
        Failed to load contract history
      </div>
    );
  }

  return (
    <div className="rounded-lg border overflow-hidden bg-white">
      <Table>
        <TableHeader className="bg-[#EDF3F7]">
          <TableRow>
            <TableHead className={tableHeading}>
              Stromanbieter
            </TableHead>
            <TableHead className={`${tableHeading} text-right`}>
              Eingesparte Stromkosten
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {rows.length === 0 ? (
            <TableRow>
              <TableCell
                colSpan={2}
                className="text-center py-6 text-sm text-gray-500"
              >
                Keine Vertragshistorie vorhanden
              </TableCell>
            </TableRow>
          ) : (
            rows.map((item: any, index: number) => (
              <TableRow className="even:bg-gray-50" key={index}>
                <TableCell className="pl-5 py-3">
                  <div className="flex items-center gap-3">
                    <Image
                      src="/icons/energy1.png"
                      width={36}
                      height={36}
                      alt="Anbieter-Logo"
                      className="rounded-full"
                    />

                    <div className="flex flex-col">
                      <span className="text-[#1C2022] text-sm font-medium leading-5">
                        {item.provider || "Unbekannter Anbieter"}
                      </span>

                      <span className="text-[#5F728B] text-sm font-normal leading-5">
                        {item.period}
                      </span>
                    </div>
                  </div>
                </TableCell>

                <TableCell
                  className={`text-right pr-5 font-semibold ${
                    item.savings > 0
                      ? "text-green-600"
                      : "text-gray-400"
                  }`}
                >
                  €{item.savings}
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
}

export default function ContractHistory() {
  return (
    <div className="border border-[#E9E9EA] bg-white p-5 rounded-2xl space-y-6 mt-6">
      <TableTitle
        title="Vertragshistorie"
        subtitle="Alle Ihre Tarifwechsel auf einen Blick"
      />

      <ElectricityTable />
    </div>
  );
}
