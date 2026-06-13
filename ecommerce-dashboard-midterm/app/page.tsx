export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-6xl items-center px-6 py-16">
      <section className="max-w-2xl space-y-6">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
          Fashion Store
        </p>
        <h1 className="text-5xl font-semibold tracking-tight text-slate-900">
          E-commerce for clothes only.
        </h1>
        <p className="text-base leading-7 text-slate-600">
          Browse our clothing collection, explore your dashboard, look into our posts, and filter your todos.
        </p>
        <div className="pt-4">
          <a
            href="/products"
            className="inline-block rounded-md bg-[var(--earth-700)] px-4 py-2 text-white shadow-sm hover:opacity-95"
            style={{ color: "#ffffff" }}
          >
            Browse Collection
          </a>
        </div>
      </section>
    </main>
  );
}
