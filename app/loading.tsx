export default function Loading() {
  return (
    <div
      className="flex min-h-screen flex-col items-center justify-center gap-4"
      role="status"
      aria-live="polite"
    >
      <div className="h-14 w-14 animate-spin rounded-full border-4 border-sky-200 border-t-sky-500" />
      <p className="text-sm font-medium text-gray-600">Loading...</p>
    </div>
  );
}