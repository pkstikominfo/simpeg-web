export interface ApiResponse<T = undefined> {
  code: "success" | "error";
  message: string;
  data?: T;
}

export interface Subunit {
  kode_sub_unit: string;
  kode_unit: string;
  nama_sub_unit: string;
}
