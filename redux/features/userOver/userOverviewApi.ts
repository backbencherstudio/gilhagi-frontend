
import { baseApi } from "../api/baseApi";
    
const userOverviewApi = baseApi.injectEndpoints({ 
    endpoints: (builder) => ({

        getCurrentContract: builder.query({
            query: () => "/user/currentContract",
            providesTags: ["UserOverview"],
        }),

        getConractHistory: builder.query({
            query: () => "/user/contractHistory",
            providesTags: ["UserOverview"],
        }),
      
    }),
}); 

export const { useGetCurrentContractQuery, useGetConractHistoryQuery } = userOverviewApi;