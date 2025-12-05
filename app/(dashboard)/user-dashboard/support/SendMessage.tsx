import { Button } from "@/components/ui/button";
import React from "react";

export default function SendMessage() {
  return (
    <div className="section-div">
      <div>
        <h3 className="self-stretch text-[#1C2022]  text-xl font-medium leading-[130%] tracking-[0.1px] mb-2">
          Nehmen Sie Kontakt mit uns auf{" "}
        </h3>

        <p className="self-stretch text-[#5F728B]  text-base font-normal leading-[140%] tracking-[0.08px]">
          Haben Sie Fragen? Wir helfen Ihnen gerne.
        </p>
      </div>

      {/* subject and msg */}
      <div className="mt-6">
        <label
          htmlFor="Betreff *"
          className="block mb-2 text-[#1C2022] text-base font-medium leading-[140%]"
        >
          Betreff *
        </label>
        <input
          placeholder="Wählen Sie ein Thema"
          className="border border-[#E2E8EE] px-5 py-4 rounded-lg border-solid w-full"
          type="text"
        />
      </div>

      <div>
        <label
          htmlFor="Betreff *"
          className="block mb-2 text-[#1C2022] text-base font-medium leading-[140%] mt-5"
        >
          Nachricht *
        </label>
        <textarea
          className=" border border-[#E2E8EE] px-5 py-4 rounded-lg border-solid min-h-[114px] w-full"
          placeholder="Lassen Sie uns wissen, wie wir Ihnen helfen können...."
          name="message"
          id="message"
        ></textarea>
      </div>

      <Button className="primary-btn mt-8">Nachricht senden</Button>
    </div>
  );
}
