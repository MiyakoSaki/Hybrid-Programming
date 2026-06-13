export default function Home() {
  return (
    <section className="relative isolate overflow-hidden rounded-[2rem] border border-[var(--earth-200)] bg-[linear-gradient(135deg,#fbf7f2_0%,#f3eadf_48%,#ead6c0_100%)] px-6 py-20 shadow-[0_24px_80px_-32px_rgba(90,62,43,0.45)] sm:px-12 lg:px-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(139,94,60,0.26),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(37,99,235,0.14),transparent_30%)]" />
      <div className="absolute -right-20 top-10 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.85),rgba(255,255,255,0))] blur-2xl" />
      <div className="absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(90,62,43,0.18),rgba(90,62,43,0))] blur-3xl" />

      <div className="relative z-10 max-w-2xl space-y-6">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--earth-700)]/80">
          Fashion Store
        </p>
        <h1 className="text-5xl font-semibold tracking-tight text-slate-900 sm:text-6xl">
          E-commerce for clothes only.
        </h1>
        <p className="text-base leading-7 text-slate-700 sm:text-lg">
          Browse our clothing collection, explore your dashboard, look into our
          posts, and filter your todos.
        </p>
        <div className="pt-4">
          <a
            href="/products"
            className="inline-flex items-center rounded-full bg-[var(--earth-700)] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[rgba(90,62,43,0.22)] transition hover:-translate-y-0.5 hover:opacity-95"
            style={{ color: "#ffffff" }}
          >
            Browse Collection
          </a>
        </div>
      </div>
    </section>
  );
}
