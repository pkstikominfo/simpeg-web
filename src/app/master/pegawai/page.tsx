"use client";

import { Pegawai } from "@/types/pegawai";
import { Column } from "@/types/table";
import Table from "@/components/ui/table";
import styles from "@/styles/pegawai.module.css";
import { SearchBar } from "@/components/ui/searchBar";
import { useApiData } from "@/hooks/useApiData";
import { SpinnerData } from "@/components/common/spinner";
import { useSearchData } from "@/hooks/useSearchData";
import EmptyCard from "@/components/common/emptyData";

const columns: Column<Pegawai>[] = [
  { key: "nip", label: "NIP" },
  { key: "nama", label: "NAMA" },
  { key: "tgl_lahir", label: "TANGGAL LAHIR" },
  { key: "tempat_lahir", label: "TEMPAT LAHIR" },
  { key: "no_telp", label: "NO TELP" },
  { key: "email", label: "EMAIL" },
];

export default function PegawaiPage() {
  const {
    data: pegawai,
    loading: loadingPegawai,
    error: errorPegawai,
  } = useApiData<Pegawai>("/pegawai");

  const {
    query,
    setQuery,
    results: hasilSearch,
    loading: loadingSearch,
    error: errorSearch,
  } = useSearchData<Pegawai>("/pegawai-by-keyword");

  const displayData = query.trim() ? hasilSearch : pegawai;

  const isLoading = loadingPegawai || loadingSearch;
  const errorMessage = errorPegawai?.message || errorSearch || null;

  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Data Pegawai</h2>
      <p className={styles.subheader}>Berikut adalah daftar data pegawai</p>
      <SearchBar value={query} onChange={setQuery} />
      <div className={styles.tableContainer}>
        <div
          className={
            isLoading ? styles.tableWrapperLoading : styles.tableWrapper
          }
        >
          {isLoading ? (
            <SpinnerData />
          ) : errorMessage ? (
            <p className="text-red-500">Error: {errorMessage}</p>
          ) : displayData?.length === 0 ? (
            <EmptyCard />
          ) : (
            <Table columns={columns} data={displayData} />
          )}
        </div>
      </div>
    </div>
  );
}
