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
import { useGetPostalCodesQuery } from "@/redux/features/providers/providersApi";

export default function ProviderPage() {

  const { data: postalCodes } = useGetPostalCodesQuery(null);

  const [postalCode, setPostalCode] = useState<string>("");

  const tabs = [
    {
      value: "provider-table",
      label: "Anbieterliste",
      content: <ProviderTable postalCode={postalCode} />, // todo: add postal code
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
      <div className="flex items-center gap-3" translate="no">
        <p className="text-sm text-muted-foreground">
          Postleitzahl auswählen
        </p>

        <Select value={postalCode} onValueChange={setPostalCode}>
          <SelectTrigger className="w-42">
            <SelectValue placeholder="Bereich auswählen" />
          </SelectTrigger>

          <SelectContent>

            <SelectItem value=" ">Alle</SelectItem>
            {postalCodes?.data?.map((code: any) => (
              <SelectItem key={code} value={code}>{code}</SelectItem>
            ))}
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
