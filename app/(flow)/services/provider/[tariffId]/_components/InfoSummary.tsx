export default function InformationSummary() {
  return (
    <div className="w-full rounded-2xl border border-gray-200 overflow-hidden ">
      {/* Header */}
      <div className="flex items-center justify-between p-6  border-b bg-[#F8FCFD] ">
        <h2 className="text-lg font-semibold ">Information Summary</h2>
        <button className="text-gray-400 hover:text-gray-600 transition">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652l-9.193 9.193a4.5 4.5 0 01-1.897 1.13L6 17l.526-4.111a4.5 4.5 0 011.13-1.897l9.206-9.206z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
            />
          </svg>
        </button>
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
