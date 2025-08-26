"use client";

import { useState } from "react";
import { useUnit } from "@/hooks/useUnit";
import { Unit } from "@/types/unit";
import { Column } from "@/types/table";
import Table from "@/components/ui/table";
import styles from "@/styles/pegawai.module.css";
import SearchBar from "@/components/ui/searchBar";

const columns: Column<Unit>[] = [{ key: "nama_unit", label: "NAMA UNIT" }];

export default function UnitPage() {
  const { data, loading } = useUnit();
  const [keyword, setKeyword] = useState("");

  const handleSearch = (text: string) => {
    setKeyword(text);
    // sementara filter dummy data, nanti ganti ke API GET /pegawai-by-keyword
    console.log("Cari:", text);
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Data Unit</h2>
      <p className={styles.subheader}>Berikut adalah daftar data unit</p>

      <SearchBar onSearch={handleSearch} />
      <Table columns={columns} data={data} />
    </div>
  );
}
