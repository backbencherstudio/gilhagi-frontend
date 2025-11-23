import ComparisonSummaryCard from "./_components/ComparisonSummaryCard/ComparisonSummaryCard";
import FilterSidebar from "./_components/FilterSidebar/FilterSidebar";

export default function page() {
  return (
    <div className="pt-[102px] bg-[#F9FAFB]">
      <div className="max-w-[1272px] mx-auto grid grid-cols-[320px_1fr] gap-6 p ">
        <FilterSidebar />

        <div className="flex flex-col gap-6">
          <ComparisonSummaryCard/>
          {/* <ComparisonSummaryCard />
          <SponsorSection>
            {mockTariffs.map((t) => (
              <TariffCard key={t.id} tariff={t} />
            ))}
          </SponsorSection> */}
        </div>
      </div>
    </div>
  );
}
