import { useState, useEffect } from "react";
import { clientFetchWithAuth } from "@/lib/clientApi";

export function useApiData<T>(endpoint: string) {
  const [data, setData] = useState<T[] | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let mounted = true;

    setLoading(true);
    clientFetchWithAuth<{ data: T[] }>(endpoint)
      .then((res) => {
        if (mounted) setData(res.data);
      })
      .catch((err) => {
        if (mounted)
          setError(err instanceof Error ? err : new Error("Unknown error"));
      })
      .finally(() => {
        if (mounted) setLoading(false);
      });

    return () => {
      mounted = false;
    };
  }, [endpoint]);

  return { data, loading, error };
}
