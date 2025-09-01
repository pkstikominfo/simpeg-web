export function SpinnerData() {
  return (
    <div className="flex flex-col justify-center items-center min-h-[200px]">
      <div className="w-10 h-10 border-4 border-slate-700 border-t-transparent rounded-full animate-spin"></div>
      <p className="mt-3 text-gray-500 font-small">Loading Data..</p>
    </div>
  );
}

export function Spinner() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-5 h-5 border-4 border-slate-700 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}
