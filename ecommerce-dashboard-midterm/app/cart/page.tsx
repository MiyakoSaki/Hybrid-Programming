"use client";

import Link from "next/link";

import { useCart } from "./cart-context";

export default function CartPage() {
  const { items, itemCount, totalPrice, addItem, removeItem, clearCart } =
    useCart();

  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-10">
      <section className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
          Shared cart
        </p>
        <h1 className="text-4xl font-semibold uppercase tracking-[0.15em] text-slate-800">
          Cart
        </h1>
        <p className="max-w-2xl text-sm leading-6 text-slate-600">
          Items added from the clothing catalog appear here immediately and are
          saved in the browser.
        </p>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-slate-500">Total items</p>
            <p className="text-2xl font-semibold text-slate-900">{itemCount}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-slate-500">Total price</p>
            <p className="text-2xl font-semibold text-slate-900">
              ${totalPrice.toFixed(2)}
            </p>
          </div>
          <button
            type="button"
            onClick={clearCart}
            className="rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700"
          >
            Clear cart
          </button>
        </div>

        <div className="mt-6 space-y-4">
          {items.length === 0 ? (
            <div className="rounded-3xl bg-slate-50 p-6 text-sm text-slate-500">
              Your cart is empty. Browse the{" "}
              <Link
                href="/products"
                className="font-medium text-slate-700 underline"
              >
                clothing collection
              </Link>{" "}
              to add pieces.
            </div>
          ) : (
            items.map((item) => (
              <article
                key={item.id}
                className="flex flex-col gap-4 rounded-3xl border border-slate-200 p-4 sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="h-20 w-20 rounded-2xl object-cover"
                  />
                  <div>
                    <Link
                      href={`/products/${item.id}`}
                      className="font-semibold text-slate-900 hover:underline"
                    >
                      {item.title}
                    </Link>
                    <p className="text-sm text-slate-500">{item.category}</p>
                    <p className="text-sm text-slate-500">
                      Qty {item.quantity}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Link
                    href={`/products/${item.id}`}
                    className="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-400"
                  >
                    View details
                  </Link>
                  <button
                    type="button"
                    onClick={() =>
                      addItem({
                        id: item.id,
                        title: item.title,
                        price: item.price,
                        thumbnail: item.thumbnail,
                        category: item.category,
                      })
                    }
                    className="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-400"
                  >
                    Add one more
                  </button>
                  <p className="text-lg font-semibold text-slate-900">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                  <button
                    type="button"
                    onClick={() => removeItem(item.id)}
                    className="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-400"
                  >
                    Remove
                  </button>
                </div>
              </article>
            ))
          )}
        </div>
      </section>
    </main>
  );
}
