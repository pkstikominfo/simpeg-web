export interface ApiResponse<T = undefined> {
  code: "success" | "error";
  message: string;
  data?: T;
}

export interface Subunit {
  kode_subunit: string;
  kode_unit: string;
  nama_subunit: string;
}
