import React from "react";

const ProgressStepper = ({ currentStep = 2 }) => {
  const steps = [
    {
      title: "Bestätigung des Eingangs",
      description:
        "Sie erhalten in den nächsten Minuten eine E-Mail-Bestätigung von uns.",
    },
    {
      title: "Antragsprüfung",
      description: "Ihr Antrag wird von uns an den Anbieter weitergeleitet.",
    },
    {
      title: "Vertragsbestätigung",
      description:
        "Nachdem Ihr Antrag erfolgreich geprüft wurde, erhalten Sie Ihre Vertragsunterlagen direkt von Vattenfall Sales.",
    },
  ];

  const progressPercentage = ((currentStep - 1) / (steps.length - 1)) * 100;

  return (
    <div className="w-full max-w-5xl mx-auto px-4">
      <div className="relative">

        {/* ==============================
            CONNECTING LINE (Desktop only)
        =============================== */}
        <div
          className="hidden md:flex absolute top-6 left-0 w-full h-1 z-10 items-center"
          style={{ paddingLeft: "16.66%", paddingRight: "16.66%" }}
        >
          <div className="w-full h-full bg-gray-200 rounded relative">
            <div
              className="absolute top-0 left-0 h-full bg-emerald-500 rounded transition-all duration-500 ease-out"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>

        {/* ==============================
            STEPS (Responsive layout)
        =============================== */}
        <div className="flex flex-col md:flex-row md:justify-between w-full gap-10 md:gap-0 mt-10 md:mt-0">
          {steps.map((step, index) => {
            const isCompleted = index < currentStep;

            return (
              <div key={index} className="flex flex-col items-center flex-1">

                {/* Circle */}
                <div
                  className={`w-12 h-12 rounded-full border-2 flex items-center justify-center bg-white z-10 transition-colors duration-300
                      ${isCompleted ? "border-emerald-500" : "border-gray-300"}
                  `}
                >
                  {isCompleted ? (
                    <svg
                      className="w-5 h-5 text-emerald-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <polyline
                        points="20 6 9 17 4 12"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ) : (
                    <div className="w-full h-full rounded-full"></div>
                  )}
                </div>

                {/* Text */}
                <div className="mt-3 text-center px-2 max-w-xs">
                  <h3 className="text-gray-900 font-semibold text-sm md:text-base mb-1">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProgressStepper;
