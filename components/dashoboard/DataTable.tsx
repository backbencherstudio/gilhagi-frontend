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
import { MoreHorizontal, Eye, Edit, Trash2 } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

// interface Column {
//   key: string;
//   header: string;
//   render?: (value: unknown, row: Record<string, unknown>) => React.ReactNode;
// }

interface Column {
  key: string
  header: string
  render?: (value: unknown, row: Record<string, unknown>) => React.ReactNode
}


interface DataTableProps {
  columns: Column[];
  data: Record<string, unknown>[];
  onView?: (row: Record<string, unknown>) => void;
  onEdit?: (row: Record<string, unknown>) => void;
  onDelete?: (row: Record<string, unknown>) => void;
}

export function DataTable({
  columns,
  data,
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
      </Table>
    </div>
  );
}

export function StatusBadge({ status }: { status: string }) {
  const variants: Record<string, string> = {
    active: "bg-success/20 text-success border-success/30",
    pending: "bg-warning/20 text-warning border-warning/30",
    inactive: "bg-muted text-muted-foreground border-border",
    rejected: "bg-destructive/20 text-destructive border-destructive/30",
    switching: "bg-chart-2/20 text-chart-2 border-chart-2/30",
    verified: "bg-success/20 text-success border-success/30",
    incomplete: "bg-warning/20 text-warning border-warning/30",
    open: "bg-chart-2/20 text-chart-2 border-chart-2/30",
    resolved: "bg-success/20 text-success border-success/30",
    escalated: "bg-destructive/20 text-destructive border-destructive/30",
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
