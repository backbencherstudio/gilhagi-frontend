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
  console.log("THis is , ", tariffs?.data?.data);

  const tariffsData = tariffs?.data?.data || [];
  return (
    <section className="p-6 bg-white rounded-2xl">
      {/* Header */}
      <div className="mb-6">
        <h5 className="text-[#1C2022] text-lg font-semibold">{title}</h5>
        {subtitle && <p className="text-[#5F728B] text-base">{subtitle}</p>}
      </div>

      {/* Tariffs */}
      <div className="flex flex-col gap-6">
        {tariffsData.map((tariff: any) => (
          <div key={tariff.id} className="relative">
            {ribbon && (
              <div className="inline-flex items-center bg-[#F07901] rounded-xl px-2 md:px-3 py-1 text-white absolute -top-4 left-4 md:text-sm text-[10px]">
                {ribbon}
              </div>
            )}
            <TariffCard tariff={tariff} />
          </div>
        ))}
      </div>
    </section>
  );
}
