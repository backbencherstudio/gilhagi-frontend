import React from "react";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

// C:\Users\SVA Delta\Desktop\p2\gilhagi-app\public\features\fea_1.svg
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
    title: "Für Deutsche gemacht",
    description:
      "Speziell für deutsche Haushalte und Energievorschriften entwickelt.",
  },
];

export default function FeatureSection() {
  return (
    <section className="max-w-[1600px] mx-auto py-10 md:py-16 lg:py-25 space-y-8 md:space-y-14 p-4 md:p-0">
      <div>
        <h2 className="max-w-[754px] text-3xl md:text-5xl font-semibold leading-[130%] mb-4">
          Wir verändern die Art und Weise, wie Menschen Strom kaufen
        </h2>

        <p className="md:max-w-[559px] text-[#5F728B] text-lg font-medium leading-[160%]">
          Geben Sie einfach Ihre Postleitzahl und Ihren Jahresverbrauch ein, um
          zu sehen, wie viel Sie sparen können
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {featuresList.map((feature) => (
          <FeatureCard {...feature} key={feature.title} />
        ))}
      </div>
    </section>
  );
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => (
  <div className="p-6 rounded-2xl border border-[#D8DEE4] flex flex-col gap-8 md:gap-10 hover:border-gray-300 hover:shadow  transition-all duration-300 hover:scale-101">
    <img className="md:h-14 md:w-14 w-12 h-12" src={icon} alt="" />
    <div>
      <h2 className="text-[#1C2022] text-2xl font-semibold mb-2 md:mb-4">{title}</h2>
      <p className="text-[#5F728B] text-lg">{description}</p>
    </div>
  </div>
);
