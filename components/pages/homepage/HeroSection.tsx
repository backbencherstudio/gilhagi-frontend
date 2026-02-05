import CalculateForm from "@/components/pages/homepage/CalculateForm";

export default function Hero() {
  return (
    <section
      className="flex flex-col min-h-[1400px] w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/hero-banner2.jpg')" }}
    >
      {/* Figma Gradient Overlay */}
      <div
        className="absolute inset-0 backdrop-blur-[2px]"
        style={{
          background:
            "linear-gradient(180deg, rgba(7, 27, 43, 0.90) 11.28%, rgba(13, 52, 83, 0.70) 48.63%, rgba(23, 90, 145, 0.00) 99.88%)",
        }}
      ></div>

      {/* Hero Content */}
      <div className="flex-grow flex flex-col items-center justify-center relative z-20 px-4 md:px-8 py-20">
        <h2 className="text-white text-3xl sm:text-4xl md:text-[64px] font-semibold leading-[130%] mb-6 max-w-full md:max-w-[1016px] text-center mt-25">
          Wechseln Sie heute smarter und sichern Sie sich immer den besten
          Stromtarif.
        </h2>

        <p className="max-w-[630px] text-[#C9D7E2] text-center mx-auto text-base font-medium leading-[160%] tracking-[0.08px] mb-14">
          Vergleichen Sie die besten Stromanbieter, wählen Sie den besten
          Tarif für Ihr Zuhause und lassen Sie uns den Wechsel einfach,
          schnell und sicher durchführen.
        </p>

        <CalculateForm />
      </div>
    </section>
  );
}