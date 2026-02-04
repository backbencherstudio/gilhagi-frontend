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

interface RegisterRequest {
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  password: string;
  password_confirmation: string;
  privacy_policy: boolean;
}

interface RegisterResponse {
  status: boolean;
  message: string;
  data: {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    phone_number: string;
    privacy_policy: boolean;
    created_at: string;
    updated_at: string;
  };
}


interface ForgotPasswordRequest {
  email: string;
}

interface VerifyOtpRequest {
  email: string;
  otp: string;
}

interface ResetPasswordRequest {
  email: string;
  password: string;
  password_confirmation: string;
}

interface GenericAuthResponse {
  status?: boolean;
  message: string;
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

    // User registration
    register: builder.mutation<RegisterResponse, RegisterRequest>({
      query: (userData) => ({
        url: "/register",
        method: "POST",
        body: userData,
      }),
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

      // ======================
    // Forgot Password
    // ======================
    forgotPassword: builder.mutation<
      GenericAuthResponse,
      ForgotPasswordRequest
    >({
      query: (data) => ({
        url: "/forgot-password",
        method: "POST",
        body: data,
      }),
    }),

    // ======================
    // Verify OTP
    // ======================
    verifyOtp: builder.mutation<GenericAuthResponse, VerifyOtpRequest>({
      query: (data) => ({
        url: "/verify-otp",
        method: "POST",
        body: data,
      }),
    }),

    // ======================
    // Reset Password
    // ======================
    resetPassword: builder.mutation<
      GenericAuthResponse,
      ResetPasswordRequest
    >({
      query: (data) => ({
        url: "/reset-password",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

// Export hooks for usage in components
export const { useLoginMutation, useAdminLoginMutation, useRegisterMutation, useForgotPasswordMutation, useVerifyOtpMutation, useResetPasswordMutation } =
  authApi;
