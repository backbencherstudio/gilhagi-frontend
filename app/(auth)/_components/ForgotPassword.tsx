"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useForgotPasswordMutation } from "@/redux/features/auth/authApi";

type ForgotPasswordFormValues = {
  email: string;
};

export default function ForgotPasswordPageContent() {
  const router = useRouter();
  const [forgotPassword, { isLoading }] = useForgotPasswordMutation();
  const [serverError, setServerError] = React.useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordFormValues>();

  const onSubmit = async (values: ForgotPasswordFormValues) => {
    try {
      setServerError(null);
      await forgotPassword(values).unwrap();

      router.push(
        `/verify-otp?email=${encodeURIComponent(values.email)}`
      );
    } catch (err: any) {
      setServerError(err?.data?.message ?? "Something went wrong");
    }
  };

  return (
    <section className="min-h-[calc(100vh-100px)] flex items-center justify-center bg-[#F7F9FC] px-4">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-semibold mb-2">Passwort vergessen</h1>
        <p className="text-[#707070] mb-6">
          Geben Sie Ihre E-Mail-Adresse ein, um ein OTP zu erhalten.
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

          <div className="mb-6">
            <label className="form-label">E-Mail *</label>
            <input
              type="email"
              placeholder="john@example.com"
              className={`form-input w-full ${
                errors.email ? "border-red-500" : ""
              }`}
              {...register("email", {
                required: "E-Mail is required",
              })}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">
                {errors.email.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="bg-[#085EC4] text-white font-semibold py-3.5 px-6 rounded-full hover:bg-blue-700 transition w-full disabled:opacity-60"
          >
            {isLoading ? "Sending..." : "OTP senden"}
          </button>
        </form>
      </div>
    </section>
  );
}
