"use client";

import { Golongan } from "@/types/golongan";
import { Column } from "@/types/table";
import Table from "@/components/ui/table";
import styles from "@/styles/pegawai.module.css";
import { useApiData } from "@/hooks/useApiData";
import { SpinnerData } from "@/components/common/spinner";

const columns: Column<Golongan>[] = [
  { key: "kode_golongan", label: "KODE GOLONGAN" },
  { key: "nama_golongan", label: "NAMA GOLONGAN" },
];

export default function GolonganPage() {
  const { data: golongan, loading, error } = useApiData<Golongan>("/golongan");

  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Data Golongan</h2>
      <p className={styles.subheader}>Berikut adalah daftar data golongan</p>
      <div className={styles.tableContainer}>
        <div
          className={loading ? styles.tableWrapperLoading : styles.tableWrapper}
        >
          {loading ? (
            <SpinnerData />
          ) : error ? (
            <p>Error: {error.message}</p>
          ) : (
            <Table columns={columns} data={golongan} />
          )}
        </div>
      </div>
    </div>
  );
}
