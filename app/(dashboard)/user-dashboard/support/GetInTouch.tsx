import { Phone, Mail, MapPin } from "lucide-react"; //
import React from "react";

export default function GetInTouch() {
  return (
    <div className="section-div space-y-6">
      <div>
        <h3 className="self-stretch text-[#1C2022]  text-xl font-medium leading-[130%] tracking-[0.1px] mb-2">
          Nehmen Sie Kontakt mit uns auf{" "}
        </h3>

        <p className="self-stretch text-[#5F728B]  text-base font-normal leading-[140%] tracking-[0.08px]">
          Haben Sie Fragen? Wir helfen Ihnen gerne.
        </p>
      </div>

      {/* contact */}
      <div className="space-y-4">
        <InfoCard label="Mobil" value="+49 123 456 7890" type="phone" />
        <InfoCard label="E-mail" value="support@yourcompany.com" type="email" />
        {/* <InfoCard label="Standorte" value="Standorte" type="location" /> */}
      </div>
    </div>
  );
}

interface InfoCardProps {
  label: string;
  value: string;
  type: "phone" | "email" | "location"; // This controls which icon and styling to use
}

const InfoCard: React.FC<InfoCardProps> = ({ label, value, type }) => {
  const renderIcon = () => {
    switch (type) {
      case "phone":
        return <Phone className="w-[26px] h-[26px] text-[#085EC4]" />;
      case "email":
        return <Mail className="w-[26px] h-[26px] text-[#085EC4]" />;
      case "location":
        return <MapPin className="w-[26px] h-[26px] text-[#085EC4]" />;
      default:
        return null;
    }
  };

  return (
    <div className="flex gap-3 items-center">
      <div className="[background:var(--White-03,#EDF3F7)] p-1.5 rounded-lg border">
        {renderIcon()}
      </div>
      <div>
        <p className="text-[#1C2022] text-sm font-medium leading-[140%] tracking-[0.07px]">
          {label}
        </p>
        <p className="text-[#5F728B] text-break lg:text-lg font-normal leading-[160%]">
          {value}
        </p>
      </div>
    </div>
  );
};
