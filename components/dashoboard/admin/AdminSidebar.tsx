"use client";

// AdminSidebar.tsx
import {
  LayoutDashboard,
  FileText,
  Zap,
  ShoppingCart,
  Bell,
  HelpCircle,
  Settings,
  LogOut,
  X,
  Building2,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation"; // For Next.js 15 (App Router)
import ThunderIcon from "../../icons/ThunderIcon";
import { logout } from "@/redux/features/auth/authSlice";
import { useAppDispatch } from "@/redux/store/hooks";

// Navigation items array
const navItems = [
  {
    name: "Übersicht",
    icon: <LayoutDashboard className="w-5 h-5" />,
    href: "/admin-dashboard",
  },
  {
    name: "Verträge",
    icon: <FileText className="w-5 h-5" />,
    href: "/admin-dashboard/contacts",
  },
  {
    name: "Anbieter",
    icon: <Building2 className="w-5 h-5" />,
    href: "/admin-dashboard/providers",
  },
  {
    name: "Benachrichtigungen",
    icon: <Bell className="w-5 h-5" />,
    href: "/admin-dashboard/notifications",
  },
  {
    name: "Kontaktnachricht",
    icon: <MessageCircle className="w-5 h-5" />,
    href: "/admin-dashboard/contact-message",
  },

  // {
  //   name: "Einstellungen",
  //   icon: <Settings className="w-5 h-5" />,
  //   href: "/admin-dashboard/settings",
  // },
];

export default function AdminSidebar({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const pathname = usePathname(); // Get the current pathname
  const dispatch = useAppDispatch();
  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      <aside
        className={`
        fixed top-0 left-0 z-50
        w-[300px] h-screen bg-white border-r border-border
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        flex flex-col overflow-y-auto
      `}
      >
        {/* Close button for mobile */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 lg:hidden p-2 hover:bg-gray-100 rounded-md cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>
        {/* Logo Section */}
        <div className="px-6 pb-6 pt-[27px] border-b ">
          <div>
            <img src="/Wechselsicher-logo3.svg" alt="Wechselsicher-logo3" />
          </div>

          <p className="text-[#5F728B]  text-sm font-normal leading-[130%] tracking-[0.07px]">
            Energiemanagement
          </p>
        </div>

        {/* Navigation Links */}
        <nav className="px-6 pt-6 space-y-1">
          {navItems.map((item, index) => {
            const isActive = pathname === item.href; // Check if the current route matches the href

            return (
              <Link
                key={index}
                href={item.href}
                className={`flex items-center gap-3 p-3 rounded-md text-base font-medium leading-[140%] 
                ${
                  isActive
                    ? "bg-[#085EC4] text-white"
                    : "text-[#1C2022] hover:bg-gray-100 transition-colors"
                }`}
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Logout Button */}
        <div className="absolute w-full bottom-0  p-6 border-t space-y-2">
          <button
            onClick={() => dispatch(logout())}
            className="flex items-center gap-3 p-3 rounded-md text-red-500 text-base font-medium leading-[140%] hover:bg-gray-100 transition-colors bg-[#EDF3F7] border border-[#E2E8EE] w-full"
          >
            <LogOut className="w-5 h-5" />
            <span>Abmelden</span>
          </button>

          <p className="text-[#5F728B]  text-sm font-normal leading-[130%] tracking-[0.07px]">
            Energiemanagement
          </p>
        </div>
      </aside>
    </>
  );
}
