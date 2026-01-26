"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { DataTable } from "@/components/dashoboard/DataTable"; // Assuming DataTable is reusable
import TableTitle from "@/components/dashoboard/TableTitle";
import TariffModal from "./TariffModal"; // Modal to add/edit tariff data
import DeleteModal from "@/components/dashoboard/DeleteModal";
import { useCreateTariffMutation, useDeleteTariffMutation, useGetAllTariffsAdminQuery, useUpdateTariffMutation } from "@/redux/features/terrif/teriffApi";
import { CreateAndEditTariffType } from "@/redux/features/terrif/teriff.type";
import { useGetProvidersAdminQuery } from "@/redux/features/providers/providersApi";
import { toast } from "sonner";

// Translation Map for German UI Labels (same structure as before)
const translations = {
  ID: "ID",
  Provider: "Anbieter",
  Tarifname: "Tarifname",
  PricePerkWh: "Preis pro kWh",
  BaseFee: "Grundgebühr",
  Bonus: "Bonus",
  PriceGuarantee: "Preisgarantie",
  Actions: "Aktionen",
};

// Tariff columns
const columns = [
  {
    key: "ID",
    header: translations.ID,
  },
  {
    key: "Provider",
    header: translations.Provider,
  },
  {
    key: "TariffName",
    header: translations.Tarifname,
  },
  {
    key: "PricePerkWh",
    header: translations.PricePerkWh,
    render: (value: number) => `€${value.toFixed(2)}`,
  },
  {
    key: "BaseFee",
    header: translations.BaseFee,
    render: (value: string) => `${value}`,
  },
  {
    key: "Bonus",
    header: translations.Bonus,
    render: (value: string) => `${value}`,
  },
  {
    key: "PriceGuarantee",
    header: translations.PriceGuarantee,
    render: (value: string) => value,
  },
];

// Initial sample tariff data
const initialData = [
  {
    ID: "TAR001",
    Provider: "Vattenfall",
    TariffName: "Green Basic",
    PricePerkWh: 0.32,
    BaseFee: "€9.90/month",
    Bonus: "€50",
    PriceGuarantee: "12 months",
  },
  {
    ID: "TAR002",
    Provider: "E.ON",
    TariffName: "Eco Plus",
    PricePerkWh: 0.29,
    BaseFee: "€12.90/month",
    Bonus: "€100",
    PriceGuarantee: "24 months",
  },
  {
    ID: "TAR003",
    Provider: "EnBW",
    TariffName: "Standard",
    PricePerkWh: 0.34,
    BaseFee: "€8.90/month",
    Bonus: "€0",
    PriceGuarantee: "None",
  },
];


// utils/tariffMapper.ts

const mapApiTariffsToTable = (apiData: any[]): any[] => {
  if (!apiData) return [];

  return apiData?.map((item) => ({
    ID: `TRF0${item.id.toString()}`,
    // Accessing nested vendor name, falling back to "N/A"
    Provider: item.vendor?.provider_name || "N/A",
    TariffName: item.tariff_name,
    // Parsing strings to numbers for the column 'render' functions
    PricePerkWh: parseFloat(item.price_kwh),
    BaseFee: `€${parseFloat(item.basic_fee).toFixed(2)}/month`,
    Bonus: `€${parseFloat(item.exchange_bonus).toFixed(2)}`,
    PriceGuarantee: item.price_guarantee,
    RenewableEnergy: item.renewable === 1 || item.renewable === true,
    Recommended: item.recommended === 1 || item.recommended === true,
    // Store API ID and vendor ID for updates/deletes
    apiId: item.id,
    vendorId: item.vendor_id || item.vendor?.id,
    // Including raw data in case the modal needs the full object
    raw: item,
  }));
};

type TariffRow = (typeof initialData)[number]


