export async function clientFetchWithAuth<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const res = await fetch("/api/proxy", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ endpoint, options }),
  });
  if (!res.ok) throw new Error("Client fetch gagal");
  return res.json();
}
