import Leaf from "@/components/icons/LeafIcon";
import { Info } from "lucide-react";
import React from "react";

export default function SponsorSection() {
  return (
    <>
      {/* Sponsor */}
      <section className="p-6 bg-white rounded-2xl">
        <h5 className="text-[#1C2022]  text-lg font-semibold leading-[160%] mb-6">
          Sponsor
        </h5>

        <div className="flex flex-col items-start self-stretch [background:#F07901] rounded-t-2xl px-8 py-1 text-white">
          Top-Service: Servicequalität zertifiziert von TÜV Süd
        </div>
        {/* main card */}
        <div className="p-8 rounded-x-[14px] rounded-b-[14px] border border-[#D8DEE4] [background:var(--Background-Normal,#F0F6FA)] flex justify-between">
          <div>
            {/* rating */}
            <div className="flex gap-2.5 mb-3">
              <div className="flex items-center gap-0.5">
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </div>
              <span className="text-[#5F728B]  font-medium leading-[160%] tracking-[0.08px]">
                4.8
              </span>
            </div>

            {/* title */}
            <div className="mb-2">
              <div className="flex gap-4">
                <p className="text-[#1C2022]  text-2xl font-semibold leading-[130%] tracking-[0.12px]">
                  SolarWind Plus
                </p>
                <div className="flex justify-center items-center gap-1.5 border px-3 py-1 rounded-3xl border-solid border-[#00B57A] ">
                  <Leaf />
                  <span className="text-[#00B57A]  text-xs font-medium leading-[132%] tracking-[0.06px]">
                    Grüne Energie
                  </span>
                </div>
              </div>
            </div>

            {/* info */}
            <div className="max-w-[494px]">
              <p className="text-[#5F728B] text-lg font-normal mb-4 leading-[160%]">
                <span>Arbeitspreis: 31,23 ct/kWh</span> |
                <span>
                  Grundpreis: 7,80 €/Monat plus 15% Neukundenbonus (110 €)
                </span>{" "}
                |<span>plus 60 € Sofortbonus</span>
              </p>

              <div className="text-[#5F728B]">
                <p className="flex gap-1 items-center">
                  <Info className="w-[18px] h-[18px] " />
                  <span>Preisgarantie: 12 Monate</span>
                </p>
                <p className="flex gap-1 items-center">
                  <Info className="w-[18px] h-[18px] " />
                  <span>Mindestlaufzeit: 12 Monate</span>
                </p>
              </div>
            </div>
          </div>

          {/* ----------------RIGHT-------------------- */}
          <div className="flex flex-col  justify-between text-right">
            <div>
              <h2 className="text-[#1C2022]  text-[40px] font-semibold leading-[130%] ">
                82 €/Monat
              </h2>
              <p className="text-[#5F728B]  text-lg font-medium leading-[160%]">
                681,73 € jährliche Einsparungen
              </p>
            </div>

            <div>
              <button className="card-btn w-full cursor-pointer">
                Jetzt wechseln
              </button>
              <p className="text-[#085EC4] text-center mt-4 text-lg font-medium leading-[100%] underline underline-offset-6 ">
                Tarifdetails
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TOP match */}
      <section className="p-6 bg-white rounded-2xl ">
        <div className="mb-6">
          <h5 className="text-[#1C2022]  text-lg font-semibold leading-[160%] ">
            Top Match
          </h5>
          <p className="text-[#5F728B]  text-lg font-normal leading-[160%]">
            Berlin / Mitte - 6 von 220 Tarifen ab 47,27 €/Monat
          </p>
        </div>

        {/* main card */}
        <div className="p-8 rounded-[14px] border border-[#D8DEE4] [background:var(--Background-Normal,#F0F6FA)] flex justify-between relative">
          {/* tag */}

          <div className="inline-flex flex-col items-start self-stretch [background:#F07901] rounded-2xl px-3 py-1 text-white absolute -top-4.5 ">
            Top-Service: Servicequalität zertifiziert von TÜV Süd
          </div>

          <div>
            {/* rating */}
            <div className="flex gap-2.5 mb-3">
              <div className="flex items-center gap-0.5">
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </div>
              <span className="text-[#5F728B]  font-medium leading-[160%] tracking-[0.08px]">
                4.8
              </span>
            </div>

            {/* title */}
            <div className="mb-2">
              <div className="flex gap-4">
                <p className="text-[#1C2022]  text-2xl font-semibold leading-[130%] tracking-[0.12px]">
                  SolarWind Plus
                </p>
                <div className="flex justify-center items-center gap-1.5 border px-3 py-1 rounded-3xl border-solid border-[#00B57A] ">
                  <Leaf />
                  <span className="text-[#00B57A]  text-xs font-medium leading-[132%] tracking-[0.06px]">
                    Grüne Energie
                  </span>
                </div>
              </div>
            </div>

            {/* info */}
            <div className="max-w-[494px]">
              <p className="text-[#5F728B] text-lg font-normal mb-4 leading-[160%]">
                <span>Arbeitspreis: 31,23 ct/kWh</span> |
                <span>
                  Grundpreis: 7,80 €/Monat plus 15% Neukundenbonus (110 €)
                </span>{" "}
                |<span>plus 60 € Sofortbonus</span>
              </p>

              <div className="text-[#5F728B]">
                <p className="flex gap-1 items-center">
                  <Info className="w-[18px] h-[18px] " />
                  <span>Preisgarantie: 12 Monate</span>
                </p>
                <p className="flex gap-1 items-center">
                  <Info className="w-[18px] h-[18px] " />
                  <span>Mindestlaufzeit: 12 Monate</span>
                </p>
              </div>
            </div>
          </div>

          {/* ----------------RIGHT-------------------- */}
          <div className="flex flex-col  justify-between text-right">
            <div>
              <h2 className="text-[#1C2022]  text-[40px] font-semibold leading-[130%] ">
                82 €/Monat
              </h2>
              <p className="text-[#5F728B]  text-lg font-medium leading-[160%]">
                681,73 € jährliche Einsparungen
              </p>
            </div>

            <div>
              <button className="card-btn w-full cursor-pointer">
                Jetzt wechseln
              </button>
              <p className="text-[#085EC4] text-center mt-4 text-lg font-medium leading-[100%] underline underline-offset-6 ">
                Tarifdetails
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bester Anbieter */}
      <section className="p-6 bg-white rounded-2xl">
        <div className="mb-6">
          <h5 className="text-[#1C2022]  text-lg font-semibold leading-[160%] ">
            Bester Anbieter
          </h5>
          <p className="text-[#5F728B]  text-lg font-normal leading-[160%]">
            Berlin / Mitte - 6 von 220 Tarifen ab 47,27 €/Monat
          </p>
        </div>

        {/* main card */}
        <div className="p-8 rounded-[14px] border border-[#D8DEE4] [background:var(--Background-Normal,#F0F6FA)] flex justify-between">
          <div>
            {/* rating */}
            <div className="flex gap-2.5 mb-3">
              <div className="flex items-center gap-0.5">
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </div>
              <span className="text-[#5F728B]  font-medium leading-[160%] tracking-[0.08px]">
                4.8
              </span>
            </div>

            {/* title */}
            <div className="mb-2">
              <div className="flex gap-4">
                <p className="text-[#1C2022]  text-2xl font-semibold leading-[130%] tracking-[0.12px]">
                  SolarWind Plus
                </p>
                <div className="flex justify-center items-center gap-1.5 border px-3 py-1 rounded-3xl border-solid border-[#00B57A] ">
                  <Leaf />
                  <span className="text-[#00B57A]  text-xs font-medium leading-[132%] tracking-[0.06px]">
                    Grüne Energie
                  </span>
                </div>
              </div>
            </div>

            {/* info */}
            <div className="max-w-[494px]">
              <p className="text-[#5F728B] text-lg font-normal mb-4 leading-[160%]">
                <span>Arbeitspreis: 31,23 ct/kWh</span> |
                <span>
                  Grundpreis: 7,80 €/Monat plus 15% Neukundenbonus (110 €)
                </span>{" "}
                |<span>plus 60 € Sofortbonus</span>
              </p>

              <div className="text-[#5F728B]">
                <p className="flex gap-1 items-center">
                  <Info className="w-[18px] h-[18px] " />
                  <span>Preisgarantie: 12 Monate</span>
                </p>
                <p className="flex gap-1 items-center">
                  <Info className="w-[18px] h-[18px] " />
                  <span>Mindestlaufzeit: 12 Monate</span>
                </p>
              </div>
            </div>
          </div>

          {/* ----------------RIGHT-------------------- */}
          <div className="flex flex-col  justify-between text-right">
            <div>
              <h2 className="text-[#1C2022]  text-[40px] font-semibold leading-[130%] ">
                82 €/Monat
              </h2>
              <p className="text-[#5F728B]  text-lg font-medium leading-[160%]">
                681,73 € jährliche Einsparungen
              </p>
            </div>

            <div>
              <button className="card-btn w-full cursor-pointer">
                Jetzt wechseln
              </button>
              <p className="text-[#085EC4] text-center mt-4 text-lg font-medium leading-[100%] underline underline-offset-6 ">
                Tarifdetails
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

const StarIcon = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.8015 3.83L12.4199 7.09417C12.5415 7.34 12.7765 7.51002 13.049 7.54918L16.7848 8.08914C17.4698 8.18831 17.7432 9.02832 17.2473 9.50999L14.5465 12.1308C14.349 12.3225 14.259 12.5983 14.3056 12.8692L14.9231 16.4558C15.0481 17.1833 14.284 17.7383 13.629 17.3958L10.389 15.7C10.1457 15.5725 9.85567 15.5725 9.61317 15.7L6.37566 17.3942C5.71982 17.7375 4.95313 17.1816 5.07897 16.4525L5.69654 12.8692C5.74321 12.5983 5.65315 12.3225 5.45565 12.1308L2.75485 9.50999C2.25818 9.02832 2.53146 8.18831 3.21729 8.08914L6.95315 7.54918C7.22482 7.51002 7.45982 7.34 7.58232 7.09417L9.20067 3.83C9.5265 3.1675 10.4732 3.1675 10.8015 3.83Z"
        fill="#F9C80E"
      />
    </svg>
  );
};
