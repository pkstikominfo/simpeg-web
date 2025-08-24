"use client";
import { useEffect, useState } from "react";
import { Pegawai } from "@/types/pegawai";
import { fetcher } from "@/lib/api";

export function usePegawai() {
  const [data, setData] = useState<Pegawai[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // sementara pakai dummy
    const dummy: Pegawai[] = [
      {
        nip: "199712012025041005",
        nama: "Budi Santoso",
        tgl_lahir: "1990-01-01",
        tempat_lahir: "Jakarta",
        no_telp: "08123456789",
        email: "budi@example.com",
      },
      {
        nip: "199712012025041003",
        nama: "Siti Aminah",
        tgl_lahir: "1992-05-10",
        tempat_lahir: "Bandung",
        no_telp: "08987654321",
        email: "siti@example.com",
      },
      {
        nip: "199712012025041004",
        nama: "Siti Aminah",
        tgl_lahir: "1992-05-10",
        tempat_lahir: "Bandung",
        no_telp: "08987654321",
        email: "siti@example.com",
      },
      {
        nip: "199712012025041006",
        nama: "Siti Aminah",
        tgl_lahir: "1992-05-10",
        tempat_lahir: "Bandung",
        no_telp: "08987654321",
        email: "siti@example.com",
      },
      {
        nip: "199712012025041007",
        nama: "Siti Aminah",
        tgl_lahir: "1992-05-10",
        tempat_lahir: "Bandung",
        no_telp: "08987654321",
        email: "siti@example.com",
      },
      {
        nip: "199712012025041008",
        nama: "Siti Aminah",
        tgl_lahir: "1992-05-10",
        tempat_lahir: "Bandung",
        no_telp: "08987654321",
        email: "siti@example.com",
      },
      {
        nip: "199712012025041009",
        nama: "Siti Aminah",
        tgl_lahir: "1992-05-10",
        tempat_lahir: "Bandung",
        no_telp: "08987654321",
        email: "siti@example.com",
      },
      {
        nip: "199712012025041010",
        nama: "Siti Aminah",
        tgl_lahir: "1992-05-10",
        tempat_lahir: "Bandung",
        no_telp: "08987654321",
        email: "siti@example.com",
      },
      {
        nip: "199712012025041011",
        nama: "Siti Aminah",
        tgl_lahir: "1992-05-10",
        tempat_lahir: "Bandung",
        no_telp: "08987654321",
        email: "siti@example.com",
      },
      {
        nip: "199712012025041012",
        nama: "Siti Aminah",
        tgl_lahir: "1992-05-10",
        tempat_lahir: "Bandung",
        no_telp: "08987654321",
        email: "siti@example.com",
      },
      {
        nip: "199712012025041013",
        nama: "Siti Aminah",
        tgl_lahir: "1992-05-10",
        tempat_lahir: "Bandung",
        no_telp: "08987654321",
        email: "siti@example.com",
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
