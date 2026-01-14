import { Checkbox } from "@/components/ui/checkbox";

const RegisterForm = () => {
  return (
    <form
      className="
        w-full 
        border border-[#D8DEE4] bg-white 
        p-6 md:p-8 
        rounded-3xl 
      "
    >
      {/* Input Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 mb-8 w-full">
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
            placeholder="z.B. +49 123 456789"
            className="form-input"
          />
        </div>

        {/* Password */}
        <div>
          <label className="form-label">Passwort *</label>
          <input
            type="password"
            placeholder="Mindestens 8 Zeichen"
            className="form-input"
          />
        </div>

        <div>
          <label className="form-label">Passwort wiederholen *</label>
          <input
            type="password"
            placeholder="Passwort bestätigen"
            className="form-input"
          />
        </div>
      </div>

      {/* Checkbox */}
      <div className="flex items-start gap-3 mb-8">
        <Checkbox className="mt-1 data-[state=checked]:bg-[#085EC4]" />

        <p className="text-[#707070] text-sm md:text-base leading-[160%] flex-1">
          Ich stimme der Datenschutzrichtlinie zu und erkläre mich damit
          einverstanden, von Wechselsicher kontaktiert zu werden.
        </p>
      </div>

      {/* Submit Button */}
      <button
        className="
          bg-[#085EC4] text-white font-semibold 
          py-3.5 px-6 
          rounded-full 
          hover:bg-blue-700 transition 
          w-full md:w-auto
        "
      >
        Registrieren
      </button>

      {/* login link */}
      {/* Login link */}
      <p className="mt-6 text-center text-sm md:text-base text-[#707070]">
        Bereits ein Konto? {" "}
        <a href="/login" className="text-[#085EC4] font-medium hover:underline">
          Jetzt anmelden  

        </a>
      </p>
    </form>
  );
};

export default RegisterForm;
