"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function page() {
  const router = useRouter();
  const handleConfirm = () => {
    router.push("/services/provider/confirm");
  };

  return (
    <div className="py-25">
      From Summary → Personal Info
      <br />
      <button onClick={handleConfirm} className="">
        {" "}
        final confirm
      </button>
    </div>
  );
}
