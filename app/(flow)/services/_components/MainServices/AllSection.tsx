"use client";

import { useGetAllTariffsUsersQuery } from "@/redux/features/terrif/teriffApi";

import TariffSection from "./TariffSection";


export default function AllSection() {
  
  const { data: tariffsUsers } = useGetAllTariffsUsersQuery(undefined);
 

  return (
    <>
      <TariffSection title="Tarife" tariffs={tariffsUsers || []} />
    </>
  );
}
