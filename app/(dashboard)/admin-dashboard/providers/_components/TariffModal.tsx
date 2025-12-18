import { useState } from "react";
import ModalWrapper from "@/components/dashoboard/ModalWrapper";
import TariffForm, { TariffFormData } from "./TariffForm";

interface TariffModalProps {
  isOpen: boolean;
  onClose: () => void;
  mode: "add" | "edit" | "view";
  initialData?: {
    ID: string;
    Provider: string;
    TariffName: string;
    PricePerkWh: number;
    BaseFee: string;
    Bonus: string;
    PriceGuarantee: string;
    RenewableEnergy: boolean;
    Recommended: boolean;
  };
  onSubmit: (data: TariffFormData) => Promise<void> | void;
}

export default function TariffModal({
  isOpen,
  onClose,
  mode,
  initialData,
  onSubmit,
}: TariffModalProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (data: TariffFormData) => {
    setIsLoading(true);
    try {
      await onSubmit(data);
      onClose();
    } catch (error) {
      console.error("Fehler beim Absenden des Formulars:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const modalTitles = {
    add: "Neuen Tarif hinzufügen",
    edit: "Tarif bearbeiten",
    view: "Tarifdetails anzeigen",
  };

  const modalDescriptions = {
    add: "Fügen Sie einen neuen Tarif für einen Anbieter hinzu",
    edit: "Bearbeiten Sie die Details dieses Tarifs",
    view: "Sehen Sie sich die Details dieses Tarifs an",
  };

  return (
    <ModalWrapper
      isOpen={isOpen}
      onClose={onClose}
      title={modalTitles[mode]}
      description={modalDescriptions[mode]}
      size="custom"
    >
      <div className="py-4">
        {initialData?.ID && (
          <div className="mb-4 text-sm text-gray-500">
            Tarif-ID: {initialData.ID}
          </div>
        )}

        <TariffForm
          initialData={initialData}
          onSubmit={handleSubmit}
          isLoading={isLoading}
          mode={mode}
        />
      </div>
    </ModalWrapper>
  );
}
