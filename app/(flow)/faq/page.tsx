"use client";

import React from "react";

const faqs = [
  {
    question: "Was ist Switchify und wie funktioniert es?",
    answer:
      "Switchify hilft Ihnen dabei, schnell und unkompliziert den passenden Stromtarif zu finden und zu Ihrem neuen Anbieter zu wechseln. Sie wählen einen Tarif, geben Ihre Daten ein und bestätigen – wir kümmern uns um den Rest des Prozesses mit dem neuen Anbieter.",
  },
  {
    question: "Kostet mich der Wechsel über Switchify etwas?",
    answer:
      "Die Nutzung von Switchify ist für Sie als Kundin oder Kunde in der Regel kostenlos. Wir erhalten im Regelfall eine Vergütung vom Energieanbieter. An Ihrem Preis ändert das nichts – Sie zahlen nur den vereinbarten Tarif beim Anbieter.",
  },
  {
    question: "Muss ich meinen alten Stromvertrag selbst kündigen?",
    answer:
      "In vielen Fällen übernimmt der neue Anbieter die Kündigung Ihres bisherigen Vertrags. Wenn Sie jedoch ein Sonderkündigungsrecht nutzen (zum Beispiel bei einer Preiserhöhung) oder Ihre Kündigungsfrist sehr bald abläuft, müssen Sie in der Regel selbst rechtzeitig kündigen. In der Bestätigung weisen wir Sie darauf hin.",
  },
  {
    question: "Ab wann gilt mein neuer Stromtarif?",
    answer:
      "Der Beginn Ihres neuen Stromtarifs hängt von der Kündigungsfrist Ihres bisherigen Vertrags und der Bestätigung des neuen Anbieters ab. Sobald der Wechsel abgeschlossen ist, erhalten Sie eine schriftliche Bestätigung mit dem genauen Startdatum Ihres neuen Tarifs.",
  },
  {
    question: "Sind meine persönlichen Daten bei Switchify sicher?",
    answer:
      "Ja. Wir verwenden Ihre Daten ausschließlich zur Abwicklung des Tarifwechsels und – sofern Sie zugestimmt haben – zur Zusendung relevanter Informationen. Ihre Daten werden gemäß unserer Datenschutzrichtlinie verarbeitet und nicht ohne rechtliche Grundlage an Dritte weitergegeben.",
  },
  {
    question: "Kann ich meine Einwilligung für Informationen jederzeit widerrufen?",
    answer:
      "Ja, Sie können Ihre Einwilligung zur Zusendung von Informationen jederzeit widerrufen. Nutzen Sie dafür einfach den Abmeldelink in unseren E-Mails oder kontaktieren Sie unseren Kundenservice. Weitere Details finden Sie in unserer Datenschutzrichtlinie.",
  },
];

export default function Page() {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="mt-24 py-10 md:py-25 px-4 md:px-8 lg:px-0">
      <div className="w-full max-w-[1160px] mx-auto border border-[#E2E8EE] bg-white rounded-3xl p-4 md:p-8">
        <header className="mb-8 md:mb-10">
          <p className="uppercase text-xs tracking-[0.2em] text-[#5F728B] mb-2">
            Fragen & Antworten
          </p>
          <h1 className="text-2xl md:text-3xl font-semibold text-[#1C2022] mb-2">
            Häufig gestellte Fragen
          </h1>
          <p className="text-sm md:text-base text-[#5F728B] leading-[140%]">
            Alles, was Sie über den Wechsel zu einem neuen Stromtarif mit Switchify
            wissen müssen – modern und übersichtlich im Akkordeon-Stil.
          </p>
        </header>

        <div className="space-y-4 md:space-y-5">
          {faqs.map((item, index) => {
            const isOpen = activeIndex === index;
            return (
              <div
                key={item.question}
                className={`border rounded-2xl bg-[#F8FCFD] transition-shadow duration-300 ${
                  isOpen
                    ? "border-[#085EC4]/40 shadow-lg"
                    : "border-[#E2E8EE]"
                }`}
              >
                <button
                  type="button"
                  onClick={() => handleToggle(index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 p-4 md:p-5 text-left"
                >
                  <h2 className="text-base md:text-lg font-semibold text-[#1C2022]">
                    {item.question}
                  </h2>
                  <span
                    className={`text-[#085EC4] text-2xl leading-none transition-transform duration-300 ${
                      isOpen ? "rotate-45 scale-110" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-in-out border-t ${
                    isOpen
                      ? "grid-rows-[1fr] border-[#E2E8EE] py-4 md:py-5"
                      : "grid-rows-[0fr] border-transparent"
                  }`}
                >
                  <div className="overflow-hidden px-4 md:px-5 text-sm md:text-base text-[#5F728B] leading-[150%]">
                    {item.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
