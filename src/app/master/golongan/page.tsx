"use client";

import { useState } from "react";
import { useGolongan } from "@/hooks/useGolongan";
import { Golongan } from "@/types/golongan";
import { Column } from "@/types/table";
import Table from "@/components/ui/table";
import styles from "@/styles/pegawai.module.css";
import SearchBar from "@/components/ui/searchBar";

const columns: Column<Golongan>[] = [
  { key: "kode_golongan", label: "KODE GOLONGAN" },
  { key: "nama_golongan", label: "NAMA GOLONGAN" },
];

export default function GolonganPage() {
  const { data, loading } = useGolongan();
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
