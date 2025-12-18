"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { DataTable } from "@/components/dashoboard/DataTable"; // Assuming DataTable is reusable
import TableTitle from "@/components/dashoboard/TableTitle";
import TariffModal from "./TariffModal"; // Modal to add/edit tariff data
import DeleteModal from "@/components/dashoboard/DeleteModal";

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

type TariffRow = (typeof initialData)[number]

export default function TariffTable({ postalCode }: { postalCode: string }) {
  const [tariffsByPostal, setTariffsByPostal] = useState<Record<string, TariffRow[]>>({
    "1010": initialData,
    "1020": [
      {
        ID: "TAR201",
        Provider: "Wien Energie",
        TariffName: "Öko Fair",
        PricePerkWh: 0.31,
        BaseFee: "€10.90/month",
        Bonus: "€60",
        PriceGuarantee: "12 months",
      },
    ],
    "1030": [],
    "1040": [],
    "1050": [],
  });
  const tariffs = tariffsByPostal[postalCode] || [];
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
  }>({
    isOpen: false,
  });

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
      const current = tariffsByPostal[postalCode] || [];
      const newId = `TAR${String(current.length + 1).padStart(3, "0")}`;
      const newTariff = {
        ...data,
        ID: newId,
      } as TariffRow;
      setTariffsByPostal({
        ...tariffsByPostal,
        [postalCode]: [...current, newTariff],
      });
    } else if (modalState.mode === "edit" && modalState.selectedTariff) {
      const current = tariffsByPostal[postalCode] || [];
      const updated = current.map((tariff) =>
        tariff.ID === modalState.selectedTariff.ID
          ? { ...data, ID: modalState.selectedTariff.ID }
          : tariff
      );
      setTariffsByPostal({
        ...tariffsByPostal,
        [postalCode]: updated,
      });
    }
  };

  const handleDeleteConfirm = () => {
    if (deleteModalState.tariff) {
      const current = tariffsByPostal[postalCode] || [];
      const updated = current.filter(
        (tariff) => tariff.ID !== deleteModalState.tariff.ID
      );
      setTariffsByPostal({
        ...tariffsByPostal,
        [postalCode]: updated,
      });
      setDeleteModalState({ isOpen: false });
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
        data={tariffs}
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
        onClose={() => setDeleteModalState({ isOpen: false })}
        onConfirm={handleDeleteConfirm}
        title="Delete Tariff"
        description={`Are you sure you want to delete "${
          deleteModalState.tariff?.TariffName || "this tariff"
        }"? This action cannot be undone.`}
      />
    </div>
  );
}
