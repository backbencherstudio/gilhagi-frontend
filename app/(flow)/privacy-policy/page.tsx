import React from "react";

export default function Page() {
  return (
    <div className="mt-24 py-8 md:py-20 px-4 md:px-8 lg:px-0">
      <div className="w-full max-w-[1160px] mx-auto border border-[#E2E8EE] bg-white rounded-3xl p-4 md:p-8 space-y-8">
        <header>
          <h1 className="text-2xl md:text-3xl font-semibold text-[#1C2022] mb-2">
            Datenschutzrichtlinie
          </h1>
          <p className="text-sm md:text-base text-[#5F728B] leading-[140%]">
            Der Schutz Ihrer personenbezogenen Daten ist uns wichtig. Nachfolgend
            informieren wir Sie darüber, welche Daten wir im Rahmen der Nutzung
            von Switchify verarbeiten und zu welchen Zwecken dies geschieht.
          </p>
        </header>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-[#1C2022]">
            1. Verantwortlicher
          </h2>
          <p className="text-sm md:text-base text-[#5F728B] leading-[140%]">
            Verantwortlich für die Datenverarbeitung im Zusammenhang mit der
            Nutzung von Switchify ist:
            <br />
            <span className="font-medium text-[#1C2022]">
              Switchify – Immer der beste Stromvertrag
            </span>
            <br />
            [Unternehmensname], [Straße, Hausnummer], [PLZ, Ort]
            <br />
            E-Mail: support@switchify.com
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-[#1C2022]">
            2. Welche Daten verarbeiten wir?
          </h2>
          <p className="text-sm md:text-base text-[#5F728B] leading-[140%]">
            Wir verarbeiten insbesondere folgende Kategorien personenbezogener
            Daten:
          </p>
          <ul className="list-disc pl-5 text-sm md:text-base text-[#5F728B] space-y-1">
            <li>
              Stammdaten: z. B. Anrede, Name, Adresse, E-Mail-Adresse,
              Telefonnummer.
            </li>
            <li>
              Vertragsbezogene Daten: z. B. aktuelle und zukünftige
              Stromtarif-Informationen, Anbieter, Zählernummer (soweit erforderlich).
            </li>
            <li>
              Nutzungsdaten: z. B. aufgerufene Seiten, Zeitpunkte des Zugriffs,
              technische Protokolldaten.
            </li>
            <li>
              Kommunikationsdaten: z. B. Inhalte von Anfragen an unseren
              Kundenservice.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-[#1C2022]">
            3. Zwecke und Rechtsgrundlagen der Verarbeitung
          </h2>
          <p className="text-sm md:text-base text-[#5F728B] leading-[140%]">
            Wir verarbeiten Ihre Daten zu den folgenden Zwecken:
          </p>
          <ul className="list-disc pl-5 text-sm md:text-base text-[#5F728B] space-y-1">
            <li>
              Zur Durchführung des Tarifvergleichs und zur Vermittlung des von
              Ihnen gewählten Stromtarifs (Art. 6 Abs. 1 lit. b DSGVO).
            </li>
            <li>
              Zur Erfüllung gesetzlicher Pflichten, z. B. Aufbewahrungsfristen
              (Art. 6 Abs. 1 lit. c DSGVO).
            </li>
            <li>
              Zur Verbesserung unseres Angebots und zur statistischen Auswertung
              (Art. 6 Abs. 1 lit. f DSGVO – berechtigtes Interesse).
            </li>
            <li>
              Zur Zusendung von Informationen zu ähnlichen Energieprodukten oder
              relevanten Service-Updates, sofern Sie hierin eingewilligt haben
              (Art. 6 Abs. 1 lit. a DSGVO).
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-[#1C2022]">
            4. Weitergabe Ihrer Daten
          </h2>
          <p className="text-sm md:text-base text-[#5F728B] leading-[140%]">
            Zur Abwicklung des von Ihnen gewünschten Tarifwechsels übermitteln
            wir Ihre Daten an den von Ihnen ausgewählten Energieanbieter und –
            soweit erforderlich – an technische Dienstleister (z. B.
            Hosting-Anbieter). Eine Weitergabe an weitere Dritte erfolgt nur, wenn
            hierfür eine gesetzliche Grundlage besteht oder Sie ausdrücklich
            eingewilligt haben.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-[#1C2022]">
            5. Speicherdauer
          </h2>
          <p className="text-sm md:text-base text-[#5F728B] leading-[140%]">
            Wir speichern Ihre personenbezogenen Daten nur so lange, wie es für
            die Erfüllung der genannten Zwecke erforderlich ist oder wie wir dazu
            gesetzlich verpflichtet sind. Anschließend werden die Daten gemäß den
            gesetzlichen Vorgaben anonymisiert oder gelöscht.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-[#1C2022]">
            6. Ihre Rechte
          </h2>
          <p className="text-sm md:text-base text-[#5F728B] leading-[140%]">
            Sie haben im Rahmen der gesetzlichen Voraussetzungen jederzeit das
            Recht auf:
          </p>
          <ul className="list-disc pl-5 text-sm md:text-base text-[#5F728B] space-y-1">
            <li>Auskunft über die Verarbeitung Ihrer personenbezogenen Daten,</li>
            <li>Berichtigung unrichtiger oder unvollständiger Daten,</li>
            <li>Löschung Ihrer Daten, sofern keine Aufbewahrungspflichten bestehen,</li>
            <li>
              Einschränkung der Verarbeitung, wenn z. B. die Richtigkeit der Daten
              bestritten wird,
            </li>
            <li>
              Widerspruch gegen bestimmte Verarbeitungen sowie
              Datenübertragbarkeit.
            </li>
          </ul>
          <p className="text-sm md:text-base text-[#5F728B] leading-[140%]">
            Zudem haben Sie das Recht, eine erteilte Einwilligung jederzeit mit
            Wirkung für die Zukunft zu widerrufen. Zur Ausübung Ihrer Rechte
            können Sie uns unter der oben genannten Adresse kontaktieren.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-[#1C2022]">
            7. Änderungen dieser Datenschutzrichtlinie
          </h2>
          <p className="text-sm md:text-base text-[#5F728B] leading-[140%]">
            Wir behalten uns vor, diese Datenschutzrichtlinie bei Bedarf zu
            aktualisieren, um sie an geänderte rechtliche oder technische
            Anforderungen anzupassen. Die jeweils aktuelle Fassung ist jederzeit
            auf dieser Seite abrufbar.
          </p>
        </section>
      </div>
    </div>
  );
}
