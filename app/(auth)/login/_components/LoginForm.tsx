"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { Eye, EyeOff,  } from "lucide-react";
import { useRouter } from "next/navigation";
import { Checkbox } from "@/components/ui/checkbox";
import { useAppSelector } from "@/redux/store/hooks";
import type { RootState } from "@/redux/store";
import { useLoginMutation } from "@/redux/features/auth/authApi";
import Link from "next/link";

type LoginFormValues = {
  email: string;
  password: string;
  remember: boolean;
};

const LoginForm = () => {
  const router = useRouter();
  const [login, { isLoading: isLoginLoading, error: loginError }] =
    useLoginMutation();

  const { isAuthenticated } = useAppSelector((state: RootState) => state.auth);

  const [showPassword, setShowPassword] = React.useState(false);
  const [serverError, setServerError] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (!isAuthenticated) return;

    const returnTo = sessionStorage.getItem("returnTo");
    // console.log("returnTo", returnTo);

    if (returnTo) {
      sessionStorage.removeItem("returnTo");
      router.replace(returnTo);
      return;
    }

    router.replace("/user-dashboard");
  }, [isAuthenticated, router]);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
    watch,
  } = useForm<LoginFormValues>({
    defaultValues: {
      email: "habiburrahman5114@gmail.com",
      password: "12345678",
      remember: false,
    },
  });

  const remember = watch("remember");

  const onSubmit = async (values: LoginFormValues) => {
    try {
      setServerError(null);

      await login({
        email: values.email,
        password: values.password,
        remember: values.remember,
      }).unwrap();

      // Redirect will happen from useEffect when isAuthenticated changes
    } catch (err: any) {
      setServerError(err?.data?.message ?? err?.message ?? "Login failed");
      console.error(err);
    }
  };

  return (
    <form
      className="w-full border border-[#D8DEE4] bg-white p-6 md:p-8 rounded-3xl"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      {serverError && (
        <div className="mb-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {serverError}
        </div>
      )}

      <div className="grid grid-cols-1 gap-5 mb-8 w-full">
        {/* Email */}
        <div>
          <label className="form-label">E-Mail *</label>
          <input
            type="email"
            placeholder="john@example.com"
            className={`form-input w-full ${
              errors.email ? "border border-red-500" : ""
            }`}
            {...register("email", {
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

        {/* Password */}
        <div>
          <label className="form-label">Passwort *</label>

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Passwort eingeben"
              className={`form-input w-full pr-12 ${
                errors.password ? "border border-red-500" : ""
              }`}
              {...register("password", {
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
      </div>

      {/* Remember me + Forgot password */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <Checkbox
            checked={remember}
            onCheckedChange={(v) => setValue("remember", v === true)}
            className="data-[state=checked]:bg-[#085EC4]"
          />
          <span className="text-[#707070] text-sm md:text-base">
            Angemeldet bleiben
          </span>
        </div>

        <Link href="/forgot-password" className="text-sm md:text-base text-[#085EC4] hover:underline cursor-pointer"> Passwort vergessen?</Link>
      </div>

      <button
        type="submit"
        disabled={isSubmitting || isLoginLoading}
        className="
          bg-[#085EC4] text-white font-semibold
          py-3.5 px-6 rounded-full
          hover:bg-blue-700 transition
          w-full md:w-auto
          disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer
        "
      >
        {isSubmitting || isLoginLoading ? "Logging in..." : "Anmelden"}
      </button>

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
