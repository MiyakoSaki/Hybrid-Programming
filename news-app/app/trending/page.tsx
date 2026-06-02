async function getTrendingPosts() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts",
    {
      next: {
        revalidate: 30,
      },
    }
  );

  return res.json();
}

export default async function TrendingPage() {
  const posts = await getTrendingPosts();

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Trending Posts</h1>
        <p className="text-gray-500 mt-1">Fresh posts revalidated every 30 seconds</p>
      </div>

      <div className="space-y-4">
        {posts.slice(0, 5).map((post: any) => (
          <article
            key={post.id}
            className="bg-white dark:bg-gray-800 rounded-lg p-5 shadow-sm hover:shadow-md transition"
          >
            <h2 className="font-semibold">{post.title}</h2>
            <p className="text-sm text-gray-500 mt-2">{post.body?.slice(0, 120)}...</p>
          </article>
        ))}
      </div>
    </div>
  );
}