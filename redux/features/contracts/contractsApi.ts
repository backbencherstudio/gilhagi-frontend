import { baseApi } from "../api/baseApi";

const contractsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getWaitingContracts: builder.query({
      query: () => "/admin/order/waiting",
      providesTags: ["Contracts"],
    }),
    getApprovedContracts: builder.query({
      query: () => "/admin/order/approved",
      providesTags: ["Contracts"],
    }),

    getContractById: builder.query({
      query: (id: string) => `/admin/order/show/${id}`,
      providesTags: ["Contracts"],
    }),

    getContractByProviderId: builder.query({
      query: (providerId: string) => `/admin/order/provider/${providerId}`,
      providesTags: ["Contracts"],
    }),
  }),
});

export const { useGetWaitingContractsQuery, useGetApprovedContractsQuery, useGetContractByIdQuery, useGetContractByProviderIdQuery } = contractsApi;
