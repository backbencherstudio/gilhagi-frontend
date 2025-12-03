import UserLayout from "@/components/dashoboard/users/UserLayout";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return <UserLayout>{children}</UserLayout>;
}
