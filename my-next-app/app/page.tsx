import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center relative overflow-hidden">
      
      {/* Stars */}
      <div className="absolute inset-0">
        <div className="stars"></div>
      </div>

      {/* Content */}
      <div className="z-10 text-center">
        <h1 className="text-5xl font-bold mb-4">
          Welcome to My Next.js App
        </h1>

        <p className="mb-6 text-lg">
          This is the homepage customized by Alliza.
        </p>

        <Link
          href="/about"
          className="px-5 py-3 bg-white text-black rounded-lg hover:bg-gray-300 transition"
        >
          Go to About Page
        </Link>
      </div>
    </main>
  );
}