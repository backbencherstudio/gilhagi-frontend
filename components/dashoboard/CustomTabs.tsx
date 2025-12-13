import { ReactNode } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../ui/tabs";

interface Tab {
  value: string;
  label: string;
  content: ReactNode;
  icon?: ReactNode;
}

interface TabsProps {
  tabs: Tab[];
  defaultValue: string;
}

export function CustomTabs({ tabs, defaultValue }: TabsProps) {
  return (
    <Tabs defaultValue={defaultValue} className="w-full">
      <div className="border border-[#E2E8EE] rounded-lg bg-white overflow-x-auto">
        <TabsList
          className="
            bg-transparent
            flex
            w-max
            min-w-full
            gap-2
            p-2
            h-auto
          "
        >
          {tabs.map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className="
                flex items-center justify-center
                gap-2
                border border-[#E2E8EE]
                bg-white
                text-[#085EC4]
                cursor-pointer
                rounded-md

                px-3 py-2
                text-xs

                sm:px-4 sm:py-2.5 sm:text-sm
                md:px-5 md:text-sm
                h-auto
                whitespace-nowrap
              "
            >
              {tab.icon && (
                <span className="flex items-center text-sm sm:text-base">
                  {tab.icon}
                </span>
              )}
              <span>{tab.label}</span>
            </TabsTrigger>
          ))}
        </TabsList>
      </div>

      {tabs.map((tab) => (
        <TabsContent
          key={tab.value}
          value={tab.value}
          className="mt-4"
        >
          {tab.content}
        </TabsContent>
      ))}
    </Tabs>
  );
}
