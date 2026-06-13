export default function Loading() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-10">
      <div className="space-y-3">
        <div className="h-4 w-44 animate-pulse rounded-full bg-slate-200" />
        <div className="h-10 w-64 animate-pulse rounded-2xl bg-slate-200" />
        <div className="h-4 w-full max-w-xl animate-pulse rounded-full bg-slate-200" />
      </div>

      <section className="grid gap-6 lg:grid-cols-2">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="h-48 animate-pulse rounded-3xl bg-slate-200"
          />
        ))}
      </section>
    </main>
  );
}
