"use client";

import { useState } from "react";
import styles from "@/styles/searchbar.module.css";

interface SearchBarProps {
  onSearch: (keyword: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [keyword, setKeyword] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setKeyword(value);
    onSearch(value); // langsung trigger ke parent
  };

  return (
    <div className={styles.elementWrapper}>
      <div className={styles.searchForm}>
        <input
          type="text"
          placeholder="Cari..."
          value={keyword}
          onChange={handleChange}
          className={styles.searchInput}
        />
      </div>
    </div>
  );
}
