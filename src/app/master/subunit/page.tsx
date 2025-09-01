"use client";

import { Subunit } from "@/types/subunit";
import { Column } from "@/types/table";
import Table from "@/components/ui/table";
import styles from "@/styles/pegawai.module.css";
import { useApiData } from "@/hooks/useApiData";
import { SpinnerData } from "@/components/common/spinner";

const columns: Column<Subunit>[] = [
  { key: "kode_unit", label: "KODE UNIT" },
  { key: "kode_sub_unit", label: "KODE SUBUNIT" },
  { key: "nama_sub_unit", label: "NAMA SUBUNIT" },
];

export default function SubunitPage() {
  const { data: subunit, loading, error } = useApiData<Subunit>("/sub-unit");

  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Data Subunit</h2>
      <p className={styles.subheader}>Berikut adalah daftar data subunit</p>
      <div className={styles.tableContainer}>
        <div
          className={loading ? styles.tableWrapperLoading : styles.tableWrapper}
        >
          {loading ? (
            <SpinnerData />
          ) : error ? (
            <p>Error: {error.message}</p>
          ) : (
            <Table columns={columns} data={subunit} />
          )}
        </div>
      </div>
    </div>
  );
}
