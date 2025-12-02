"use client";
import TarrifInfo from "./TarrifInfo";
import CustomerInfo from "./CustomerInfo";
import LightBulbIcon from "@/components/icons/BulbIcon";
import { useRouter } from "next/navigation";

export default function ConfirmPage() {
  const router = useRouter();

  const handleConfirm = () => {
    router.push("/services/provider/success");
  };

  return (
    <div className=" border border-[#E2E8EE] [background:#FFF] backdrop-blur-[7.4px] p-4 md:p-8 rounded-3xl border-solid mx-auto max-w-[1160px]">
      <div className="grid grid-cols-[325px_1fr] gap-6 w-full max-w-[1160px] mx-auto mb-12  ">
        <aside className="">
          <TarrifInfo />
        </aside>
        <main className="">
          <CustomerInfo />
        </main>
      </div>

      {/* button */}
      <div className="mb-12">
        <button onClick={handleConfirm} className="rounded-btn text-white ml-auto">
          Jetzt bestätigen
        </button>
      </div>

      {/* footer info */}
      <div className="flex items-center gap-4 self-stretch [background:#F1F7FC] p-4 rounded-lg border-l-4 border-t border-solid border-r border-b border-[#2568A1] mb-8">
        <LightBulbIcon className="w-6 h-6 text-[#2568A1]" />
        <p className="flex-[1_0_0] self-stretch text-[#5F728B]  text-base font-normal leading-[140%] tracking-[0.08px]">
          Achtung: Sie müssen Ihren Tarif selbst kündigen, wenn Sie Ihr
          Sonderkündigungsrecht (z. B. bei Preiserhöhung) bei Tarifwechseln
          ausüben oder wenn die Kündigungsfrist in weniger als 4 Wochen abläuft.
        </p>
      </div>

      {/* note */}
      <div>
        <p className="text-[#1C2022]  text-[10px] font-normal leading-[132%] tracking-[0.05px] mb-2">
          * Pflichtfeld
        </p>

        <p className="self-stretch text-[#5F728B] text-[10px] font-normal leading-[132%] tracking-[0.05px]">
          Nachdem Ihre Wechselanfrage erfolgreich bearbeitet wurde, kann
          Switchify Ihnen Informationen über ähnliche Energieprodukte oder
          relevante Service-Updates an die von Ihnen angegebene E-Mail-Adresse
          senden. Wenn Sie diese E-Mails nicht mehr erhalten möchten, können Sie
          sich jederzeit abmelden. Senden Sie einfach eine kurze Nachricht an:
          Switchify Kundenservice, [Unternehmensadresse], oder schreiben Sie uns
          eine E-Mail an support@switchify.com. Es fallen keine zusätzlichen
          Kosten an, außer den üblichen Übertragungsgebühren.
        </p>
      </div>
    </div>
  );
}
