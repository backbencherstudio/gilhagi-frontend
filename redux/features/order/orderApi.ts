import { baseApi } from "../api/baseApi";


const orderApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({

        // step -0 (get all tariffs for user) 
        getAllTariffsUser: builder.query({
            query: () => "/tariff/tarifflist",
        }),



        // step -1 (calculate form)`
        calculateSaving: builder.mutation<any, any>({
            query: (data: any) => ({
                url: "/user/calculatesaving",
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["Order"],
        }),

        // step -2 (get calculation details)
        getCalculationDetails: builder.query<any, void>({
            query: () => `/user/calculatesavingshow`,
            providesTags: ["Order"],
        }),

        // step -3 (get suggested tariffs1)
        getSuggestedTariffs: builder.query<any, void>({
            query: () => `/tariff/index`,
            providesTags: ["Order"],
        }),

        // step -4 (get tariff details)
        getTariffDetails: builder.query<any, string>({
            query: (id: string) => `user/tariff/show/${id}`,
            providesTags: ["Order"],
        }),

        // step -5 (create order)
        createOrder: builder.mutation<any, any>({
            query: (data: any) => ({
                url: "/user/order/store",
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["Order"],
        }),
    }),
});

export const {
    useCalculateSavingMutation,
    useGetAllTariffsUserQuery,
    useGetCalculationDetailsQuery,
    useGetSuggestedTariffsQuery,
    useGetTariffDetailsQuery,
    useCreateOrderMutation,
} = orderApi;  