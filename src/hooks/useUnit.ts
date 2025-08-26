"use client";
import { useEffect, useState } from "react";
import { Unit } from "@/types/unit";
// import { fetcher } from "@/lib/api";

export function useUnit() {
  const [data, setData] = useState<Unit[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // sementara pakai dummy
    const dummy: Unit[] = [
      {
        kode_unit: "U001",
        nama_unit: "Unit 1",
      },
      {
        kode_unit: "U002",
        nama_unit: "Unit 2",
      },
      {
        kode_unit: "U003",
        nama_unit: "Unit 3",
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
