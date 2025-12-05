import React from "react";
import CustomerActivityTable from "./CustomerActivityTable";

export default function RecentActivityTable() {
  return (
    <div className="content-div mt-8">
      <div>
        <h2 className="self-stretch text-[#1C2022]  text-lg font-semibold leading-[160%]">
          Recent Activity
        </h2>
        <p className="self-stretch text-[#5F728B]  text-base font-normal leading-[140%] tracking-[0.08px]">
          All your tariff changes at a glance
        </p>
      </div>

      {/* table */}
      <CustomerActivityTable/>
    </div>
  );
}


