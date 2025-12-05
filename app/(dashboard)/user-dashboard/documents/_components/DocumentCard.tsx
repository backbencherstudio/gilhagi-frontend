"use client"

import { Upload, Clock, CheckCircle, AlertCircle } from "lucide-react"

interface Document {
  id: string
  title: string
  status: "pending" | "uploaded" | "approved"
}

interface DocumentCardProps {
  document: Document
  onUpload: () => void
}

export default function DocumentCard({ document, onUpload }: DocumentCardProps) {
  const getStatusConfig = () => {
    switch (document.status) {
      case "pending":
        return {
          icon: <Clock className="w-4 h-4" />,
          text: "Pending",
          bgColor: "bg-yellow-50",
          textColor: "text-yellow-700",
          iconColor: "text-yellow-500"
        };
      case "uploaded":
        return {
          icon: <CheckCircle className="w-4 h-4" />,
          text: "Uploaded",
          bgColor: "bg-blue-50",
          textColor: "text-blue-700",
          iconColor: "text-blue-500"
        };
      case "approved":
        return {
          icon: <CheckCircle className="w-4 h-4" />,
          text: "Approved",
          bgColor: "bg-green-50",
          textColor: "text-green-700",
          iconColor: "text-green-500"
        };
      default:
        return {
          icon: <AlertCircle className="w-4 h-4" />,
          text: "Unknown",
          bgColor: "bg-gray-50",
          textColor: "text-gray-700",
          iconColor: "text-gray-500"
        };
    }
  };

  const statusConfig = getStatusConfig();

  return (
    <div className="border border-border rounded-lg p-6 bg-card hover:shadow-sm transition-shadow">
      <div className="flex items-start justify-between mb-6">
        <h3 className="text-lg font-semibold text-foreground">{document.title}</h3>
        <div className={`flex items-center gap-2 px-3 py-1 ${statusConfig.bgColor} rounded-full`}>
          <div className={statusConfig.iconColor}>
            {statusConfig.icon}
          </div>
          <span className={`text-sm font-medium ${statusConfig.textColor}`}>
            {statusConfig.text}
          </span>
        </div>
      </div>

      <button
        onClick={onUpload}
        disabled={document.status !== "pending"}
        className={`w-full flex items-center justify-center gap-2 py-4 px-4 border-2 border-dashed rounded-lg transition-colors text-foreground font-medium ${
          document.status === "pending"
            ? "border-border hover:bg-secondary/50 hover:border-primary cursor-pointer"
            : "border-green-200 bg-green-50 text-green-700 cursor-not-allowed"
        }`}
      >
        <Upload className="w-5 h-5" />
        {document.status === "pending" ? "Upload file" : "File Uploaded"}
      </button>

      <p className="text-center text-sm text-muted-foreground mt-3">
        {document.status === "pending" ? "PDF, JPG or PNG" : "Upload completed"}
      </p>
    </div>
  )
}