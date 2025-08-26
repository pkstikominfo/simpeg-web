"use client";
import { useEffect, useState } from "react";
import { Golongan } from "@/types/golongan";
import { fetcher } from "@/lib/api";

export function useGolongan() {
  const [data, setData] = useState<Golongan[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // sementara pakai dummy
    const dummy: Golongan[] = [
      {
        kode_golongan: "I/a",
        nama_golongan: "Juru Muda",
      },
      {
        kode_golongan: "I/b",
        nama_golongan: "Juru Muda Tingkat I",
      },
      {
        kode_golongan: "I/c",
        nama_golongan: "Juru",
      },
      {
        kode_golongan: "I/d",
        nama_golongan: "Juru Tingkat I",
      },
      {
        kode_golongan: "II/a",
        nama_golongan: "Pengatur Muda",
      },
      {
        kode_golongan: "II/b",
        nama_golongan: "Pengatur Muda Tingkat I",
      },
      {
        kode_golongan: "II/c",
        nama_golongan: "Pengatur",
      },
      {
        kode_golongan: "II/d",
        nama_golongan: "Pengatur Tingkat I",
      },
      {
        kode_golongan: "III/a",
        nama_golongan: "Penata Muda",
      },
      {
        kode_golongan: "III/b",
        nama_golongan: "Penata Muda Tingkat I",
      },
      {
        kode_golongan: "III/c",
        nama_golongan: "Penata",
      },
      {
        kode_golongan: "III/d",
        nama_golongan: "Penata Tingkat I",
      },
      {
        kode_golongan: "IV/a",
        nama_golongan: "Pembina",
      },
      {
        kode_golongan: "IV/b",
        nama_golongan: "Pembina Tingkat I",
      },
      {
        kode_golongan: "IV/c",
        nama_golongan: "Pembina Utama Muda",
      },
      {
        kode_golongan: "IV/d",
        nama_golongan: "Pembina Utama Madya",
      },
      {
        kode_golongan: "IV/e",
        nama_golongan: "Pembina Utama",
      },
    ];

    setData(dummy);
    setLoading(false);

    // kalau sudah API:
    // fetcher<{ data: Golongan[] }>("/golongan")
    //   .then((res) => setData(res.data))
    //   .finally(() => setLoading(false));
  }, []);

  return { data, loading };
}
