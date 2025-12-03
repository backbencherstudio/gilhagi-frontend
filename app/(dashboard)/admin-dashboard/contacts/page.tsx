
import HeadingTitle from "@/components/dashoboard/HeadingTittle";
import React from "react";
import ContactStats from "./_components/ContactStats";
import { ContactTable } from "./_components/ContactTable";

export default function page() {
  return (
    <div>
      <div className="mb-8">
        <HeadingTitle
          title="Vertragsverwaltung"
          subtitle="Verwalten Sie alle Benutzerverträge und Wechselprozesse"
        />
      </div>
      <ContactStats />
      <ContactTable/>
    </div>
  );
}
