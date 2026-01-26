import { baseApi } from "../api/baseApi";
import { CreateAndEditTariffType } from "./teriff.type";

const teriffApi = baseApi.injectEndpoints({
// PUBLIC ENDPOINTS

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
    getAllTariffsAdmin: builder.query({
      query: (serviceArea: string) => `/admin/tariff/index?service_areas=${serviceArea}`,
      providesTags: ["Tariff"],
    }),

    getTariffById: builder.query({
      query: (id: string) => `/admin/tariff/show/${id}`,
      providesTags: ["Tariff"],
    }),

    createTariff: builder.mutation({
      query: (tariff: CreateAndEditTariffType) => ({
        url: "/admin/tariff/store",
        method: "POST",
        body: tariff,
      }),
      invalidatesTags: ["Tariff"],
    }),

    updateTariff: builder.mutation({
      query: ({ id, ...tariff }: { id: string } & CreateAndEditTariffType) => ({
        url: `/admin/tariff/update/${id}`,
        method: "POST",
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
  useGetAllTariffsAdminQuery,
} = teriffApi;
  