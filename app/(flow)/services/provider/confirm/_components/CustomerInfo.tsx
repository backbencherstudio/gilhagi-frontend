import { useAppSelector } from "@/redux/store/hooks";

export default function CustomerInfo() {
  const user = useAppSelector((state: any) => state.auth.user);

  console.log(user);

  return (
    <div className="gap-8 self-stretch border border-[#E2E8EE] [background:var(--BG-soft,#F8FCFD)] p-4 sm:p-6 rounded-2xl border-solid space-y-8">
      <div className="pb-4 border-b">
        <h4>Ihre persönlichen Daten</h4>
      </div>

      <div className=" space-y-4">
       
        <InfoRow label="Ihr Name" value={`${user?.first_name} ${user?.last_name}`} />
        <InfoRow label="Adresse" value="Am Pankepark 10, 101 10115 Berlin" />
        <InfoRow
          label="Die Rechnungsadresse ist identisch mit der Adresse des
            Stromanschlusses."
          value="Ja, bitte übernehmen."
        />
        <InfoRow label="Ihre E-Mail-Adresse" value="john@example.com" />
        <InfoRow label="Geburtsdatum" value="28. August 2003" />
      </div>
    </div>
  );
}

// ============================================================

interface InfoRowProps {
  label: string;
  value: string;
}

export function InfoRow({ label, value }: InfoRowProps) {
  return (
    <div className="flex flex-col gap-1 sm:flex-row sm:gap-10">
      <p className="w-full sm:max-w-[230px] sm:w-[230px] text-[#5F728B] text-sm font-medium leading-[140%] tracking-[0.07px]">
        {label}
      </p>

      <p className="text-[#1C2022] text-base font-medium leading-[140%] overflow-wrap">
        {value}
      </p>
    </div>
  );
}
