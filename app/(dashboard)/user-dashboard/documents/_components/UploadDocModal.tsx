"use client";

import type React from "react";
import { useState, useRef, useEffect } from "react";
import { X, Upload, FileIcon, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import {
  uploadDocument,
  DOCUMENT_FIELD_MAP,
  type DocumentField,
} from "@/lib/api/documentApi";

interface Document {
  id: string;
  title: string;
  status: "pending" | "uploaded" | "approved";
}

interface UploadModalProps {
  document: Document | null;
  isOpen: boolean;
  onClose: () => void;
  onComplete: () => void;
}

export default function UploadModal({
  document,
  isOpen,
  onClose,
  onComplete,
}: UploadModalProps) {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadComplete, setUploadComplete] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const dragRef = useRef<HTMLDivElement>(null);
  const xhrRef = useRef<XMLHttpRequest | null>(null);

  // Reset modal state when opened/closed
  useEffect(() => {
    if (isOpen) {
      setUploadedFile(null);
      setUploadProgress(0);
      setIsUploading(false);
      setUploadComplete(false);
      setUploadError(null);
      // Cancel any ongoing upload
      if (xhrRef.current) {
        xhrRef.current.abort();
        xhrRef.current = null;
      }
    }
  }, [isOpen]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (xhrRef.current) {
        xhrRef.current.abort();
      }
    };
  }, []);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (dragRef.current) {
      dragRef.current.classList.add("bg-secondary/50");
    }
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (dragRef.current) {
      dragRef.current.classList.remove("bg-secondary/50");
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (dragRef.current) {
      dragRef.current.classList.remove("bg-secondary/50");
    }

    const files = e.dataTransfer.files;
    if (files && files[0]) {
      setUploadedFile(files[0]);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!uploadedFile || !document) return;

    const fieldName = DOCUMENT_FIELD_MAP[document.id] as DocumentField;
    if (!fieldName) {
      toast.error("Invalid document type");
      return;
    }

    setIsUploading(true);
    setUploadProgress(0);
    setUploadError(null);

    try {
      const result = await uploadDocument(fieldName, uploadedFile, {
        onProgress: (progress) => {
          setUploadProgress(progress.percentage);
        },
        xhrRef: xhrRef,
      });

      if (result.success) {
        setUploadComplete(true);
        toast.success(result.message || "Document uploaded successfully");
      } else {
        throw new Error(result.message || "Upload failed");
      }
    } catch (error: any) {
      const errorMessage = error?.message || "Failed to upload document";
      setUploadError(errorMessage);
      toast.error(errorMessage);
      setIsUploading(false);
      setUploadProgress(0);
    }
  };

  const handleComplete = () => {
    onComplete();
    onClose();
  };

  const handleCancel = () => {
    if (xhrRef.current && isUploading) {
      xhrRef.current.abort();
      xhrRef.current = null;
    }
    setIsUploading(false);
    setUploadProgress(0);
    setUploadError(null);
  };

  if (!isOpen || !document) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-card rounded-lg shadow-lg max-w-[600px] w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border sticky top-0 bg-card">
          <div>
            <h2 className="text-xl font-semibold text-foreground">
              {document.title}
            </h2>
            <p className="text-sm text-muted-foreground mt-1">
              Upload your document
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            disabled={isUploading}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {!uploadedFile ? (
            <>
              <p className="text-sm text-muted-foreground mb-4">
                Add your files or documents here
              </p>

              {/* Drop Zone */}
              <div
                ref={dragRef}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                className="border-2 border-dashed border-border rounded-lg p-8 text-center transition-colors mb-4 hover:bg-secondary/20 cursor-pointer"
                onClick={() => !isUploading && fileInputRef.current?.click()}
              >
                <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-3" />
                <p className="text-foreground font-medium mb-1">
                  Choose a file or drag & drop it here
                </p>
                <p className="text-sm text-muted-foreground">
                  DOCX, XLSX, PDF, JPG or PNG up to 50 MB.
                </p>
              </div>

              <input
                ref={fileInputRef}
                type="file"
                onChange={handleFileSelect}
                accept=".pdf,.jpg,.jpeg,.png,.docx,.xlsx"
                className="hidden"
              />
            </>
          ) : (
            <>
              {/* File Preview */}
              <div className="bg-secondary rounded-lg p-4 mb-6">
                <div className="flex items-start gap-3">
                  <FileIcon className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-foreground truncate">
                      {uploadedFile.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {(uploadedFile.size / 1024 / 1024).toFixed(1)} MB
                    </p>

                    {/* Progress Bar */}
                    {uploadProgress > 0 && (
                      <div className="mt-3">
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-muted-foreground">
                            {isUploading ? "Uploading..." : "Uploaded"}
                          </span>
                          <span className="text-foreground font-medium">
                            {Math.round(uploadProgress)}%
                          </span>
                        </div>
                        <div className="h-2 bg-border rounded-full overflow-hidden">
                          <div
                            className="h-full bg-primary transition-all duration-300"
                            style={{ width: `${uploadProgress}%` }}
                          />
                        </div>
                      </div>
                    )}
                  </div>

                  {!isUploading && !uploadComplete && (
                    <button
                      onClick={() => {
                        setUploadedFile(null);
                        setUploadProgress(0);
                        setUploadError(null);
                      }}
                      className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                      disabled={isUploading}
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}

                  {uploadComplete && (
                    <div className="text-green-500">
                      <CheckCircle className="w-5 h-5" />
                    </div>
                  )}
                </div>
              </div>

              {/* Error Message */}
              {uploadError && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                  <div className="flex items-center gap-3">
                    <AlertCircle className="w-5 h-5 text-red-600" />
                    <div>
                      <p className="font-medium text-red-800">Upload Failed</p>
                      <p className="text-sm text-red-600">{uploadError}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Success Message */}
              {uploadComplete && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <div>
                      <p className="font-medium text-green-800">
                        Upload Complete!
                      </p>
                      <p className="text-sm text-green-600">
                        Your document has been uploaded successfully.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {/* Footer */}
        <div className="flex gap-3 p-6 border-t border-border sticky bottom-0 bg-card">
          <Button
            onClick={() => {
              if (isUploading) {
                handleCancel();
              } else {
                onClose();
              }
            }}
            variant="outline"
            className="flex-1 h-11 bg-[#EDF3F7]"
            disabled={uploadComplete}
          >
            {isUploading ? "Cancel" : uploadComplete ? "Close" : "Cancel"}
          </Button>

          <Button
            onClick={() => {
              if (uploadComplete) {
                handleComplete();
              } else if (uploadedFile && !isUploading) {
                handleUpload();
              }
            }}
            disabled={!uploadedFile || (isUploading && !uploadComplete)}
            className="flex-1 h-11 bg-[#085EC4] disabled:opacity-50"
          >
            {uploadComplete
              ? "Done"
              : isUploading
                ? `Uploading... ${Math.round(uploadProgress)}%`
                : "Upload"}
          </Button>
        </div>
      </div>
    </div>
  );
}
