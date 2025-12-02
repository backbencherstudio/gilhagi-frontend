import React from "react";

export default function Page() {
  return (
    <>
      <div className="flex items-center justify-center">
        <div className="flex w-[638px] flex-col items-center gap-8 border border-[#E2E8EE] bg-white p-14 rounded-[20px] space-y-14">
          
          {/* Heading */}
          <h3 className="text-[#1C2022] text-center text-2xl font-semibold leading-[130%] tracking-[0.12px]">
            Danke!
            <br />
            Ihr Kauf wird vorbereitet...
          </h3>

          {/* Plane Animation */}
          <img
            className="inline-block"
            style={{
              animation: "planeFloat 1s ease-in-out infinite",
            }}
            src="/plane.svg"
            alt=""
          />

          {/* Loading Text */}
          <h3 className="text-[#1C2022] text-center text-lg font-medium leading-[160%]">
            Wird vorbereitet <span className="animate-ping">...</span>
          </h3>
        </div>
      </div>

      {/* ---- Animation BELOW Component ---- */}
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
