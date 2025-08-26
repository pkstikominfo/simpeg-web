"use client";
import { useEffect, useState } from "react";
import { Jabatan } from "@/types/jabatan";
// import { fetcher } from "@/lib/api";

export function useJabatan() {
  const [data, setData] = useState<Jabatan[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // sementara pakai dummy
    const dummy: Jabatan[] = [
      {
        id_jabatan: "J001",
        nama_jabatan: "Jabatan 1",
      },
      {
        id_jabatan: "J002",
        nama_jabatan: "Jabatan 2",
      },
      {
        id_jabatan: "J003",
        nama_jabatan: "Jabatan 3",
      },
    ];

    setData(dummy);
    setLoading(false);

    // kalau sudah API:
    // fetcher<{ data: Pegawai[] }>("/pegawai")
    //   .then((res) => setData(res.data))
    //   .finally(() => setLoading(false));
  }, []);

  return { data, loading };
}
