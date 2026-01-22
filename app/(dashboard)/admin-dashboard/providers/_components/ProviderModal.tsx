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
      console.error("Fehler beim Absenden des Formulars:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const modalTitles = {
    add: "Neuen Anbieter hinzufügen",
    edit: "Anbieter bearbeiten",
    view: "Anbieterdetails anzeigen",
  };

  const modalDescriptions = {
    add: "Fügen Sie einen neuen Energieanbieter zu Ihrem System hinzu",
    edit: "Bearbeiten Sie die Details dieses Anbieters",
    view: "Sehen Sie sich die Details dieses Anbieters an",
  };

  // Erneuerbar von "Ja"/"Nein" in Boolean für das Formular umwandeln
  const processedData = initialData
    ? {
        ...initialData,
        Erneuerbar:
          initialData.Erneuerbar === "Ja" || initialData.Erneuerbar === true,
        AktiverProvider: initialData.Status === "Aktiv" ? true : false,
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
            Anbieter-ID: {initialData.ID}
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
