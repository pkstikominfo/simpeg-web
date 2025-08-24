"use client";

import { Pegawai } from "@/types/pegawai";

export default function ActionButtons({ pegawai }: { pegawai: Pegawai }) {
  const handleEdit = () => {
    console.log("Edit", pegawai.nip);
  };

  const handleDelete = () => {
    console.log("Delete", pegawai.nip);
  };

  return (
    <>
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleDelete}>Hapus</button>
    </>
  );
}
