import Link from "next/link";
import "./globals.css";

import { CartProvider } from "./cart/cart-context";
import { CartLink } from "./cart/cart-link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
        <CartProvider>
          <div className="topbar" />
          <header className="relative z-20">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
              <Link href="/" className="logo text-2xl">
                ShopDash
              </Link>

              <nav className="hidden sm:flex items-center gap-6">
                <Link
                  href="/products"
                  className="text-sm font-medium hover:opacity-90"
                >
                  Products
                </Link>
                <Link
                  href="/dashboard"
                  className="text-sm font-medium hover:opacity-90"
                >
                  Dashboard
                </Link>
                <Link
                  href="/posts"
                  className="text-sm font-medium hover:opacity-90"
                >
                  Posts
                </Link>
                <Link
                  href="/todos"
                  className="text-sm font-medium hover:opacity-90"
                >
                  Todos
                </Link>
              </nav>

              <div className="flex items-center gap-3">
                <CartLink />
              </div>
            </div>
          </header>

          <main className="mx-auto max-w-6xl px-6 py-8">{children}</main>
        </CartProvider>
      </body>
    </html>
  );
}
