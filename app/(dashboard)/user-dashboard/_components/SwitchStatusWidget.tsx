import React from "react";

const STATUS_CONFIG = {
  processing: {
    title: "Wir bearbeiten Ihren Auftrag.",
    subtitle: "Wir halten Sie per E-Mail über den aktuellen Stand auf dem Laufenden.",
    badge: "In Bearbeitung",
    badgeClass: "bg-blue-50 text-blue-700 border-blue-200",
    iconClass: "bg-blue-50 text-blue-700",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },

  completed: {
    title: "Wechsel erfolgreich durchgeführt.",
    subtitle: "Nächster Wechsel nächstes Jahr möglich.",
    badge: "Abgeschlossen",
    badgeClass: "bg-emerald-50 text-emerald-700 border-emerald-200",
    iconClass: "bg-emerald-50 text-emerald-700",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },

  error: {
    title: "Ihr Wechsel benötigt Aufmerksamkeit.",
    subtitle: "Bitte prüfen Sie Ihre E-Mails für weitere Informationen.",
    badge: "Benötigt Aktion",
    badgeClass: "bg-amber-50 text-amber-700 border-amber-200",
    iconClass: "bg-amber-50 text-amber-700",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.998-.833-2.732 0L4.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
      </svg>
    ),
  },
};

interface SwitchStatusWidgetProps {
  status?: keyof typeof STATUS_CONFIG;
  className?: string;
}

export default function SwitchStatusWidget({
  status = "processing",
  className = "",
}: SwitchStatusWidgetProps) {
  const config = STATUS_CONFIG[status] ?? STATUS_CONFIG.processing;

  return (
    <section
      className={`rounded-2xl border border-[#E2E8EE] bg-white p-5 shadow-sm ${className}`}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-3">
          <div className={`mt-1 p-2 rounded-lg ${config.iconClass}`}>
            {config.icon}
          </div>

          <div>
            <p className="text-sm font-semibold text-[#1C2022] mb-1">
              Aktueller Wechselstatus
            </p>
            <h4 className="text-base md:text-lg font-semibold text-[#1C2022]">
              {config.title}
            </h4>
            <p className="text-sm text-[#5F728B] mt-1">
              {config.subtitle}
            </p>
          </div>
        </div>

        <span
          className={`shrink-0 rounded-full border px-3 py-1.5 text-xs font-semibold ${config.badgeClass}`}
        >
          {config.badge}
        </span>
      </div>
    </section>
  );
}
