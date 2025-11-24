import TariffCard from "./TariffCard";

interface TariffSectionProps {
  title: string;
  subtitle?: string;
  ribbon?: string;
  tariffs: any;
}

export default function TariffSection({
  title,
  subtitle,
  ribbon,
  tariffs,
}: TariffSectionProps) {
  console.log("THis is , ", tariffs);
  return (
    <section className="p-6 bg-white rounded-2xl">
      {/* Title + Subtitle */}
      <div className="mb-6">
        <h5 className="text-[#1C2022] text-lg font-semibold">{title}</h5>
        {subtitle && <p className="text-[#5F728B] text-lg">{subtitle}</p>}
      </div>

      {/* Each tariff card */}

   
      <div className="flex flex-col gap-6">
        {tariffs.map((tariff: any) => {
          return <div key={tariff.id} className="relative">
            {ribbon && (
              <div
                className="inline-flex items-start bg-[#F07901] rounded-2xl px-3 py-1 
                              text-white absolute -top-4 left-6"
              >
                {ribbon}
              </div>
            )}
            <TariffCard tariff={tariff} />
          </div>;
        })}

      
      </div>
    </section>
  );
}
