"use client";

import { useForm, Controller } from "react-hook-form";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function InformationForm() {
  const {
    control,
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log("Form data:", data);
    alert("got ity");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-[1160px] mx-auto border border-[#E2E8EE] [background:#FFF] backdrop-blur-[7.4px] p-4 md:p-8 rounded-3xl"
    >
      {/* Title */}
      <h2 className="text-xl font-semibold text-[#1C2022] mb-6">
        Ihre Informationen
      </h2>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Anrede */}
        <div className="flex flex-col space-y-2">
          <Label className="text-sm font-medium">
            Anrede <span className="text-red-500">*</span>
          </Label>

          <Controller
            name="anrede"
            control={control}
            rules={{ required: "Bitte wählen Sie eine Anrede aus" }}
            render={({ field }) => (
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <SelectTrigger className="px-4 py-6 w-full rounded-lg border-[#D6DEE6] bg-white">
                  <SelectValue placeholder="Bitte wählen Sie eine Anrede aus" />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="herr">Herr</SelectItem>
                  <SelectItem value="frau">Frau</SelectItem>
                  <SelectItem value="divers">Divers</SelectItem>
                </SelectContent>
              </Select>
            )}
          />

          {/* ERROR MESSAGE */}
          {errors.anrede && (
            <p className="text-red-500 text-sm">
              {String(errors.anrede.message)}
            </p>
          )}
        </div>
        {/* Titel */}

        <div className="flex flex-col space-y-2">
          <Label className="text-sm font-medium">Titel *</Label>
          <Controller
            name="titel"
            control={control}
            rules={{ required: "title is req" }}
            render={({ field }) => (
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <SelectTrigger className="px-5 py-6 rounded-lg border-[#D6DEE6] bg-white w-full">
                  <SelectValue placeholder="Titel (optional)" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="herr">Herr</SelectItem>
                  <SelectItem value="frau">Frau</SelectItem>
                  <SelectItem value="divers">Divers</SelectItem>
                </SelectContent>
              </Select>
            )}
          />
          {/* ERROR MESSAGE */}
          {errors.titel && (
            <p className="text-red-500 text-sm">
              {String(errors.titel.message)}
            </p>
          )}
        </div>

        {/* Vorname */}
        <div className="flex flex-col space-y-2">
          <Label className="text-sm font-medium">
            Vorname <span className="text-red-500">*</span>
          </Label>
          <Input
            {...register("firstName", { required: true })}
            placeholder="Vorname"
            className="px-5 py-6 rounded-lg border border-[#E2E8EE]"
          />
          {errors.firstName && (
            <p className="text-red-500 text-sm">
              Dieses Feld ist erforderlich.
            </p>
          )}
        </div>

        {/* Nachname */}
        <div className="flex flex-col space-y-2">
          <Label className="text-sm font-medium">
            Nachname <span className="text-red-500">*</span>
          </Label>
          <Input
            {...register("lastName", { required: true })}
            placeholder="Bitte geben Sie Ihren Nachnamen ein"
            className="px-5 py-6 rounded-lg border-[#D6DEE6]"
          />
          {errors.lastName && (
            <p className="text-red-500 text-sm">
              Dieses Feld ist erforderlich.
            </p>
          )}
        </div>

        {/* Email */}
        <div className="flex flex-col space-y-2">
          <Label className="text-sm font-medium">
            Ihre E-Mail-Adresse <span className="text-red-500">*</span>
          </Label>
          <Input
            type="email"
            {...register("email", { required: true })}
            placeholder="john@example.com"
            className="px-5 py-6 rounded-lg border-[#D6DEE6]"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">
              Bitte geben Sie eine gültige E-Mail ein.
            </p>
          )}
        </div>

        {/* Telefonnummer */}
        <div className="flex flex-col space-y-2">
          <Label className="text-sm font-medium">
            Telefonnummer <span className="text-red-500">*</span>
          </Label>
          <Input
            {...register("phone", { required: true })}
            placeholder="z.B. +46 123 4567 89"
            className="px-5 py-6 rounded-lg border-[#D6DEE6]"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm">
              Dieses Feld ist erforderlich.
            </p>
          )}
        </div>

        {/* PLZ */}
        <div className="flex flex-col space-y-2">
          <Label className="text-sm font-medium">
            Postleitzahl <span className="text-red-500">*</span>
          </Label>
          <Input
            {...register("zip", { required: true })}
            placeholder="10115"
            className="px-5 py-6 rounded-lg border-[#D6DEE6]"
          />
          {errors.zip && (
            <p className="text-red-500 text-sm">
              Dieses Feld ist erforderlich.
            </p>
          )}
        </div>

        {/* Standort */}
        <div className="flex flex-col space-y-2">
          <Label className="text-sm font-medium">
            Standort <span className="text-red-500">*</span>
          </Label>
          <Input
            {...register("city", { required: true })}
            placeholder="Berlin"
            className="px-5 py-6 rounded-lg border-[#D6DEE6]"
          />
          {errors.city && (
            <p className="text-red-500 text-sm">
              Dieses Feld ist erforderlich.
            </p>
          )}
        </div>

        {/* Straße */}
        <div className="flex flex-col space-y-2">
          <Label className="text-sm font-medium">
            Straße <span className="text-red-500">*</span>
          </Label>
          <Input
            {...register("street", { required: true })}
            placeholder="Bitte geben Sie Ihre Straßenadresse ein."
            className="px-5 py-6 rounded-lg border-[#D6DEE6]"
          />
          {errors.street && (
            <p className="text-red-500 text-sm">
              Dieses Feld ist erforderlich.
            </p>
          )}
        </div>

        {/* Hausnummer */}
        <div className="flex flex-col space-y-2">
          <Label className="text-sm font-medium">
            Hausnummer <span className="text-red-500">*</span>
          </Label>
          <Input
            {...register("houseNumber", { required: true })}
            className="px-5 py-6 rounded-lg border-[#D6DEE6]"
          />
          {errors.houseNumber && (
            <p className="text-red-500 text-sm">
              Dieses Feld ist erforderlich.
            </p>
          )}
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-between mt-6">
        <Button
          type="button"
          variant="outline"
          className="flex justify-center items-center gap-2 border border-[#085EC4] px-6 py-3 rounded-4xl border-solid text-[#085EC4] font-medium leading-[140%] cursor-pointer"
        >
          <ArrowLeft /> Zurück
        </Button>

        <Button
          type="submit"
          className="flex justify-center items-center gap-3 [background:var(--Primary,#085EC4)] px-6 py-3 rounded-4xl text-white cursor-pointer"
        >
          Weiter <ArrowRight />
        </Button>
      </div>

      <div className="mt-14">
        <ReqInfo/>
      </div>
    </form>
  );
}

const ReqInfo = () => {
  return (
    <>
      <p className="text-[#1C2022]  text-[10px] font-normal leading-[132%] tracking-[0.05px] mb-2">
        * Pflichtfeld
      </p>

      <p className="self-stretch text-[#5F728B]  text-[10px] font-normal leading-[132%] tracking-[0.05px]">
        Nachdem Ihre Wechselanfrage erfolgreich bearbeitet wurde, kann Switchify
        Ihnen Informationen über ähnliche Energieprodukte oder relevante
        Service-Updates an die von Ihnen angegebene E-Mail-Adresse senden. Wenn
        Sie diese E-Mails nicht mehr erhalten möchten, können Sie sich jederzeit
        abmelden. <br /> Senden Sie einfach eine kurze Nachricht an: Switchify
        Kundenservice, [Unternehmensadresse], oder schreiben Sie uns eine E-Mail
        an support@switchify.com. Es fallen keine zusätzlichen Kosten an, außer
        den üblichen Übertragungsgebühren.
      </p>
    </>
  );
};
