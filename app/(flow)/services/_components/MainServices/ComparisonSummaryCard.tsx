import { Pencil } from "lucide-react";

export default function ComparisonSummaryCard({
  calculationDetails,
}: {
  calculationDetails: any;
}) {
  const saving = calculationDetails?.saving;
  const calculation = calculationDetails?.calculation;

  const tariff = saving?.tariff;
  const provider = tariff?.vendor;

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm flex flex-col gap-6">
      {/* ===== TOP SECTION ===== */}
      <div className="flex flex-col lg:flex-row justify-between gap-6">
        {/* LEFT SIDE */}
        <div className="flex-1">
          {/* Title */}
          <div className="flex items-center gap-3 mb-4">
            <p className="text-[#1C2022] text-lg md:text-xl font-semibold leading-snug">
              Ihr Vergleichstarif zur Berechnung der Einsparungen
            </p>
            <Pencil className="w-4 h-4 text-[#085EC4]" />
          </div>

          {/* Provider Information */}
          <div className="flex flex-col sm:flex-row gap-6 text-sm md:text-base">
            <div className="space-y-1">
              <p className="text-[#5F728B] leading-relaxed">
                <span className="text-[#1C2022] font-medium">Anbieter:</span>{" "}
                {provider?.provider_name}
              </p>
              <p className="text-[#5F728B] leading-relaxed">
                <span className="text-[#1C2022] font-medium">Tarif:</span>{" "}
                {tariff?.tariff_name}
              </p>
            </div>

            <div className="space-y-1">
              <p className="text-[#5F728B] leading-relaxed">
                <span className="text-[#1C2022] font-medium">
                  Arbeitspreis:
                </span>{" "}
                {tariff?.price_kwh} ct/kWh
              </p>
              <p className="text-[#5F728B] leading-relaxed">
                <span className="text-[#1C2022] font-medium">
                  Grundpreis:
                </span>{" "}
                {tariff?.basic_fee} € / Monat
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE (PRICE) */}
        <div className="text-right lg:self-start">
          <h1 className="text-[#1C2022] text-3xl md:text-4xl font-semibold leading-tight">
            {calculation?.average_monthly_cost} €
          </h1>
          <p className="text-[#5F728B] text-sm md:text-lg font-medium leading-snug">
            Durchschnitt pro Monat
          </p>
        </div>
      </div>

      {/* ===== NOTICE BOX ===== */}
      <div className="flex gap-2 items-start bg-[#F0F6FA] p-3 rounded-lg">
        <p className="text-[#1C2022] text-sm font-medium">Hinweis:</p>
        <p className="text-[#5F728B] text-sm leading-relaxed">
          Der Grundversorgungsdienst (mit einer gesetzlich garantierten
          Kündigungsfrist von zwei Wochen) ist als Vergleichstarif
          voreingestellt und kann jederzeit geändert werden. Preisanpassungen
          für den Grundversorgungsdienst können während der Vertragslaufzeit
          erfolgen. Dies wird die angegebenen Einsparungen ändern.
        </p>
      </div>
    </div>
  );
}
