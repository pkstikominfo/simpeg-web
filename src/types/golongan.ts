// Generic Response
export interface ApiResponse<T = undefined> {
  code: "success" | "error";
  message: string;
  data?: T;
}

export interface Golongan {
  kode_golongan: string;
  nama_golongan: string;
}
