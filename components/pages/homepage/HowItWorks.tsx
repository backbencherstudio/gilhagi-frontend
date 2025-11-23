import React from "react";
import Timeline from "./Timeline";

const HowItWorks = () => {
  return (
    <section
      id="how-it-works"
      className=" w-full bg-cover bg-center flex flex-col items-center justify-center text-white px-4"
      style={{ backgroundImage: "url('images/how-it-works.png')" }}
    >
      {/* info */}
      <div className="max-w-[1320px] mx-auto py-20 md:py-32 space-y-20 md:space-y-30 ">
        <div className="max-w-[594px] mx-auto">
          <h1 className="self-stretch text-[#F2F9FF)] text-center text-3xl md:text-5xl font-semibold leading-[130%] mb-4">
            Wie es funktioniert
          </h1>
          <p className="self-stretch text-[#C9D7E2] text-center  text-lg font-medium leading-[160%]">
            Der Wechsel Ihres Stromanbieters sollte nicht kompliziert sein. Bei
            uns dauert es nur wenige Minuten und wir kümmern uns um den Rest.
          </p>
        </div>
      </div>

      {/* time line */}

      <Timeline />
    </section>
  );
};

export default HowItWorks;
