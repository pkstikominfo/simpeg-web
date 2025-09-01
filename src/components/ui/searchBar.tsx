"use client";

type SearchInputProps = {
  value: string;
  onChange: (value: string) => void;
};

export function SearchBar({ value, onChange }: SearchInputProps) {
  return (
    <div className="flex items-center justify-start md:justify-between mb-4">
      <div></div>
      <div className="w-[18rem]">
        <input
          type="text"
          placeholder="Cari berdasarkan nama"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="border p-2 rounded w-full"
        />
      </div>
    </div>
  );
}
