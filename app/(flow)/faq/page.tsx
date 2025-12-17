"use client";

import Image from "next/image";
import React from "react";

const faqs = [
  {
    question: "Was ist Wechselsicher und wie funktioniert es?",
    answer:
      "Wechselsicher hilft Ihnen dabei, schnell und unkompliziert den passenden Stromtarif zu finden und zu Ihrem neuen Anbieter zu wechseln. Sie wählen einen Tarif, geben Ihre Daten ein und bestätigen – wir kümmern uns um den Rest des Prozesses mit dem neuen Anbieter.",
  },
  {
    question: "Kostet mich der Wechsel über Wechselsicher etwas?",
    answer:
      "Die Nutzung von Wechselsicher ist für Sie als Kundin oder Kunde in der Regel kostenlos. Wir erhalten im Regelfall eine Vergütung vom Energieanbieter. An Ihrem Preis ändert das nichts – Sie zahlen nur den vereinbarten Tarif beim Anbieter.",
  },
  {
    question: "Muss ich meinen alten Stromvertrag selbst kündigen?",
    answer:
      "Wir übernehmen die komplette Kündigung Ihres alten Vertrags für Sie. Sollten Sie von Ihrem Stromanbieter eine Preiserhöhung erhalten, informieren Sie uns bitte, indem Sie die Preiserhöhung im Bereich „Dokumente“ hochladen oder unseren Kundenservice kontaktieren. In diesem Fall prüfen wir, ob ein Wechsel für Sie sinnvoll ist, und führen ihn gegebenenfalls durch.",
  },
  {
    question: "Ab wann gilt mein neuer Stromtarif?",
    answer:
      "Der Beginn Ihres neuen Stromtarifs hängt von der Kündigungsfrist Ihres bisherigen Vertrags ab. Sobald der Wechsel abgeschlossen ist, erhalten Sie eine schriftliche Bestätigung mit dem genauen Startdatum Ihres neuen Tarifs.",
  },
  {
    question: "Sind meine persönlichen Daten bei Wechselsicher sicher?",
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
    <div className="mt-24  md:py-25 px-4 md:px-8 lg:px-0">
      <div className="w-full max-w-[1160px] mx-auto border border-[#E2E8EE] bg-white rounded-3xl p-4 md:p-8">
        <header className="mb-8 md:mb-10 flex flex-col-reverse lg:flex-row lg:items-center gap-6">
          <div>
            <p className="uppercase text-xs tracking-[0.2em] text-[#5F728B] mb-2">
              Fragen & Antworten
            </p>
            <h1 className="text-2xl md:text-3xl font-semibold text-[#1C2022] mb-2">
              Häufig gestellte Fragen
            </h1>
            <p className="text-sm md:text-base text-[#5F728B] leading-[140%]">
              Alles, was Sie über den Wechsel zu einem neuen Stromtarif mit Wechselsicher
              wissen müssen – modern und übersichtlich im Akkordeon-Stil.
            </p>
          </div>
          <div className="w-full lg:w-[320px] shrink-0 flex justify-center lg:justify-end">
            <Image
              src="/q&a.png"
              alt="Illustration für Fragen und Antworten"
              width={320}
              height={240}
              className="w-full h-auto object-contain rounded-2xl"
              priority
            />
          </div>
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