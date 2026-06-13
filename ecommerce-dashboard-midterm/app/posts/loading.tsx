export default function Loading() {
  return (
    <main className="min-h-screen bg-[#f7f2ea] px-4 py-8 sm:px-6">
      <section className="mx-auto flex w-full max-w-3xl flex-col gap-6">
        <div className="rounded-4xl bg-white/80 px-6 py-5 shadow-[0_18px_60px_rgba(91,64,52,0.08)] ring-1 ring-black/5 backdrop-blur">
          <div className="h-4 w-40 animate-pulse rounded-full bg-slate-200" />
          <div className="mt-3 h-8 w-64 animate-pulse rounded-2xl bg-slate-200" />
        </div>

        <div className="overflow-hidden rounded-4xl bg-white shadow-[0_18px_60px_rgba(91,64,52,0.1)] ring-1 ring-black/5">
          <div className="flex items-center gap-3 px-5 py-4 sm:px-6">
            <div className="h-11 w-11 animate-pulse rounded-full bg-slate-200" />
            <div className="flex-1 space-y-2">
              <div className="h-4 w-40 animate-pulse rounded-full bg-slate-200" />
              <div className="h-3 w-24 animate-pulse rounded-full bg-slate-200" />
            </div>
          </div>
          <div className="h-64 animate-pulse bg-slate-200" />
          <div className="space-y-3 px-5 py-4 sm:px-6">
            <div className="h-5 w-56 animate-pulse rounded-full bg-slate-200" />
            <div className="h-4 w-full animate-pulse rounded-full bg-slate-200" />
            <div className="h-10 w-full animate-pulse rounded-full bg-slate-200" />
          </div>
        </div>

        <div className="rounded-[1.75rem] bg-white px-5 py-4 shadow-[0_14px_40px_rgba(91,64,52,0.08)] ring-1 ring-black/5 sm:px-6">
          <div className="h-4 w-56 animate-pulse rounded-full bg-slate-200" />
          <div className="mt-4 h-40 animate-pulse rounded-[1.35rem] bg-slate-200" />
        </div>
      </section>
    </main>
  );
}
