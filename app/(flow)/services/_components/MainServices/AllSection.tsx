"use client";

import { useGetAllTariffsUsersQuery } from "@/redux/features/terrif/teriffApi";
import { bestProviderData, sponsorData, topMatchData } from "../../page";
import TariffSection from "./TariffSection";
import { CloudCog } from "lucide-react";

export default function AllSection() {
  const allTariffs = [...sponsorData, ...topMatchData, ...bestProviderData];

  const { data: tariffsUsers } = useGetAllTariffsUsersQuery(undefined);
 

  return (
    <>
      <TariffSection title="Tarife" tariffs={tariffsUsers || []} />
    </>
  );
}
