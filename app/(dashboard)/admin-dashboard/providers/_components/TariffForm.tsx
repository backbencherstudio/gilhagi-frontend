import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import * as z from "zod";
import { useGetProvidersAdminQuery } from "@/redux/features/providers/providersApi";

// Validierungsschema – expliziter Zahlentyp
const tariffSchema = z.object({
  Provider: z.string().min(1, "Anbieter ist erforderlich"),
  TariffName: z.string().min(1, "Tarifname ist erforderlich"),
  PricePerkWh: z
  .union([z.string(), z.number()])
  .transform((val) => {
    if (val === "" || val === undefined) return undefined;
    return Number(val);
  })
  .refine((val) => val !== undefined, {
    message: "Preis pro kWh ist erforderlich",
  })
  .refine((val) => val !== undefined && val >= 0, {
    message: "Preis pro kWh muss positiv sein",
  }),

  BaseFee: z.string().min(1, "Grundgebühr ist erforderlich"),
  Bonus: z.string().min(1, "Bonus ist erforderlich"),
  Rates: z.string().min(1, "Rates ist erforderlich"),
  PriceGuarantee: z.string().min(1, "Preisgarantie ist erforderlich"),
  RenewableEnergy: z.boolean(),
  Recommended: z.boolean(),
});

// Expliziter Typ passend zum Schema
export type TariffFormData = {
  Provider: string;
  TariffName: string;
  PricePerkWh: number;
  BaseFee: string;
  Bonus: string;
  PriceGuarantee: string;
  Rates: string;
  RenewableEnergy: boolean;
  Recommended: boolean;
};

interface TariffFormProps {
  initialData?: Partial<TariffFormData>;
  onSubmit: (data: TariffFormData) => void;
  isLoading?: boolean;
  mode?: "add" | "edit" | "view";
}

