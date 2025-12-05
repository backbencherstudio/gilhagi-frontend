import React from "react";

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

const tableHeading =
  "text-[color:var(--Text-color-Text-02,#5F728B)]  font-medium leading-[18px] px-5 py-3";

const tableCol =
  "text-[color:var(--Text-color-Text-02,#5F728B)]  font-medium leading-[18px] px-5 py-3";

function ElectricityTable() {
  const data = [
    {
      icon: "/icons/energy1.png",
      provider: "Vienna Energy",
      date: "Jan 1, 2024 – Today",
      saving: "€256",
    },
    {
      icon: "/icons/energy2.png",
      provider: "Vienna Energy",
      date: "April 02, 2022 – Dec 2023",
      saving: "€380",
    },
    {
      icon: "/icons/energy3.png",
      provider: "Vienna Energy",
      date: "April 02, 2022 – Dec 2023",
      saving: "€200",
    },
    {
      icon: "/icons/energy4.png",
      provider: "Vienna Energy",
      date: "April 02, 2022 – Dec 2023",
      saving: "€215",
    },
  ];

  return (
    <div className="rounded-lg border overflow-hidden bg-white ">
      <Table>
        <TableHeader className="bg-[#EDF3F7] ">
          <TableRow className="">
            <TableHead className={`${tableHeading}`}>
              Electricity Provider
            </TableHead>
            <TableHead className={`${tableHeading} text-right`}>
              Electricity Saved
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {data.map((item, index) => (
            <TableRow className="even:bg-gray-50" key={index}>
              <TableCell className="pl-5 py-3">
                <div className="flex items-center gap-3">
                  <Image
                    src={item.icon}
                    width={36}
                    height={36}
                    alt="provider icon"
                    className="rounded-full"
                  />
                  <div className="flex flex-col">
                    <span className="text-[#1C2022]  text-sm font-medium leading-5">
                      {item.provider}
                    </span>
                    <span className="text-[#5F728B]  text-sm font-normal leading-5">
                      {item.date}
                    </span>
                  </div>
                </div>
              </TableCell>

              <TableCell className="text-right pr-22 font-semibold text-green-600">
                {item.saving}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default function ContactHistory() {
  return (
    <div className=" border border-[#E9E9EA] [background:var(--Background-White,#FFF)] p-5 rounded-2xl border-solid space-y-6 mt-6">
      {/* title */}
      <div>
        <TableTitle
          title="Contract History"
          subtitle="All your tariff changes at a glance"
        />
      </div>

      {/* provider table */}
      <div >
        <ElectricityTable />
      </div>
    </div>
  );
}
