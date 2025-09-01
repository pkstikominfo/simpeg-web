"use client";

import styles from "@/styles/table.module.css";
import { Column } from "@/types/table";

interface Props<T> {
  data?: T[];
  columns: Column<T>[];
}

export default function Table<T>({ columns, data }: Props<T>) {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th className={styles.headIndex}>NO</th>
          {columns.map((col) => (
            <th key={String(col.key)}>{col.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data?.map((row, index) => (
          <tr key={index}>
            <td className={styles.indexCell}>{index + 1}</td>
            {columns.map((col) => (
              <td key={String(col.key)}>{String(row[col.key as keyof T])}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
