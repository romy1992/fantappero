export type ApiClientOptions = {
  baseUrl: string;
  getToken?: () => string | undefined;
};

export class ApiClient {
  private readonly baseUrl: string;
  private readonly getToken?: () => string | undefined;

  constructor(options: ApiClientOptions) {
    this.baseUrl = options.baseUrl.replace(/\/$/, "");
    this.getToken = options.getToken;
  }

  async getHealth(): Promise<{ status: string; service: string }> {
    return this.request("/health");
  }

  private async request<T>(path: string, init?: RequestInit): Promise<T> {
    const token = this.getToken?.();
    const response = await fetch(`${this.baseUrl}${path}`, {
      ...init,
      headers: {
        "Content-Type": "application/json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
        ...init?.headers
      }
    });

    if (!response.ok) {
      throw new Error(`FantAppero API error: ${response.status}`);
    }

    return response.json() as Promise<T>;
  }
}
