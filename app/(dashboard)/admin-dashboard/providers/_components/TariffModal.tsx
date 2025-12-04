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
      console.error("Error submitting form:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const modalTitles = {
    add: "Add New Tariff",
    edit: "Edit Tariff",
    view: "View Tariff Details",
  };

  const modalDescriptions = {
    add: "Add a new tariff for a provider",
    edit: "Update the details of this tariff",
    view: "View the details of this tariff",
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
            Tariff ID: {initialData.ID}
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
