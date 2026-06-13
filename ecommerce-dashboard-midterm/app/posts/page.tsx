export const revalidate = 60;

type Post = {
  id: number;
  title: string;
  body: string;
  tags: string[];
  reactions: {
    likes: number;
    dislikes: number;
  };
};

type PostsResponse = {
  posts: Post[];
};

type FeedItem = {
  label: string;
  accent: string;
  image: string;
};

const feedItems: FeedItem[] = [
  {
    label: "Strategy and Operations Lead",
    accent: "#d97706",
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80",
  },
  {
    label: "Senior Product Designer",
    accent: "#2563eb",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
  },
];

async function getPosts() {
  const res = await fetch("https://dummyjson.com/posts", {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Failed to load posts.");
  }

  return (await res.json()) as PostsResponse;
}

export default async function PostsPage() {
  const { posts } = await getPosts();
  const featuredPost = posts[0];
  const highlightedPost = posts[1] ?? posts[0];

  return (
    <main className="min-h-screen bg-[#f7f2ea] px-4 py-8 text-slate-900 sm:px-6">
      <section className="mx-auto flex w-full max-w-3xl flex-col gap-6">
        <div className="rounded-[2rem] bg-white/80 px-6 py-5 shadow-[0_18px_60px_rgba(91,64,52,0.08)] ring-1 ring-black/5 backdrop-blur">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">
                Posts
              </p>
              <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">
                Social feed
              </h1>
            </div>
            <span className="rounded-full border border-slate-200 px-3 py-1 text-xs font-medium text-slate-500">
              ISR refreshes every 60s
            </span>
          </div>
        </div>

        <article className="overflow-hidden rounded-[2rem] bg-white shadow-[0_18px_60px_rgba(91,64,52,0.1)] ring-1 ring-black/5">
          <div className="flex items-center justify-between px-5 py-4 sm:px-6">
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-full bg-[#efe7db] text-sm font-semibold text-[#5a3e2b]">
                SF
              </div>
              <div>
                <p className="font-semibold text-slate-900">
                  Strategy Fernando
                </p>
                <p className="text-xs text-slate-500">1 week ago</p>
              </div>
            </div>
            <button
              aria-label="More options"
              className="text-xl leading-none text-slate-400"
            >
              ···
            </button>
          </div>

          <div className="border-y border-slate-100 bg-[#f8f5ef] p-3 sm:p-4">
            <img
              src={featuredPost?.id ? feedItems[0].image : feedItems[1].image}
              alt={featuredPost?.title ?? feedItems[0].label}
              className="aspect-[16/9] w-full rounded-[1.35rem] object-cover"
            />
          </div>

          <div className="px-5 py-4 sm:px-6">
            <div className="flex items-center gap-4 text-slate-500">
              <button className="flex items-center gap-2 text-sm transition hover:text-rose-500">
                <span className="text-lg">♥</span>
                <span>{featuredPost?.reactions.likes ?? 0}</span>
              </button>
              <button className="flex items-center gap-2 text-sm transition hover:text-slate-700">
                <span className="text-lg">◌</span>
                <span>Comment</span>
              </button>
              <button className="flex items-center gap-2 text-sm transition hover:text-slate-700">
                <span className="text-lg">↗</span>
                <span>Share</span>
              </button>
            </div>

            <div className="mt-4 flex items-center justify-between gap-3">
              <div className="flex-1 rounded-full bg-slate-50 px-4 py-3 text-sm text-slate-400">
                Write your comment
              </div>
              <button className="rounded-full bg-[#2563eb] px-4 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-[#1d4ed8]">
                Hire me
              </button>
            </div>
          </div>
        </article>

        <article className="rounded-[1.75rem] bg-white px-5 py-4 shadow-[0_14px_40px_rgba(91,64,52,0.08)] ring-1 ring-black/5 sm:px-6">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-full bg-[#f0f2f5] text-sm font-semibold text-slate-600">
              G
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate font-semibold text-slate-900">
                {feedItems[1].label}
              </p>
              <p className="text-xs text-slate-500">
                JK Industries · Full-time · Remote
              </p>
            </div>
            <button
              aria-label="Save post"
              className="text-slate-400 transition hover:text-slate-700"
            >
              ⭘
            </button>
          </div>

          <div className="mt-4 grid gap-4 sm:grid-cols-[1fr_1.2fr]">
            <div
              className="rounded-[1.35rem] p-4 text-white"
              style={{ backgroundColor: feedItems[1].accent }}
            >
              <p className="text-sm font-medium opacity-90">Opportunity</p>
              <p className="mt-10 text-2xl font-semibold tracking-tight">
                Lead strategy and operations for a fast-moving team.
              </p>
            </div>

            <div className="rounded-[1.35rem] bg-[#fafafa] p-4">
              <img
                src={feedItems[1].image}
                alt={feedItems[1].label}
                className="h-40 w-full rounded-[1rem] object-cover"
              />
              <p className="mt-4 text-sm leading-6 text-slate-600">
                {highlightedPost?.body ??
                  "Explore featured opportunities and recent feed activity."}
              </p>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}
