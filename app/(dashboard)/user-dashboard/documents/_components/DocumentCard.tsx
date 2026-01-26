"use client";

import { useMemo, useState } from "react";
import {
  Upload,
  Clock,
  CheckCircle,
  AlertCircle,
  Info,
  ExternalLink,
  X,
  Trash2,
} from "lucide-react";
import { toast } from "sonner";
import {
  removeDocument,
  DOCUMENT_FIELD_MAP,
  type DocumentField,
} from "@/lib/api/documentApi";

interface Document {
  id: string;
  title: string;
  status: "pending" | "uploaded" | "approved";
}

type Explanation = {
  why: string;
  what: string;
};

interface DocumentCardProps {
  document: Document;
  onUpload: () => void;
  onRemove?: () => void;
  sampleUrl?: string;
  explanation?: Explanation;
}

export default function DocumentCard({
  document,
  onUpload,
  onRemove,
  sampleUrl,
  explanation,
}: DocumentCardProps) {
  const [isExplainOpen, setIsExplainOpen] = useState(false);
  const [isRemoving, setIsRemoving] = useState(false);

  const statusConfig = useMemo(() => {
    switch (document.status) {
      case "pending":
        return {
          icon: <Clock className="w-4 h-4" />,
          text: "Ausstehend",
          bgColor: "bg-yellow-50",
          textColor: "text-yellow-700",
          iconColor: "text-yellow-500",
        };
      case "uploaded":
        return {
          icon: <CheckCircle className="w-4 h-4" />,
          text: "Hochgeladen",
          bgColor: "bg-blue-50",
          textColor: "text-blue-700",
          iconColor: "text-blue-500",
        };
      case "approved":
        return {
          icon: <CheckCircle className="w-4 h-4" />,
          text: "Bestätigt",
          bgColor: "bg-green-50",
          textColor: "text-green-700",
          iconColor: "text-green-500",
        };
      default:
        return {
          icon: <AlertCircle className="w-4 h-4" />,
          text: "Unbekannt",
          bgColor: "bg-gray-50",
          textColor: "text-gray-700",
          iconColor: "text-gray-500",
        };
    }
  }, [document.status]);

  const canUpload = document.status === "pending";
  const canRemove = document.status === "uploaded" || document.status === "approved";

  const handleRemove = async () => {
    if (!canRemove || isRemoving) return;

    const fieldName = DOCUMENT_FIELD_MAP[document.id] as DocumentField;
    if (!fieldName) {
      toast.error("Invalid document type");
      return;
    }

    const confirmed = window.confirm(
      "Are you sure you want to remove this document? It will be deleted from the server."
    );

    if (!confirmed) return;

    setIsRemoving(true);

    try {
      await removeDocument(fieldName);
      toast.success("Document removed successfully");
      if (onRemove) {
        onRemove();
      }
    } catch (error: any) {
      toast.error(error?.message || "Failed to remove document");
    } finally {
      setIsRemoving(false);
    }
  };

  const handleOpenSample = () => {
    if (!sampleUrl || sampleUrl === "#") return;
    window.open(sampleUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="border border-border rounded-lg p-6 bg-card hover:shadow-sm transition-shadow">
      <div className="flex items-start justify-between gap-3 mb-4">
        <h3 className="text-lg font-semibold text-foreground">
          {document.title}
        </h3>

        <div
          className={`flex items-center gap-2 px-3 py-1 ${statusConfig.bgColor} rounded-full`}
        >
          <div className={statusConfig.iconColor}>{statusConfig.icon}</div>
          <span className={`text-sm font-medium ${statusConfig.textColor}`}>
            {statusConfig.text}
          </span>
        </div>
      </div>

      {/* Actions row: sample + explanation */}
      <div className="flex items-center justify-between gap-3 mb-4">
        <button
          type="button"
          onClick={handleOpenSample}
          disabled={!sampleUrl || sampleUrl === "#"}
          className={`inline-flex items-center gap-2 text-sm font-medium ${!sampleUrl || sampleUrl === "#"
            ? "text-muted-foreground cursor-not-allowed"
            : "text-primary hover:underline cursor-pointer"
            }`}
        >
          <ExternalLink className="w-4 h-4" />
          Beispieldokument
        </button>

        <button
          type="button"
          onClick={() => setIsExplainOpen(true)}
          disabled={!explanation}
          className={`inline-flex items-center gap-2 text-sm font-medium px-3 py-1 rounded-full border ${explanation
            ? "border-border hover:bg-secondary/50 cursor-pointer"
            : "border-border text-muted-foreground cursor-not-allowed"
            }`}
        >
          <Info className="w-4 h-4" />
          Erklärung
        </button>
      </div>

      {/* Upload/Remove button */}
      <div className="space-y-2">
        {canUpload ? (
          <button
            type="button"
            onClick={onUpload}
            className="w-full flex items-center justify-center gap-2 py-4 px-4 border-2 border-dashed rounded-lg transition-colors font-medium border-border hover:bg-secondary/50 hover:border-primary cursor-pointer text-foreground"
          >
            <Upload className="w-5 h-5" />
            Datei hochladen
          </button>
        ) : (
          <>
            <button
              type="button"
              onClick={onUpload}
              className="w-full flex items-center justify-center gap-2 py-4 px-4 border-2 border-dashed rounded-lg transition-colors font-medium border-green-200 bg-green-50 text-green-700 cursor-pointer hover:bg-green-100"
            >
              <Upload className="w-5 h-5" />
              Ersetzen
            </button>
            <button
              type="button"
              onClick={handleRemove}
              disabled={isRemoving}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 border border-red-200 rounded-lg transition-colors font-medium bg-red-50 text-red-700 cursor-pointer hover:bg-red-100 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Trash2 className="w-4 h-4" />
              {isRemoving ? "Wird entfernt..." : "Entfernen"}
            </button>
          </>
        )}
      </div>

      <p className="text-center text-sm text-muted-foreground mt-3">
        {canUpload ? "PDF, JPG oder PNG" : "Upload abgeschlossen"}
      </p>

      {/* Explanation Modal */}
      {isExplainOpen && explanation && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4"
          onClick={() => setIsExplainOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="w-full max-w-lg rounded-xl bg-white p-5 shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-3 mb-3">
              <div>
                <h4 className="text-base font-semibold text-[#1C2022]">
                  Erklärung
                </h4>
                <p className="text-sm text-[#5F728B]">{document.title}</p>
              </div>

              <button
                type="button"
                onClick={() => setIsExplainOpen(false)}
                className="p-2 rounded-lg hover:bg-secondary/50 cursor-pointer"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-4">
              <div className="rounded-lg border border-border p-3">
                <p className="text-sm font-semibold text-[#1C2022] mb-1">
                  Warum benötigen wir dieses Dokument?
                </p>
                <p className="text-sm text-[#5F728B] leading-relaxed">
                  {explanation.why}
                </p>
              </div>

              <div className="rounded-lg border border-border p-3">
                <p className="text-sm font-semibold text-[#1C2022] mb-1">
                  Was soll hochgeladen werden?
                </p>
                <p className="text-sm text-[#5F728B] leading-relaxed">
                  {explanation.what}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
