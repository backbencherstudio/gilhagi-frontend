import React from "react";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const featuresList: FeatureCardProps[] = [
  {
    icon: "/features/fea_1.svg",
    title: "Automatischer Wechsel",
    description:
      "Wir überprüfen jeden Vertrag jährlich und wechseln automatisch, wenn wir ein besseres Angebot finden.",
  },
  {
    icon: "/features/fea_2.svg",
    title: "Geld sparen, keine Gebühren",
    description:
      "Sie zahlen nur eine kleine Servicegebühr, wenn wir Ihnen Geld sparen. Andernfalls zahlen Sie nichts.",
  },
  {
    icon: "/features/fea_3.svg",
    title: "Ökostrom-Optionen",
    description:
      "Wählen Sie aus umweltfreundlichen Anbietern, um Ihr Zuhause nachhaltig mit Strom zu versorgen.",
  },
  {
    icon: "/features/fea_4.svg",
    title: "Schnelle und unkomplizierte Einrichtung",
    description:
      "Wir kümmern uns um die Papierarbeit, den Anbieterwechsel und alle Fristen, Sie sparen einfach.",
  },
  {
    icon: "/features/fea_5.svg",
    title: "Unabhängig und transparent",
    description:
      "Unser Vergleich ist 100 % unvoreingenommen, Ihr bestes Angebot steht immer an erster Stelle.",
  },
  {
    icon: "/features/fea_6.svg",
    title: "Für Österreich gemacht",
    description:
      "Speziell für deutsche Haushalte und Energievorschriften entwickelt.",
  },
];

export default function FeatureSection() {
  return (
    <section id="#about" className="max-w-[1600px] mx-auto py-10 md:py-16 lg:py-24 space-y-8 md:space-y-14 px-4 md:px-8">
      <div>
        <h2 className="max-w-full md:max-w-[754px] text-3xl sm:text-4xl md:text-5xl font-semibold leading-[130%] mb-4">
          Wir verändern die Art und Weise, wie Menschen Strom kaufen
        </h2>

        <p className="md:max-w-[559px] text-[#5F728B] text-base sm:text-lg md:text-lg font-medium leading-[160%]">
          Geben Sie einfach Ihre Postleitzahl und Ihren Jahresverbrauch ein, um
          zu sehen, wie viel Sie sparen können
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
        {featuresList.map((feature) => (
          <FeatureCard {...feature} key={feature.title} />
        ))}
      </div>
    </section>
  );
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => (
  <div className="p-6 sm:p-8 rounded-2xl border border-[#D8DEE4] flex flex-col gap-6 md:gap-8 hover:border-gray-300 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
    <img className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16" src={icon} alt={title} />
    <div>
      <h3 className="text-[#1C2022] text-xl sm:text-2xl font-semibold mb-2 md:mb-4">
        {title}
      </h3>
      <p className="text-[#5F728B] text-base sm:text-lg md:text-lg leading-[150%]">
        {description}
      </p>
    </div>
  </div>
);
