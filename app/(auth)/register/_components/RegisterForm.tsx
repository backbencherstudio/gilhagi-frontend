import { Checkbox } from "@/components/ui/checkbox";

const RegisterForm = () => {
  return (
    <form className=" self-stretch border border-[#D8DEE4] [background:#FFF] p-8 rounded-3xl border-solid">
      {/* all input field */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5 w-full mb-8">
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

        {/* password */}
        <div>
          <label className="form-label">Passwort *</label>
          <input
            type="text"
            placeholder="Z.B. +46 123 4567 89"
            className="form-input"
          />
        </div>
        <div>
          <label className="form-label">Passwort wiederholen* *</label>
          <input
            type="text"
            placeholder="Z.B. +46 123 4567 89"
            className="form-input"
          />
        </div>
      </div>

      {/* Checkbox */}
      <div className="flex items-start gap-2.5 mb-8">
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
    </form>
  );
};

export default RegisterForm;
