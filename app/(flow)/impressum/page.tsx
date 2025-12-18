"use client";

export default function Page() {
  return (
    <div className="mt-24 py-8 md:py-20  px-4 md:px-8 lg:px-0">
      <div className="w-full max-w-[1160px] mx-auto border border-[#E2E8EE] bg-white rounded-3xl p-4 md:p-8 space-y-6">
        <header>
          <h1 className="text-2xl md:text-3xl font-semibold text-[#1C2022] mb-2">
            Impressum
          </h1>
          <p className="text-sm md:text-base text-[#5F728B] leading-[140%] max-w-2xl">
            Diese Angaben dienen als Platzhalter und können später durch die
            offiziellen Unternehmensdaten ersetzt werden.
          </p>
        </header>

        <section className="space-y-2 text-sm md:text-base leading-[150%] text-[#1C2022]">
          <p className="font-semibold">
            Wechselsicher – Immer der beste Stromvertrag
          </p>
          <p>[Unternehmensname]</p>
          <p>[Straße und Hausnummer]</p>
          <p>[PLZ und Ort]</p>
          <p>Deutschland</p>
        </section>

        <section className="space-y-1 text-sm md:text-base leading-[150%] text-[#5F728B]">
          <p>
            Telefon: <span className="text-[#1C2022]">+49 (0) 123 456 789</span>
          </p>
          <p>
            E-Mail:{" "}
            <span className="text-[#1C2022]">support@Wechselsicher.com</span>
          </p>
          <p>
            Geschäftsführung:{" "}
            <span className="text-[#1C2022]">
              [Name der verantwortlichen Person]
            </span>
          </p>
          <p>
            Registergericht:{" "}
            <span className="text-[#1C2022]">[Amtsgericht XY]</span>
          </p>
          <p>
            Handelsregister-Nummer:{" "}
            <span className="text-[#1C2022]">HRB [Nummer]</span>
          </p>
          <p>
            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:{" "}
            <span className="text-[#1C2022]">DE[Nummer]</span>
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-[#1C2022]">
            Haftungshinweis
          </h2>
          <p className="text-sm md:text-base leading-[150%] text-[#5F728B]">
            Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine
            Haftung für die Inhalte externer Links. Für den Inhalt der
            verlinkten Seiten sind ausschließlich deren Betreiber
            verantwortlich.
          </p>
        </section>
      </div>
    </div>
  );
}
