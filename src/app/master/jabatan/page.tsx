"use client";

import { useState } from "react";
import { useJabatan } from "@/hooks/useJabatan";
import { Jabatan } from "@/types/jabatan";
import { Column } from "@/types/table";
import Table from "@/components/ui/table";
import styles from "@/styles/pegawai.module.css";
import SearchBar from "@/components/ui/searchBar";

const columns: Column<Jabatan>[] = [
  { key: "nama_jabatan", label: "NAMA JABATAN" },
];

export default function JabatanPage() {
  const { data, loading } = useJabatan();
  const [keyword, setKeyword] = useState("");

  const handleSearch = (text: string) => {
    setKeyword(text);
    // sementara filter dummy data, nanti ganti ke API GET /pegawai-by-keyword
    console.log("Cari:", text);
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Data Jabatan</h2>
      <p className={styles.subheader}>Berikut adalah daftar data jabatan</p>

      <SearchBar onSearch={handleSearch} />
      <Table columns={columns} data={data} />
    </div>
  );
}
