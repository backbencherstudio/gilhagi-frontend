import {
  createApi,
  fetchBaseQuery,
  BaseQueryFn,
} from "@reduxjs/toolkit/query/react";
import { store } from "../../store";
import { logout, selectToken } from "../auth/authSlice";

// Base query with token injection
const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_API_URL,
  prepareHeaders: (headers, { getState }) => {
    const state = store.getState();
    const token = selectToken(state);
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    headers.set("Content-Type", "application/json");
    return headers;
  },
});

// Base query with reauth logic (401 handling)
const baseQueryWithReauth: BaseQueryFn = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  // Handle 401 Unauthorized errors
  if (
    result?.error &&
    "status" in result.error &&
    result.error.status === 401
  ) {
    // Dispatch logout action to clear auth state
    store.dispatch(logout());

    // Redirect to login page (only on client side)
    if (typeof window !== "undefined") {
      window.location.href = "/login";
    }
  }

  return result;
};

// Create base API
export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithReauth,
  tagTypes: ["User", "Admin", "Tariff", "Provider", "Contracts"],
  endpoints: () => ({}),
});
