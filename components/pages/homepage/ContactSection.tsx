import { Checkbox } from "@/components/ui/checkbox";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactSection() {
  return (
  <section id="contact" className="w-full py-15 md:py-35 bg-[#F9F9F9] relative overflow-hidden px-4 md:px-0">
  {/* Background thunder effect */}
  <div className="absolute  inset-x-0 md:inset-x-auto inset-y-0   z-0 md:left-1/2 md:-translate-x-1/2 ">
    <img className="w-full h-full object-cover" src="/images/bolt-bg.svg" alt="" />
  </div>

  <div className="relative z-10 max-w-[1256px] mx-auto lg:flex lg:items-start lg:gap-15">
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
    <div className="w-full  space-y-14 max-w-[528px]">
      <div>
        <h2 className="self-stretch text-[#1C2022] text-3xl md:text-5xl font-semibold leading-[130%] mb-4">
          Kontaktieren Sie uns
        </h2>
        <p className="self-stretch text-[#5F728B]  text-lg font-normal leading-[160%]">
          Haben Sie Fragen oder benötigen Sie Hilfe beim Wechsel Ihres
          Stromanbieters? Unser Team ist hier, um es einfach und stressfrei zu
          machen. Kontaktieren Sie uns jederzeit, wir helfen Ihnen gerne beim
          Sparen.
        </p>
      </div>
      {/* Contact Info */}
      <div className="space-y-4 pt-4">
        <div className="flex items-center gap-3">
          <div className="p-1.5 bg-[#085EC4] text-white rounded-lg">
            <Mail className="w-6 h-6" />
          </div>
          <p className="text-[#1C2022] text-lg font-medium leading-[160%]">
            support@yourcompany.com
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="p-1.5 bg-[#085EC4] text-white rounded-lg">
            <Phone className="w-6 h-6" />
          </div>
          <p className="text-[#221c21] text-lg font-medium leading-[160%]">
            +49 123 456 7890
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="p-1.5 bg-[#085EC4] text-white rounded-lg">
            <MapPin />
          </div>
          <p className="text-gray-700">
            Musterstraße 12, 10115 Berlin, Deutschland
          </p>
        </div>
      </div>
    </div>
  );
};

const ContactForm = () => {
  return (
    <div className="bg-white border border-[#D8DEE4] shadow-lg rounded-2xl p-8 space-y-5">
      {/* Name Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5 w-full">
        <div className="">
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
          className="form-input w-full "
        />
      </div>

      {/* Message */}
      <div>
        <label className="form-label">Nachricht *</label>
        <textarea
          rows={4}
          placeholder="Teilen Sie uns mit, wie wir Ihnen helfen können…"
          className="form-input max-h-100"
        ></textarea>
      </div>

      {/* Checkbox */}
      <div className="flex items-start gap-2.5">
        <Checkbox className=" w-4.5 h-4.5 mt-1  data-[state=checked]:bg-[#085EC4]" />
        <p className="w-[443px] text-[#707070] text-base font-normal leading-[160%] tracking-[0.08px]">
          Ich stimme der Datenschutzrichtlinie zu und erkläre mich damit
          einverstanden, von Switchfy kontaktiert zu werden.
        </p>
      </div>

      {/* Submit Button */}
      <button className=" bg-[#085EC4] text-white font-semibold py-3.5 px-6 rounded-full hover:bg-blue-700 transition cursor-pointer">
        Sendmassage
      </button>
    </div>
  );
};
