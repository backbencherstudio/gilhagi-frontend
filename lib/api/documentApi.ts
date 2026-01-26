/**
 * Document Upload API Service
 * 
 * Uses XMLHttpRequest for real upload progress tracking.
 * Supports upload, replace, and remove (via 1-byte placeholder).
 */

import { privateAxios } from "./privateAxios";
import { store } from "@/redux/store";
import { selectToken } from "@/redux/features/auth/authSlice";

// Document field names as defined by backend
export type DocumentField =
    | "electricity_provider"
    | "debit_mandate"
    | "power_attorney"
    | "electricity_meter"
    | "other_document"
    | "price_increases";

// Map document ID to API field name
export const DOCUMENT_FIELD_MAP: Record<string, DocumentField> = {
    "1": "electricity_provider",
    "2": "debit_mandate",
    "3": "power_attorney",
    "4": "electricity_meter",
    "5": "other_document",
    "6": "price_increases",
};

// Reverse map: field name to document ID
export const FIELD_TO_DOCUMENT_ID_MAP: Record<DocumentField, string> = {
    "electricity_provider": "1",
    "debit_mandate": "2",
    "power_attorney": "3",
    "electricity_meter": "4",
    "other_document": "5",
    "price_increases": "6",
};

export interface UploadProgress {
    loaded: number;
    total: number;
    percentage: number;
}

export interface UploadOptions {
    onProgress?: (progress: UploadProgress) => void;
    xhrRef?: { current: XMLHttpRequest | null };
}

export interface UploadResult {
    success: boolean;
    message?: string;
    data?: any;
}

/**
 * Creates a 1-byte placeholder file for "removing" documents
 */
export function createPlaceholderFile(fieldName: DocumentField): File {
    const blob = new Blob([new Uint8Array([0])], { type: "application/octet-stream" });
    return new File([blob], `placeholder_${fieldName}.bin`, {
        type: "application/octet-stream",
    });
}

/**
 * Uploads a document using XMLHttpRequest for real progress tracking
 */
export async function uploadDocument(
    fieldName: DocumentField,
    file: File,
    options: UploadOptions = {}
): Promise<UploadResult> {
    return new Promise((resolve, reject) => {
        const state = store.getState();
        const token = selectToken(state);

        if (!token) {
            reject(new Error("Authentication required"));
            return;
        }

        const xhr = new XMLHttpRequest();
        const formData = new FormData();
        formData.append(fieldName, file);

        // Track upload progress
        xhr.upload.addEventListener("progress", (e) => {
            if (e.lengthComputable && options.onProgress) {
                const progress: UploadProgress = {
                    loaded: e.loaded,
                    total: e.total,
                    percentage: Math.round((e.loaded / e.total) * 100),
                };
                options.onProgress(progress);
            }
        });

        // Handle completion
        xhr.addEventListener("load", () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                try {
                    const response = JSON.parse(xhr.responseText);
                    resolve({
                        success: true,
                        message: response.message || "Upload successful",
                        data: response.data,
                    });
                } catch {
                    resolve({
                        success: true,
                        message: "Upload successful",
                    });
                }
            } else {
                try {
                    const error = JSON.parse(xhr.responseText);
                    reject(new Error(error.message || `Upload failed: ${xhr.statusText}`));
                } catch {
                    reject(new Error(`Upload failed: ${xhr.statusText}`));
                }
            }
        });

        // Handle errors
        xhr.addEventListener("error", () => {
            reject(new Error("Network error during upload"));
        });

        xhr.addEventListener("abort", () => {
            reject(new Error("Upload cancelled"));
        });

        // Configure and send request
        const apiUrl = process.env.NEXT_PUBLIC_API_URL;
        if (!apiUrl) {
            reject(new Error("API URL not configured"));
            return;
        }

        // Store xhr reference if provided
        if (options.xhrRef) {
            options.xhrRef.current = xhr;
        }

        xhr.open("POST", `${apiUrl}/user/document/update`);
        xhr.setRequestHeader("Authorization", `Bearer ${token}`);
        // Don't set Content-Type header - browser will set it with boundary for multipart/form-data

        xhr.send(formData);
    });
}

/**
 * Removes a document by uploading a 1-byte placeholder
 */
export async function removeDocument(
    fieldName: DocumentField,
    options: UploadOptions = {}
): Promise<UploadResult> {
    const placeholderFile = createPlaceholderFile(fieldName);
    return uploadDocument(fieldName, placeholderFile, options);
}

