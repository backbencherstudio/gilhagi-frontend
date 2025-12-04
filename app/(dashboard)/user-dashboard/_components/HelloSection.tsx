import { Sparkles } from "lucide-react";
import React from "react";

export default function HelloSection() {
  return (
    <section className="flex flex-col items-start gap-5 self-stretch border  [background:var(--Primary,#085EC4)] p-8 rounded-2xl border-solid relative ">
      <div className="py-3">
       <div className="flex items-center gap-2 ">
        <Sparkles className="text-white w-8 h-8 " />
         <p className="flex-[1_0_0] text-[color:var(--Text-color-Text-03,#FFF)]  text-base font-normal leading-[140%] tracking-[0.08px]">Switchify-Dashboard</p>
       </div>
        <h1 className="self-stretch text-[color:var(--Text-color-Text-03,#FFF)]  text-[32px] font-semibold leading-[130%] ">Willkommen zurück, Tawhid</h1>
        <p className="self-stretch text-[color:var(--Text-color-Text-04,#CCDAE4)]  text-base font-normal leading-[140%] tracking-[0.08px]">Hier ist Ihre aktuelle Übersicht und Einsparungen.</p>
      </div>

      <div className="absolute bottom-0 top-0 right-8 z-10">
        <img className="h-full" src="/bolt.png" alt="" />
      </div>
      <div className="absolute bottom-0 top-0 right-6 ">
        <img className="h-full w-[90%]" src="/bolt.png" alt="" />
      </div>
      <div className="absolute bottom-0 top-0 right-4 ">
        <img className="h-full w-[80%]" src="/bolt.png" alt="" />
      </div>
    </section>
  );
}
