import { baseApi } from "../api/baseApi";
import { CreateProviderResponseType, ProviderType } from "./provider.type";


const providersApi = baseApi.injectEndpoints({

  // User endpoints
  endpoints: (builder) => ({
    getProvidersUser: builder.query({
      query: () => "/providers",
      providesTags: ["Provider"],
    }),

    // Admin endpoints
    getProvidersAdmin: builder.query({
      query: (serviceArea: string) => `/admin/vendor/index?service_area=${serviceArea}`,
      providesTags: ["Provider"],
    }),

    getProviderByIdAdmin: builder.query({
      query: (id: string) => `/admin/vendor/show/${id}`,
      providesTags: ["Provider"],
    }),

    createProviderAdmin: builder.mutation<CreateProviderResponseType, ProviderType>({
      query: (provider: ProviderType) => ({
        url: "/admin/vendor/store",
        method: "POST",
        body: provider,
      }),
      invalidatesTags: ["Provider"],
    }),

    updateProviderAdmin: builder.mutation<CreateProviderResponseType, { id: number | string } & ProviderType>({
      query: ({ id, ...provider }) => ({
        url: `/admin/vendor/update/${id}`,
        method: "POST",
        body: provider,
      }),
      invalidatesTags: ["Provider"],
    }),
    deleteProviderAdmin: builder.mutation({
      query: (id: string) => ({
        url: `/admin/vendor/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Provider"],
    }),

    // get postal codes from service areas
    getPostalCodes: builder.query({
      query: () => "/admin/vendor/serviceareas",
      providesTags: ["Provider"],
    }),


  }),




});

export const { useGetProvidersUserQuery, useGetProvidersAdminQuery,
  useGetProviderByIdAdminQuery, useCreateProviderAdminMutation, useUpdateProviderAdminMutation, useDeleteProviderAdminMutation,
  useGetPostalCodesQuery } = providersApi;



