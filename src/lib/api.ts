export const API_BASE_URL = "http://localhost:8000/api"; // ganti kalau sudah ada API Laravel

export async function fetcher<T>(
  url: string,
  options: RequestInit = {}
): Promise<T> {
  const res = await fetch(`${API_BASE_URL}${url}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer token", // nanti ganti dinamis
    },
    ...options,
  });

  if (!res.ok) {
    throw new Error(`API error: ${res.status}`);
  }

  return res.json();
}
