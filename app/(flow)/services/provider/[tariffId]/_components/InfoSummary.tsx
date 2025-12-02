export default function InformationSummary() {
  return (
    <div className="w-full rounded-2xl border border-gray-200 overflow-hidden ">
      {/* Header */}
      <div className=" p-6  border-b bg-[#F8FCFD] ">
        <h2 className="text-lg font-semibold ">Information Summary</h2>
    
      </div>
      {/* Content */}
      <div className="space-y-4 p-6">
        {/* Row */}
        <InfoItem
          label="Comparison providers:"
          value="Vattenfall Europe Sales GmbH"
        />

        {/* 2 columns */}
        <div className="grid grid-cols-2 gap-4">
          <InfoItem label="Postal code:" value="10115 Mitte" />
          <InfoItem label="Consumption:" value="44,39 kWh" />
        </div>

        {/* Row */}

        <InfoItem
          label="Comparison tariff:"
          value="Berlin Basic Private Electricity"
        />
      </div>
    </div>
  );
}

// =============================================================================
interface InfoItemProps {
  label: string;
  value: string | React.ReactNode;
}

export function InfoItem({ label, value }: InfoItemProps) {
  return (
    <div>
      <p className="text-[#5F728B] text-sm font-medium leading-[140%] tracking-[0.07px]">
        {label}
      </p>
      <p className="text-[#1C2022] text-base font-medium leading-[140%]">
        {value}
      </p>
    </div>
  );
}
