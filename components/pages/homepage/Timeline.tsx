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
    <div className="relative max-w-6xl mx-auto px-4 pb-[72px]">
      {/* Vertical line */}
      <div className="absolute left-1/2 transform -translate-x-1/2  border-l-2 border-gray-300 w-0.5 h-[95%] shrink-0 opacity-30 [background:#FFF] rounded-lg "></div>

      <div className="space-y-16 mt-4">
        {steps.map((step, idx) => {
          const isLeft = idx % 2 === 0; // alternate sides
          return (
            <div key={idx} className="relative flex  w-full ">
              {/* Dot on the line */}
              {/* <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full z-10 mt-2"></div> */}

              <div className="absolute left-1/2 transform -translate-x-1/2  w-[22px] h-[22px] shrink-0 border rounded-[22px] border-solid border-[#DADEE4] p-4 flex items-center justify-center ">
                <span className="block w-3.5 h-3.5 shrink-0 [background:#DADEE4] rounded-[14px]"></span>
              </div>

              {/* Step content */}
              {isLeft ? (
                <>
                  <div className="w-1/2   flex items-center justify-end pr-26 h-full">
                    <img
                      src={step?.icon}
                      alt={step.id}
                      className="w-[150px] h-[150px] "
                    />
                  </div>
                  <div className="w-1/2 pl-26 text-left">
                    <h3 className="mb-12 text-[#F2F9FF]  text-[40px] font-semibold leading-[130%]">
                      {step.id}.
                    </h3>
                    <p className="mb-4 text-[#F2F9FF]  text-2xl font-medium leading-[130%] tracking-[0.12px]">
                      {step.title}
                    </p>
                    <p className=" self-stretch text-[#C9D7E2] text-base font-medium leading-[160%] tracking-[0.08px]">
                      {step.description}
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div className="w-1/2 pr-26 text-right">

                    <h3 className="mb-12 text-[#F2F9FF]  text-[40px] font-semibold leading-[130%]">
                      {step.id}.
                    </h3>
                    <h3 className="text-xl font-bold text-white">
                      {step.id}. {step.title}
                    </h3>
                    <p className="mt-2 text-gray-300">{step.description}</p>
                  </div>
                  <div className="w-1/2 pl-26 text-left">
                    {" "}
                    <img
                      src={step?.icon}
                      alt={step.id}
                      className="w-[150px] h-[150px] "
                    />
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
