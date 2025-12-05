"use client";

import { useRouter } from "next/navigation";
import InformationSummary from "./InfoSummary";
import TariffDetails from "./TariffDetails";

const TariffDetailPage = () => {
  const router = useRouter();

  const handleSwitch = () => {
    router.push(`/services/provider/sp-1/details`);
  };

  return (
    <div
      className="
        max-w-[1160px] mx-auto 
        flex flex-col 
        bg-white 
        border border-[#E2E8EE] 
        backdrop-blur-md 
        p-4 md:p-8 
        rounded-3xl
      "
    >
      {/* Greeting */}
      <h1 className="text-[#1C2022] text-2xl md:text-[32px] font-semibold mb-8">
        Hello, Mr. Tawhid
      </h1>

      {/* Main Content Layout */}
      <div
        className="
          grid 
          grid-cols-1 
          lg:grid-cols-[280px_1fr] 
          gap-6 
          w-full 
          mb-10
        "
      >
        {/* Left / Sidebar */}
        <aside>
          <InformationSummary />
        </aside>

        {/* Right / Main */}
        <main>
          <TariffDetails handleSwitch={handleSwitch} />
        </main>
      </div>

      {/* Required field notice */}
      <div>
        <h5 className="text-[#1C2022] text-xs font-normal tracking-wide mb-2">
          * Required field
        </h5>

        <p className="text-[#5F728B] text-xs leading-relaxed tracking-wide">
          After your switching request has been successfully processed,
          Switchify may send you information about similar energy products or
          relevant service updates to the email address you provided. If you no
          longer wish to receive these emails, you can unsubscribe at any time.
          <br />
          Simply send a message to: Switchify Customer Support, [Company
          Address], or email us at support@switchify.com. No additional costs
          will be incurred other than standard transmission fees.
        </p>
      </div>
    </div>
  );
};

export default TariffDetailPage;
