"use client";

import type React from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, Eye, Edit, Trash2, Loader2 } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import EmptyStateIcon from "../icons/EmptyStateIcon";

// interface Column {
//   key: string;
//   header: string;
//   render?: (value: unknown, row: Record<string, unknown>) => React.ReactNode;
// }

interface Column {
  key: string
  header: string
  render?: (value: any, row: Record<string, unknown>) => React.ReactNode
}


interface DataTableProps {
  columns: Column[];
  data: Record<string, unknown>[];
  loading?: boolean;
  emptyStateMessage?: string;
  onView?: (row: Record<string, unknown>) => void;
  onEdit?: (row: Record<string, unknown>) => void;
  onDelete?: (row: Record<string, unknown>) => void;
}

export function DataTable({
  columns,
  data,
  loading = false,
  emptyStateMessage = "No data found!",

  onView,
  onEdit,
  onDelete,
}: DataTableProps) {
  return (
    <div className="rounded-lg border border-border overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow className="bg-[#F8FCFD] hover:bg-[#F8FCFD]">
            {columns.map((column) => (
              <TableHead
                key={column.key}
                className="text-[#1C2022]  text-sm font-medium leading-[140%] tracking-[0.07px] first:pl-5 py-3"
              >
                {column.header}
              </TableHead>
            ))}
            {(onView || onEdit || onDelete) && (
              <TableHead className="text-[#1C2022]  text-sm font-medium leading-[140%] tracking-[0.07px] last:pr-5 py-3 w-12">
                Actions
              </TableHead>
            )}
          </TableRow>
        </TableHeader>
        {
          loading ? (
            <LoadingSkeleton columns={columns} />
          ) : data.length > 0 ? (
            <TableBody>
              {data.map((row, index) => (
                <TableRow
                  key={index}
                  className="border-border hover:bg-secondary/30 "
                >
                  {columns.map((column) => (
                    <TableCell
                      className="first:pl-5 last:pr-5 py-3 text-[#5F728B]  text-xs font-medium leading-[132%] tracking-[0.06px]"
                      key={column.key}
                    >
                      {column.render
                        ? column.render(row[column.key], row)
                        : String(row[column.key] ?? "")}
                    </TableCell>
                  ))}
                  {(onView || onEdit || onDelete) && (
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <MoreHorizontal className="w-4 h-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          {onView && (
                            <DropdownMenuItem onClick={() => onView(row)}>
                              <Eye className="w-4 h-4 mr-2" />
                              View
                            </DropdownMenuItem>
                          )}
                          {onEdit && (
                            <DropdownMenuItem onClick={() => onEdit(row)}>
                              <Edit className="w-4 h-4 mr-2" />
                              Edit
                            </DropdownMenuItem>
                          )}
                          {onDelete && (
                            <DropdownMenuItem
                              onClick={() => onDelete(row)}
                              className="text-destructive"
                            >
                              <Trash2 className="w-4 h-4 mr-2" />
                              Delete
                            </DropdownMenuItem>
                          )}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  )}
                </TableRow>
              ))}
            </TableBody>
          ) : (
            <TableBody className="fl ex flex-col items-center justify-center h-full w-full ">


              <TableRow className="border-none hover:bg-transparent">
                <TableCell colSpan={columns.length} className="p-0">
                <EmptyStateIcon className="w-25 h-25 mx-auto " />
                <p className="text-sm text-gray-500 text-center mb-4">{emptyStateMessage}</p>
                </TableCell>
              </TableRow>


            </TableBody>
          )
        }
      </Table>
    </div>
  );
}

export function StatusBadge({ status }: { status: string }) {

  console.log("status", status);
  const variants: Record<string, string> = {
    aktiv: "bg-green-500/10 text-green-500 border-green-500/30",
    inaktiv: "bg-red-500/10 text-red-500 border-red-500/30",
    active: "bg-green-500/10 text-green-500 border-green-500/30",
    pending: "bg-yellow-500/10 text-yellow-500 border-yellow-500/30",
    inactive: "bg-gray-300 text-gray-500 border-gray-400",
    rejected: "bg-red-500/10 text-red-500 border-red-500/30",
    switching: "bg-blue-500/10 text-blue-500 border-blue-500/30",
    verified: "bg-teal-500/10 text-teal-500 border-teal-500/30",
    incomplete: "bg-orange-500/10 text-orange-500 border-orange-500/30",
    open: "bg-indigo-500/10 text-indigo-500 border-indigo-500/30",
    resolved: "bg-green-500/10 text-green-500 border-green-500/30",
    escalated: "bg-red-700/10 text-red-700 border-red-700/30",
  };

  return (
    <Badge
      variant="outline"
      className={cn(
        "capitalize",
        variants[status.toLowerCase()] || variants.inactive
      )}
    >
      {status}
    </Badge>
  );
}



const LoadingSkeleton = ({ columns, rows = 5 }: { columns: any[], rows?: number }) => {
  return (
    <>
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <TableRow key={rowIndex}>
          {columns.map((column, colIndex) => (
            <TableCell key={colIndex} className="py-4">
              {/* Shimmering bar that mimics text length */}
              <div className="h-4 w-full animate-pulse rounded-md bg-muted" />
            </TableCell>
          ))}
        </TableRow>
      ))}
    </>
  );
};

