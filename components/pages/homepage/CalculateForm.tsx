"use client";

import CompanyIcon from "@/components/icons/CompanyIcon";
import HomeIcon from "@/components/icons/HomeIcon";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type FormValues = {
  userType: "Privat" | "Gewerblich";
  postcode: string;
  city: string;
  currentProviderName: string;
  annualConsumption: number;
};

export default function CalculateForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormValues>({
    defaultValues: { userType: "Privat" },
  });

  const [userType, setUserType] = useState<"Privat" | "Gewerblich">("Privat");
  const router = useRouter();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log("Form Data:", data);
    router.push("/services");
  };

  const handleUserType = (type: "Privat" | "Gewerblich") => {
    setUserType(type);
    setValue("userType", type, { shouldValidate: true, shouldDirty: true });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white p-10 flex flex-col border border-[#D8DEE4] shadow-[0_52px_56px_0_rgba(6,23,44,0.30)] rounded-3xl md:w-[874px] gap-10 mx-auto"
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
          onClick={() => handleUserType("Privat")}
          className={`flex-1 py-2 px-3 rounded-full font-medium leading-[160%] tracking-[0.08px] transition focus:outline-none focus:ring-2 focus:ring-blue-700 cursor-pointer ${
            userType === "Privat"
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
          onClick={() => handleUserType("Gewerblich")}
          className={`flex-1 py-2 px-4 rounded-full font-medium transition focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer ${
            userType === "Gewerblich"
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
      <input type="hidden" {...register("userType")} />

      {/* Form Fields */}
      <div className="space-y-5">
        {/* Row 1 */}
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <label
              className="block text-[#2D2926] text-lg font-semibold leading-[160%]"
              htmlFor="postcode"
            >
              Postleitzahl *
            </label>
            <input
              id="postcode"
              type="text"
              placeholder="Ihre Postleitzahl"
              {...register("postcode", {
                required: "Postleitzahl ist erforderlich",
              })}
              className="calculate-input"
            />
            {errors.postcode && (
              <p className="text-red-500 text-xs mb-2">
                {errors.postcode.message}
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
              htmlFor="currentProviderName"
            >
              Aktueller Anbietername *
            </label>
            <input
              id="currentProviderName"
              type="text"
              placeholder="Name Ihres aktuellen Anbieters"
              {...register("currentProviderName", {
                required: "Anbietername ist erforderlich",
              })}
              className="calculate-input"
            />
            {errors.currentProviderName && (
              <p className="text-red-500 text-xs mb-2">
                {errors.currentProviderName.message}
              </p>
            )}
          </div>

          <div className="flex-1">
            <label
              className="block text-[#2D2926] text-lg font-semibold leading-[160%]"
              htmlFor="annualConsumption"
            >
              Jährlicher Verbrauch in kWh *
            </label>
            <input
              id="annualConsumption"
              className="calculate-input"
              type="number"
              placeholder="z. B. 3500"
              {...register("annualConsumption", {
                required: "Stromverbrauch ist erforderlich",
                valueAsNumber: true,
                min: { value: 1, message: "Wert muss größer als 0 sein" },
              })}
            />
            {errors.annualConsumption && (
              <p className="text-red-500 text-xs mb-2">
                {errors.annualConsumption.message}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full py-3 bg-[#085EC4] text-white rounded-lg font-semibold hover:bg-blue-700 transition"
      >
        Berechnen
      </button>
    </form>
  );
}
