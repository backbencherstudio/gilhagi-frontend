import { Checkbox } from "@/components/ui/checkbox";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="w-full py-16 md:py-32 bg-[#F9F9F9] relative overflow-hidden px-4 xl:px-0"
    >
      {/* Background thunder effect */}
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover"
          src="/images/bolt-bg.svg"
          alt=""
        />
      </div>

      <div className="relative z-10 max-w-[1256px] mx-auto flex flex-col lg:flex-row lg:items-start lg:gap-16">
        {/* LEFT CONTENT */}
        <ContactInfo />

        {/* RIGHT FORM */}
        <div className="lg:w-1/2 mt-12 lg:mt-0 flex-1">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

const ContactInfo = () => {
  return (
    <div className="w-full space-y-10 lg:space-y-14 max-w-full lg:max-w-[528px] shrink-0">
      <div>
        <h2 className="text-[#1C2022] text-3xl sm:text-4xl md:text-5xl font-semibold leading-[130%] mb-4">
          Kontaktieren Sie uns
        </h2>
        <p className="text-[#5F728B] text-base sm:text-lg font-normal leading-[160%]">
          Haben Sie Fragen oder benötigen Sie Hilfe beim Wechsel Ihres
          Stromanbieters? Unser Team ist hier, um es einfach und stressfrei zu
          machen. Kontaktieren Sie uns jederzeit, wir helfen Ihnen gerne beim
          Sparen.
        </p>
      </div>

      {/* Contact Info */}
      <div className="space-y-4 pt-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-[#085EC4] text-white rounded-lg">
            <Mail className="w-6 h-6" />
          </div>
          <p className="text-[#1C2022] text-lg font-medium leading-[160%] break-words">
            support@yourcompany.com
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="p-2 bg-[#085EC4] text-white rounded-lg">
            <Phone className="w-6 h-6" />
          </div>
          <p className="text-[#1C2022] text-lg font-medium leading-[160%] break-words">
            +49 123 456 7890
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="p-2 bg-[#085EC4] text-white rounded-lg">
            <MapPin className="w-6 h-6" />
          </div>
          <p className="text-[#1C2022] text-lg font-medium leading-[160%] break-words">
            Musterstraße 12, 10115 Berlin, Deutschland
          </p>
        </div>
      </div>
    </div>
  );
};

const ContactForm = () => {
  return (
    <div className="bg-white border border-[#D8DEE4] shadow-lg rounded-2xl p-6 sm:p-8 space-y-5">
      {/* Name Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 w-full">
        <div>
          <label className="form-label">Vorname *</label>
          <input type="text" placeholder="z.B. John" className="form-input" />
        </div>

        <div>
          <label className="form-label">Nachname *</label>
          <input type="text" placeholder="z.B. Doe" className="form-input" />
        </div>

        <div>
          <label className="form-label">E-Mail *</label>
          <input
            type="email"
            placeholder="john@example.com"
            className="form-input"
          />
        </div>

        <div>
          <label className="form-label">Telefonnummer *</label>
          <input
            type="text"
            placeholder="Z.B. +46 123 4567 89"
            className="form-input"
          />
        </div>
      </div>

      {/* Subject */}
      <div>
        <label className="form-label block">Betreff *</label>
        <input
          type="text"
          placeholder="Wählen Sie ein Thema"
          className="form-input w-full"
        />
      </div>

      {/* Message */}
      <div>
        <label className="form-label">Nachricht *</label>
        <textarea
          rows={4}
          placeholder="Teilen Sie uns mit, wie wir Ihnen helfen können…"
          className="form-input max-h-60"
        />
      </div>

      {/* Checkbox */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2.5">
        <Checkbox className="w-5 h-5 mt-1 data-[state=checked]:bg-[#085EC4]" />
        <p className="text-[#707070] text-sm sm:text-base font-normal leading-[160%] tracking-[0.08px]">
          Ich stimme der Datenschutzrichtlinie zu und erkläre mich damit
          einverstanden, von Wechselsicher kontaktiert zu werden.
        </p>
      </div>

      {/* Submit Button */}
      <button className="bg-[#085EC4] text-white font-semibold py-3.5 px-6 rounded-full hover:bg-blue-700 transition cursor-pointer w-full sm:w-auto">
        Nachricht senden
      </button>
    </div>
  );
};
