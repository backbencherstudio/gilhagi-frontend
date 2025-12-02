"use client";
import { useRouter } from "next/navigation";
import React from "react";
import InformationForm from "./_components/CustomerForm";


export default function page() {
  const router = useRouter();
  const handleConfirm = () => {
    router.push("/services/provider/confirm");
  };

  return (
    <div className="">
      <InformationForm />
    </div>
  );
}
