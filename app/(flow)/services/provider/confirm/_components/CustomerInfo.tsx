export default function CustomerInfo() {
  return (
    <div className="gap-8 self-stretch border border-[#E2E8EE] [background:var(--BG-soft,#F8FCFD)] p-6 rounded-2xl border-solid space-y-8">
      <div className="pb-4 border-b">
        <h4>Ihre persönlichen Daten</h4>
      </div>

      <div className=" space-y-4">
        <InfoRow label="Ihr Name" value="Prof. Tawhidul Alam" />
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
    <div className="flex gap-40">
      <p className="max-w-[230px] w-[230px] text-[#5F728B] text-sm font-medium leading-[140%] tracking-[0.07px]">
        {label}
      </p>

      <p className="text-[#1C2022] text-base font-medium leading-[140%]">
        {value}
      </p>
    </div>
  );
}
