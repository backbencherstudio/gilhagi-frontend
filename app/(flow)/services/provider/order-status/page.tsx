import React from "react";
import Link from "next/link";

const ConfirmationPage = () => {
  // Set initial step to 1 (confirmation of receipt)
  const currentStep = 1;

  return (
    <div className="min-h-screen bg-gray-50 ">
      <div className="max-w-5xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center">
              <svg 
                className="w-8 h-8 text-emerald-600" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Bestellung erfolgreich eingereicht!
          </h1>
          <p className="text-gray-600 text-lg">
            Vielen Dank für Ihre Anfrage bei Wechselsicher
          </p>
        </div>

        {/* Progress Stepper */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-8 mb-8">
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              So geht es weiter
            </h2>
            <p className="text-gray-600">
              Hier sehen Sie die nächsten Schritte Ihres Wechsels
            </p>
          </div>
          
          <ProgressStepper currentStep={currentStep} />
        </div>

        {/* Important Information */}
        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 md:p-8 mb-8">
          <div className="flex items-start">
            <svg 
              className="w-6 h-6 text-blue-600 mt-0.5 mr-3 flex-shrink-0" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <div>
              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                Wichtige Informationen für Sie
              </h3>
              <ul className="text-blue-800 space-y-2">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>In den nächsten 5-10 Minuten erhalten Sie eine Bestätigungs-E-Mail von Wechselsicher.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Innerhalb von 1-2 Werktagen erhalten Sie die Vertragsunterlagen direkt vom neuen Anbieter.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Bitte prüfen Sie auch Ihren Spam-Ordner, falls Sie keine E-Mail erhalten sollten.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Ihr bisheriger Vertrag wird automatisch vom neuen Anbieter gekündigt.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/dashboard" 
            className="inline-flex items-center justify-center px-6 py-3 bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-700 transition-colors"
          >
            Zum Dashboard
            <svg 
              className="w-5 h-5 ml-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
          
          <button className="inline-flex items-center justify-center px-6 py-3 bg-white text-gray-700 font-medium rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors">
            <svg 
              className="w-5 h-5 mr-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Bestätigung als PDF speichern
          </button>
        </div>

        {/* Support Contact */}
        <div className="mt-12 text-center text-gray-500 text-sm">
          <p className="mb-2">
            Haben Sie Fragen zu Ihrer Bestellung?
          </p>
          <p>
            Kontaktieren Sie uns unter{" "}
            <a href="mailto:support@wechselsicher.de" className="text-emerald-600 hover:text-emerald-700 font-medium">
              support@wechselsicher.de
            </a>{" "}
            oder telefonisch unter{" "}
            <span className="text-emerald-600 font-medium">0800 123 456 789</span>
          </p>
        </div>
      </div>
    </div>
  );
};

// Reusing the ProgressStepper component
const ProgressStepper = ({ currentStep = 1 }) => {
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
        "Nach erfolgreicher Prüfung erhalten Sie Ihre Vertragsunterlagen direkt vom neuen Anbieter.",
    },
  ];

  const progressPercentage = ((currentStep - 1) / (steps.length - 1)) * 100;

  return (
    <div className="w-full">
      <div className="relative">
        {/* CONNECTING LINE (Desktop only) */}
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

        {/* STEPS (Responsive layout) */}
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

export default ConfirmationPage;