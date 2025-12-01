import InformationSummary from "./InfoSummary";
import TariffDetails from "./TariffDetails";

const TariffDetailPage = () => {
  return (
    <div className="max-w-[1160px] mx-auto  flex flex-col flex-[1_0_0] border border-[#E2E8EE)] [background:#FFF] backdrop-blur-[7.400000095367432px] p-8 rounded-3xl border-solid  ">
      {/* user details */}
      <div className="mb-8 text-[#1C2022]  text-[32px] font-semibold leading-[130%]">
        Hello, Mr. Tawhid
      </div>
      {/*content 2 div */}
      <div className="grid grid-cols-[280px_1fr] gap-6 w-full max-w-[1160px] mx-auto mb-10">
        <aside className="">
          <InformationSummary />
        </aside>
        <main className="">
          <TariffDetails />
        </main>
      </div>

      {/* req fileld */}

      <div>
        <h5 className="text-[#1C2022] text-[10px] font-normal leading-[132%] tracking-[0.05px] mb-2">
          * Required field
        </h5>

        <p className="self-stretch text-[#5F728B]  text-[10px] font-normal leading-[132%] tracking-[0.05px]">
          After your switching request has been successfully processed,
          Switchify may send you information about similar energy products or
          relevant service updates to the email address you provided. If you no
          longer wish to receive these emails, you can unsubscribe at any time.{" "}
          <br />
          Simply send a short message to: Switchify Customer Support, [Company
          Address], or email us at support@switchify.com No additional costs
          will be incurred other than the standard transmission fees.
        </p>
      </div>
    </div>
  );
};

export default TariffDetailPage;
