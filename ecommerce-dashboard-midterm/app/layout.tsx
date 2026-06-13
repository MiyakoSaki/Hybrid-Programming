import Link from "next/link";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
        <div className="topbar" />
        <header className="relative z-20">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <Link href="/" className="logo text-2xl">ShopDash</Link>

            <nav className="hidden sm:flex items-center gap-6">
              <Link href="/products" className="text-sm font-medium hover:opacity-90">Products</Link>
              <Link href="/dashboard" className="text-sm font-medium hover:opacity-90">Dashboard</Link>
              <Link href="/posts" className="text-sm font-medium hover:opacity-90">Posts</Link>
              <Link href="/todos" className="text-sm font-medium hover:opacity-90">Todos</Link>
            </nav>

            <div className="flex items-center gap-3">
              <Link
                href="/cart"
                aria-label="Cart"
                className="rounded-md bg-[var(--earth-700)] px-3 py-2 text-white text-sm shadow-sm hover:opacity-80 transition-opacity focus:outline-none visited:text-white z-30"
              >
                Cart
              </Link>
            </div>
          </div>
        </header>

        <main className="mx-auto max-w-6xl px-6 py-8">{children}</main>
      </body>
    </html>
  );
}
