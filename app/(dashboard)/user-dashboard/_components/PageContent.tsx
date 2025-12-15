import React from "react";
import HelloSection from "./HelloSection";
import StatsSection from "./StatsSection";
import CurrentContract from "./CurrentContract";
import ContactHistory from "./ContactHistory";
import MonthlyConsumption from "./MonthlyConsumption";
import SwitchStatusWidget from "./SwitchStatusWidget";

export default function PageContent() {
  // TODO: this comes form server
  const switchStatus = "completed"; // "processing" | "completed"

  return (
    <div className="container space-y-6 mx-auto">
      <HelloSection />
      <StatsSection />

      <SwitchStatusWidget status={switchStatus} />

      <section className="flex gap-8 flex-col-reverse md:flex-row">
        <div className="md:max-w-[60%] flex-1">
          <CurrentContract />
          <ContactHistory />
        </div>
        <div className="md:max-w-[40%] flex-1">
          <MonthlyConsumption />
        </div>
      </section>
    </div>
  );
}
