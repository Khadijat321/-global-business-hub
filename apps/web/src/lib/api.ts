
const API_BASE_URL = process.env.API_BASE_URL;

type ApiOptions = {
  method?: "GET" | "POST" | "PATCH" | "PUT" | "DELETE";
  body?: unknown;
};

export async function apiRequest<T>(
  endpoint: string,
  options: ApiOptions = {}
): Promise<T> {
  if (!API_BASE_URL) {
    throw new Error("API_BASE_URL is not configured.");
  }

  const response = await fetch(
    `${API_BASE_URL}/api/v1${endpoint}`,
    {
      method: options.method ?? "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: options.body
        ? JSON.stringify(options.body)
        : undefined,
      cache: "no-store",
    }
  );

  const data = await response.json().catch(() => null);

  if (!response.ok) {
    throw new Error(
      data?.message ?? `API request failed: ${response.status}`
    );
  }

  return data as T;
}
