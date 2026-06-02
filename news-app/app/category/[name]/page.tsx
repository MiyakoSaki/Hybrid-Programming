import { newsItems } from "@/lib/data";

export async function generateStaticParams() {
  return [
    { name: "Tech" },
    { name: "Nature" },
    { name: "Politics" },
  ];
}

export default async function CategoryPage({
  params,
}: {
  params: { name: string };
}) {
  const { name } = params;
  const items = newsItems.filter((item) => item.category === name);

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-3xl font-bold">{name} News</h1>
        <a href="/" className="text-sm text-blue-600 hover:underline">← Back</a>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {items.map((item) => (
          <article
            key={item.id}
            className="bg-white dark:bg-gray-800 rounded-lg p-5 shadow-sm hover:shadow-md transition"
          >
            <h2 className="font-semibold text-lg">{item.title}</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{item.views} views</p>
            <p className="mt-3 text-gray-700 dark:text-gray-300">{item.content}</p>
          </article>
        ))}
      </div>
    </div>
  );
}