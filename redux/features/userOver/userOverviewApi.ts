import { baseApi } from "../api/baseApi";

const userOverviewApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({

    getCurrentContract: builder.query({
      query: () => "/user/currentContract",
      transformResponse: (response:any) => {
        if(response?.success === false) {
          return { data: [] };
        }
        return response?.data;
      },
      providesTags: ["UserOverview"],
    }),

    getConractHistory: builder.query({
      query: () => "/user/contractHistory",

      // ✅ ONLY normalize known "empty data" response
      transformResponse: (response: any) => {
        if (
          response?.success === false 
        ) {
          return { data: [] };
        }

        return response;
      },

      // ❌ REMOVE transformErrorResponse completely
      providesTags: ["UserOverview"],
    }),

  }),
});

export const {
  useGetCurrentContractQuery,
  useGetConractHistoryQuery,
} = userOverviewApi;