// main component
export default function TariffTable({ postalCode }: { postalCode: string }) {
 

  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    mode: "add" | "edit" | "view";
    selectedTariff?: any;
  }>({
    isOpen: false,
    mode: "add",
  });

  const [deleteModalState, setDeleteModalState] = useState<{
    isOpen: boolean;
    tariff?: any;
    isLoading?: boolean;
  }>({
    isOpen: false,
    isLoading: false,
  });

  // api call to get tariffs
  const { data: tariffsData, isLoading: isLoadingTariffs } = useGetAllTariffsAdminQuery(postalCode);
  const { data: providersData } = useGetProvidersAdminQuery(postalCode);
  const [createTariff] = useCreateTariffMutation();
  const [updateTariff] = useUpdateTariffMutation();
  const [deleteTariff] = useDeleteTariffMutation();

  const tariffsTableData = tariffsData?.data ? mapApiTariffsToTable(tariffsData?.data) : [];

  // Helper function to get vendor ID from provider name
  const getVendorIdFromName = (providerName: string): number | null => {
    const provider = providersData?.data?.find((p: any) => p.provider_name === providerName);
    return provider?.id || null;
  };

  // console.log("tariffsTableData", tariffsTableData);
  // Handlers for view, edit, and delete actions
  const handleView = (row: any) => {
    setModalState({
      isOpen: true,
      mode: "view",
      selectedTariff: row,
    });
  };

  const handleEdit = (row: any) => {
    setModalState({
      isOpen: true,
      mode: "edit",
      selectedTariff: row,
    });
  };

  const handleDelete = (row: any) => {
    setDeleteModalState({
      isOpen: true,
      tariff: row,
    });
  };

  const handleAddTariff = () => {
    setModalState({
      isOpen: true,
      mode: "add",
    });
  };

  const handleModalSubmit = async (data: any) => {
    if (modalState.mode === "add") {
      // Get vendor ID from provider name
      const vendorId = getVendorIdFromName(data.Provider);

      if (!vendorId) {
        toast.error("Provider not found");
        return;
      }

      // Parse BaseFee, Bonus, and Rates - handle both string and number inputs
      const parseNumber = (value: string | number | undefined): number => {
        if (typeof value === 'number') return value;
        if (!value) return 0;
        const match = String(value).match(/[\d.]+/);
        return match ? parseFloat(match[0]) : 0;
      };

      const basicFee = parseNumber(data.BaseFee);
      const exchangeBonus = parseNumber(data.Bonus);
      const rates = parseNumber(data.Rates);

      const newTariff: CreateAndEditTariffType = {
        vendor_id: vendorId,
        tariff_name: data.TariffName,
        price_kwh: data.PricePerkWh,
        basic_fee: basicFee,
        exchange_bonus: exchangeBonus,
        rates: rates,
        price_guarantee: data.PriceGuarantee,
        renewable: data.RenewableEnergy ? 1 : 0,
        status: data.Recommended ? 1 : 0,
      };

      try {
        const res = await createTariff(newTariff).unwrap();
        // console.log("Create tariff response", res);
        toast.success(res.message || "Tariff created successfully");
      } catch (err: any) {
        // console.log("Create tariff error", err);
        toast.error(err?.data?.message || "Failed to create tariff");
      }
    } else if (modalState.mode === "edit" && modalState.selectedTariff) {
      const tariffId = modalState.selectedTariff.apiId;

      if (!tariffId) {
        toast.error("Tariff ID not found");
        return;
      }

      // Get vendor ID from provider name
      const vendorId = getVendorIdFromName(data.Provider) || modalState.selectedTariff.vendorId;

      if (!vendorId) {
        toast.error("Provider not found");
        return;
      }

      // Parse BaseFee, Bonus, and Rates - handle both string and number inputs
      const parseNumber = (value: string | number | undefined): number => {
        if (typeof value === 'number') return value;
        if (!value) return 0;
        const match = String(value).match(/[\d.]+/);
        return match ? parseFloat(match[0]) : 0;
      };

      const basicFee = parseNumber(data.BaseFee);
      const exchangeBonus = parseNumber(data.Bonus);
      const rates = parseNumber(data.Rates);

      const updatedTariff: CreateAndEditTariffType = {
        vendor_id: vendorId,
        tariff_name: data.TariffName,
        price_kwh: data.PricePerkWh,
        basic_fee: basicFee,
        exchange_bonus: exchangeBonus,
        rates: rates,
        price_guarantee: data.PriceGuarantee,
        renewable: data.RenewableEnergy ? 1 : 0,
        status: data.Recommended ? 1 : 0,
      };

      try {
        const res = await updateTariff({ id: tariffId.toString(), ...updatedTariff }).unwrap();
        // console.log("Update tariff response", res);
        toast.success(res.message || "Tariff updated successfully");
      } catch (err: any) {
        // console.log("Update tariff error", err);
        toast.error(err?.data?.message || "Failed to update tariff");
      }
    }
  };

  const handleDeleteConfirm = async () => {
    if (deleteModalState.tariff) {
      const tariffId = deleteModalState.tariff.apiId;

      if (!tariffId) {
        toast.error("Tariff ID not found");
        return;
      }

      // Set loading state
      setDeleteModalState((prev) => ({ ...prev, isLoading: true }));

      try {
        const res = await deleteTariff(tariffId.toString()).unwrap();
        // console.log("Delete tariff response", res);
        toast.success(res.message || "Tariff deleted successfully");

        // Close modal after successful deletion
        setDeleteModalState({ isOpen: false, isLoading: false });
      } catch (err: any) {
        // console.log("Delete tariff error", err);
        toast.error(err?.data?.message || "Failed to delete tariff");

        // Keep modal open on error, but remove loading state
        setDeleteModalState((prev) => ({ ...prev, isLoading: false }));
      }
    }
  };

  return (
    <div className="mt-4">
      <div className="flex flex-col items-start md:flex-row  md:justify-between mb-6 gap-4">
        <TableTitle
          title="Tarifliste"
          subtitle={`PLZ ${postalCode} – Empfohlene Tarife`}
        />

        <div className="flex  flex-col-reverse md:flex-row items-start jb md:items-center gap-2.5 w-full md:w-auto">
          <input
            type="text"
            placeholder="Search tariffs..."
            className="table-search-input md:w-auto"
          />
          <Button
            onClick={handleAddTariff}
            className="primary-btn md:w-auto"
          >
            <Plus />
            <span>Tarif hinzufügen</span>
          </Button>
        </div>
      </div>



      <DataTable
        columns={columns}
        loading={isLoadingTariffs}
        emptyStateMessage="Keine Tarife gefunden"
        data={tariffsTableData}
        onView={handleView}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      {/* Tariff Modal */}
      <TariffModal
        isOpen={modalState.isOpen}
        onClose={() => setModalState({ ...modalState, isOpen: false })}
        mode={modalState.mode}
        initialData={modalState.selectedTariff}
        onSubmit={handleModalSubmit}
      />

      {/* Delete Confirmation Modal */}
      <DeleteModal
        isOpen={deleteModalState.isOpen}
        onClose={() => setDeleteModalState({ isOpen: false, isLoading: false })}
        onConfirm={handleDeleteConfirm}
        title="Delete Tariff"
        description={`Are you sure you want to delete "${deleteModalState.tariff?.TariffName || "this tariff"
          }"? This action cannot be undone.`}
        isLoading={deleteModalState.isLoading}
      />
    </div>
  );
}
