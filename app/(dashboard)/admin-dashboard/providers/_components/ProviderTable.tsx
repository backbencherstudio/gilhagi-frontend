"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { DataTable, StatusBadge } from "@/components/dashoboard/DataTable";
import { ProviderFormData } from "./ProviderForm";
import TableTitle from "@/components/dashoboard/TableTitle";
import ProviderModal from "./ProviderModal";
import DeleteModal from "@/components/dashoboard/DeleteModal";
import { useCreateProviderAdminMutation, useDeleteProviderAdminMutation, useGetProviderByIdAdminQuery, useGetProvidersAdminQuery, useUpdateProviderAdminMutation } from "@/redux/features/providers/providersApi";
import { toast } from "sonner";
import { CreateProviderResponseType, GetProvidersResponseType, ProviderType } from "@/redux/features/providers/provider.type";


// Translation Map for German UI Labels
const translations = {
  ID: "ID",
  Anbietername: "Anbietername",
  Servicegebiete: "Servicegebiete",
  Tarif: "Tarif",
  AktiveNutzer: "Aktive Nutzer",
  Erneuerbar: "Erneuerbar",
  Status: "Status",
  AktiverProvider: "Aktiver Anbieter",
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

type ProviderRow = (typeof initialData)[number] & { apiId?: number };


const mapApiProviderToRow = (item: any): ProviderRow => ({
  ID: `PRV${String(item.id).padStart(3, "0")}`,
  Anbietername: item.provider_name,
  Servicegebiete: item.service_areas,
  Tarif: 0,
  AktiveNutzer: 0,
  Erneuerbar: item.renewable === 1 ? "Ja" : "Nein",
  Status: item.status === 1 ? "Aktiv" : "Inaktiv",
  apiId: item.id, // Store original API ID for updates
});


export default function ProviderTable({ postalCode }: { postalCode: string }) {

  console.log("postalCode from ProviderTable", postalCode);
  const [providersByPostal, setProvidersByPostal] = useState<
    Record<string, ProviderRow[]>
  >({
    "1010": initialData,
    "1020": [
      {
        ID: "PRV201",
        Anbietername: "Wien Energie",
        Servicegebiete: "Wien 1020",
        Tarif: 4,
        AktiveNutzer: 180,
        Erneuerbar: "Ja",
        Status: "Aktiv",
      },
    ],
    "1030": [],
    "1040": [],
    "1050": [],
  });
  // const providers = providersByPostal[postalCode] || [];


  // api call to get providers
  const { data: providersData } = useGetProvidersAdminQuery(postalCode);
  const [createProviderAdmin] = useCreateProviderAdminMutation();
  const [updateProviderAdmin] = useUpdateProviderAdminMutation();
  const [deleteProviderAdmin] = useDeleteProviderAdminMutation();



  console.log("providersData", providersData);
  const providers = providersData?.data?.map(mapApiProviderToRow) || [];

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
    isLoading?: boolean;
  }>({
    isOpen: false,
    isLoading: false,
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
      const current = providersByPostal[postalCode] || [];
      // Generate unique ID based on existing IDs
      const existingIds = current.map(p => parseInt(p.ID.replace("PRV", ""))).filter(id => !isNaN(id));
      const maxId = existingIds.length > 0 ? Math.max(...existingIds) : 0;
      const newId = `PRV${String(maxId + 1).padStart(3, "0")}`;

      const newProvider = {
        ...data,
        ID: newId,
        Erneuerbar: data.Erneuerbar ? "Ja" : "Nein",
        Status: data.AktiverProvider ? "Aktiv" : "Inaktiv",
        Tarif: 0,
        AktiveNutzer: 0,
      } as ProviderRow;

      setProvidersByPostal((prev) => ({
        ...prev,
        [postalCode]: [...(prev[postalCode] || []), newProvider],
      }));

      console.log("newProvider", newProvider);


      createProviderAdmin({
        provider_name: newProvider.Anbietername,
        service_areas: newProvider.Servicegebiete,
        renewable: newProvider.Erneuerbar === "Ja" ? true : false,
        status: newProvider.Status === "Aktiv" ? true : false,
      }).unwrap().then((res: CreateProviderResponseType) => {
        console.log("res", res);
        toast.success(res.message || "Provider created successfully");

      }).catch((err: any) => {
        console.log("err", err);
        toast.error(err?.data?.message || "Failed to create provider");
      });
    } else if (modalState.mode === "edit" && modalState.selectedProvider) {
      // Get the API ID from the selected provider
      const providerId = modalState.selectedProvider.apiId;

      if (!providerId) {
        toast.error("Provider ID not found");
        return;
      }

      // Call the update API
      updateProviderAdmin({
        id: providerId,
        provider_name: data.Anbietername,
        service_areas: data.Servicegebiete,
        renewable: data.Erneuerbar,
        status: data.AktiverProvider,
      })
        .unwrap()
        .then((res: any) => {
          console.log("Update response", res);
          toast.success(res.message || "Provider updated successfully");
        })
        .catch((err: any) => {
          console.log("Update error", err);
          toast.error(err?.data?.message || "Failed to update provider");
        });
    }
  };

  const handleDeleteConfirm = async () => {
    if (deleteModalState.provider) {
      const providerId = deleteModalState.provider.apiId;
      if (!providerId) {
        toast.error("Provider ID not found");
        return;
      }

      // set loading State
      setDeleteModalState((prev) => ({ ...prev, isLoading: true }));

      try {
        const res = await deleteProviderAdmin(providerId.toString()).unwrap();
        console.log("res", res);
        toast.success(res.message || "Provider deleted successfully");

        // Close modal after successful deletion
        setDeleteModalState({ isOpen: false, isLoading: false });
      } catch (err: any) {
        console.log("err", err);
        toast.error(err?.data?.message || "Failed to delete provider");

        // Keep modal open on error, but remove loading state
        setDeleteModalState((prev) => ({ ...prev, isLoading: false }));
      }
    }
  };

  return (
    <div className="mt-4">
      <div className="flex flex-col items-start md:flex-row  md:justify-between mb-6 gap-4">
        <TableTitle
          title="ALI-Anbieter"
          subtitle={`PLZ ${postalCode} – Anbieter & Empfehlungen`}
        />
        <div className="flex  flex-col-reverse md:flex-row items-center gap-2.5">
          <input
            type="text"
            placeholder="Anbieter suchen..."
            className="table-search-input w-full"
          />
          <Button
            onClick={handleAddProvider}
            className="primary-btn w-full md:w-auto"
          >
            <Plus />
            <span className="text-sm">Anbieter hinzufügen</span>
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
        onClose={() => setDeleteModalState({ isOpen: false, isLoading: false })}
        onConfirm={handleDeleteConfirm}
        title="Delete Provider"
        description={`Are you sure you want to delete "${deleteModalState.provider?.Anbietername || "this provider"
          }"? This action cannot be undone.`}
        isLoading={deleteModalState.isLoading}
      />
    </div>
  );
}