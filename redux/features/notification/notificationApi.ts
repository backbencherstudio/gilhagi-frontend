import { baseApi } from "../api/baseApi";

const notificationApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getNotifications: builder.query({
            query: () => "/admin/notification/index",
            providesTags: ["Notification"],
        }),
        getNotificationById: builder.query({
            query: (id: string) => `/admin/notification/show/${id}`,
            providesTags: ["Notification"],
        }),

        updateNotificationStatus: builder.mutation({
            query: (id: string) => ({
                url: `/admin/notification/update/${id}`,
                method: "PATCH",
                body: {
                    status: "read",
                },
            }),
            invalidatesTags: ["Notification"],
        }),
    }),
});

export const { useGetNotificationsQuery, useUpdateNotificationStatusMutation } = notificationApi;