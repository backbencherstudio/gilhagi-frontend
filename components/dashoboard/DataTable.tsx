"use client";

import React, { useState } from "react";
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
import {
  MoreHorizontal,
  Eye,
  Edit,
  Trash2,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import EmptyStateIcon from "../icons/EmptyStateIcon";

interface Column {
  key: string;
  header: string;
  render?: (value: any, row: Record<string, any>) => React.ReactNode;
}

interface DataTableProps {
  columns: Column[];
  data: Record<string, any>[];
  loading?: boolean;
  emptyStateMessage?: string;
  onView?: (row: Record<string, any>) => void;
  onEdit?: (row: Record<string, any>) => void;
  onDelete?: (row: Record<string, any>) => void;
  pageSize?: number;
}

export function DataTable({
  columns,
  data,
  loading = false,
  emptyStateMessage = "No data found!",
  onView,
  onEdit,
  onDelete,
  pageSize = 8,
}: DataTableProps) {
  const [currentPage, setCurrentPage] = useState(1);

  // Pagination Calculations
  const totalPages = Math.ceil(data.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const paginatedData = data.slice(startIndex, startIndex + pageSize);

  const hasActions = !!(onView || onEdit || onDelete);

  // Handlers
  const goToNextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const goToPrevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

  return (
    <div className="space-y-4">
      <div className="rounded-lg border border-border overflow-hidden bg-white">
        <Table>
          <TableHeader>
            <TableRow className="bg-[#F8FCFD] hover:bg-[#F8FCFD]">
              {columns.map((column) => (
                <TableHead
                  key={column.key}
                  className="text-[#1C2022] text-sm font-medium leading-[140%] tracking-[0.07px] first:pl-5 py-3"
                >
                  {column.header}
                </TableHead>
              ))}
              {hasActions && (
                <TableHead className="text-[#1C2022] text-sm font-medium leading-[140%] tracking-[0.07px] last:pr-5 py-3 w-16">
                  Actions
                </TableHead>
              )}
            </TableRow>
          </TableHeader>

          {loading ? (
            <LoadingSkeleton columns={columns} hasActions={hasActions || false} />
          ) : paginatedData.length > 0 ? (
            <TableBody>
              {paginatedData.map((row, rowIndex) => (
                <TableRow
                  key={rowIndex}
                  className="border-border hover:bg-secondary/30"
                >
                  {columns.map((column) => (
                    <TableCell
                      key={column.key}
                      className="first:pl-5 last:pr-5 py-3 text-[#5F728B] text-xs font-medium leading-[132%] tracking-[0.06px]"
                    >
                      {column.render
                        ? column.render(row[column.key], row)
                        : String(row[column.key] ?? "")}
                    </TableCell>
                  ))}
                  {hasActions && (
                    <TableCell className="last:pr-5">
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
            <TableBody>
              <TableRow className="border-none hover:bg-transparent">
                <TableCell
                  colSpan={columns.length + (hasActions ? 1 : 0)}
                  className="py-20 text-center"
                >
                  <EmptyStateIcon className="w-16 h-16 mx-auto opacity-50 mb-4" />
                  <p className="text-sm text-gray-500 font-medium">{emptyStateMessage}</p>
                </TableCell>
              </TableRow>
            </TableBody>
          )}
        </Table>
      </div>

      {/* Pagination Controls */}
      {!loading && data.length > pageSize && (
        <div className="flex items-center justify-between px-2">
          <p className="text-xs text-[#5F728B] font-medium">
            Showing <span className="text-[#1C2022]">{startIndex + 1}</span> to{" "}
            <span className="text-[#1C2022]">{Math.min(startIndex + pageSize, data.length)}</span> of{" "}
            <span className="text-[#1C2022]">{data.length}</span> results
          </p>

          <div className="flex items-center gap-4">
            <div className="text-xs text-[#5F728B] font-medium">
              Page <span className="text-[#1C2022]">{currentPage}</span> of {totalPages}
            </div>
            <div className="flex items-center gap-1">
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 border-border"
                onClick={goToPrevPage}
                disabled={currentPage === 1}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 border-border"
                onClick={goToNextPage}
                disabled={currentPage === totalPages}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/** * StatusBadge Component
 */
export function StatusBadge({ status }: { status: string }) {
  const variants: Record<string, string> = {
    aktiv: "bg-green-500/10 text-green-500 border-green-500/30",
    active: "bg-green-500/10 text-green-500 border-green-500/30",
    resolved: "bg-green-500/10 text-green-500 border-green-500/30",
    inaktiv: "bg-red-500/10 text-red-500 border-red-500/30",
    rejected: "bg-red-500/10 text-red-500 border-red-500/30",
    escalated: "bg-red-700/10 text-red-700 border-red-700/30",
    pending: "bg-yellow-500/10 text-yellow-500 border-yellow-500/30",
    switching: "bg-blue-500/10 text-blue-500 border-blue-500/30",
    verified: "bg-teal-500/10 text-teal-500 border-teal-500/30",
    incomplete: "bg-orange-500/10 text-orange-500 border-orange-500/30",
    open: "bg-indigo-500/10 text-indigo-500 border-indigo-500/30",
    inactive: "bg-gray-100 text-gray-500 border-gray-200",
  };

  return (
    <Badge
      variant="outline"
      className={cn(
        "capitalize font-medium text-[10px] px-2 py-0",
        variants[status.toLowerCase()] || variants.inactive
      )}
    >
      {status}
    </Badge>
  );
}

/** * Loading Skeleton Component
 */
const LoadingSkeleton = ({
  columns,
  rows = 5,
  hasActions
}: {
  columns: any[],
  rows?: number,
  hasActions: boolean
}) => {
  return (
    <TableBody>
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <TableRow key={rowIndex}>
          {columns.map((_, colIndex) => (
            <TableCell key={colIndex} className="py-4 first:pl-5 last:pr-5">
              <div className="h-3 w-full animate-pulse rounded-md bg-slate-100" />
            </TableCell>
          ))}
          {hasActions && (
            <TableCell className="last:pr-5">
              <div className="h-8 w-8 animate-pulse rounded-md bg-slate-100 ml-auto" />
            </TableCell>
          )}
        </TableRow>
      ))}
    </TableBody>
  );
};