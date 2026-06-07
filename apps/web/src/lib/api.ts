import { ApiClient } from "@fantappero/api-client";

export const apiClient = new ApiClient({
  baseUrl: import.meta.env.VITE_API_BASE_URL ?? "http://localhost:8000",
  getToken: () => window.localStorage.getItem("fantappero_token") ?? undefined
});
