import { CalendarDays } from "lucide-react";
import StatsCards from "./StatsCards";
import { MonthlyChart } from "./MonthlyGraph";
import RecentActivity from "./RecentActivityTable";
import HeadingTitle from "@/components/dashoboard/HeadingTittle";

const OverViewContent = () => {
  return (
    <section className="flex items-center justify-between flex-wrap mb-8 gap-2">
      {/* left */}
      <div className="space-y-2">
        <HeadingTitle
          title="Admin-Übersicht"
          subtitle="Willkommen zurück! Hier ist, was heute bei Switchify passiert."
        />
      </div>
      {/* right */}
      <div className="flex items-center gap-2 ">
        <CalendarDays className="w-5 h-5 text-[#5F728B]" />
        <p className="text-[#5F728B]  text-base font-normal leading-[140%] tracking-[0.08px]">
          Do, 27. Nov
        </p>
      </div>
    </section>
  );
};

export default function OveviewPage() {
  return (
    <div>
      <OverViewContent />
      <StatsCards />
      <MonthlyChart />
      <RecentActivity />
    </div>
  );
}
