"use client";

import { Unit } from "@/types/unit";
import { Column } from "@/types/table";
import Table from "@/components/ui/table";
import styles from "@/styles/pegawai.module.css";
import { useApiData } from "@/hooks/useApiData";
import { SpinnerData } from "@/components/common/spinner";

const columns: Column<Unit>[] = [
  { key: "kode_unit", label: "KODE UNIT" },
  { key: "nama_unit", label: "NAMA UNIT" },
];

export default function UnitPage() {
  const { data: unit, loading, error } = useApiData<Unit>("/unit");

  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Data Unit</h2>
      <p className={styles.subheader}>Berikut adalah daftar data unit</p>
      <div className={styles.tableContainer}>
        <div
          className={loading ? styles.tableWrapperLoading : styles.tableWrapper}
        >
          {loading ? (
            <SpinnerData />
          ) : error ? (
            <p>Error: {error.message}</p>
          ) : (
            <Table columns={columns} data={unit} />
          )}
        </div>
      </div>
    </div>
  );
}
