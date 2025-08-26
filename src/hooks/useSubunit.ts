"use client";
import { useEffect, useState } from "react";
import { Subunit } from "@/types/subunit";
// import { fetcher } from "@/lib/api";

export function useSubunit() {
  const [data, setData] = useState<Subunit[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // sementara pakai dummy
    const dummy: Subunit[] = [
      {
        kode_subunit: "SU001",
        kode_unit: "U001",
        nama_subunit: "Subunit 1",
      },
      {
        kode_subunit: "SU002",
        kode_unit: "U002",
        nama_subunit: "Subunit 2",
      },
      {
        kode_subunit: "SU003",
        kode_unit: "U003",
        nama_subunit: "Subunit 3",
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
