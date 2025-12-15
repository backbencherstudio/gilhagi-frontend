"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/services/provider/order-status");
    }, 1000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <>
      <div className="flex items-center justify-center px-4">
        <div className="flex w-[638px] flex-col items-center gap-8 border border-[#E2E8EE] bg-white p-14 rounded-[20px] space-y-14">
          
          {/* Heading */}
          <h3 className="text-[#1C2022] text-center text-lg md:text-2xl font-semibold leading-[130%] tracking-[0.12px]">
            Danke!
            <br />
            Ihr Kauf wird vorbereitet...
          </h3>

          {/* Plane Animation */}
          <img
            className="inline-block"
            style={{ animation: "planeFloat 1s ease-in-out infinite" }}
            src="/plane.svg"
            alt=""
          />

          {/* Loading Text */}
          <h3 className="text-[#1C2022] text-center md:text-lg font-medium leading-[160%]">
            Wird vorbereitet <span className="animate-ping">...</span>
          </h3>
        </div>
      </div>

      {/* Animation */}
      <style>
        {`
          @keyframes planeFloat {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-6px) translateX(6px); }
          }
        `}
      </style>
    </>
  );
}
