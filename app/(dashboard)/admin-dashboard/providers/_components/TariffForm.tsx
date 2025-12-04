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
import * as z from "zod";

// Schema for validation - Use explicit number type
const tariffSchema = z.object({
  Provider: z.string().min(1, "Provider is required"),
  TariffName: z.string().min(1, "Tariff name is required"),
  PricePerkWh: z
    .union([z.string(), z.number()])
    .transform((val) => (typeof val === "string" ? parseFloat(val) || 0 : val))
    .pipe(z.number().min(0, "Price per kWh must be a positive value")),
  BaseFee: z.string().min(1, "Base fee is required"),
  Bonus: z.string().min(1, "Bonus is required"),
  PriceGuarantee: z.string().min(1, "Price Guarantee is required"),
  RenewableEnergy: z.boolean(),
  Recommended: z.boolean(),
});

// Explicit type definition to match the schema
export type TariffFormData = {
  Provider: string;
  TariffName: string;
  PricePerkWh: number;
  BaseFee: string;
  Bonus: string;
  PriceGuarantee: string;
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
  const form = useForm<TariffFormData>({
    resolver: zodResolver(tariffSchema) as any, // Type assertion to fix the inference issue
    defaultValues: {
      Provider: initialData?.Provider || "",
      TariffName: initialData?.TariffName || "",
      PricePerkWh: initialData?.PricePerkWh || 0,
      BaseFee: initialData?.BaseFee || "",
      Bonus: initialData?.Bonus || "",
      PriceGuarantee: initialData?.PriceGuarantee || "",
      RenewableEnergy: initialData?.RenewableEnergy || false,
      Recommended: initialData?.Recommended || false,
    },
  });

  const isViewMode = mode === "view";

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {/* Provider */}
        <FormField
          control={form.control}
          name="Provider"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="modal-form-label">Provider *</FormLabel>
              <Select
                onValueChange={field.onChange}
                value={field.value}
                disabled={isViewMode || isLoading}
              >
                <FormControl>
                  <SelectTrigger className="modal-form-input w-full">
                    <SelectValue placeholder="Select provider" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="All Provider">All Provider</SelectItem>
                  <SelectItem value="test1">Provider 1</SelectItem>
                  <SelectItem value="test2">Provider 2</SelectItem>
                  <SelectItem value="test3">Provider 3</SelectItem>
                  <SelectItem value="test4">Provider 4</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Tariff Name */}
        <FormField
          control={form.control}
          name="TariffName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="modal-form-label">Tariff Name *</FormLabel>
              <FormControl>
                <Input
                  className="modal-form-input"
                  {...field}
                  placeholder="Enter tariff name"
                  disabled={isViewMode || isLoading}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex items-start gap-4">
          {/* Price per kWh */}
          <FormField
            control={form.control}
            name="PricePerkWh"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel className="modal-form-label">
                  Price per kWh (€) *
                </FormLabel>
                <FormControl>
                  <Input
                    className="modal-form-input"
                    type="number"
                    step="0.01"
                    min="0"
                    placeholder="0.32"
                    disabled={isViewMode || isLoading}
                    value={field.value}
                    onChange={(e) => {
                      const value = e.target.value;
                      field.onChange(value === "" ? 0 : parseFloat(value));
                    }}
                    onBlur={field.onBlur}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Base Fee */}
          <FormField
            control={form.control}
            name="BaseFee"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel className="modal-form-label">
                  Base Fee (€)/month *
                </FormLabel>
                <FormControl>
                  <Input
                    className="modal-form-input"
                    {...field}
                    placeholder="9.90/month"
                    disabled={isViewMode || isLoading}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex gap-4 items-start">
          {/* Sign-up Bonus */}
          <FormField
            control={form.control}
            name="Bonus"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel className="modal-form-label">
                  Sign-up Bonus (€) *
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

          {/* Price Guarantee */}
          <FormField
            control={form.control}
            name="PriceGuarantee"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel className="modal-form-label">
                  Price Guarantee *
                </FormLabel>
                <FormControl>
                  <Input
                    className="modal-form-input"
                    {...field}
                    placeholder="12 months"
                    disabled={isViewMode || isLoading}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* 100% Renewable Energy */}
        <FormField
          control={form.control}
          name="RenewableEnergy"
          render={({ field }) => (
            <FormItem className="flex items-center justify-between p-4 border rounded-lg">
              <div className="space-y-0.5">
                <FormLabel className="modal-form-label text-base">
                  100% Renewable Energy
                </FormLabel>
                <div className="text-sm text-gray-500">
                  This tariff uses only renewable energy sources
                </div>
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

        {/* Mark as Recommended */}
        <FormField
          control={form.control}
          name="Recommended"
          render={({ field }) => (
            <FormItem className="flex items-center justify-between p-4 border rounded-lg">
              <div className="space-y-0.5">
                <FormLabel className="modal-form-label text-base">
                  Mark as Recommended
                </FormLabel>
                <div className="text-sm text-gray-500">
                  Highlight this tariff as recommended for customers
                </div>
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

        {/* Submit Button */}
        <div className="flex justify-end gap-3 pt-4">
          <Button
            className="primary-btn w-full"
            type="submit"
            disabled={isLoading}
          >
            {isLoading
              ? "Saving..."
              : mode === "edit"
              ? "Update Tariff"
              : "Add Tariff"}
          </Button>
        </div>
      </form>
    </Form>
  );
}