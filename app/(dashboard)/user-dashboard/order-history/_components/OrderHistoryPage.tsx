import React from "react";
import ProgressStepper from "./ProgressStepper";
import ConnectCall from "./ConnectCall";

export default function OrderHistoryPage() {
  return (
    <section className="space-y-14">
      <div className="gap-6 flex flex-col items-center justify-center mx-auto">
        <img src="/success-feti.svg" alt="" />
        <p className="text-lg font-semibold leading-[160%] text-center px-4">
          Herzlichen Glückwunsch zu Ihrem neuen Vertrag!
        </p>
      </div>

      <div className=" flex items-center justify-center">
       <ProgressStepper/>
      </div>

      <div>
        <ConnectCall/>
      </div>
    </section>
  );
}
