import { notFound } from "next/navigation"
import Link from "next/link"

export default async function TaskPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  const validIds = ["1", "2"]

  if (!validIds.includes(id)) {
    notFound()
  }

  return (
    <main className="page-shell">
      <div className="page-frame">
        <section className="hero stack dashboard-intro">
          <div className="stack dashboard-intro-copy">
            <span className="pill">Task Detail</span>
            <h1 className="hero-title compact">Task {id}</h1>
            <p className="subtle">This is the standalone page version used for hard navigations and refreshes.</p>
          </div>

          <div className="page-actions page-actions-left dashboard-intro-actions">
            <Link className="button-secondary" href="/tasks">
              Back to Tasks
            </Link>
          </div>
        </section>
      </div>
    </main>
  )
}