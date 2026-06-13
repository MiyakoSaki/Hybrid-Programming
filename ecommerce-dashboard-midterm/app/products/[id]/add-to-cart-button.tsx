"use client";

import { useEffect, useState } from "react";

import { useCart } from "../../cart/cart-context";
import type { ClothingProduct } from "../data";

export function AddToCartButton({
  product,
  label = "Add to cart",
}: {
  product: Pick<
    ClothingProduct,
    "id" | "title" | "price" | "thumbnail" | "category"
  >;
  label?: string;
}) {
  const { addItem } = useCart();
  const [recentlyAdded, setRecentlyAdded] = useState(false);

  function handleAdd() {
    addItem(product);
    setRecentlyAdded(true);
  }

  useEffect(() => {
    if (!recentlyAdded) {
      return;
    }

    const timer = window.setTimeout(() => setRecentlyAdded(false), 1200);

    return () => window.clearTimeout(timer);
  }, [recentlyAdded]);

  return (
    <button
      type="button"
      onClick={handleAdd}
      className="rounded-full bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-700"
    >
      {recentlyAdded ? `Added ${product.title}` : label}
    </button>
  );
}
