"use client";

import CompanyIcon from "@/components/icons/CompanyIcon";
import HomeIcon from "@/components/icons/HomeIcon";
import { publicAxios } from "@/lib/api/axios";
import { Loader } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type FormValues = {
  user_type: string;
  postal_code: string;
  city: string;
  current_provider: string;
  annual_consumption: number;
};

export default function CalculateForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormValues>({
    defaultValues: { user_type: "private" },
  });

  const [userType, setUserType] = useState<"private" | "commercial">("private");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    // console.log("Form Data:", data);

    setIsLoading(true);
    try {
      const res = await publicAxios.post("/user/calculatesaving", data);
      console.log(res.data?.data?.id);
      if (res.data?.data?.id) {
        // Wait 2 seconds before redirecting
        setTimeout(() => {
          router.push(`/services?calculation_id=${res.data?.data?.id}`);
        }, 2000);
      } else {
        setIsLoading(false);
      }
    } catch (e: any) {
      console.log(e.response?.data);
      setIsLoading(false);
      // toast.error(e.response?.data.message);
    }
  };

  const handleUserType = (type: "private" | "commercial") => {
    setUserType(type);
    setValue("user_type", type, { shouldValidate: true, shouldDirty: true });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white p-6 md:p-10 flex flex-col border border-[#D8DEE4] shadow-[0_52px_56px_0_rgba(6,23,44,0.30)] rounded-3xl md:w-[874px] gap-10 mx-auto"
    >
      {/* Header */}
      <div>
        <h3 className="text-[#085EC4] text-center text-[32px] font-semibold leading-[130%] mb-3">
          Berechnen Sie jetzt Ihre Ersparnisse
        </h3>
        <p className="text-gray-500 text-sm text-center">
          Geben Sie Ihre Daten ein und erfahren Sie, wie viel Sie sparen können
        </p>
      </div>

      {/* Toggle Buttons */}
      <div className="flex gap-2.5 mb-5 md:mb-8 border border-[#D8DEE4] rounded-full p-1.5 md:w-[408px] w-full mx-auto">
        <button
          type="button"
          onClick={() => handleUserType("private")}
          className={`flex-1 py-2 px-3 rounded-full font-medium leading-[160%] tracking-[0.08px] transition focus:outline-none focus:ring-2 focus:ring-blue-700 cursor-pointer ${
            userType === "private"
              ? "bg-[#085EC4] text-white hover:bg-blue-700"
              : "bg-white text-gray-700 hover:bg-gray-200"
          }`}
        >
          <span className="flex items-center justify-center gap-4">
            <HomeIcon />
            Privat
          </span>
        </button>

        <button
          type="button"
          onClick={() => handleUserType("commercial")}
          className={`flex-1 py-2 px-4 rounded-full font-medium transition focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer ${
            userType === "commercial"
              ? "bg-[#085EC4] text-white hover:bg-blue-700"
              : "bg-white text-gray-700 hover:bg-gray-200"
          }`}
        >
          <span className="flex items-center justify-center gap-4">
            <CompanyIcon />
            Gewerblich
          </span>
        </button>
      </div>

      {/* keep it registered */}
      <input type="hidden" {...register("user_type")} />

      {/* Form Fields */}
      <div className="space-y-5">
        {/* Row 1 */}
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <label
              className="block text-[#2D2926] text-lg font-semibold leading-[160%]"
              htmlFor="postal_code"
            >
              Postleitzahl *
            </label>
            <input
              id="postal_code"
              type="text"
              placeholder="Ihre Postleitzahl"
              {...register("postal_code", {
                required: "Postleitzahl ist erforderlich",
              })}
              className="calculate-input"
            />
            {errors.postal_code && (
              <p className="text-red-500 text-xs mb-2">
                {errors.postal_code.message}
              </p>
            )}
          </div>

          <div className="flex-1">
            <label
              className="block text-[#2D2926] text-lg font-semibold leading-[160%]"
              htmlFor="city"
            >
              Stadt *
            </label>
            <input
              id="city"
              type="text"
              placeholder="Ihre Stadt"
              {...register("city", { required: "Stadt ist erforderlich" })}
              className="calculate-input"
            />
            {errors.city && (
              <p className="text-red-500 text-xs mb-2">{errors.city.message}</p>
            )}
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <label
              className="block text-[#2D2926] text-lg font-semibold leading-[160%]"
              htmlFor="current_provider"
            >
              Aktueller anbieter *
            </label>
            <input
              id="current_provider"
              type="text"
              placeholder="Name Ihres aktuellen Anbieters"
              {...register("current_provider", {
                required: "Anbietername ist erforderlich",
              })}
              className="calculate-input"
            />
            {errors.current_provider && (
              <p className="text-red-500 text-xs mb-2">
                {errors.current_provider.message}
              </p>
            )}
          </div>

          <div className="flex-1">
            <label
              className="block text-[#2D2926] text-lg font-semibold leading-[160%]"
              htmlFor="annual_consumption"
            >
              Jährlicher Verbrauch in kWh *
            </label>
            <input
              id="annual_consumption"
              className="calculate-input"
              type="number"
              placeholder="z. B. 3500"
              {...register("annual_consumption", {
                required: "Stromverbrauch ist erforderlich",
                valueAsNumber: true,
                min: { value: 1, message: "Wert muss größer als 0 sein" },
              })}
            />
            {errors.annual_consumption && (
              <p className="text-red-500 text-xs mb-2">
                {errors.annual_consumption.message}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isLoading}
        className="w-full py-3 bg-[#085EC4] text-white rounded-lg font-semibold hover:bg-blue-700 transition cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {isLoading ? (
          <>
           <Loader className="w-4 h-4 animate-spin text-white fill" />
            <span>Wird verarbeitet...</span>
          </>
        ) : (
          "Berechnen"
        )}
      </button>
    </form>
  );
}
