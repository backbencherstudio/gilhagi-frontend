import React from "react";

export default function Page() {
  return (
    <div className="mt-24 py-8 md:py-20 px-4 md:px-8 lg:px-0">
      <div className="w-full max-w-[1160px] mx-auto border border-[#E2E8EE] bg-white rounded-3xl p-4 md:p-8 space-y-8">
        <header>
          <h1 className="text-2xl md:text-3xl font-semibold text-[#1C2022] mb-2">
            Widerrufsbelehrung
          </h1>
        </header>

        {/* Widerrufsrecht */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-[#1C2022]">
            Widerrufsrecht
          </h2>
          <p className="text-sm md:text-base text-[#5F728B] leading-[140%]">
            Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen
            diesen Vertrag zu widerrufen. Die Widerrufsfrist beträgt vierzehn Tage
            ab dem Tag des Vertragsabschlusses.
          </p>
          <p className="text-sm md:text-base text-[#5F728B] leading-[140%]">
            Um Ihr Widerrufsrecht auszuüben, müssen Sie uns:
            <br />
            <span className="font-medium text-[#1C2022]">
              Wechselsicher GmbH
            </span>
            <br />
            Uferzeile 1
            <br />
            4702 Wallern an der Trattnach
            <br />
            Österreich
            <br />
            Telefon: +41 78 447 44 67
            <br />
            E-Mail: support@wechselsicher.at
            <br />
            mittels einer eindeutigen Erklärung (z. B. per Post oder E-Mail)
            über Ihren Entschluss, diesen Vertrag zu widerrufen, informieren.
          </p>
          <p className="text-sm md:text-base text-[#5F728B] leading-[140%]">
            Zur Wahrung der Widerrufsfrist reicht es aus, dass Sie die Mitteilung
            über die Ausübung des Widerrufsrechts vor Ablauf der Widerrufsfrist
            absenden.
          </p>
        </section>

        {/* Folgen des Widerrufs */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-[#1C2022]">
            Folgen des Widerrufs
          </h2>
          <p className="text-sm md:text-base text-[#5F728B] leading-[140%]">
            Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen,
            die wir von Ihnen erhalten haben, einschließlich der Lieferkosten
            (mit Ausnahme der zusätzlichen Kosten, die sich daraus ergeben,
            dass Sie eine andere Art der Lieferung als die von uns angebotene,
            günstigste Standardlieferung gewählt haben), unverzüglich und
            spätestens binnen vierzehn Tagen ab dem Tag zurückzuzahlen, an dem
            die Mitteilung über Ihren Widerruf dieses Vertrags bei uns
            eingegangen ist.
          </p>
          <p className="text-sm md:text-base text-[#5F728B] leading-[140%]">
            Für diese Rückzahlung verwenden wir dasselbe Zahlungsmittel, das Sie
            bei der ursprünglichen Transaktion eingesetzt haben, es sei denn,
            mit Ihnen wurde ausdrücklich etwas anderes vereinbart. In keinem
            Fall werden Ihnen wegen dieser Rückzahlung Entgelte berechnet.
          </p>
        </section>

        {/* Erlöschen */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-[#1C2022]">
            Erlöschen des Widerrufsrechts
          </h2>
          <p className="text-sm md:text-base text-[#5F728B] leading-[140%]">
            Die Wechselsicher GmbH weist darauf hin, dass die Dienstleistung mit
            der ausdrücklichen Zustimmung des Kunden unmittelbar nach
            Auftragserteilung erbracht wird. Der Kunde wird im Rahmen des
            Bestellprozesses sowie in den Allgemeinen Geschäftsbedingungen (AGB)
            über die Auswirkungen auf das Widerrufsrecht informiert.
          </p>
          <p className="text-sm md:text-base text-[#5F728B] leading-[140%]">
            Mit vollständiger Erbringung der Dienstleistung erlischt das
            Widerrufsrecht gemäß § 356 Abs. 4 BGB.
          </p>
        </section>

        {/* Musterformular */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-[#1C2022]">
            Muster-Widerrufsformular
          </h2>
          <p className="text-sm md:text-base text-[#5F728B] leading-[140%]">
            (Wenn Sie den Vertrag widerrufen wollen, dann füllen Sie bitte dieses
            Formular aus und senden Sie es zurück.)
          </p>
          <p className="text-sm md:text-base text-[#5F728B] leading-[140%]">
            An:
            <br />
            <span className="font-medium text-[#1C2022]">
              Wechselsicher GmbH
            </span>
            <br />
            Uferzeile 1
            <br />
            4702 Wallern an der Trattnach
            <br />
            Österreich
            <br />
            E-Mail: support@wechselsicher.at
          </p>
          <p className="text-sm md:text-base text-[#5F728B] leading-[140%]">
            Hiermit widerrufe(n) ich/wir (*) den von mir/uns (*) abgeschlossenen
            Vertrag über die Erbringung der folgenden Dienstleistung:
          </p>
          <ul className="list-disc pl-5 text-sm md:text-base text-[#5F728B] space-y-1">
            <li>Bestellt am (*): …</li>
            <li>Name des/der Verbraucher(s): …</li>
            <li>Anschrift des/der Verbraucher(s): …</li>
            <li>Unterschrift (nur bei Mitteilung auf Papier): …</li>
            <li>Datum: …</li>
          </ul>
          <p className="text-xs text-[#8A9AAF]">
            (*) Unzutreffendes streichen
          </p>
        </section>

        <footer className="pt-4">
          <p className="text-xs text-[#8A9AAF]">
            Zuletzt geändert am: 01.01.2026
          </p>
        </footer>
      </div>
    </div>
  );
}
