import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseApi } from "../api/baseApi";

const currentProviderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCalculationProvider: builder.query({
      query: (calculationId: string) => `/calculation/${calculationId}/provider`,
    }),
    getCurrentProvider: builder.query({
      query: () => "/user/calculatesavingshow/",
    }),
  }),
});

export const { useGetCalculationProviderQuery, useGetCurrentProviderQuery } = currentProviderApi;