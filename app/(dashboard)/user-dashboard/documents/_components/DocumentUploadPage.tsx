"use client";

import { useState } from "react";
import UploadModal from "./UploadDocModal";
import DocumentCard from "./DocumentCard";
import { Info } from "lucide-react";

interface Document {
  id: string;
  title: string;
  status: "pending" | "uploaded" | "approved";
}

const DOCUMENTS: Document[] = [
  { id: "1", title: "Alter Vertrag", status: "pending" },
  { id: "2", title: "SEPA-Lastschriftmandat", status: "pending" },
  { id: "3", title: "Vollmacht", status: "pending" },
  { id: "4", title: "Foto des Stromzählers", status: "pending" },
  { id: "5", title: "Sonstige Unterlagen", status: "pending" },
];

export default function DocumentUploadPage() {
  const [documents, setDocuments] = useState<Document[]>(DOCUMENTS);
  const [selectedDocument, setSelectedDocument] = useState<Document | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const uploadedCount = documents.filter((d) => d.status !== "pending").length;
  const totalCount = documents.length;
  const progressPercentage = Math.round((uploadedCount / totalCount) * 100);

  const handleUpload = (documentId: string) => {
    const doc = documents.find((d) => d.id === documentId);
    if (doc) {
      setSelectedDocument(doc);
      setIsModalOpen(true);
    }
  };

  const handleCompleteUpload = (documentId: string) => {
    setDocuments(
      documents.map((d) =>
        d.id === documentId ? { ...d, status: "uploaded" } : d
      )
    );
    setIsModalOpen(false);
    setSelectedDocument(null);
  };

  return (
    <div className="rounded-xl p-6">
      <div className="mx-auto">
        <div className="bg-white p-6 rounded-xl mb-6">
          {/* Header */}
          <div className="mb-6">
            <h1 className="self-stretch text-[#1C2022] text-lg font-semibold leading-[160%]">
              Status des Dokumentenuploads
            </h1>
            <p className="text-[#5F728B] text-base font-normal leading-[140%] tracking-[0.08px]">
              {uploadedCount} von {totalCount} Dokumenten hochgeladen (
              {progressPercentage}%)
            </p>
          </div>

          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="flex gap-2">
              {documents.map((doc, index) => (
                <div
                  key={doc.id}
                  className={`flex-1 h-2 rounded-full transition-all duration-500 ${
                    index < uploadedCount
                      ? "bg-[#085EC4]" // Aktiv
                      : "bg-[#CCDAE4]" // Inaktiv
                  }`}
                />
              ))}
            </div>
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>0%</span>
              <span>100%</span>
            </div>
          </div>
        </div>

        {/* Documents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {documents.map((doc) => (
            <DocumentCard
              key={doc.id}
              document={doc}
              onUpload={() => handleUpload(doc.id)}
            />
          ))}
        </div>
      </div>

      {/* Upload Modal */}
      {isModalOpen && selectedDocument && (
        <UploadModal
          document={selectedDocument}
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setSelectedDocument(null);
          }}
          onComplete={() => handleCompleteUpload(selectedDocument.id)}
        />
      )}

      {/* footer info (optional) */}
      {/*
      <div className="mt-6 flex items-center gap-4 self-stretch bg-[#F1F7FC] p-4 rounded-lg border-l-4 border-[#2568A1] mb-8">
        <Info className="w-6 h-6 text-[#2568A1]" />
        <p className="flex-1 text-[#5F728B] text-base font-normal leading-[140%] tracking-[0.08px]">
          Achtung: Sie müssen Ihren Tarif selbst kündigen, wenn Sie Ihr
          Sonderkündigungsrecht (z. B. bei einer Preiserhöhung) ausüben oder wenn
          die Kündigungsfrist weniger als 4 Wochen beträgt.
        </p>
      </div>
      */}
    </div>
  );
}
