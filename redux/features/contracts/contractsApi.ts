import { baseApi } from "../api/baseApi";

const contractsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({

    upComingContracts: builder.query({
      query: () => "/admin/order/upcoming",
      providesTags: ["Contracts"],
    }),

    getWaitingContracts: builder.query({
      query: () => "/admin/order/waiting",
      providesTags: ["Contracts"],
    }),

    getApprovedContracts: builder.query({
      query: () => "/admin/order/approved",
      providesTags: ["Contracts"],
    }),

    getContractById: builder.query({
      query: (id: string) => `/admin/order/showOrder/${id}`,
      providesTags: ["Contracts"],
    }),

    getContractByProviderId: builder.query({
      query: (providerId: string) => `/admin/order/provider/${providerId}`,
      providesTags: ["Contracts"],
    }),


    updateContractWindow: builder.mutation({
      query: ({ id, windowStart, windowEnd, renewalDate }: { id: string, windowStart: string, windowEnd: string, renewalDate: string }) => ({
        url: `/admin/order/update/${id}`,
        method: "POST",
        body: {
          window_start: windowStart || null,
          window_end: windowEnd || null,
          renewal_date: renewalDate || null
        },
      }),
      invalidatesTags: ["Contracts"],
    }),


    approveContract: builder.mutation({
      query: (id: string) => ({
        url: `/admin/order/status/${id}`,
        method: "PATCH",
        body: {
          status: "approved"
        },
      }),
      invalidatesTags: ["Contracts"],
    }),

    rejectContract: builder.mutation({
      query: (id: string) => ({
        url: `/admin/order/status/${id}`,
        method: "PATCH",
        body: {
          status: "rejected"
        },
      }),
      invalidatesTags: ["Contracts"],
    }),
  }),
});

export const { useGetWaitingContractsQuery, 
  useGetApprovedContractsQuery, 
  useGetContractByIdQuery, 
  useGetContractByProviderIdQuery, 
  useUpdateContractWindowMutation, 
  useApproveContractMutation, 
  useRejectContractMutation,
  useLazyGetWaitingContractsQuery,
  useLazyGetApprovedContractsQuery,
  useLazyGetContractByIdQuery,
  useLazyGetContractByProviderIdQuery,
} = contractsApi;
