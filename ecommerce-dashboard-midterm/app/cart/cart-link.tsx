"use client";

import Link from "next/link";

import { useCart } from "./cart-context";

export function CartLink() {
  const { itemCount } = useCart();

  return (
    <Link
      href="/cart"
      className="rounded-full border border-[var(--earth-700)] px-4 py-2 text-sm font-semibold text-[var(--earth-700)] transition hover:bg-[var(--earth-700)] hover:text-white"
    >
      Cart {itemCount > 0 ? `(${itemCount})` : ""}
    </Link>
  );
}
