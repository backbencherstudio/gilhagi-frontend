"use client";
import { useRouter } from "next/navigation";
import React from "react";
import TariffDetailPage from "./_components/TariffDetailPage";

export default function page() {
  const router = useRouter();



  return (
    <div className="">
      <TariffDetailPage />
      <br />
      {/* <button
        onClick={handleSwitch}
        className="px-2 py-3 border bg-black text-white"
      >
        switch noww
      </button> */}
    </div>
  );
}
