"use client";

export default function Page() {
  return (
    <div className="mt-24 py-8 md:py-20 px-4 md:px-8 lg:px-0">
      <div className="w-full max-w-[1160px] mx-auto border border-[#E2E8EE] bg-white rounded-3xl p-4 md:p-8 space-y-6">
        <header>
          <h1 className="text-2xl md:text-3xl font-semibold text-[#1C2022] mb-2">
            Impressum
          </h1>
        </header>

        {/* Company info */}
        <section className="space-y-2 text-sm md:text-base leading-[150%] text-[#1C2022]">
          <p className="font-semibold">
            Wechselsicher – Immer der beste Stromvertrag
          </p>
          <p>Wechselsicher GmbH</p>
          <p>Uferzeile 1</p>
          <p>4702 Wallern an der Trattnach</p>
          <p>Österreich</p>
        </section>

        {/* Legal & contact */}
        <section className="space-y-1 text-sm md:text-base leading-[150%] text-[#5F728B]">
          <p>
            Telefon:{" "}
            <span className="text-[#1C2022]">+41 78 447 44 67</span>
          </p>
          <p>
            E-Mail:{" "}
            <span className="text-[#1C2022]">
              support@wechselsicher.at
            </span>
          </p>
          <p>
            Firmenbuchnummer:{" "}
            <span className="text-[#1C2022]">FN 669628 y</span>
          </p>
          <p>
            Firmenbuchgericht:{" "}
            <span className="text-[#1C2022]">
              Landesgericht Wels
            </span>
          </p>
          <p>
            Geschäftsführung:{" "}
            <span className="text-[#1C2022]">
              Max Beispiel
            </span>
          </p>
        </section>

        {/* Liability */}
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
