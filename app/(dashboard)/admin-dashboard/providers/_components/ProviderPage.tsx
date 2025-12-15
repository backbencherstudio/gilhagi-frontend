"use client"

import { CustomTabs } from "@/components/dashoboard/CustomTabs";
import HeadingTitle from "@/components/dashoboard/HeadingTittle";
import React from "react";
import ProviderTable from "./ProviderTable";
import TariffTable from "./TariffTable";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

export default function ProviderPage() {
  const [postalCode, setPostalCode] = useState<string>("1010");
  const tabs = [
    {
      value: "provider-table",
      label: "Aktive Verträge",
      content: <ProviderTable postalCode={postalCode} />,
    },
    {
      value: "tariff-table",
      label: "Warten auf Bearbeitung",
      content: <TariffTable postalCode={postalCode} />,
    },
  ];

  return (
    <div className="space-y-6 w-full">
      {/* heading and search */}
      <div>
        <HeadingTitle
          title="Anbieter- & Tarifverwaltung"
          subtitle="Verwalten Sie Energieanbieter und deren Tarifangebote"
        />
      </div>

      <div className="flex items-center gap-3">
        <p className="text-sm text-muted-foreground">Postleitzahl auswählen</p>
        <Select value={postalCode} onValueChange={(v) => setPostalCode(v)}>
          <SelectTrigger className="w-40">
            <SelectValue placeholder="PLZ" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1010">1010</SelectItem>
            <SelectItem value="1020">1020</SelectItem>
            <SelectItem value="1030">1030</SelectItem>
            <SelectItem value="1040">1040</SelectItem>
            <SelectItem value="1050">1050</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* tabs */}

      <div className="flex items-center gap-2.5 self-stretch  [background:var(--Background-White,#FFF)] p-2 rounded-[10px] border-solid">
        <CustomTabs defaultValue="provider-table" tabs={tabs} />
      </div>
    </div>
  );
}
