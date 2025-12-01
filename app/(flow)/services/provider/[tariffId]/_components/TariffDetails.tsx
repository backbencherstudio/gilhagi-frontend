import TickIcon from "@/components/icons/TickIcon";
import { Button } from "@/components/ui/button";
import React from "react";

const TariffDetails = () => {
  return (
    <div className="p-6 border border-[#E2E8EE)] bg-[#F8FCFD] rounded-2xl border-solid ">
      {/* first part */}
      <div className="flex items-start justify-between">
        {/* right */}
        <div>
          <h1>Logo</h1>
          <div className="flex flex-col">
            <p className="flex items-center gap-4 text-[#5F728B]  text-base font-normal leading-[140%] tracking-[0.08px]">
              {" "}
              <TickIcon className="text-[#0EB580]" /> Switch online for free
            </p>
            <p className="flex items-center gap-4 text-[#5F728B]  text-base font-normal leading-[140%] tracking-[0.08px]">
              {" "}
              <TickIcon className="text-[#0EB580]" /> No exchange fee
            </p>
          </div>
        </div>

        {/* left */}
        <div className="text-right ">
          <h2 className="text-[#1C2022)] text-[40px] font-semibold leading-[130%]">
            €50.60
          </h2>
          <p className="text-[#5F728B)] text-lg font-normal leading-[160%]">
            Average per month
          </p>
          <p className="text-[#0EB580] text-lg font-medium leading-[160%]">
            270€ saved per year
          </p>

          <Button className="rounded-btn border ml-auto mt-6"> Switch Now</Button>
        </div>
      </div>
    </div>
  );
};

export default TariffDetails;
