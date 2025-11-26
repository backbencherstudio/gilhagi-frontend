import { Pencil } from "lucide-react";

export default function ComparisonSummaryCard() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm flex flex-col gap-4">
      <div className="">
        {/* top */}
        <div className="flex items-center justify-between mb-8">
          {/* left */}
          <div>
            {/* title */}
            <div className="flex  items-center gap-4 mb-6">
              <p className="text-[#1C2022]  text-xl font-semibold leading-[130%] tracking-[0.1px]">
                Ihr Vergleichstarif zur Berechnung der Einsparungen
              </p>
              <Pencil className="w-[13px] h-[13px]" />
            </div>

            {/* info */}
            <div className="flex gap-[51px]">
              <div>
                <p className="text-[#5F728B]   leading-[160%] tracking-[0.08px]">
                  <span className="text-[#1C2022] font-medium">Anbieter:</span>{" "}
                  Vattenfall Europe Sales GmbH
                </p>
                <p className="text-[#5F728B]  leading-[160%] tracking-[0.08px]">
                  <span className="text-[#1C2022] font-medium">Tarif:</span>{" "}
                  Berlin Basis Privatstrom
                </p>
              </div>
              <div>
                <p className="text-[#5F728B]   leading-[160%] tracking-[0.08px]">
                  <span className="text-[#1C2022] font-medium">
                    Arbeitspreis:
                  </span>{" "}
                  44,39 ct/kWh
                </p>
                <p className="text-[#5F728B]  leading-[160%] tracking-[0.08px]">
                  <span className="text-[#1C2022] font-medium">
                    Grundpreis:
                  </span>{" "}
                  11,60 €/Monat
                </p>
              </div>
            </div>
          </div>

          {/* right */}
          <div className="">
            <h1 className="self-stretch text-[#1C2022] text-right  text-[40px] font-semibold leading-[130%]">
              104,08 €
            </h1>
            <p className="self-stretch text-[#5F728B] text-right  text-lg font-medium leading-[160%]">
              Durchschnitt pro Monat
            </p>
          </div>
        </div>
        {/* bottom */}

        <div className="flex gap-1  items-start  self-stretch [background:var(--Background-Normal,#F0F6FA)] p-3 rounded-lg">
          <p className="text-[#1C2022]  text-sm font-medium leading-[140%] tracking-[0.07px]">
            Hinwels :
          </p>
          <p className="flex-[1_0_0] text-[#5F728B]  text-sm font-normal leading-[140%] tracking-[0.07px]">
            Der Grundversorgungsdienst (mit einer gesetzlich garantierten
            Kündigungsfrist von zwei Wochen) ist als Vergleichstarif
            voreingestellt und kann jederzeit geändert werden. Preisanpassungen
            für den Grundversorgungsdienst können während der Vertragslaufzeit
            erfolgen. Dies wird die angegebenen Einsparungen ändern.
          </p>
        </div>
      </div>
    </div>
  );
}

function BaseProviderInfo() {
  return (
    <div>
      <h3 className="text-lg font-semibold">Vergleichstarif</h3>
      <p className="text-sm text-gray-600">
        Arbeitspreis: 25,1 ct/kWh • Grundpreis: 11,95 €/Monat
      </p>
    </div>
  );
}

function AveragePriceBox() {
  return (
    <div className="bg-gray-100 p-4 rounded-lg text-center">
      <p className="text-3xl font-bold">104,08 €</p>
      <p className="text-sm text-gray-600">
        durchschnittlicher Strompreis pro Monat
      </p>
    </div>
  );
}

// NoticeBox.tsx
function NoticeBox() {
  return (
    <div className="bg-[#FFF7E6] border border-yellow-300 rounded-lg p-3 text-sm text-gray-700">
      Kündigungsfrist beträgt immer 4 Wochen.
    </div>
  );
}
