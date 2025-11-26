const steps = [
  {
    id: "01",
    title: "Geben Sie Ihre Daten ein",
    description:
      "Teilen Sie uns Ihre Postleitzahl, Ihren aktuellen Anbieter und Ihren durchschnittlichen Stromverbrauch mit. Unser System findet die geeignetsten Tarife in Ihrer Region.",
    icon: "images/timelins/step_1.svg",
  },
  {
    id: "02",
    title: "Vergleichen Sie die besten Angebote",
    description:
      "Sehen Sie sofort vertrauenswürdige Stromanbieter, Preise und Einsparungen. Filtern Sie nach grüner Energie, Festpreisen oder kurzfristigen Verträgen.",
    icon: "images/timelins/step_2.svg",
  },
  {
    id: "03",
    title: "Wir kümmern uns um den Wechsel",
    description:
      "Wählen Sie Ihren bevorzugten Tarif und bestätigen Sie. Wir übernehmen den gesamten Wechselprozess, einschließlich der Kündigung Ihres alten Vertrags.",
    icon: "images/timelins/step_3.svg",
  },
  {
    id: "04",
    title: "Wir kümmern uns um den Wechsel",
    description:
      "Wählen Sie Ihren bevorzugten Tarif und bestätigen Sie. Wir übernehmen den gesamten Wechselprozess, einschließlich der Kündigung Ihres alten Vertrags.",
    icon: "images/timelins/step_4.svg",
  },
];

export default function Timeline() {
  return (
    <div className="relative max-w-6xl mx-auto px-4 md:px-6 lg:px-8 pb-30">
      {/* Center vertical line (desktop only) */}
      <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 border-l-2 border-gray-300 opacity-30 h-[92%]" />

      <div className="space-y-16 mt-4">
        {steps.map((step, idx) => {
          const isLeft = idx % 2 === 0; // alternate sides on desktop

          return (
            <div key={step.id} className="relative">
              {/* Dot on the line (desktop only) */}
              <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center justify-center">
                <div className="w-[22px] h-[22px] border border-[#DADEE4] rounded-full flex items-center justify-center bg-[#0A3F8C]">
                  <span className="block w-3.5 h-3.5 bg-[#DADEE4] rounded-full" />
                </div>
              </div>

              {/* Content */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                {/* Image side */}
                <div
                  className={`flex justify-center lg:justify-${
                    isLeft ? "end" : "start"
                  } order-1 ${
                    isLeft ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <img
                    src={step.icon}
                    alt={step.id}
                    className="w-[150px] h-[150px]"
                  />
                </div>

                {/* Text side */}
                <div
                  className={`order-2 ${
                    isLeft ? "lg:order-2 lg:text-left" : "lg:order-1 lg:text-right"
                  } text-left`}
                >
                  <h3 className="mb-3 text-[#F2F9FF] text-[32px] md:text-[40px] font-semibold leading-[130%]">
                    {step.id}.
                  </h3>
                  <p className="mb-3 text-[#F2F9FF] text-2xl font-medium leading-[130%] tracking-[0.12px]">
                    {step.title}
                  </p>
                  <p className="text-[#C9D7E2] text-base md:text-lg font-medium leading-[160%] tracking-[0.08px]">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
