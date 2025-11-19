"use client";
import { usePathname } from "next/navigation";

export default function Navber() {
  const pathname = usePathname();

  const isHome = pathname === "/";
  return (
    <>
      {/* Navbar */}
      <nav className="sticky top-0 left-0 w-full flex justify-between items-center p-6 text-white z-10  ">
        <h1 className="text-2xl font-bold">My Website</h1>
        <ul className="flex gap-6">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Contact</li>
          <li>Contact</li>
        </ul>
      </nav>
    </>
  );
}
