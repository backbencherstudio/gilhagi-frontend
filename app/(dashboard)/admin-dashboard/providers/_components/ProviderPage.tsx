import { CustomTabs } from "@/components/dashoboard/CustomTabs";
import HeadingTitle from "@/components/dashoboard/HeadingTittle";
import React from "react";
import ProviderTable from "./ProviderTable";
import TariffTable from "./TariffTable";

export default function ProviderPage() {
  const tabs = [
    {
      value: "provider-table",
      label: "Aktive Verträge",
      content: <ProviderTable />,
    },
    {
      value: "tariff-table",
      label: "Warten auf Bearbeitung",
      content: <TariffTable />,
    },
  ];

  return (
    <div className="space-y-6 w-full">
      {/* heading and search */}
      <div>
        <HeadingTitle
          title="Provider & Tariff Management"
          subtitle="Verwalten Sie Energieanbieter und deren Tarifangebote"
        />
      </div>

      {/* tabs */}

      <div className="flex items-center gap-2.5 self-stretch  [background:var(--Background-White,#FFF)] p-2 rounded-[10px] border-solid">
        <CustomTabs defaultValue="provider-table" tabs={tabs} />
      </div>
    </div>
  );
}
