import { ReactNode } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../ui/tabs";

interface Tab {
  value: string;
  label: string;
  content: ReactNode;
  icon?: ReactNode; // Optional icon
}

interface TabsProps {
  tabs: Tab[];
  defaultValue: string;
}

export function CustomTabs({ tabs, defaultValue }: TabsProps) {
  return (
    <Tabs defaultValue={defaultValue} className="w-full">
      <div className="border border-[#E2E8EE] rounded-lg bg-white">
        <TabsList className="h-11 bg-transparent gap-2.5 ">
          {tabs.map((tab) => (
            <TabsTrigger
              key={tab.value}
              className="h-full border border-[#E2E8EE] bg-[#FFF] px-5 flex items-center justify-center text-[#085EC4] cursor-pointer"
              value={tab.value}
            >
              {tab.icon && <span className="mr-2">{tab.icon}</span>}
              <span>{tab.label}</span>
            </TabsTrigger>
          ))}
        </TabsList>
      </div>

      {tabs.map((tab) => (
        <TabsContent key={tab.value} value={tab.value}>
          {tab.content}
        </TabsContent>
      ))}
    </Tabs>
  );
}
