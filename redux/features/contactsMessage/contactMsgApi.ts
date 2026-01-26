import { baseApi } from "../api/baseApi";

type ContactMessageUserType = {
    first_name: string;
    last_name: string;
    email: string;
    telephone_number: string;
    reference: string;
    news: string;
    privacy_policy: boolean;
}

type ContactMessageAdminType = {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    telephone_number: string;
    reference: string;
    news: string;
    privacy_policy: boolean;
    created_at: string;
    updated_at: string;
}

type ContactMessageResponseType = {
    success: boolean;
    message: string;
    data: ContactMessageAdminType[];
}

type SendMessageResponseType = {
    status: string;
    message: string;
}

const contactMsgApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        // create contact message FOR USER
        createContactMessageUser: builder.mutation<ContactMessageResponseType, any>({
            query: (contactMessage: ContactMessageUserType) => ({
                url: "/contactus/store",
                method: "POST",
                body: contactMessage,
            }),
            invalidatesTags: ["ContactMessage"],
        }),

        // send message to admin
        sendMessageUser: builder.mutation<SendMessageResponseType, any>({
            query: (contactMessage: ContactMessageAdminType) => ({
                url: "/user/support/store",
                method: "POST",
                body: contactMessage,
            }),
            invalidatesTags: ["ContactMessage"],
        }),

        // FOR ADMIN
        getContactMessagesAdmin: builder.query<ContactMessageResponseType, void>({
            query: () => "/admin/contactus/index",
            providesTags: ["ContactMessage"],
        }),
    }),
});

export const {
    useCreateContactMessageUserMutation,
    useGetContactMessagesAdminQuery,
    useSendMessageUserMutation
} = contactMsgApi;