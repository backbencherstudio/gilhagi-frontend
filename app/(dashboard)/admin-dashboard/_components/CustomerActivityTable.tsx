"use client";

import CustomBadge from "@/components/dashoboard/CustomBadge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatDistanceToNow } from "date-fns";

type Customer = {
  name: string;
  activity: string;
  status: "Completed" | "Pending" | "Open"; // Explicitly restrict status to valid values
  time: string;
  initials: string;
};

const customerData: Customer[] = [
  {
    name: "Max Müller",
    activity: "Contract switched",
    status: "Completed",
    time: "Wed Dec 02 2025 01:12:41 GMT-0800",
    initials: "MM",
  },
  {
    name: "Anna Schmidt",
    activity: "Switched to Vattenfall",
    status: "Pending",
    time: new Date().toString(),
    initials: "AS",
  },
  {
    name: "Peter Weber",
    activity: "Document uploaded",
    status: "Completed",
    time: "Wed Dec 03 2025 12:12:41 GMT-0800",
    initials: "PW",
  },
  {
    name: "Darrell Steward",
    activity: "Contract switched",
    status: "Completed",
    time: "Wed Dec 01 2025 01:12:41 GMT-0800",
    initials: "DS",
  },
  {
    name: "Savannah Nguyen",
    activity: "Document uploaded",
    status: "Open",
    time: "Wed Dec 03 2025 01:12:41 GMT-0800",
    initials: "SN",
  },
  {
    name: "Theresa Webb",
    activity: "Switched to Vattenfall",
    status: "Pending",
    time: new Date().toString(),
    initials: "TW",
  },
  {
    name: "Robert Fox",
    activity: "Document uploaded",
    status: "Completed",
    time: new Date().toString(),
    initials: "RF",
  },
];

const App = () => {
  return (
    <div>
      {customerData.map((customer, index) => (
        <div key={index}>
          <p>{customer.name}</p>
          <CustomBadge status={customer.status} />
        </div>
      ))}
    </div>
  );
};

export default function CustomerActivityTable() {
  return (
    <div className="space-y-4">
      <div className="rounded-lg border border-border  overflow-hidden ">
        <Table className="p-5">
          <TableHeader className="bg-[#F5F9FD] p-5">
            <TableRow className="text-[#1C2022]  text-sm font-medium leading-[140%] tracking-[0.07px] p-5">
              <TableHead className="pl-5 py-3">Customer</TableHead>
              <TableHead className="">Activity</TableHead>
              <TableHead >Status</TableHead>
              <TableHead>Time</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="">
            {customerData.map((customer, index) => (
              <TableRow className="" key={index}>
                <TableCell className="pl-5 py-3">
                  <div className="flex items-center gap-2">
                    <Avatar>
                      <AvatarImage
                        src="/path/to/image.jpg"
                        alt={customer.name}
                      />
                      <AvatarFallback>{customer.initials}</AvatarFallback>
                    </Avatar>
                    <span className="text-[#1C2022]  text-sm font-semibold leading-[140%] tracking-[0.07px]">{customer.name}</span>
                  </div>
                </TableCell>
                <TableCell className="text-[#5F728B] text-xs font-normal leading-[132%] tracking-[0.06px]">{customer.activity}</TableCell>
                <TableCell>
                  {/* <Badge variant={getStatusVariant(customer.status)}>
                    {customer.status}
                  </Badge> */}

                  <CustomBadge status={customer.status} />
                  
                </TableCell>
                <TableCell className="text-[#B9C2CD]  text-xs font-normal leading-[132%] tracking-[0.06px]">{formatDistanceToNow(customer.time)} ago</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}



