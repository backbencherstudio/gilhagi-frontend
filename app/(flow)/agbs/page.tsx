import React from "react";

export default function Page() {
  return (
    <div className="mt-24 py-8 md:py-20 px-4 md:px-8 lg:px-0">
      <div className="w-full max-w-[1160px] mx-auto border border-[#E2E8EE] bg-white rounded-3xl p-4 md:p-8 space-y-8">
        <header>
          <h1 className="text-2xl md:text-3xl font-semibold text-[#1C2022] mb-2">
            Allgemeine Geschäftsbedingungen (AGB)
          </h1>
          <p className="text-sm md:text-base text-[#5F728B] leading-[140%]">
            Wechselsicher GmbH<br />
            Stand: 30.01.2026
          </p>
        </header>

        {/* 1 */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-[#1C2022]">
            1. Geltungsbereich und Begriffe
          </h2>
          <p className="text-sm md:text-base text-[#5F728B] leading-[140%]">
            Diese Allgemeinen Geschäftsbedingungen ("AGB") gelten für alle
            Verträge über Vermittlungs-, Wechsel- und Optimierungsdienstleistungen
            im Bereich Strom und Gas ("Service"), die zwischen der Wechselsicher
            GmbH ("Wechselsicher") und ihren Kunden ("Kunde") geschlossen werden.
          </p>
          <p className="text-sm md:text-base text-[#5F728B] leading-[140%]">
            Wechselsicher ist kein Energielieferant. Energieverträge kommen
            ausschließlich zwischen dem Kunden und dem jeweiligen
            Energielieferanten zustande.
          </p>
        </section>

        {/* 2 */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-[#1C2022]">
            2. Leistungen von Wechselsicher
          </h2>
          <ul className="list-disc pl-5 text-sm md:text-base text-[#5F728B] space-y-1">
            <li>Erfassung der Ausgangssituation (z. B. Verbrauch, Adresse, Zählpunkt).</li>
            <li>Tarifvergleich und Empfehlung geeigneter Angebote.</li>
            <li>Einleitung und Begleitung des Lieferantenwechsels.</li>
            <li>Übermittlung notwendiger Daten an den gewählten Energielieferanten.</li>
            <li>Laufende Überwachung und Optimierung.</li>
          </ul>
          <p className="text-sm md:text-base text-[#5F728B] leading-[140%]">
            Wechselsicher schuldet keine bestimmte Einsparung und kein
            Zustandekommen eines Energieliefervertrags.
          </p>
        </section>

        {/* 3 */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-[#1C2022]">
            3. Vertragsschluss und Kommunikation
          </h2>
          <p className="text-sm md:text-base text-[#5F728B] leading-[140%]">
            Der Vertrag kommt durch Online-Bestätigung, Unterzeichnung oder
            sonstige eindeutige Beauftragung zustande.
          </p>
          <p className="text-sm md:text-base text-[#5F728B] leading-[140%]">
            Die Kommunikation erfolgt elektronisch per E-Mail, Kundenportal oder
            SMS, sofern keine zwingende Schriftform vorgeschrieben ist.
          </p>
        </section>

        {/* 4 */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-[#1C2022]">
            4. Mitwirkungspflichten des Kunden
          </h2>
          <ul className="list-disc pl-5 text-sm md:text-base text-[#5F728B] space-y-1">
            <li>Bereitstellung vollständiger und richtiger Daten.</li>
            <li>Rechtzeitige Reaktion auf Rückfragen.</li>
            <li>Bestätigung von Anbieter- oder Tarifentscheidungen.</li>
          </ul>
        </section>

        {/* 5 */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-[#1C2022]">
            5. Vollmacht und Vertretung
          </h2>
          <p className="text-sm md:text-base text-[#5F728B] leading-[140%]">
            Wechselsicher handelt gegenüber Energielieferanten und Marktteilnehmern
            im Namen des Kunden auf Basis einer gesondert erteilten Vollmacht.
          </p>
        </section>

        {/* 6 */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-[#1C2022]">
            6. Laufzeit und Kündigung
          </h2>
          <p className="text-sm md:text-base text-[#5F728B] leading-[140%]">
            Der Vertrag läuft auf unbestimmte Zeit und kann unter Einhaltung der
            vereinbarten Fristen gekündigt werden.
          </p>
        </section>

        {/* 7 */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-[#1C2022]">
            7. Widerrufsrecht
          </h2>
          <p className="text-sm md:text-base text-[#5F728B] leading-[140%]">
            Verbrauchern steht bei Fernabsatzverträgen ein gesetzliches
            Widerrufsrecht zu. Details sind der Widerrufsbelehrung zu entnehmen.
          </p>
        </section>

        {/* 8 */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-[#1C2022]">
            8. Haftung
          </h2>
          <p className="text-sm md:text-base text-[#5F728B] leading-[140%]">
            Wechselsicher haftet nur bei Vorsatz und grober Fahrlässigkeit sowie bei
            Verletzung wesentlicher Vertragspflichten.
          </p>
        </section>

        {/* 9 */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-[#1C2022]">
            9. Datenschutz und Marketing
          </h2>
          <p className="text-sm md:text-base text-[#5F728B] leading-[140%]">
            Die Verarbeitung personenbezogener Daten erfolgt gemäß der
            Datenschutzerklärung von Wechselsicher.
          </p>
        </section>

        {/* 10 */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-[#1C2022]">
            10. Schlussbestimmungen
          </h2>
          <p className="text-sm md:text-base text-[#5F728B] leading-[140%]">
            Es gilt österreichisches Recht. Für Verbraucher gelten die gesetzlichen
            Gerichtsstände.
          </p>
        </section>
      </div>
    </div>
  );
}
