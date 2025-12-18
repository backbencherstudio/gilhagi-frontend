import { Checkbox } from "@/components/ui/checkbox";

const LoginForm = () => {
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
      <div className="grid grid-cols-1 gap-5 mb-8 w-full">
        {/* Email */}
        <div>
          <label className="form-label">E-Mail *</label>
          <input
            type="email"
            placeholder="john@example.com"
            className="form-input"
          />
        </div>

        {/* Password */}
        <div>
          <label className="form-label">Passwort *</label>
          <input
            type="password"
            placeholder="Passwort eingeben"
            className="form-input"
          />
        </div>
      </div>

      {/* Remember me + Forgot password */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <Checkbox className="data-[state=checked]:bg-[#085EC4]" />
          <span className="text-[#707070] text-sm md:text-base">
            Angemeldet bleiben
          </span>
        </div>

        <button
          type="button"
          className="text-sm md:text-base text-[#085EC4] hover:underline"
        >
          Passwort vergessen?
        </button>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="
          bg-[#085EC4] text-white font-semibold
          py-3.5 px-6
          rounded-full
          hover:bg-blue-700 transition
          w-full md:w-auto
        "
      >
        Anmelden
      </button>

      {/* Register link */}
      <p className="mt-6 text-center text-sm md:text-base text-[#707070]">
        Noch kein Konto?{" "}
        <a
          href="/register"
          className="text-[#085EC4] font-medium hover:underline"
        >
          Jetzt registrieren
        </a>
      </p>
    </form>
  );
};

export default LoginForm;
