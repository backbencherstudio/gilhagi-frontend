"use client";

import React, { useState } from "react";
import { CustomTabs } from "@/components/dashoboard/CustomTabs";
import HeadingTitle from "@/components/dashoboard/HeadingTittle";
import ProviderTable from "./ProviderTable";
import TariffTable from "./TariffTable";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ProviderPage() {
  const [postalCode, setPostalCode] = useState<string>("1010");

  const tabs = [
    {
      value: "provider-table",
      label: "Anbieterliste",
      content: <ProviderTable postalCode={postalCode} />,
    },
    {
      value: "tariff-table",
      label: "Tarifverwaltung",
      content: <TariffTable postalCode={postalCode} />,
    },
  ];

  return (
    <div className="w-full space-y-6">
      {/* Überschrift */}
      <HeadingTitle
        title="Anbieter- & Tarifverwaltung"
        subtitle="Verwalten Sie Energieanbieter und deren Tarifangebote"
      />

      {/* Postleitzahl-Auswahl */}
      <div className="flex items-center gap-3">
        <p className="text-sm text-muted-foreground">
          Postleitzahl auswählen
        </p>

        <Select value={postalCode} onValueChange={setPostalCode}>
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

      {/* Tabs */}
      <div className="flex items-center gap-2.5 self-stretch rounded-[10px] bg-white p-2">
        <CustomTabs defaultValue="provider-table" tabs={tabs} />
      </div>
    </div>
  );
}
