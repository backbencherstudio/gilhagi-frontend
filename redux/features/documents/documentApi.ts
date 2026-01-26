import { baseApi } from "../api/baseApi";

export interface DocumentResponse {
  id: number;
  user_id: number;
  electricity_provider: string | null;
  debit_mandate: string | null;
  power_attorney: string | null;
  electricity_meter: string | null;
  other_document: string | null;
  price_increases: string | null;
  status: "pending" | "uploaded" | "approved";
  created_at: string;
  updated_at: string;
}

export interface DocumentsApiResponse {
  status: boolean;
  data: DocumentResponse[];
}

const documentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Get user documents
    getUserDocuments: builder.query<DocumentsApiResponse, void>({
      query: () => "/user/document/index",
      providesTags: ["Document"],
    }),
  }),
});

export const { useGetUserDocumentsQuery } = documentApi;

