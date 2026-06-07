import { ApiClient } from "@fantappero/api-client";

const runtime = globalThis as typeof globalThis & {
  process?: { env?: Record<string, string | undefined> };
};

export const apiClient = new ApiClient({
  baseUrl: runtime.process?.env?.EXPO_PUBLIC_API_BASE_URL ?? "http://localhost:8000"
});
