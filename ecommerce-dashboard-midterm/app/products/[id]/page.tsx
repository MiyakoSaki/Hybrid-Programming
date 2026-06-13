import Link from "next/link";
import { notFound } from "next/navigation";

import { AddToCartButton } from "./add-to-cart-button";

export const dynamic = "force-static";
export const dynamicParams = false;

const CLOTHING_CATEGORIES = ["mens-shirts", "mens-shoes"] as const;

type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

type ProductsResponse = {
  products: Pick<Product, "id">[];
};

type ClothingProductResponse = Product;

export async function generateStaticParams() {
  const res = await fetch("https://dummyjson.com/products");

  if (!res.ok) {
    throw new Error("Failed to load product ids.");
  }

  const data = (await res.json()) as ProductsResponse;

  return data.products.map((product) => ({
    id: String(product.id),
  }));
}

async function getProduct(id: string) {
  const res = await fetch(`https://dummyjson.com/products/${id}`);

  if (res.status === 404) {
    notFound();
  }

  if (!res.ok) {
    throw new Error("Failed to load product details.");
  }

  const product = (await res.json()) as ClothingProductResponse;

  if (
    !CLOTHING_CATEGORIES.includes(
      product.category as (typeof CLOTHING_CATEGORIES)[number],
    )
  ) {
    notFound();
  }

  return product;
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = await getProduct(id);

  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-10">
      <nav className="text-sm text-slate-500">
        <Link
          href="/products"
          className="font-medium text-slate-700 hover:underline"
        >
          Clothing collection
        </Link>
        <span className="px-2">/</span>
        <span>{product.title}</span>
      </nav>

      <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <img
            src={product.images[0] ?? product.thumbnail}
            alt={product.title}
            className="h-full w-full object-cover"
          />
        </div>

        <article className="flex flex-col gap-5 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
            {product.category}
          </p>
          <div>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900">
              {product.title}
            </h1>
            <p className="mt-2 text-sm text-slate-500">by {product.brand}</p>
          </div>

          <p className="text-base leading-7 text-slate-600">
            {product.description}
          </p>

          <dl className="grid grid-cols-2 gap-4 rounded-3xl bg-slate-50 p-5 text-sm text-slate-600">
            <div>
              <dt className="font-medium text-slate-500">Price</dt>
              <dd className="mt-1 text-lg font-semibold text-slate-900">
                ${product.price}
              </dd>
            </div>
            <div>
              <dt className="font-medium text-slate-500">Stock</dt>
              <dd className="mt-1 text-lg font-semibold text-slate-900">
                {product.stock}
              </dd>
            </div>
            <div>
              <dt className="font-medium text-slate-500">Rating</dt>
              <dd className="mt-1 text-lg font-semibold text-slate-900">
                {product.rating}
              </dd>
            </div>
            <div>
              <dt className="font-medium text-slate-500">Discount</dt>
              <dd className="mt-1 text-lg font-semibold text-slate-900">
                {product.discountPercentage}%
              </dd>
            </div>
          </dl>

          <AddToCartButton productTitle={product.title} />
        </article>
      </section>
    </main>
  );
}
