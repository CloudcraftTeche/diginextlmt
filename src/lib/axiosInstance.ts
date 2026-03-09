// src/lib/axiosInstance.ts

import axios, {
  AxiosInstance,
  InternalAxiosRequestConfig,
  AxiosError,
  AxiosResponse,
} from "axios";
import {
  API_BASE_URL,
  API_TIMEOUT,
  DEFAULT_HEADERS,
  IS_MOCK_ENABLED,
} from "../config/appConfig";
import { ERROR_MESSAGES } from "../config/errorMessages";
import { ApiError } from "next/dist/server/api-utils";
import { showToast } from "./toast";

const apiClient: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: API_TIMEOUT,
  headers: DEFAULT_HEADERS,
});

// Request interceptor
apiClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("access_token");
      if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error: AxiosError) => Promise.reject(error),
);

// Response interceptor
apiClient.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError<ApiError>): Promise<never> => {
    // Don't show toast or handle errors in mock mode at all
    if (IS_MOCK_ENABLED) {
      console.warn(
        "Mock mode is enabled - API call should not have been made:",
        error.config?.url,
      );
      return Promise.reject(error);
    }

    let message = ERROR_MESSAGES.GENERIC_ERROR as string;

    if (error.response) {
      const { status, data } = error.response;

      message =
        data?.message ||
        (ERROR_MESSAGES[status as number] as string) ||
        ERROR_MESSAGES.GENERIC_ERROR;

      if (status === 401) {
        localStorage.removeItem("access_token");
        if (typeof window !== "undefined") {
          window.location.href = "/login";
        }
      }
    } else if (error.request) {
      message = ERROR_MESSAGES.NETWORK_ERROR;
    }

    showToast(message, "error");
    return Promise.reject(new Error(message));
  },
);

export default apiClient;
