import { baseApi } from "../api/baseApi";

const adminOverviewApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAdminOverviewStats: builder.query({
            query: () => "/admin/overview",
            providesTags: ["AdminOverview"],
        }),

        getAdminOrderStats: builder.query({
            query: () => "/admin/order/overview",
            providesTags: ["AdminOverview"],
        }),

        monthlySwitchedStats: builder.query({
            query: () => "admin/monthly-switches",
            providesTags: ["AdminOverview"],
        }),
        upcomingContractsStats: builder.query({
            query: (id: string) => `admin/order/deadline?filter=${id}`,
            providesTags: ["AdminOverview"],
        }),
        recentActivity: builder.query({
            query: () => "/admin/order/recentActivity",
            providesTags: ["AdminOverview"],
        }),
        // get admin order overview
        getAdminOrderOverview: builder.query({
            query: () => "admin/order/overview",
            providesTags: ["AdminOverview"],
        }),

    }),
}); 

export const { useGetAdminOverviewStatsQuery, useMonthlySwitchedStatsQuery, useUpcomingContractsStatsQuery, useRecentActivityQuery, useGetAdminOrderOverviewQuery, useGetAdminOrderStatsQuery } = adminOverviewApi;

