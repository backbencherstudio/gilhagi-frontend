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

// Validierungsschema
const providerSchema = z.object({
  Anbietername: z
    .string()
    .min(2, "Der Anbietername muss mindestens 2 Zeichen lang sein"),
  Servicegebiete: z
    .string()
    .min(1, "Servicegebiete sind erforderlich"),
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
        {/* Anbietername */}
        <FormField
          control={form.control}
          name="Anbietername"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="modal-form-label">
                Anbietername *
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="Anbieternamen eingeben"
                  disabled={isViewMode || isLoading}
                  className="modal-form-input"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Servicegebiete (Postleitzahlen) */}
        <FormField
          control={form.control}
          name="Servicegebiete"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="modal-form-label">
                Servicegebiete (Postleitzahlen) *
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

        {/* Erneuerbarer Energieanbieter */}
        <FormField
          control={form.control}
          name="Erneuerbar"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start justify-between space-x-3 space-y-0">
              <div className="space-y-1 leading-none">
                <FormLabel className="modal-form-label">
                  Erneuerbare Energie
                </FormLabel>
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

        {/* Aktiver Anbieter */}
        <FormField
          control={form.control}
          name="AktiverProvider"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start justify-between space-x-3 space-y-0">
              <div className="space-y-1 leading-none">
                <FormLabel className="modal-form-label">
                  Aktiver Anbieter
                </FormLabel>
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

        {/* Speichern-Button */}
        {!isViewMode && (
          <div className="flex justify-end gap-3 md:mt-8">
            <Button
              className="w-full primary-btn"
              type="submit"
              disabled={isLoading}
            >
              {isLoading
                ? "Wird gespeichert..."
                : mode === "edit"
                ? "Anbieter aktualisieren"
                : "Anbieter hinzufügen"}
            </Button>
          </div>
        )}
      </form>
    </Form>
  );
}
