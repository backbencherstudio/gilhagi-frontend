"use client";

import { useMemo, useState } from "react";
import UploadModal from "./UploadDocModal";
import DocumentCard from "./DocumentCard";

interface Document {
  id: string;
  title: string;
  status: "pending" | "uploaded" | "approved";

  // NEW
  sampleUrl?: string; // placeholder link for sample doc
  explanation?: {
    why: string;
    what: string;
  };
}

const DOCUMENTS: Document[] = [
  {
    id: "1",
    title: "Aktueller Vertrag Ihres Stromanbieters", // changed heading text for this doc
    status: "pending",
    sampleUrl: "#", // placeholder (client will provide later)
    explanation: {
      why: "Wir benötigen Ihren aktuellen Vertrag, um Ihren Tarif, Laufzeit und Kündigungsfrist korrekt zu prüfen.",
      what: "Bitte laden Sie den aktuellen Stromvertrag Ihres aktuellen Anbieters hoch (PDF oder Foto, gut lesbar).",
    },
  },
  {
    id: "2",
    title: "SEPA-Lastschriftmandat",
    status: "pending",
    sampleUrl: "#",
    explanation: {
      why: "Damit der neue Anbieter Zahlungen per Lastschrift einziehen kann.",
      what: "Bitte laden Sie das ausgefüllte SEPA-Lastschriftmandat hoch (falls vorhanden).",
    },
  },
  {
    id: "3",
    title: "Vollmacht",
    status: "pending",
    sampleUrl: "#",
    explanation: {
      why: "Damit wir den Wechsel und die Kündigung in Ihrem Namen abwickeln dürfen.",
      what: "Bitte laden Sie die unterschriebene Vollmacht hoch (PDF oder Foto).",
    },
  },
  {
    id: "4",
    title: "Foto des Stromzählers",
    status: "pending",
    sampleUrl: "#",
    explanation: {
      why: "Zur eindeutigen Zuordnung des Zählers und zur Übernahme relevanter Zählerdaten.",
      what: "Bitte laden Sie ein scharfes Foto des Stromzählers hoch, auf dem Zählernummer und Werte erkennbar sind.",
    },
  },
  {
    id: "5",
    title: "Sonstige Unterlagen",
    status: "pending",
    sampleUrl: "#",
    explanation: {
      why: "Falls zusätzliche Unterlagen nötig sind, können Sie diese hier bereitstellen.",
      what: "Bitte laden Sie Dokumente hoch, die den Wechsel unterstützen (z. B. Schreiben des Anbieters).",
    },
  },
  {
    id: "6",
    title: "Preiserhöhungen",
    status: "pending",
    sampleUrl: "#",
    explanation: {
      why: "Eine Preiserhöhung kann ein Sonderkündigungsrecht auslösen und den Wechsel sinnvoller machen.",
      what: "Bitte laden Sie das Schreiben zur Preiserhöhung Ihres Stromanbieters hoch (PDF oder Foto).",
    },
  },
];

export default function DocumentUploadPage() {
  const [documents, setDocuments] = useState<Document[]>(DOCUMENTS);
  const [selectedDocument, setSelectedDocument] = useState<Document | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const uploadedCount = useMemo(
    () => documents.filter((d) => d.status !== "pending").length,
    [documents]
  );

  const totalCount = documents.length;
  const progressPercentage = Math.round((uploadedCount / totalCount) * 100);

  const handleUpload = (documentId: string) => {
    const doc = documents.find((d) => d.id === documentId);
    if (!doc) return;
    setSelectedDocument(doc);
    setIsModalOpen(true);
  };

  const handleCompleteUpload = (documentId: string) => {
    setDocuments((prev) =>
      prev.map((d) => (d.id === documentId ? { ...d, status: "uploaded" } : d))
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
              {uploadedCount} von {totalCount} Dokumenten hochgeladen ({progressPercentage}%)
            </p>
          </div>

          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="flex gap-2">
              {documents.map((doc, index) => (
                <div
                  key={doc.id}
                  className={`flex-1 h-2 rounded-full transition-all duration-500 ${
                    index < uploadedCount ? "bg-[#085EC4]" : "bg-[#CCDAE4]"
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
              // NEW props (DocumentCard should render these)
              sampleUrl={doc.sampleUrl}
              explanation={doc.explanation}
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
    </div>
  );
}
