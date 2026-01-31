"use client";

import { useForm, Controller } from "react-hook-form";
import { useParams, useRouter } from "next/navigation";
import { toast } from "sonner";

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
import { useCreateOrderMutation } from "@/redux/features/order/orderApi";

interface FormData {
  salutation: string;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  postal_code: string;
  location: string;
  street: string;
  house_number: string;
}

export default function InformationForm() {
  const router = useRouter();
  const params = useParams();
  const tariffId = params.tariffId as string;
  const [createOrder, { isLoading }] = useCreateOrderMutation();

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  // Map salutation values from German to API format
  const mapSalutation = (value: string): string => {
    const mapping: Record<string, string> = {
      herr: "Mister",
      frau: "Woman",
      divers: "Divers",
    };
    return mapping[value] || value;
  };

  const onSubmit = async (data: FormData) => {
    try {
      // Transform form data to API format
      const orderData = {
        tariff_id: parseInt(tariffId),
        salutation: mapSalutation(data.salutation),
        first_name: data.first_name.trim(),
        last_name: data.last_name.trim(),
        email: data.email.trim(),
        phone_number: data.phone_number.trim(),
        postal_code: data.postal_code.trim(),
        location: data.location.trim(),
        street: data.street.trim(),
        house_number: data.house_number.trim(),
      };

      const response = await createOrder(orderData).unwrap();

      if (response?.data) {
        toast.success(response?.message || "Order created successfully");
        // Redirect to success or order status page
        router.push(`/services/provider/success`);
      } else {
        toast.error(response?.message || "Failed to create order");
      }
    } catch (error: any) {
      console.error("Order creation error:", error);
      toast.error(error?.data?.message || error?.message || "An error occurred");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-[1160px] mx-auto border border-[#E2E8EE] [background:#FFF] backdrop-blur-[7.4px] p-3 md:p-8 rounded-3xl "
    >
      {/* Title */}
      <h2 className="text-xl font-semibold text-[#1C2022] mb-6">
        Ihre Informationen
      </h2>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Anrede */}
        <div className=" md:col-span-2 flex flex-col space-y-2">
          <Label className="text-sm font-medium">
            Anrede <span className="text-red-500">*</span>
          </Label>

          <Controller
            name="salutation"
            control={control}
            rules={{ required: "Bitte wählen Sie eine Anrede aus" }}
            render={({ field }) => (
              <Select
                value={field.value ?? ""}
                onValueChange={(val) => field.onChange(val)}
              >
                <SelectTrigger className="px-4 py-3.5 w-full rounded-lg border-[#D6DEE6] bg-white">
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

          {errors.salutation && (
            <p className="text-red-500 text-sm">
              {String(errors.salutation.message)}
            </p>
          )}
        </div>

        {/* Vorname */}
        <div className="flex flex-col space-y-2">
          <Label className="text-sm font-medium">
            Vorname <span className="text-red-500">*</span>
          </Label>
          <Input
            {...register("first_name", { required: "Dieses Feld ist erforderlich." })}
            placeholder="Vorname"
            className="px-5 py-6 rounded-lg border border-[#E2E8EE]"
          />
          {errors.first_name && (
            <p className="text-red-500 text-sm">
              {errors.first_name.message || "Dieses Feld ist erforderlich."}
            </p>
          )}
        </div>

        {/* Nachname */}
        <div className="flex flex-col space-y-2">
          <Label className="text-sm font-medium">
            Nachname <span className="text-red-500">*</span>
          </Label>
          <Input
            {...register("last_name", { required: "Dieses Feld ist erforderlich." })}
            placeholder="Bitte geben Sie Ihren Nachnamen ein"
            className="px-5 py-6 rounded-lg border-[#D6DEE6]"
          />
          {errors.last_name && (
            <p className="text-red-500 text-sm">
              {errors.last_name.message || "Dieses Feld ist erforderlich."}
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
            {...register("email", {
              required: "Dieses Feld ist erforderlich.",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Bitte geben Sie eine gültige E-Mail ein."
              }
            })}
            placeholder="john@example.com"
            className="px-5 py-6 rounded-lg border-[#D6DEE6]"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">
              {errors.email.message || "Bitte geben Sie eine gültige E-Mail ein."}
            </p>
          )}
        </div>

        {/* Telefonnummer */}
        <div className="flex flex-col space-y-2">
          <Label className="text-sm font-medium">
            Telefonnummer <span className="text-red-500">*</span>
          </Label>
          <Input
            {...register("phone_number", { required: "Dieses Feld ist erforderlich." })}
            placeholder="z.B. +46 123 4567 89"
            className="px-5 py-6 rounded-lg border-[#D6DEE6]"
          />
          {errors.phone_number && (
            <p className="text-red-500 text-sm">
              {errors.phone_number.message || "Dieses Feld ist erforderlich."}
            </p>
          )}
        </div>

        {/* PLZ */}
        <div className="flex flex-col space-y-2">
          <Label className="text-sm font-medium">
            Postleitzahl <span className="text-red-500">*</span>
          </Label>
          <Input
            {...register("postal_code", { required: "Dieses Feld ist erforderlich." })}
            placeholder="10115"
            className="px-5 py-6 rounded-lg border-[#D6DEE6]"
          />
          {errors.postal_code && (
            <p className="text-red-500 text-sm">
              {errors.postal_code.message || "Dieses Feld ist erforderlich."}
            </p>
          )}
        </div>

        {/* Standort */}
        <div className="flex flex-col space-y-2">
          <Label className="text-sm font-medium">
            Standort <span className="text-red-500">*</span>
          </Label>
          <Input
            {...register("location", { required: "Dieses Feld ist erforderlich." })}
            placeholder="Berlin"
            className="px-5 py-6 rounded-lg border-[#D6DEE6]"
          />
          {errors.location && (
            <p className="text-red-500 text-sm">
              {errors.location.message || "Dieses Feld ist erforderlich."}
            </p>
          )}
        </div>

        {/* Straße */}
        <div className="flex flex-col space-y-2">
          <Label className="text-sm font-medium">
            Straße <span className="text-red-500">*</span>
          </Label>
          <Input
            {...register("street", { required: "Dieses Feld ist erforderlich." })}
            placeholder="Bitte geben Sie Ihre Straßenadresse ein."
            className="px-5 py-6 rounded-lg border-[#D6DEE6]"
          />
          {errors.street && (
            <p className="text-red-500 text-sm">
              {errors.street.message || "Dieses Feld ist erforderlich."}
            </p>
          )}
        </div>

        {/* Hausnummer */}
        <div className="flex flex-col space-y-2">
          <Label className="text-sm font-medium">
            Hausnummer <span className="text-red-500">*</span>
          </Label>
          <Input
            {...register("house_number", { required: "Dieses Feld ist erforderlich." })}
            placeholder="Hausnummer"
            className="px-5 py-6 rounded-lg border-[#D6DEE6]"
          />
          {errors.house_number && (
            <p className="text-red-500 text-sm">
              {errors.house_number.message || "Dieses Feld ist erforderlich."}
            </p>
          )}
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-between mt-6">
        <Button
          onClick={() => router.back()}
          type="button"
          variant="outline"
          className="flex justify-center items-center gap-2 border border-[#085EC4] px-6 py-3 rounded-4xl border-solid text-[#085EC4] font-medium leading-[140%] cursor-pointer"
        >
          <ArrowLeft /> Zurück
        </Button>

        <Button
          type="submit"
          disabled={isLoading}
          className="flex justify-center items-center gap-3 [background:var(--Primary,#085EC4)] px-6 py-3 rounded-4xl text-white cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? "Wird gesendet..." : "Weiter"} <ArrowRight />
        </Button>
      </div>

      <div className="mt-14">
        <ReqInfo />
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
        Nachdem Ihre Wechselanfrage erfolgreich bearbeitet wurde, kann
        Wechselsicher Ihnen Informationen über ähnliche Energieprodukte oder
        relevante Service-Updates an die von Ihnen angegebene E-Mail-Adresse
        senden. Wenn Sie diese E-Mails nicht mehr erhalten möchten, können Sie
        sich jederzeit abmelden. <br /> Senden Sie einfach eine kurze Nachricht
        an: Wechselsicher Kundenservice, [Unternehmensadresse], oder schreiben
        Sie uns eine E-Mail an support@wechselsicher.com. Es fallen keine
        zusätzlichen Kosten an, außer den üblichen Übertragungsgebühren.
      </p>
    </>
  );
};
