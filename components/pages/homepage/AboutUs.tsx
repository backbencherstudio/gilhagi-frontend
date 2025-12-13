import React from "react";

export default function AboutUs() {
  return (
    <section className="w-full bg-white relative mt-10">
      {/* -------------------------LEFT Content--------------------- */}
      <div className="bg-[#F9F9F9] pt-20 pb-10 md:pt-28 md:pb-20 relative px-4 md:px-8">
        {/* Decorative bolts */}
        <img className="absolute top-0 left-0 z-0" src="/images/bolt-1.svg" alt="" />
        <img className="absolute top-0 right-0 z-0" src="/images/bolt-2.svg" alt="" />

        <div className="max-w-[1320px] mx-auto z-10 flex flex-col md:flex-row items-center gap-8 md:gap-16">
          {/* Text content */}
          <div className="md:flex-1 max-w-full md:max-w-[600px]">
            <h2 className="text-[#1C2022] text-3xl sm:text-4xl md:text-5xl font-semibold leading-[130%] mb-4">
              Energie einfach, fair und erschwinglich machen
            </h2>
            <p className="text-[#5F728B] text-base sm:text-lg md:font-medium leading-[160%]">
              Wir glauben, dass die Verwaltung Ihres Stroms einfach, transparent
              und fair sein sollte. Deshalb haben wir einen Service entwickelt,
              der Ihnen hilft, das beste Stromangebot automatisch zu finden.
            </p>
          </div>

          {/* Image for desktop/tablet */}
          <div className="hidden md:block md:flex-1 max-w-[645px]">
            <img
              className="w-full h-auto object-cover"
              src="/images/about-us.png"
              alt=""
            />
          </div>
        </div>
      </div>

      {/* Image for mobile */}
      <div className="block md:hidden max-w-[344px] mx-auto pb-8 px-4">
        <img
          className="w-full h-auto object-cover"
          src="/images/about-us.png"
          alt=""
        />
      </div>

      {/* -------------------------Blue Section-------------------- */}
      <div className="bg-[#085EC4] pt-10 md:pt-20 pb-20 md:pb-32 relative px-4 md:px-8">
        <img className="absolute bottom-0 right-0 z-0" src="/images/bolt-3.svg" alt="" />
        <div className="max-w-[1320px] mx-auto">
          <div className="max-w-full md:max-w-[580px]">
            <h5 className="text-[#F2F9FF] text-xl md:text-2xl font-semibold leading-[130%] tracking-[0.1px] mb-5">
              Was wir tun
            </h5>
            <p className="text-white text-base md:text-lg leading-[160%] font-normal">
              <span>
                Unsere Plattform hilft Haushalten, die besten Stromanbieter zu
                vergleichen, die besten Tarife zu finden und problemlos zu
                wechseln, alles mit nur wenigen Klicks. Wir stellen sicher, dass
                Sie immer das beste Angebot erhalten, Geld sparen und Zugang zu
                umweltfreundlicheren, nachhaltigeren Energieoptionen haben.
              </span>
              <span className="block mt-6 md:mt-8">
                Unsere Mission ist es, Menschen zu ermächtigen, die Kontrolle
                über ihre Stromwahl zu übernehmen und gleichzeitig einen
                positiven Einfluss auf die Umwelt zu haben.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
