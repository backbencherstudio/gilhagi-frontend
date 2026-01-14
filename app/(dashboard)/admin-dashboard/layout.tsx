import AdminLayout from "@/components/dashoboard/admin/AdminLayout";
import AdminPrivateRoute from "@/components/auth/AdminPrivateRoute";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <AdminPrivateRoute>
      <AdminLayout>{children}</AdminLayout>
    </AdminPrivateRoute>
  );
}
