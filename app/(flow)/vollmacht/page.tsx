import React from "react";

export default function Page() {
  return (
    <div className="mt-24 py-8 md:py-20 px-4 md:px-8 lg:px-0">
      <div className="w-full max-w-[1160px] mx-auto border border-[#E2E8EE] bg-white rounded-3xl p-4 md:p-8 space-y-8">
        <header>
          <h1 className="text-2xl md:text-3xl font-semibold text-[#1C2022] mb-2">
            Vollmacht
          </h1>
        </header>

        {/* Bevollmächtigter */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-[#1C2022]">
            Bevollmächtigter
          </h2>
          <p className="text-sm md:text-base text-[#5F728B] leading-[140%]">
            <span className="font-medium text-[#1C2022]">
              [Unternehmensname]
            </span>
            <br />
            [Straße, Hausnummer]
            <br />
            [PLZ, Ort, Land]
            <br />
            sowie deren Mitarbeiter und Beauftragte.
          </p>
        </section>

        {/* Umfang */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-[#1C2022]">
            Umfang der Vollmacht
          </h2>
          <p className="text-sm md:text-base text-[#5F728B] leading-[140%]">
            Der Bevollmächtigte ist berechtigt, im Namen des Kunden bestehende
            Energielieferverträge zu kündigen sowie neue Energielieferverträge
            im Rahmen eines Lieferantenwechsels abzuschließen.
          </p>
        </section>

        {/* Vertretung */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-[#1C2022]">
            Vertretung gegenüber
          </h2>
          <ul className="list-disc pl-5 text-sm md:text-base text-[#5F728B] space-y-1">
            <li>
              Energielieferanten (Strom und Gas) sowie deren Erfüllungsgehilfen
              und Dienstleister
            </li>
            <li>
              Netzbetreibern, Messstellenbetreibern sowie sonstigen
              Marktteilnehmern, soweit dies zur Einleitung oder Abwicklung eines
              Lieferantenwechsels erforderlich ist
            </li>
          </ul>
        </section>

        {/* Rechte */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-[#1C2022]">
            Rechte aus der Vollmacht
          </h2>
          <p className="text-sm md:text-base text-[#5F728B] leading-[140%]">
            Die Vollmacht umfasst insbesondere das Recht:
          </p>
          <ul className="list-disc pl-5 text-sm md:text-base text-[#5F728B] space-y-1">
            <li>
              Informationen und Dokumente zum bestehenden oder künftigen
              Energielieferverhältnis anzufordern und entgegenzunehmen
              (z. B. Zählpunkt- und Zählerdaten, Vertragsstatus, Bindungs- und
              Kündigungsfristen)
            </li>
            <li>
              Wechselrelevante Daten zu übermitteln und Erklärungen abzugeben,
              die zur Durchführung des Lieferantenwechsels erforderlich sind
              (z. B. Wechselanfrage, Kündigungs- und Wechselmitteilungen)
            </li>
            <li>
              Rückfragen zu beantworten, Statusinformationen zu erhalten und an
              den Kunden weiterzuleiten
            </li>
            <li>
              Den Wechseltermin zu koordinieren sowie erforderliche
              Korrekturen oder Ergänzungen zu veranlassen
            </li>
          </ul>
        </section>

        {/* Footer hint */}
        <footer className="pt-4">
          <p className="text-xs text-[#8A9AAF]">
            Diese Vollmacht gilt ab Erteilung und kann vom Kunden jederzeit
            widerrufen werden.
          </p>
        </footer>
      </div>
    </div>
  );
}
