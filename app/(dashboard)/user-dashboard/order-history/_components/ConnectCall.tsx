import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import React from "react";

export default function ConnectCall() {
  return (
    <section
      className="
        flex flex-col items-center justify-center gap-6
        rounded-2xl border border-[#E2E8EE]
        bg-[#F8FCFD]
        py-10 px-4
        text-center
        md:py-12
      "
    >
      {/* Icon */}
      <img src="/call.svg" alt="call" className="w-20 h-20 md:w-24 md:h-24" />

      {/* Title */}
      <h4
        className="
          text-[#1C2022]
          font-semibold
          text-xl md:text-2xl
          leading-snug
        "
      >
        Haben Sie noch weitere Fragen?
      </h4>

      {/* Phone Number & Hours */}
      <div className="space-y-1">
        <p
          className="
            text-[#085EC4]
            font-semibold
            text-lg md:text-xl
            flex items-center justify-center gap-2
          "
        >
          <Phone className="w-5 h-5" />
          06221 777 00 10
        </p>

        <p className="text-[#5F728B] text-sm md:text-base leading-relaxed">
          Mo - Fr 8:00 - 22:00 · Sa & So 9:00 - 22:00
        </p>
      </div>

      {/* Call Button */}
      <Button className="primary-btn mt-2 w-full max-w-xs">
        Jetzt anrufen
      </Button>
    </section>
  );
}
