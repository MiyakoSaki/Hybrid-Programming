import Link from "next/link";

export default function About() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center relative overflow-hidden">

      {/* Stars */}
      <div className="absolute inset-0">
        <div className="stars"></div>
      </div>

      {/* Content */}
      <div className="z-10 text-center">
        <h1 className="text-5xl font-bold mb-4">
          About Page
        </h1>

        <p className="mb-6 text-lg">
          This page is all about our Next.js project.
        </p>

        <Link
          href="/"
          className="px-5 py-3 bg-white text-black rounded-lg hover:bg-gray-300 transition"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}