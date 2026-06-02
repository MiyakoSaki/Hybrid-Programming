import { newsItems } from "@/lib/data";
import LikeButton from "./components/LikeButton";

export default function Home() {
  return (
    <>
      <section className="mb-8">
        <div className="rounded-2xl p-8 bg-gradient-to-r from-indigo-500 to-pink-500 text-white shadow-lg">
          <h1 className="text-4xl font-extrabold">News Portal</h1>
          <p className="mt-2 opacity-90">Curated headlines across categories.</p>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        {newsItems.map((item) => (
          <article
            key={item.id}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-1"
          >
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-xl font-semibold">{item.title}</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{item.category}</p>
              </div>
              <div className="text-sm text-gray-400">{item.views} views</div>
            </div>

            <p className="mt-4 text-gray-700 dark:text-gray-300">{item.content}</p>

            <div className="mt-4 flex justify-end">
              <LikeButton />
            </div>
          </article>
        ))}
      </section>
    </>
  );
}