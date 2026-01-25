"use client";

import { useRouter, useParams } from "next/navigation";
import InformationSummary from "./InfoSummary";
import TariffDetails from "./TariffDetails";
import { useAppSelector } from "@/redux/store/hooks";
import { useGetTariffDetailsQuery } from "@/redux/features/order/orderApi";

const TariffDetailPage = () => {
  const router = useRouter();
  const user = useAppSelector((state: any) => state.auth.user);
  const params = useParams();
  const tariffId = params.tariffId;


  const { data: tariff } = useGetTariffDetailsQuery(tariffId as string) as any;
  const tariffData = tariff?.data;

  const handleSwitch = () => {
    router.push(`/services/provider/${tariffId}/details`);
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
        Hello, {user?.first_name} {user?.last_name}
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
          <InformationSummary tariffData={tariffData} />
        </aside>

        {/* Right / Main */}
        <main>
          <TariffDetails handleSwitch={handleSwitch} tariffData={tariffData} />
        </main>
      </div>

      {/* Required field notice */}
      <div>
        <h5 className="text-[#1C2022] text-xs font-normal tracking-wide mb-2">
          * Required field
        </h5>

        <p className="text-[#5F728B] text-xs leading-relaxed tracking-wide">
          After your switching request has been successfully processed,
          Wechselsicher may send you information about similar energy products
          or relevant service updates to the email address you provided. If you
          no longer wish to receive these emails, you can unsubscribe at any
          time.
          <br />
          Simply send a message to: Wechselsicher Customer Support, [Company
          Address], or email us at support@Wechselsicher.com. No additional
          costs will be incurred other than standard transmission fees.
        </p>
      </div>
    </div>
  );
};

export default TariffDetailPage;
