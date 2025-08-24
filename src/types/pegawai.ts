// Generic Response
export interface ApiResponse<T = undefined> {
  code: "success" | "error";
  message: string;
  data?: T;
}

export interface Pegawai {
  nip: string;
  nama: string;
  tgl_lahir: string;
  tempat_lahir: string;
  no_telp: string;
  email: string;
}
