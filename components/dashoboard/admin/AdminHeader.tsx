import { Bell, Menu } from "lucide-react";
import React from "react";

export default function AdminHeader({ onMenuClick }: { onMenuClick: () => void }) {
  return (
    <header className=" border-b border-border flex items-center justify-between p-6 ">
      {/* left  */}
      <div> <button
        onClick={onMenuClick}
        className="lg:hidden p-2 hover:bg-gray-100 rounded-md"
      >
        <Menu className="w-6 h-6" />
      </button></div>

      {/* right  */}
      <div className="flex items-stretch gap-4 ">
        {/* Notification */}
        <button className="flex items-center gap-[105px] border border-[#CCDAE4] bg-[#EDF3F7] p-3 rounded-md border-solid">
          <Bell />
        </button>

        {/* Line */}
        <div className="border-l border-[#E2E8EE] " />

        {/* User */}
        <div className="w-[43px] h-[43px] rounded-full bg-accent"></div>
      </div>
    </header>
  );
}
