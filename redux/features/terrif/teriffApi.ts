import { baseApi } from "../api/baseApi";

const teriffApi = baseApi.injectEndpoints({
  // User endpoints
  endpoints: (builder) => ({
    getAllTariffsUsers: builder.query({
      query: () => "/tariff/index",
      providesTags: ["Tariff"],
    }),

    getTariffByIdUser: builder.query({
      query: (id: string) => `/user/tariff/show/${id}`,
      providesTags: ["Tariff"],
    }),

    // Admin endpoints
    getAllTariffs: builder.query({
      query: () => "/admin/tariff/index",
      providesTags: ["Tariff"],
    }),

    getTariffById: builder.query({
      query: (id: string) => `/admin/tariff/show/${id}`,
      providesTags: ["Tariff"],
    }),

    createTariff: builder.mutation({
      query: (tariff: any) => ({
        url: "/admin/tariff/store",
        method: "POST",
        body: tariff,
      }),
      invalidatesTags: ["Tariff"],
    }),

    updateTariff: builder.mutation({
      query: (tariff: any) => ({
        url: "/admin/tariff/update/${id}",
        method: "PUT",
        body: tariff,
      }),
      invalidatesTags: ["Tariff"],
    }),
    deleteTariff: builder.mutation({
      query: (id: string) => ({
        url: `/admin/tariff/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Tariff"],
    }),
  }),
});

export const {
  useGetAllTariffsUsersQuery,
  useGetTariffByIdUserQuery,
  useCreateTariffMutation,
  useUpdateTariffMutation,
  useDeleteTariffMutation,
  useGetTariffByIdQuery,
} = teriffApi;
