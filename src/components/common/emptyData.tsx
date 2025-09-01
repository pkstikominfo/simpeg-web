import Image from "next/image";

export default function EmptyCard() {
  return (
    <div className="flex gap-2 border rounded-lg shadow-sm min-h-[12.5rem]">
      <div className="flex-1 p-2 flex flex-col items-end justify-center">
        <Image
          src="/images/emptyimg.png"
          alt="Logo"
          width={180}
          height={180}
          className="object-cover rounded-lg"
        />
      </div>

      <div className="flex-1 p-2 flex flex-col items-start justify-center">
        <div className="max-w-[20rem]">
          <h2 className="text-lg font-bold">TIDAK ADA DATA</h2>
          <p className="text-gray-600">
            Data yang Anda cari tidak tersedia saat ini. Silahkan masukan kata
            kunci lain.
          </p>
        </div>
      </div>
    </div>
  );
}
