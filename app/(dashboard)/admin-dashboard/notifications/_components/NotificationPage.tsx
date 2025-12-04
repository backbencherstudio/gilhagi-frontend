import HeadingTitle from "@/components/dashoboard/HeadingTittle";
import TableTitle from "@/components/dashoboard/TableTitle";
import { Search } from "lucide-react";
import React from "react";

interface Notification {
  name: string;
  status: string;
  time: string;
  content: string;
  details: string;
}

const notifications: Notification[] = [
  {
    name: "Max Müller",
    status: "Handlung erforderlich",
    time: "15:12 Uhr",
    content: "Zählerfoto hochgeladen",
    details: "Der Benutzer hat ein neues Zählerfoto hochgeladen...",
  },
  {
    name: "Anna Schmidt",
    status: "Ungelesen",
    time: "15:12 Uhr",
    content: "Passwortzurücksetzungsanfrage",
    details:
      "Hallo, Sie haben angefordert, Ihr Passwort zurückzusetzen. Klicken Sie auf den Link unten, um...",
  },
  {
    name: "Sarah Becker",
    status: "Gelesen",
    time: "15:12 Uhr",
    content: "Passwortzurücksetzungsanfrage",
    details:
      "Hallo, Sie haben angefordert, Ihr Passwort zurückzusetzen. Klicken Sie auf den Link unten, um...",
  },
];

export default function NotificationPage() {
  return (
    <div>
      {/* heading title */}
      <HeadingTitle
        title="Benachrichtigungen & Nachrichten"
        subtitle="Verwalten Sie die an Kunden gesendeten Benachrichtigungen"
      />

      {/* All notifications */}
      <section className="space-y-5 self-stretch border border-[#E2E8EE] [background:var(--Background-White,#FFF)] p-5 rounded-2xl border-solid md:mt-8 mt-4">
        <div className="border-b w-full pb-4">
          <TableTitle
            title="Alle Benachrichtigungen"
            subtitle="Alle Ihre Tarifänderungen auf einen Blick"
          />

          <div className="mt-4 flex items-center justify-between">
            <div className="relative w-full max-w-xs">
              <input
                type="text"
                placeholder="Nach Benutzername suchen..."
                className="w-full bg-[#F8FCFD] border border-[#E2E8EE] rounded-lg p-3 pl-10 pr-4 text-sm text-[#5F728B] focus:outline-none focus:ring-2 focus:ring-[#A0B4C2]"
                aria-label="Search by username"
              />
              {/* Search icon */}
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                <Search className="text-gray-400" /> {/* Your Search component */}
              </div>
            </div>
          </div>
        </div>

        {/* all notifications */}
        <div>
          <p className="text-[color:var(--Text-color-Text-01,#1C2022)]  text-base font-medium leading-[140%] w">
            Alle Benachrichtigungen
          </p>
        </div>

        <div className="w-full space-y-4">
          {notifications.map((notification, index) => (
            <div
              key={index}
              className="self-stretch border border-[#E2E8EE] [background:var(--BG-soft,#F8FCFD)] p-4 rounded-lg border-solid"
            >
              <div className="flex items-start ">
                <div className="flex shrink-0 items-center gap-2.5 px-0 py-[3px] w-2 h-2 bg-green-500 rounded-full mt-2 mr-2"></div>

                <div className="w-full">
                  <div className="flex items-center justify-between mb-4 w-full">
                    <span
                      className={`text-[#1C2022]  text-base font-medium leading-[140%] ${notification.status
                        .toLowerCase()
                        .replace(" ", "-")}`}
                    >
                      {notification.status}
                    </span>
                    <span className="text-[#1C2022]  text-xs font-normal leading-[132%] tracking-[0.06px]">
                      {notification.time}
                    </span>
                  </div>
                  <div className="content">
                    <h4 className="text-[#5F728B]  text-base font-medium leading-[140%] ">
                      {notification.name}
                    </h4>
                    <p className="self-stretch text-[#5F728B]  text-sm font-normal leading-[130%] tracking-[0.07px]">
                      {notification.details}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
