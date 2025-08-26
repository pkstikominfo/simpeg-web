"use client";

import { useState } from "react";
import { useSubunit } from "@/hooks/useSubunit";
import { Subunit } from "@/types/subunit";
import { Column } from "@/types/table";
import Table from "@/components/ui/table";
import styles from "@/styles/pegawai.module.css";
import SearchBar from "@/components/ui/searchBar";

const columns: Column<Subunit>[] = [
  { key: "nama_subunit", label: "NAMA SUBUNIT" },
];

export default function SubunitPage() {
  const { data, loading } = useSubunit();
  const [keyword, setKeyword] = useState("");

  const handleSearch = (text: string) => {
    setKeyword(text);
    // sementara filter dummy data, nanti ganti ke API GET /pegawai-by-keyword
    console.log("Cari:", text);
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Data Subunit</h2>
      <p className={styles.subheader}>Berikut adalah daftar data subunit</p>

      <SearchBar onSearch={handleSearch} />
      <Table columns={columns} data={data} />
    </div>
  );
}
