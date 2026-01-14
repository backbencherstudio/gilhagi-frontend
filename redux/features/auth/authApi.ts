import { baseApi } from "../api/baseApi";
import { login } from "./authSlice";
import type { User } from "./authSlice";

// Types for API responses
interface LoginResponse {
  user: User;
  token: string;
  expires_in?: number;
  message?: string;
}

interface AdminLoginResponse {
  admin: {
    id: number;
    name: string;
    email: string;
    image: string | null;
    role: string;
    status: number;
    created_at: string;
    updated_at: string;
  };
  token: string;
  token_type?: string;
  expires_in?: number;
  status?: string;
}

interface LoginRequest {
  email: string;
  password: string;
  remember?: boolean;
}

// Helper function to transform admin data to User format
const transformAdminToUser = (adminData: AdminLoginResponse["admin"]): User => {
  const nameParts = adminData.name.split(" ");
  return {
    id: adminData.id,
    first_name: nameParts[0] || adminData.name,
    last_name: nameParts.slice(1).join(" ") || "",
    email: adminData.email,
    email_verified_at: null,
    phone_number: null,
    user_type: "admin",
    postal_code: null,
    city: null,
    current_provider: null,
    annual_consumption: null,
    created_at: adminData.created_at,
    updated_at: adminData.updated_at,
  };
};

// Inject auth endpoints into baseApi
export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // User login
    login: builder.mutation<LoginResponse, LoginRequest>({
      query: (credentials) => ({
        url: "/login",
        method: "POST",
        body: credentials,
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;

          if (!data.user || !data.token) {
            throw new Error("Invalid login response: user/token missing");
          }

          // Store token if remember me is checked
          if (arg.remember) {
            localStorage.setItem("token", data.token);
            localStorage.setItem("user", JSON.stringify(data.user));
          } else {
            localStorage.removeItem("token");
            localStorage.removeItem("user");
          }

          // Dispatch login action to update Redux state
          dispatch(login({ user: data.user, token: data.token }));
        } catch (error) {
          // Error handling is done by the mutation hook
          console.error("Login error:", error);
        }
      },
    }),

    // Admin login
    adminLogin: builder.mutation<AdminLoginResponse, LoginRequest>({
      query: (credentials) => ({
        url: "/admin/login",
        method: "POST",
        body: credentials,
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;

          if (!data.admin || !data.token) {
            throw new Error("Invalid login response: admin/token missing");
          }

          // Transform admin data to User format
          const user = transformAdminToUser(data.admin);

          // Store token if remember me is checked
          if (arg.remember) {
            localStorage.setItem("token", data.token);
            localStorage.setItem("user", JSON.stringify(user));
          } else {
            localStorage.removeItem("token");
            localStorage.removeItem("user");
          }

          // Dispatch login action to update Redux state
          dispatch(login({ user, token: data.token }));
        } catch (error) {
          // Error handling is done by the mutation hook
          console.error("Admin login error:", error);
        }
      },
    }),
  }),
});

// Export hooks for usage in components
export const { useLoginMutation, useAdminLoginMutation } = authApi;
