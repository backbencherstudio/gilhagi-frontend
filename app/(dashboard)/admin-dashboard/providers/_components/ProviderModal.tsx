"use client";

import { useState } from "react";

import ModalWrapper from "@/components/dashoboard/ModalWrapper";
import ProviderForm, { ProviderFormData } from "./ProviderForm";

interface ProviderModalProps {
  isOpen: boolean;
  onClose: () => void;
  mode: "add" | "edit" | "view";
  initialData?: {
    ID: string;
    Anbietername: string;
    Servicegebiete: string;
    Tarif: number;
    AktiveNutzer: number;
    Erneuerbar: boolean | string;
    Status: string;
  };
  onSubmit: (data: ProviderFormData) => Promise<void> | void;
}

export default function ProviderModal({
  isOpen,
  onClose,
  mode,
  initialData,
  onSubmit,
}: ProviderModalProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (data: ProviderFormData) => {
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
    add: "Add New Provider",
    edit: "Edit Provider",
    view: "View Provider Details",
  };

  const modalDescriptions = {
    add: "Add a new energy provider to your system",
    edit: "Update the details of this provider",
    view: "View the details of this provider",
  };

  // Convert Erneuerbar from "Ja"/"Nein" to boolean for form
  const processedData = initialData
    ? {
        ...initialData,
        Erneuerbar: initialData.Erneuerbar === "Ja" || initialData.Erneuerbar === true,
      }
    : undefined;

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
            Provider ID: {initialData.ID}
          </div>
        )}
        <ProviderForm
          initialData={processedData}
          onSubmit={handleSubmit}
          isLoading={isLoading}
          mode={mode}
        />
      </div>
    </ModalWrapper>
  );
}