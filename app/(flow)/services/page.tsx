"use client";

import ComparisonSummaryCard from "./_components/MainServices/ComparisonSummaryCard";
import FilterSidebar from "./_components/FilterSidebar/FilterSidebar";
import AllSection from "./_components/MainServices/AllSection";
import { useGetCalculationDetailsQuery, useGetSuggestedTariffsQuery } from "@/redux/features/order/orderApi";
import TariffSection from "./_components/MainServices/TariffSection";


export default function page() {

  // get calculation details
  const { data: calculationDetails } = useGetCalculationDetailsQuery();
  const { data: suggestedTariffs } = useGetSuggestedTariffsQuery();



  return (
    <div className="w-full">
  <div
    className="
      max-w-[1272px] mx-auto 
      grid gap-6 
      px-4 
      md:grid-cols-[260px_1fr] 
      lg:grid-cols-[320px_1fr]
    "
  >
    {/* Sidebar */}
    <div className="w-full">
      <FilterSidebar calculationDetails={calculationDetails?.data} />
    </div>

    {/* Main content */}
    <div className="flex flex-col gap-6 w-full">
      <ComparisonSummaryCard calculationDetails={calculationDetails?.data} />
      {/* <AllSection /> */}
      <TariffSection title="Tarife" tariffs={ suggestedTariffs?.data || []} />
    </div>
  </div>
</div>

  );
}
