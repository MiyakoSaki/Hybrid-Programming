import Link from "next/link";

import { AddToCartButton } from "./[id]/add-to-cart-button";
import { getClothingProducts } from "./data";

export const dynamic = "force-static";

export default async function ProductsPage() {
  const clothingProducts = await getClothingProducts();

  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-10">
      <section className="space-y-3">
        <h1 className="text-4xl font-semibold uppercase tracking-[0.15em] text-slate-800">
          Products collection
        </h1>
      </section>

      <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {clothingProducts.map((product) => (
          <article
            key={product.id}
            className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="aspect-4/3 bg-slate-100">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex h-full flex-col gap-4 p-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  {product.category}
                </p>
                <h2 className="mt-2 text-lg font-semibold text-slate-900">
                  {product.title}
                </h2>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <AddToCartButton
                  label="Quick add"
                  product={{
                    id: product.id,
                    title: product.title,
                    price: product.price,
                    thumbnail: product.thumbnail,
                    category: product.category,
                  }}
                />
                <Link
                  href={`/products/${product.id}`}
                  className="rounded-full border border-slate-300 px-4 py-3 text-center text-sm font-medium text-slate-700 transition hover:border-slate-400"
                >
                  View details
                </Link>
              </div>
              <p className="line-clamp-3 text-sm leading-6 text-slate-600">
                {product.description}
              </p>
              <div className="mt-auto flex items-center justify-between gap-3">
                <p className="text-lg font-semibold text-slate-900">
                  ${product.price}
                </p>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
