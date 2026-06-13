import Link from "next/link";

export const dynamic = "force-static";

const CLOTHING_CATEGORIES = ["mens-shirts", "mens-shoes"] as const;

type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  brand: string;
  category: string;
  thumbnail: string;
};

type ProductsResponse = {
  products: Product[];
};

async function getProducts() {
  const res = await fetch("https://dummyjson.com/products");

  if (!res.ok) {
    throw new Error("Failed to load products.");
  }

  return (await res.json()) as ProductsResponse;
}

export default async function ProductsPage() {
  const { products } = await getProducts();
  const clothingProducts = products.filter((product) =>
    CLOTHING_CATEGORIES.includes(
      product.category as (typeof CLOTHING_CATEGORIES)[number],
    ),
  );

  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-10">
      <section className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
          Static site generation
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-slate-900">
          Clothing collection
        </h1>
        <p className="max-w-2xl text-sm leading-6 text-slate-600">
          This fashion storefront is prebuilt at build time and links into
          statically generated clothing detail pages only.
        </p>
      </section>

      <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {clothingProducts.map((product) => (
          <article
            key={product.id}
            className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="aspect-[4/3] bg-slate-100">
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
              <p className="line-clamp-3 text-sm leading-6 text-slate-600">
                {product.description}
              </p>
              <div className="mt-auto flex items-center justify-between gap-3">
                <p className="text-lg font-semibold text-slate-900">
                  ${product.price}
                </p>
                <Link
                  href={`/products/${product.id}`}
                  className="rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700"
                >
                  View details
                </Link>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
