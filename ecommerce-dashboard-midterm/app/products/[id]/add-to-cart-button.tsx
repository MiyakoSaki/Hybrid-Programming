"use client";

import { useState } from "react";

export function AddToCartButton({ productTitle }: { productTitle: string }) {
  const [added, setAdded] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setAdded(true)}
      className="rounded-full bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-700 disabled:cursor-default disabled:bg-emerald-600"
      disabled={added}
    >
      {added ? `Added ${productTitle}` : "Add to wardrobe"}
    </button>
  );
}
