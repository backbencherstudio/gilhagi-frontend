"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { useSearchParams, useRouter } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";
import { useResetPasswordMutation } from "@/redux/features/auth/authApi";

type ResetPasswordFormValues = {
  password: string;
  password_confirmation: string;
};

export default function ResetPasswordPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email");

  const [resetPassword, { isLoading }] = useResetPasswordMutation();
  const [showPassword, setShowPassword] = React.useState(false);
  const [serverError, setServerError] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (!email) router.replace("/forgot-password");
  }, [email, router]);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ResetPasswordFormValues>();

  const onSubmit = async (values: ResetPasswordFormValues) => {
    try {
      setServerError(null);

      await resetPassword({
        email: email!,
        password: values.password,
        password_confirmation: values.password_confirmation,
      }).unwrap();

      router.replace("/login");
    } catch (err: any) {
      setServerError(err?.data?.message ?? "Reset failed");
    }
  };

  if (!email) return null;

  return (
    <section className="min-h-[calc(100vh-100px)] flex items-center justify-center bg-[#F7F9FC] px-4">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-semibold mb-2">
          Neues Passwort setzen
        </h1>
        <p className="text-[#707070] mb-6">
          Erstellen Sie ein neues Passwort für{" "}
          <span className="font-medium">{email}</span>.
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="border border-[#D8DEE4] bg-white p-6 md:p-8 rounded-3xl"
        >
          {serverError && (
            <div className="mb-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              {serverError}
            </div>
          )}

          <div className="grid gap-5 mb-6">
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Neues Passwort"
                className={`form-input w-full pr-12 ${
                  errors.password ? "border-red-500" : ""
                }`}
                {...register("password", {
                  required: "Password is required",
                  minLength: { value: 8, message: "Min 8 characters" },
                })}
              />
              <button
                type="button"
                onClick={() => setShowPassword((p) => !p)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#707070]"
              >
                {showPassword ? <EyeOff /> : <Eye />}
              </button>
            </div>

            <input
              type="password"
              placeholder="Passwort bestätigen"
              className={`form-input w-full ${
                errors.password_confirmation ? "border-red-500" : ""
              }`}
              {...register("password_confirmation", {
                validate: (v) =>
                  v === watch("password") || "Passwords do not match",
              })}
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="bg-[#085EC4] text-white font-semibold py-3.5 px-6 rounded-full hover:bg-blue-700 transition w-full"
          >
            Passwort speichern
          </button>
        </form>
      </div>
    </section>
  );
}
