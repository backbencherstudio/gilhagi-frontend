import { Bell, Menu, User } from "lucide-react";
import React from "react";

export default function UserHeader({
  onMenuClick,
}: {
  onMenuClick: () => void;
}) {
  return (
    <header className="sticky top-0 z-30 border-b border-border flex items-center justify-between p-6 w-full bg-background backdrop-blur-sm">
      {/* left  */}
      <div>
        <button
          onClick={onMenuClick}
          className="lg:hidden p-2 hover:bg-gray-100 rounded-md cursor-pointer"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* right  */}
      <div className="flex items-stretch gap-4 ">
        {/* Notification */}
        <button className="flex items-center gap-[105px] border border-[#CCDAE4] bg-[#EDF3F7] p-3 rounded-md border-solid cursor-pointer">
          <Bell />
        </button>

        {/* Line */}
        <div className="border-l border-[#E2E8EE] " />

        {/* User */}
        <div className="w-10 md:w-12 lg:w-14 h-10 md:h-12 lg:h-14 rounded-full bg-accent flex items-center justify-center">
          <User className="w-8 h-8 " />
        </div>
      </div>
    </header>
  );
}
