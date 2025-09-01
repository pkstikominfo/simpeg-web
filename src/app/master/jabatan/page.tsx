"use client";

import { Jabatan } from "@/types/jabatan";
import { Column } from "@/types/table";
import Table from "@/components/ui/table";
import styles from "@/styles/pegawai.module.css";
import { useApiData } from "@/hooks/useApiData";
import { SpinnerData } from "@/components/common/spinner";

const columns: Column<Jabatan>[] = [
  { key: "nama_jabatan", label: "NAMA JABATAN" },
];

export default function JabatanPage() {
  const { data: jabatan, loading, error } = useApiData<Jabatan>("/jabatan");

  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Data Jabatan</h2>
      <p className={styles.subheader}>Berikut adalah daftar data jabatan</p>
      <div className={styles.tableContainer}>
        <div
          className={loading ? styles.tableWrapperLoading : styles.tableWrapper}
        >
          {loading ? (
            <SpinnerData />
          ) : error ? (
            <p>Error: {error.message}</p>
          ) : (
            <Table columns={columns} data={jabatan} />
          )}
        </div>
      </div>
    </div>
  );
}
