import { Bell, Menu, User } from "lucide-react";
import Link from "next/link";

export default function AdminHeader({
  onMenuClick,
}: {
  onMenuClick: () => void;
}) {
  return (
    <div className="block mb-25">
      <header className=" border-b border-border flex items-center justify-between p-6 fixed inset-x-0 z-40 bg-white z">
        {/* left  */}
        <div>
          {" "}
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
          <Link href="/admin-dashboard/notifications" className="flex items-center gap-[105px] border border-[#CCDAE4] bg-[#EDF3F7] p-3 rounded-md border-solid cursor-pointer hover:bg-[#085EC4] hover:text-white transition-all duration-300">
            <Bell className="w-6 h-6" />
          </Link>

          {/* Line */}
          <div className="border-l border-[#E2E8EE] " />

          {/* User */}
          <div className="md:p-4 p-2 rounded-full bg-accent flex items-center justify-center">
            <User className="w-8 h-8 " />
          </div>
        </div>
      </header>
    </div>
  );
}
