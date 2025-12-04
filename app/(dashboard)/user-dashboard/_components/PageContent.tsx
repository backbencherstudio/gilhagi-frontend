import React from "react";
import HelloSection from "./HelloSection";
import StatsSection from "./StatsSection";
import CurrentContract from "./CurrentContract";

export default function PageContent() {
  return (
    <div className="container space-y-6 mx-auto">
      <HelloSection />
      <StatsSection />

      <section>
        <div className="max-w-[60%]">
          <CurrentContract />
        </div>
        <div className="max-w-[40%]"></div>
      </section>
    </div>
  );
}
