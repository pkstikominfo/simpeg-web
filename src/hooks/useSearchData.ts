"use client";

import { useState, useEffect, useCallback } from "react";
import { clientFetchWithAuth } from "@/lib/clientApi";

export function useSearchData<T>(endpoint: string, debounce: number = 500) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<T[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [field, setField] = useState<string | null>("");

  const fetchData = useCallback(
    async (search: string) => {
      setLoading(true);
      setError(null);
      try {
        const res = await clientFetchWithAuth<{ data: T[] }>(
          `${endpoint}?keyword=${encodeURIComponent(search)}&field=${field}`
        );
        setResults(res.data);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Terjadi kesalahan");
        }
        setResults([]);
      }
      setLoading(false);
    },
    [endpoint, field]
  );

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (query.trim().length > 0) {
        fetchData(query);
      } else {
        setResults([]);
      }
    }, debounce);

    return () => clearTimeout(delayDebounce);
  }, [query, debounce, fetchData]);

  return { query, setQuery, results, loading, error };
}
