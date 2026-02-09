"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";

import { Checkbox } from "@/components/ui/checkbox";
import { useRegisterMutation } from "@/redux/features/auth/authApi";
import Link from "next/link";

type RegisterFormValues = {
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  password: string;
  password_confirmation: string;
  privacy_policy: boolean;
  cancelation_policy: boolean;
  terms_and_power_of_attorney: boolean;
};

const RegisterForm = () => {
  const router = useRouter();
  const [register, { isLoading: isRegisterLoading }] = useRegisterMutation();

  const [showPassword, setShowPassword] = React.useState(false);
  const [showPasswordConfirmation, setShowPasswordConfirmation] =
    React.useState(false);
  const [serverError, setServerError] = React.useState<string | null>(null);
  const [serverSuccess, setServerSuccess] = React.useState<string | null>(null);

  const {
    register: registerField,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
    watch,
  } = useForm<RegisterFormValues>({
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      phone_number: "",
      password: "",
      password_confirmation: "",
      privacy_policy: false,
      cancelation_policy: false,
      terms_and_power_of_attorney: false,
    },
    mode: "onChange",
  });

  // Watch password for confirmation validation
  const password = watch("password");

  const privacyPolicy = watch("privacy_policy");
  const cancelationPolicy = watch("cancelation_policy");
  const termsAndPowerOfAttorney = watch("terms_and_power_of_attorney");
  const onSubmit = async (values: RegisterFormValues) => {
    // Validate privacy policy
    if (!values.privacy_policy) {
      setServerError("You must agree to the privacy policy");
      return;
    }

    try {
      setServerError(null);
      setServerSuccess(null);

      const result = await register({
        first_name: values.first_name,
        last_name: values.last_name,
        email: values.email,
        phone_number: values.phone_number,
        password: values.password,
        password_confirmation: values.password_confirmation,
        privacy_policy: values.privacy_policy,
      }).unwrap();

      // Show success message
      setServerSuccess(result.message || "Registration successful!");

      // Redirect to login after 2 seconds
      setTimeout(() => {
        router.push("/login");
      }, 2000);
    } catch (err: any) {
      setServerError(
        err?.data?.message ?? err?.message ?? "Registration failed"
      );
      console.error(err);
    }
  };

  return (
    <form
      className="w-full border border-[#D8DEE4] bg-white md:p-6 p-4 rounded-3xl"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      {serverError && (
        <div className="mb-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {serverError}
        </div>
      )}

      {serverSuccess && (
        <div className="mb-5 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
          {serverSuccess}
        </div>
      )}

      {/* Input Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 mb-6 w-full">
        <div>
          <label className="form-label">Vorname *</label>
          <input
            type="text"
            placeholder="z.B. John"
            className={`form-input w-full ${errors.first_name ? "border border-red-500" : ""
              }`}
            {...registerField("first_name", {
              required: "Vorname is required",
            })}
          />
          {errors.first_name?.message && (
            <p className="mt-1 text-sm text-red-600">
              {errors.first_name.message}
            </p>
          )}
        </div>

        <div>
          <label className="form-label">Nachname *</label>
          <input
            type="text"
            placeholder="z.B. Doe"
            className={`form-input w-full ${errors.last_name ? "border border-red-500" : ""
              }`}
            {...registerField("last_name", {
              required: "Nachname is required",
            })}
          />
          {errors.last_name?.message && (
            <p className="mt-1 text-sm text-red-600">
              {errors.last_name.message}
            </p>
          )}
        </div>

        <div>
          <label className="form-label">E-Mail *</label>
          <input
            type="email"
            placeholder="john@example.com"
            className={`form-input w-full ${errors.email ? "border border-red-500" : ""
              }`}
            {...registerField("email", {
              required: "E-Mail is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid e-mail",
              },
            })}
          />
          {errors.email?.message && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="form-label">Telefonnummer *</label>
          <input
            type="text"
            placeholder="z.B. +49 123 456789"
            className={`form-input w-full ${errors.phone_number ? "border border-red-500" : ""
              }`}
            {...registerField("phone_number", {
              required: "Telefonnummer is required",
            })}
          />
          {errors.phone_number?.message && (
            <p className="mt-1 text-sm text-red-600">
              {errors.phone_number.message}
            </p>
          )}
        </div>

        {/* Password */}
        <div>
          <label className="form-label">Passwort *</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Mindestens 8 Zeichen"
              className={`form-input w-full pr-12 ${errors.password ? "border border-red-500" : ""
                }`}
              {...registerField("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
              })}
            />
            <button
              type="button"
              onClick={() => setShowPassword((p) => !p)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#707070] hover:text-black cursor-pointer"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <EyeOff size={22} /> : <Eye size={22} />}
            </button>
          </div>
          {errors.password?.message && (
            <p className="mt-1 text-sm text-red-600">
              {errors.password.message}
            </p>
          )}
        </div>

        <div>
          <label className="form-label">Passwort wiederholen *</label>
          <div className="relative">
            <input
              type={showPasswordConfirmation ? "text" : "password"}
              placeholder="Passwort bestätigen"
              className={`form-input w-full pr-12 ${errors.password_confirmation ? "border border-red-500" : ""
                }`}
              {...registerField("password_confirmation", {
                required: "Please confirm your password",
                validate: (value) => {
                  if (value !== password) {
                    return "Passwords do not match";
                  }
                },
              })}
            />
            <button
              type="button"
              onClick={() => setShowPasswordConfirmation((p) => !p)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#707070] hover:text-black cursor-pointer"
              aria-label={
                showPasswordConfirmation ? "Hide password" : "Show password"
              }
            >
              {showPasswordConfirmation ? (
                <EyeOff size={22} />
              ) : (
                <Eye size={22} />
              )}
            </button>
          </div>
          {errors.password_confirmation?.message && (
            <p className="mt-1 text-sm text-red-600">
              {errors.password_confirmation.message}
            </p>
          )}
        </div>
      </div>

      <div className="space-y-2 mb-6">
        {/* Checkbox */}
        <div className="flex items-start gap-3 ">
          <Checkbox
            checked={privacyPolicy}
            onCheckedChange={(v) => setValue("privacy_policy", v === true)}
            className="mt-1 data-[state=checked]:bg-[#085EC4]"
          />

          <div className="flex-1">
            <p className="text-[#707070] text-sm md:text-base leading-[160%]">
              Ich stimme der <Link href="/privacy-policy" className="text-[#085EC4] font-medium hover:underline">Datenschutzrichtlinie</Link> zu und erkläre mich damit
              einverstanden, von Wechselsicher kontaktiert zu werden.
            </p>
            {errors.privacy_policy && (
              <p className="mt-2 text-sm text-red-600">
                You must agree to the privacy policy
              </p>
            )}
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Checkbox
            checked={cancelationPolicy}
            onCheckedChange={(v) => setValue("cancelation_policy", v === true)}
            className="mt-1 data-[state=checked]:bg-[#085EC4]"
          />

          <div className="flex-1">
            <p className="text-[#707070] text-sm md:text-base leading-[160%]">Ich erkläre, dass ich die Datenschutzerklärung gelesen habe und akzeptiere die Verarbeitung meiner Daten. <Link href="/cancelation-policy" className="text-[#085EC4] font-medium hover:underline">Widerrufsbelehrung</Link></p>
            {errors.cancelation_policy && (
              <p className="mt-2 text-sm text-red-600">
                You must agree to the cancelation policy
              </p>
            )}
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Checkbox
            checked={termsAndPowerOfAttorney}
            onCheckedChange={(v) =>
              setValue("terms_and_power_of_attorney", v === true)
            }
            className="mt-1 data-[state=checked]:bg-[#085EC4]"
          />

          <div className="flex-1">
            <p className="text-[#707070] text-sm md:text-base leading-[160%]">
              Ich bestätige, dass ich die{" "}
              <Link
                href="/agbs"
                className="text-[#085EC4] font-medium hover:underline"
              >
                Allgemeinen Geschäftsbedingungen (AGBs)
              </Link>{" "}
              gelesen habe und akzeptiere diese. Außerdem erteile ich Wechselsicher
              eine Vollmacht, mich im Zusammenhang mit meinem Energievertrag zu
              vertreten, insbesondere Verträge in meinem Namen abzuschließen oder zu
              kündigen. Details siehe{" "}
              <Link
                href="/vollmacht"
                className="text-[#085EC4] font-medium hover:underline"
              >
                Vollmacht
              </Link>
              .
            </p>

            {errors.terms_and_power_of_attorney && (
              <p className="mt-2 text-sm text-red-600">
                You must agree to the AGBs and the power of attorney
              </p>
            )}
          </div>
        </div>

      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting || isRegisterLoading}
        className="
          bg-[#085EC4] text-white font-semibold 
          py-3.5 px-6 
          rounded-full 
          hover:bg-blue-700 transition 
          w-full md:w-auto
          disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer
        "
      >
        {isSubmitting || isRegisterLoading ? "Registrieren..." : "Registrieren"}
      </button>

      {/* Login link */}
      <p className="mt-6 text-center text-sm md:text-base text-[#707070]">
        Bereits ein Konto?{" "}
        <a href="/login" className="text-[#085EC4] font-medium hover:underline">
          Jetzt anmelden
        </a>
      </p>
    </form>
  );
};

export default RegisterForm;
