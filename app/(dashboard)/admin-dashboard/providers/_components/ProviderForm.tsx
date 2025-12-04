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
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

// Schema for validation
const providerSchema = z.object({
  Anbietername: z
    .string()
    .min(2, "Provider name must be at least 2 characters"),
  Servicegebiete: z.string().min(1, "Service areas are required"),
  Erneuerbar: z.boolean(),
  AktiverProvider: z.boolean(),
});

export type ProviderFormData = z.infer<typeof providerSchema>;

interface ProviderFormProps {
  initialData?: Partial<ProviderFormData> & { ID?: string };
  onSubmit: (data: ProviderFormData) => void;
  isLoading?: boolean;
  mode?: "add" | "edit" | "view";
}

export default function ProviderForm({
  initialData,
  onSubmit,
  isLoading = false,
  mode = "add",
}: ProviderFormProps) {
  const form = useForm<ProviderFormData>({
    resolver: zodResolver(providerSchema),
    defaultValues: {
      Anbietername: initialData?.Anbietername || "",
      Servicegebiete: initialData?.Servicegebiete || "",
      Erneuerbar: initialData?.Erneuerbar || false,
      AktiverProvider: initialData?.AktiverProvider || false,
    },
  });

  const isViewMode = mode === "view";

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {/* Provider Name */}
        <FormField
          control={form.control}
          name="Anbietername"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="modal-form-label">
                Provider Name *
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="Enter provider name"
                  disabled={isViewMode || isLoading}
                  className="modal-form-input"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Service Areas (Postcodes) */}
        <FormField
          control={form.control}
          name="Servicegebiete"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="modal-form-label">
                Service Areas (Postcodes) *
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="10115, 10117, 10119"
                  disabled={isViewMode || isLoading}
                  className="modal-form-input"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Renewable Energy Provider Toggle */}
        <FormField
          control={form.control}
          name="Erneuerbar"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start justify-between space-x-3 space-y-0">
              <div className="space-y-1 leading-none">
                <FormLabel className="modal-form-label">
                  Renewable Energy
                </FormLabel>
              </div>
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange} // FIXED: Use onCheckedChange
                  disabled={isViewMode || isLoading}
                />
              </FormControl>
            </FormItem>
          )}
        />

        {/* Active Provider Toggle */}
        <FormField
          control={form.control}
          name="AktiverProvider"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start justify-between space-x-3 space-y-0">
              <div className="space-y-1 leading-none">
                <FormLabel className="modal-form-label">
                  Active Provider
                </FormLabel>
              </div>
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange} // FIXED: Use onCheckedChange
                  disabled={isViewMode || isLoading}
                />
              </FormControl>
            </FormItem>
          )}
        />
        {/* Submit Button */}
        {!isViewMode && (
          <div className="flex justify-end gap-3 md:mt-8">
            <Button
              className="w-full primary-btn"
              type="submit"
              disabled={isLoading}
            >
              {isLoading
                ? "Saving..."
                : mode === "edit"
                ? "Update Provider"
                : "Add Provider"}
            </Button>
          </div>
        )}
      </form>
    </Form>
  );
}
