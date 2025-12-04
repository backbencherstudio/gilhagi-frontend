import HeadingTitle from "@/components/dashoboard/HeadingTittle";
import ContactStats from "./_components/ContactStats";
import { ContactTable } from "./_components/ActiveContactTable";
import TableTitle from "@/components/dashoboard/TableTitle";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DockIcon, FileText } from "lucide-react";
import { CustomTabs } from "@/components/dashoboard/CustomTabs";
import { ContactProcessingTable } from "./_components/ContactProcessingTable";

export default function page() {
  const tabs = [
    {
      value: "active-contacts",
      label: "Aktive Verträge",
      content: <ContactTable />, // Your dynamic content here
      icon: <FileText />,
    },
    {
      value: "await-processing",
      label: "Warten auf Bearbeitung",
      content: <ContactProcessingTable />,
      icon: <FileText />,
    },
  ];
  return (
    <div>
      <div className="mb-8">
        <HeadingTitle
          title="Vertragsverwaltung"
          subtitle="Verwalten Sie alle Benutzerverträge und Wechselprozesse"
        />
      </div>
      <div className="mb-6">
        <ContactStats />
      </div>
      <div className="space-y-6">
        {/* title */}
        <TableTitle
          title="Contracts"
          subtitle="All your tariff changes at a glance"
        />

        {/*tabs and table table */}
        <div className="">
          <CustomTabs tabs={tabs} defaultValue="active-contacts" />
        </div>
      </div>
    </div>
  );
}
