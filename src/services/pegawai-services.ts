import { ApiResponse, Pegawai } from "@/types/pegawai";

// GET ALL
export async function getPegawai(): Promise<ApiResponse<Pegawai[]>> {
  const res = await fetch("/api/pegawai");
  return res.json();
}

// CREATE
export async function createPegawai(
  data: Pegawai
): Promise<ApiResponse<Pegawai>> {
  const res = await fetch("/api/pegawai", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}

// UPDATE
export async function updatePegawai(
  nip: string,
  data: Pegawai
): Promise<ApiResponse<Pegawai>> {
  const res = await fetch(`/api/pegawai/${nip}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}

// DELETE
export async function deletePegawai(nip: string): Promise<ApiResponse> {
  const res = await fetch(`/api/pegawai/${nip}`, {
    method: "DELETE",
  });
  return res.json();
}
