"use client";
import React, { useState } from "react";
import UserHeader from "./UserHeader";
import UserSidebar from "./UserSidebar";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#F9FAFC]">
      <UserSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="flex-1 flex flex-col lg:ml-[300px] w-full">
        <UserHeader onMenuClick={() => setSidebarOpen(true)} />
        <main className="flex-1 p-6 overflow-y-auto container mx-auto ">
          {children}
        </main>
      </div>
    </div>
  );
}