export default function TariffForm({
  initialData,
  onSubmit,
  isLoading = false,
  mode = "add",
}: TariffFormProps) {


  const { data: providersData } = useGetProvidersAdminQuery("");
  const providersList = providersData?.data?.map((provider: any) => provider.provider_name);

  const form = useForm<TariffFormData>({
    resolver: zodResolver(tariffSchema) as any,
    defaultValues: {
      Provider: initialData?.Provider || "",
      TariffName: initialData?.TariffName || "",
      PricePerkWh: initialData?.PricePerkWh ?? undefined,

      BaseFee: initialData?.BaseFee || "",
      Bonus: initialData?.Bonus || "",
      PriceGuarantee: initialData?.PriceGuarantee || "",
      Rates: initialData?.Rates || "",
      RenewableEnergy: initialData?.RenewableEnergy || false,
      Recommended: initialData?.Recommended || false,
    },
  });

  // Reset form when initialData changes (modal opens/closes)
  useEffect(() => {
    if (mode === "add") {
      form.reset({
        Provider: "",
        TariffName: "",
        PricePerkWh: 0,
        BaseFee: "",
        Bonus: "",
        PriceGuarantee: "",
        Rates: "",
        RenewableEnergy: false,
        Recommended: false,
      });
    } else if (initialData) {
      form.reset({
        Provider: initialData.Provider || "",
        TariffName: initialData.TariffName || "",
        PricePerkWh: initialData.PricePerkWh || 0,
        BaseFee: initialData.BaseFee || "",
        Bonus: initialData.Bonus || "",
        PriceGuarantee: initialData.PriceGuarantee || "",
        Rates: initialData.Rates || "",
        RenewableEnergy: initialData.RenewableEnergy || false,
        Recommended: initialData.Recommended || false,
      });
    }
  }, [initialData, mode, form]);

  const isViewMode = mode === "view";

  const handleFormSubmit = async (data: TariffFormData) => {

    console.log("TariffForm data", data);

    await onSubmit(data);
    // Reset form after successful submission in add mode
    if (mode === "add") {
      form.reset({
        Provider: "",
        TariffName: "",
        PricePerkWh: 0,
        BaseFee: "",
        Bonus: "",
        PriceGuarantee: "",
        Rates: "",
        RenewableEnergy: false,
        Recommended: false,
      });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleFormSubmit)} className="space-y-2">
        {/* Anbieter */}
        <FormField
          control={form.control}
          name="Provider"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="modal-form-label">Anbieter *</FormLabel>
              <Select
                onValueChange={field.onChange}
                value={field.value}
                disabled={isViewMode || isLoading}
              >
                <FormControl>
                  <SelectTrigger className="modal-form-input w-full">
                    <SelectValue placeholder="Anbieter auswählen" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {providersList?.map((provider: any) => (
                    <SelectItem key={provider} value={provider}>{provider}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Tarifname */}
        <FormField
          control={form.control}
          name="TariffName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="modal-form-label">Tarifname *</FormLabel>
              <FormControl>
                <Input
                  className="modal-form-input"
                  {...field}
                  placeholder="Tarifnamen eingeben"
                  disabled={isViewMode || isLoading}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex items-start gap-4">
          {/* Preis pro kWh */}
          <FormField
            control={form.control}
            name="PricePerkWh"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel className="modal-form-label">
                  Preis pro kWh (€) *
                </FormLabel>
                <FormControl>
                  <Input
                    className="modal-form-input"
                    type="number"
                    step="0.01"
                    min="0"
                    placeholder="0,32"
                    disabled={isViewMode || isLoading}
                    value={field.value ?? ""}
                    onChange={(e) => {
                      const value = e.target.value;
                      field.onChange(value === "" ? undefined : Number(value));
                    }}
                    onBlur={field.onBlur}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Grundgebühr */}
          <FormField
            control={form.control}
            name="BaseFee"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel className="modal-form-label">
                  Grundgebühr (€)/Monat *
                </FormLabel>
                <FormControl>
                  <Input
                    className="modal-form-input"
                    {...field}
                    placeholder="9,90 / Monat"
                    disabled={isViewMode || isLoading}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex gap-4 items-start">
          {/* Bonus */}
          <FormField
            control={form.control}
            name="Bonus"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel className="modal-form-label">
                  Wechselbonus (€) *
                </FormLabel>
                <FormControl>
                  <Input
                    className="modal-form-input"
                    {...field}
                    placeholder="50"
                    disabled={isViewMode || isLoading}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Preisgarantie */}
          <FormField
            control={form.control}
            name="PriceGuarantee"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel className="modal-form-label">
                  Preisgarantie *
                </FormLabel>
                <FormControl>
                  <Input
                    className="modal-form-input"
                    {...field}
                    placeholder="12 Monate"
                    disabled={isViewMode || isLoading}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Tarifname */}
        <FormField
          control={form.control}
          name="Rates"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="modal-form-label">Rates *</FormLabel>
              <FormControl>
                <Input
                  className="modal-form-input"
                  {...field}
                  placeholder="Tarifnamen eingeben"
                  disabled={isViewMode || isLoading}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* 100 % erneuerbare Energie */}
        <FormField
          control={form.control}
          name="RenewableEnergy"
          render={({ field }) => (
            <FormItem className="flex items-center justify-between p-4 border rounded-lg">
              <div className="space-y-0.5">
                <FormLabel className="modal-form-label text-base">
                  100 % erneuerbare Energie
                </FormLabel>
                {/* <div className="text-sm text-gray-500">
                  Dieser Tarif nutzt ausschließlich erneuerbare Energiequellen
                </div> */}
              </div>
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  disabled={isViewMode || isLoading}
                />
              </FormControl>
            </FormItem>
          )}
        />

        {/* Als empfohlen markieren */}
        <FormField
          control={form.control}
          name="Recommended"
          render={({ field }) => (
            <FormItem className="flex items-center justify-between p-4 border rounded-lg">
              <div className="space-y-0.5">
                <FormLabel className="modal-form-label text-base">
                  Als empfohlen markieren
                </FormLabel>
                {/* <div className="text-sm text-gray-500">
                  Diesen Tarif als Empfehlung für Kundinnen und Kunden hervorheben
                </div> */}
              </div>
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  disabled={isViewMode || isLoading}
                />
              </FormControl>
            </FormItem>
          )}
        />

        {/* Speichern */}
        <div className="flex justify-end gap-3 pt-4">
          <Button
            className="primary-btn w-full"
            type="submit"
            disabled={isLoading}
          >
            {isLoading
              ? "Wird gespeichert..."
              : mode === "edit"
                ? "Tarif aktualisieren"
                : "Tarif hinzufügen"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
