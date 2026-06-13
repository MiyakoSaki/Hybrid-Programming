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

  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-10">
      <section className="space-y-3">
        <h1 className="text-4xl font-semibold uppercase tracking-[0.15em] text-slate-800">
          Posts Feed
        </h1>
      </section>

      <section className="grid gap-6">
        {posts.map((post) => (
          <article
            key={post.id}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              {post.tags.slice(0, 2).join(" · ")}
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900">
              {post.title}
            </h2>
            <p className="mt-4 text-sm leading-6 text-slate-600">{post.body}</p>
            <div className="mt-6 flex gap-4 text-sm text-slate-500">
              <span>{post.reactions.likes} likes</span>
              <span>{post.reactions.dislikes} dislikes</span>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
