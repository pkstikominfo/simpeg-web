"use client";

import { useState } from "react";
import { usePegawai } from "@/hooks/usePegawai";
import { Pegawai } from "@/types/pegawai";
import { Column } from "@/types/table";
import Table from "@/components/ui/table";
import styles from "@/styles/pegawai.module.css";
import SearchBar from "@/components/ui/searchBar";

const columns: Column<Pegawai>[] = [
  { key: "nip", label: "NIP" },
  { key: "nama", label: "NAMA" },
  { key: "tgl_lahir", label: "TANGGAL LAHIR" },
  { key: "tempat_lahir", label: "TEMPAT LAHIR" },
  { key: "no_telp", label: "NO TELP" },
  { key: "email", label: "EMAIL" },
];

export default function PegawaiPage() {
  const { data, loading } = usePegawai();
  const [keyword, setKeyword] = useState("");

  const handleSearch = (text: string) => {
    setKeyword(text);
    // sementara filter dummy data, nanti ganti ke API GET /pegawai-by-keyword
    console.log("Cari:", text);
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Data Pegawai</h2>
      <p className={styles.subheader}>Berikut adalah daftar data pegawai</p>

      <SearchBar onSearch={handleSearch} />
      <Table columns={columns} data={data} />
    </div>
  );
}
