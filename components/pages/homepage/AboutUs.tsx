import React from "react";

export default function AboutUs() {
  return (
    <section className="w-full bg-white relative mt-10 md:mt-10 ">
      {/* -------------------------LEFT Content--------------------- */}
      {/* white div */}
      <div className="bg-[#F9F9F9] pb-10 md:pb-20 pt-20 md:pt-35 relative px-4 md:px-0">
        <img className=" absolute top-0 left-0 z-0" src="\images\bolt-1.svg" />
        <img className=" absolute top-0 right-0 z-0" src="\images\bolt-2.svg" />
        <div className="max-w-[1320px] mx-auto z-20">
          <div className="md:max-w-[603] ">
            <h2 className="self-stretch text-[#1C2022] text-3xl md:text-5xl font-semibold leading-[130%] mb-4">
              Energie einfach, fair und erschwinglich machen
            </h2>
            <p className="self-stretch text-[#5F728B)] md:text-lg md:font-medium leading-[160%]">
              Wir glauben, dass die Verwaltung Ihres Stroms einfach, transparent
              und fair sein sollte. Deshalb haben wir einen Service entwickelt,
              der Ihnen hilft, das beste Stromangebot automatisch zu finden.
            </p>
          </div>
        </div>
      </div>

      {/* image for mobile */}
      <div className="max-w-[344px]  mx-auto pb-8 block md:hidden">
        <img
          className="w-full h-full overflow-hidden"
          src="\images\about-us.png"
          alt=""
        />
      </div>

      {/* blue div */}
      <div className="bg-[#085EC4] pt-10 md:pt-20 pb-20 md:pb-35 relative px-4 md:px-0">
        <img
          className=" absolute bottom-0 right-0 z-0"
          src="\images\bolt-3.svg"
        />
        <div className="max-w-[1320px] mx-auto ">
          <div className=" max-w-[582px]">
            <h5 className="self-stretch text-[#F2F9FF]  text-xl md:font-semibold leading-[130%] tracking-[0.1px] mb-[21px]">
              Was wir tun
            </h5>

            <p className="self-stretch text-[#C9D7E2)] text-lg font-normal leading-[160%] text-white">
              <span>
                Unsere Plattform hilft Haushalten, die besten Stromanbieter zu
                vergleichen, die besten Tarife zu finden und problemlos zu
                wechseln, alles mit nur wenigen Klicks. Wir stellen sicher, dass
                Sie immer das beste Angebot erhalten, Geld sparen und Zugang zu
                umweltfreundlicheren, nachhaltigeren Energieoptionen haben.
              </span>
              <span className="block mt-8">
                Unsere Mission ist es, Menschen zu ermächtigen, die Kontrolle
                über ihre Stromwahl zu übernehmen und gleichzeitig einen
                positiven Einfluss auf die Umwelt zu haben.
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* -------------------------RIGHT Content-------------------- */}
      <div
        className="hidden md:block absolute z-40 left-[53%] transform top-1/2 -translate-y-1/2  
max-w-[645px] max-h-[766px] "
      >
        <img
          className="w-full h-full overflow-hidden"
          src="\images\about-us.png"
          alt=""
        />
      </div>
    </section>
  );
}
