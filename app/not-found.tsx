import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <p className="text-gradient text-7xl font-extrabold sm:text-8xl">404</p>
      <h1 className="mt-4 text-2xl font-extrabold text-slate-800 sm:text-3xl">
        Page not found
      </h1>
      <p className="mt-2 max-w-md text-sm leading-relaxed text-gray-600 sm:text-base">
        The page you&apos;re looking for doesn&apos;t exist or was moved. Let&apos;s get you back
        home.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-blue-600 px-8 py-3 text-sm font-bold text-white shadow-lg shadow-sky-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2"
      >
        Back to Home
      </Link>
    </main>
  );
}