import UserLayout from "@/components/dashoboard/users/UserLayout";
import PrivateRoute from "@/components/auth/PrivateRoute";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <PrivateRoute>
      <UserLayout>{children}</UserLayout>
    </PrivateRoute>
  );
}
