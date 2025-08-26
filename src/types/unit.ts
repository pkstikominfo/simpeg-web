export interface ApiResponse<T = undefined> {
  code: "success" | "error";
  message: string;
  data?: T;
}

export interface Unit {
  kode_unit: string;
  nama_unit: string;
}
