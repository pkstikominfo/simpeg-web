export interface ApiResponse<T = undefined> {
  code: "success" | "error";
  message: string;
  data?: T;
}

export interface Jabatan {
  id_jabatan: string;
  nama_jabatan: string;
}
