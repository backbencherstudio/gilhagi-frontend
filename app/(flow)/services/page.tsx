import ComparisonSummaryCard from "./_components/MainServices/ComparisonSummaryCard";
import FilterSidebar from "./_components/FilterSidebar/FilterSidebar";
import SponsorSection from "./_components/MainServices/SponsorSection";
import AllSection from "./_components/MainServices/AllSection";

export const sponsorData = [
  {
    id: "sp-1",
    name: "SolarWind Plus",
    rating: 4.8,
    energyPrice: 31.23,
    basePrice: 7.8,
    newCustomerBonus: 110,
    instantBonus: 60,
    guarantee: 12,
    duration: 12,
    price: 82,
    savings: 681.73,
    provider: "SolarWind",
  },
  {
    id: "sp-2",
    name: "EcoPower",
    rating: 4.8,
    energyPrice: 31.23,
    basePrice: 7.8,
    newCustomerBonus: 110,
    instantBonus: 60,
    guarantee: 12,
    duration: 12,
    price: 82,
    savings: 681.73,
    provider: "EcoPower",
  },
];

export const topMatchData = [
  {
    id: "tm-1",
    name: "GrünStrom Deutschland",
    rating: 4.8,
    energyPrice: 31.23,
    basePrice: 7.8,
    newCustomerBonus: 110,
    instantBonus: 60,
    guarantee: 12,
    duration: 12,
    price: 82,
    savings: 681.73,
    provider: "GrünStrom",
  },
];

export const bestProviderData = [
  {
    id: "bp-1",
    name: "NaturEnergie Max",
    rating: 4.9,
    energyPrice: 29.5,
    basePrice: 6.95,
    newCustomerBonus: 100,
    instantBonus: 40,
    guarantee: 24,
    duration: 12,
    price: 79,
    savings: 720.5,
    provider: "NaturEnergie",
  },
  {
    id: "bp-2",
    name: "ÖkoFair Strom",
    rating: 4.7,
    energyPrice: 30.1,
    basePrice: 7.5,
    newCustomerBonus: 80,
    instantBonus: 20,
    guarantee: 12,
    duration: 12,
    price: 85,
    savings: 512.2,
    provider: "ÖkoFair",
  },
];

export default function page() {
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
      <FilterSidebar />
    </div>

    {/* Main content */}
    <div className="flex flex-col gap-6 w-full">
      <ComparisonSummaryCard />

      <AllSection
        sponsorData={sponsorData}
        topMatchData={topMatchData}
        bestProviderData={bestProviderData}
      />
    </div>
  </div>
</div>

  );
}
