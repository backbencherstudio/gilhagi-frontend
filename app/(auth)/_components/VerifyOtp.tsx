"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { useSearchParams, useRouter } from "next/navigation";
import { useVerifyOtpMutation } from "@/redux/features/auth/authApi";

type VerifyOtpFormValues = {
  otp: string;
};

export default function VerifyOtpPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email");

  const [verifyOtp, { isLoading }] = useVerifyOtpMutation();
  const [serverError, setServerError] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (!email) router.replace("/forgot-password");
  }, [email, router]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<VerifyOtpFormValues>();

  const onSubmit = async (values: VerifyOtpFormValues) => {
    try {
      setServerError(null);

      await verifyOtp({
        email: email!,
        otp: values.otp,
      }).unwrap();

      router.push(
        `/reset-password?email=${encodeURIComponent(email!)}`
      );
    } catch (err: any) {
      setServerError(err?.data?.message ?? "Invalid OTP");
    }
  };

  if (!email) return null;

  return (
    <section className="min-h-[calc(100vh-100px)] flex items-center justify-center bg-[#F7F9FC] px-4">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-semibold mb-2">OTP bestätigen</h1>
        <p className="text-[#707070] mb-6">
          Geben Sie den 6-stelligen Code ein, der an{" "}
          <span className="font-medium">{email}</span> gesendet wurde.
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
            <label className="form-label">OTP *</label>
            <input
              className={`form-input w-full text-center tracking-widest ${
                errors.otp ? "border-red-500" : ""
              }`}
              maxLength={6}
              placeholder="------"
              {...register("otp", { required: "OTP is required" })}
            />
            {errors.otp && (
              <p className="mt-1 text-sm text-red-600">
                {errors.otp.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="bg-[#085EC4] text-white font-semibold py-3.5 px-6 rounded-full hover:bg-blue-700 transition w-full"
          >
            Bestätigen
          </button>
        </form>
      </div>
    </section>
  );
}
