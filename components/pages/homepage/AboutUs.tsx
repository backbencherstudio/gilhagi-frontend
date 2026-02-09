import React from "react";

export default function AboutUs() {
  return (
    <>
      {/* Desktop/Large Screen Version */}
      <section className="hidden md:block w-full bg-white relative mt-10">
        <div className="relative">
          {/* LEFT Content - White Section */}
          <div className="bg-[#F9F9F9] pb-20 pt-35 relative">
            <img className="absolute top-0 left-0 z-0" src="\images\bolt-1.svg" alt="decoration" />
            <img className="absolute top-0 right-0 z-0" src="\images\bolt-2.svg" alt="decoration" />
            <div className="max-w-[1320px] mx-auto z-20 relative px-4">
              <div className="max-w-[603px]">
                <h2 className="text-[#1C2022] text-5xl font-semibold leading-[130%] mb-4">
                  Energie einfach, fair und erschwinglich machen
                </h2>
                <p className="text-[#5F728B] text-lg font-medium leading-[160%]">
                  Wir glauben, dass die Verwaltung Ihres Stroms einfach, transparent und fair sein sollte. 
                  Deshalb haben wir einen Service entwickelt, der Ihnen hilft, das beste Stromangebot automatisch zu finden.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT Image - Absolute positioned */}
          <div className="absolute z-40 left-[53%] top-1/2 transform -translate-y-1/2 max-w-[645px] max-h-[766px] w-full">
            <img
              className="w-full h-full object-cover rounded-3xl"
              src="/images/about-us2.jpg"
              alt="About us visualization"
            />
          </div>

          {/* Blue Section - "Was wir tun" */}
          <div className="bg-[#085EC4] pt-20 pb-35 relative">
            <img className="absolute bottom-0 right-0 z-0" src="\images\bolt-3.svg" alt="decoration" />
            <div className="max-w-[1320px] mx-auto relative px-4">
              <div className="max-w-[582px]"> {/* Removed ml-auto to align left */}
                <h5 className="text-[#F2F9FF] text-xl font-semibold leading-[130%] tracking-[0.1px] mb-5">
                  Was wir tun
                </h5>
                <div className="text-white text-lg font-normal leading-[160%]">
                  <p className="mb-6">
                    Unsere Plattform hilft Haushalten, die besten Stromanbieter zu vergleichen, 
                    die besten Tarife zu finden und problemlos zu wechseln, alles mit nur wenigen Klicks. 
                    Wir stellen sicher, dass Sie immer das beste Angebot erhalten, Geld sparen und Zugang 
                    zu umweltfreundlicheren, nachhaltigeren Energieoptionen haben.
                  </p>
                  <p>
                    Unsere Mission ist es, Menschen zu ermächtigen, die Kontrolle über ihre Stromwahl 
                    zu übernehmen und gleichzeitig einen positiven Einfluss auf die Umwelt zu haben.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile/Small Screen Version */}
      <section className="block md:hidden w-full bg-white mt-10">
        {/* White Section */}
        <div className="bg-[#F9F9F9] pb-10 pt-20 relative px-4">
          <img className="absolute top-0 left-0 z-0 w-20" src="\images\bolt-1.svg" alt="decoration" />
          <img className="absolute top-0 right-0 z-0 w-20" src="\images\bolt-2.svg" alt="decoration" />
          
          <div className="relative z-10">
            <h2 className="text-[#1C2022] text-3xl font-semibold leading-[130%] mb-4">
              Energie einfach, fair und erschwinglich machen
            </h2>
            <p className="text-[#5F728B] font-medium leading-[160%]">
              Wir glauben, dass die Verwaltung Ihres Stroms einfach, transparent und fair sein sollte. 
              Deshalb haben wir einen Service entwickelt, der Ihnen hilft, das beste Stromangebot automatisch zu finden.
            </p>
          </div>

          {/* Image - Between sections for mobile */}
          <div className="mt-8 mb-8 mx-auto max-w-[344px]">
            <img
              className="w-full h-auto rounded-lg"
           src="/images/about-us2.jpg"
              alt="About us visualization"
            />
          </div>
        </div>

        {/* Blue Section - "Was wir tun" */}
        <div className="bg-[#085EC4] pt-10 pb-20 relative px-4">
          <img className="absolute bottom-0 right-0 z-0 w-20" src="\images\bolt-3.svg" alt="decoration" />
          
          <div className="relative z-10">
            <h5 className="text-[#F2F9FF] text-xl font-semibold leading-[130%] tracking-[0.1px] mb-5">
              Was wir tun
            </h5>
            <div className="text-white font-normal leading-[160%] space-y-6">
              <p>
                Unsere Plattform hilft Haushalten, die besten Stromanbieter zu vergleichen, 
                die besten Tarife zu finden und problemlos zu wechseln, alles mit nur wenigen Klicks. 
                Wir stellen sicher, dass Sie immer das beste Angebot erhalten, Geld sparen und Zugang 
                zu umweltfreundlicheren, nachhaltigeren Energieoptionen haben.
              </p>
              <p>
                Unsere Mission ist es, Menschen zu ermächtigen, die Kontrolle über ihre Stromwahl 
                zu übernehmen und gleichzeitig einen positiven Einfluss auf die Umwelt zu haben.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}