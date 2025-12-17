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
    <div
      className="
        w-full max-w-[1160px] mx-4 sm:mx-auto 
        border border-[#E2E8EE] 
        bg-white 
        backdrop-blur-[7.4px] 
        p-4 md:p-8 
        rounded-3xl
      "
    >
      {/* Main grid */}
      <div
        className="
          grid 
          grid-cols-1 
          lg:grid-cols-[325px_minmax(0,1fr)] 
          gap-6 
          w-full 
          mb-12
        "
      >
        <aside className="min-w-0">
          <TarrifInfo />
        </aside>
        <main className="min-w-0">
          <CustomerInfo />
        </main>
      </div>

      {/* Confirm button */}
      <div className="mb-12 flex sm:justify-end">
        <button
          onClick={handleConfirm}
          className="rounded-btn text-white w-full sm:w-auto"
        >
          Jetzt bestätigen
        </button>
      </div>

      {/* Footer info */}
      {/* <div
        className="
          flex flex-col sm:flex-row 
          items-start sm:items-center 
          gap-3 sm:gap-4 
          bg-[#F1F7FC] 
          p-4 
          rounded-lg 
          border border-[#2568A1] border-l-4 
          mb-8
        "
      >
        <LightBulbIcon className="w-6 h-6 text-[#2568A1] shrink-0" />
        <p className="text-[#5F728B] text-sm md:text-base leading-[140%] tracking-[0.08px]">
          Achtung: Sie mA¬ssen Ihren Tarif selbst kA¬ndigen, wenn Sie Ihr
          SonderkA¬ndigungsrecht (z. B. bei PreiserhAhung) bei Tarifwechseln
          ausA¬ben oder wenn die KA¬ndigungsfrist in weniger als 4 Wochen ablAuft.
        </p>
      </div> */}

      {/* Note */}
      <div>
        <p className="text-[#1C2022] text-[10px] font-normal leading-[132%] tracking-[0.05px] mb-2">
          * Pflichtfeld
        </p>
        <p className="text-[#5F728B] text-[10px] font-normal leading-[132%] tracking-[0.05px]">
          Nachdem Ihre Wechselanfrage erfolgreich bearbeitet wurde, kann
          Switchify Ihnen Informationen A¬ber Ahnliche Energieprodukte oder
          relevante Service-Updates an die von Ihnen angegebene E-Mail-Adresse
          senden. Wenn Sie diese E-Mails nicht mehr erhalten mAchten, kAnnen Sie
          sich jederzeit abmelden. Senden Sie einfach eine kurze Nachricht an:
          Switchify Kundenservice, [Unternehmensadresse], oder schreiben Sie uns
          eine E-Mail an support@switchify.com. Es fallen keine zusAtzlichen
          Kosten an, auAYer den A¬blichen AobertragungsgebA¬hren.
        </p>
      </div>
    </div>
  );
}
