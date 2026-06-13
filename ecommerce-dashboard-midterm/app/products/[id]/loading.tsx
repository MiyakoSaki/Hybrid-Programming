export default function Loading() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-10">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="h-[32rem] animate-pulse rounded-3xl bg-slate-200" />
        <div className="space-y-4">
          <div className="h-4 w-36 animate-pulse rounded-full bg-slate-200" />
          <div className="h-10 w-3/4 animate-pulse rounded-2xl bg-slate-200" />
          <div className="h-24 animate-pulse rounded-3xl bg-slate-200" />
          <div className="h-12 w-40 animate-pulse rounded-full bg-slate-200" />
        </div>
      </div>
    </main>
  );
}