"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { DataTable, StatusBadge } from "@/components/dashoboard/DataTable";
import { ProviderFormData } from "./ProviderForm";
import TableTitle from "@/components/dashoboard/TableTitle";
import ProviderModal from "./ProviderModal";
import DeleteModal from "@/components/dashoboard/DeleteModal";

// Translation Map for German UI Labels
const translations = {
  ID: "ID",
  Anbietername: "Provider Name",
  Servicegebiete: "Service Areas",
  Tarif: "Rate",
  AktiveNutzer: "Active Users",
  Erneuerbar: "Renewable",
  Status: "Status",
  AktiverProvider: "Active Provider",
};

// Column definitions with German labels
const columns = [
  {
    key: "ID",
    header: translations.ID,
  },
  {
    key: "Anbietername",
    header: translations.Anbietername,
  },
  {
    key: "Servicegebiete",
    header: translations.Servicegebiete,
  },
  {
    key: "Tarif",
    header: translations.Tarif,
    render: (value: number) => `€${value.toFixed(2)}`,
  },
  {
    key: "AktiveNutzer",
    header: translations.AktiveNutzer,
  },
  {
    key: "Erneuerbar",
    header: translations.Erneuerbar,
    render: (value: string) => (value === "Ja" ? "Yes" : "No"),
  },
  {
    key: "Status",
    header: translations.Status,
    render: (value: string) => <StatusBadge status={value} />,
  },
];

const initialData = [
  {
    ID: "PRV001",
    Anbietername: "Vattenfall",
    Servicegebiete: "Berlin, Hamburg, Bremen",
    Tarif: 5,
    AktiveNutzer: 423,
    Erneuerbar: "Ja",
    Status: "Aktiv",
  },
  {
    ID: "PRV005",
    Anbietername: "Yello",
    Servicegebiete: "Bundesweit",
    Tarif: 3,
    AktiveNutzer: 250,
    Erneuerbar: "Ja",
    Status: "Aktiv",
  },
  {
    ID: "PRV008",
    Anbietername: "Octopus Energy",
    Servicegebiete: "Bundesweit",
    Tarif: 9,
    AktiveNutzer: 130,
    Erneuerbar: "Ja",
    Status: "Inaktiv",
  },
];

export default function ProviderTable() {
  const [providers, setProviders] = useState(initialData);
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    mode: "add" | "edit" | "view";
    selectedProvider?: any;
  }>({
    isOpen: false,
    mode: "add",
  });

  const [deleteModalState, setDeleteModalState] = useState<{
    isOpen: boolean;
    provider?: any;
  }>({
    isOpen: false,
  });

  const handleView = (row: any) => {
    setModalState({
      isOpen: true,
      mode: "view",
      selectedProvider: row,
    });
  };

  const handleEdit = (row: any) => {
    setModalState({
      isOpen: true,
      mode: "edit",
      selectedProvider: row,
    });
  };

  const handleDelete = (row: any) => {
    setDeleteModalState({
      isOpen: true,
      provider: row,
    });
  };

  const handleAddProvider = () => {
    setModalState({
      isOpen: true,
      mode: "add",
    });
  };

 const handleModalSubmit = async (data: ProviderFormData) => {
  if (modalState.mode === "add") {
    const newId = `PRV${String(providers.length + 1).padStart(3, "0")}`;
    
    // Map form data to table data structure
    const newProvider = {
      ...data,
      ID: newId,
      Erneuerbar: data.Erneuerbar ? "Ja" : "Nein",
      Status: data.AktiverProvider ? "Aktiv" : "Inaktiv",
      Tarif: 0, // Add default values for missing fields
      AktiveNutzer: 0, // Add default values for missing fields
    };
    
    setProviders([...providers, newProvider]);
  } else if (modalState.mode === "edit" && modalState.selectedProvider) {
    // Update existing provider while keeping the original values for missing fields
    const updatedProviders = providers.map((provider) =>
      provider.ID === modalState.selectedProvider.ID
        ? { 
            ...modalState.selectedProvider, // Keep original data
            ...data, // Update form fields
            Erneuerbar: data.Erneuerbar ? "Ja" : "Nein",
            Status: data.AktiverProvider ? "Aktiv" : "Inaktiv",
          }
        : provider
    );
    setProviders(updatedProviders);
  }
};

  const handleDeleteConfirm = () => {
    if (deleteModalState.provider) {
      const updatedProviders = providers.filter(
        (provider) => provider.ID !== deleteModalState.provider.ID
      );
      setProviders(updatedProviders);
      setDeleteModalState({ isOpen: false });
    }
  };

  return (
    <div className="mt-4">
      <div className="flex items-center justify-between mb-6">
        <TableTitle
          title="ALI-Anbieter"
          subtitle="Alle Ihre Tarifänderungen auf einen Blick"
        />
        <div className="flex items-center gap-2.5">
          <input
            type="text"
            placeholder="Anbieter suchen..."
            className="table-search-input"
          />
          <Button onClick={handleAddProvider} className="primary-btn">
            <Plus />
            <span>Anbieter hinzufügen</span>
          </Button>
        </div>
      </div>

      <DataTable
        columns={columns}
        data={providers}
        onView={handleView}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      {/* Provider Modal */}
      <ProviderModal
        isOpen={modalState.isOpen}
        onClose={() => setModalState({ ...modalState, isOpen: false })}
        mode={modalState.mode}
        initialData={modalState.selectedProvider}
        onSubmit={handleModalSubmit}
      />

      {/* Delete Confirmation Modal */}
      <DeleteModal
        isOpen={deleteModalState.isOpen}
        onClose={() => setDeleteModalState({ isOpen: false })}
        onConfirm={handleDeleteConfirm}
        title="Delete Provider"
        description={`Are you sure you want to delete "${
          deleteModalState.provider?.Anbietername || "this provider"
        }"? This action cannot be undone.`}
      />
    </div>
  );
}
