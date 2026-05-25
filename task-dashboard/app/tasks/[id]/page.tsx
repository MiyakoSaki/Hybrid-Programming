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

  const taskDetails =
    id === "1"
      ? {
          title: "Finish report",
          subtitle: "Wrap up the weekly report and make sure the numbers are clean.",
          items: ["Collect the latest sales numbers", "Check charts and totals", "Proofread the summary", "Export the final PDF"],
        }
      : {
          title: "Fix bugs",
          subtitle: "Work through the main bugs before the next release goes out.",
          items: ["Reproduce the issue", "Inspect the console and logs", "Patch the broken code", "Test the fix on mobile and desktop"],
        }

  return (
    <main className="page-shell">
      <div className="page-frame">
        <section className="hero stack dashboard-intro">
          <div className="stack dashboard-intro-copy">
            <span className="pill">Task Detail</span>
            <h1 className="hero-title compact">{taskDetails.title}</h1>
            <p className="subtle">{taskDetails.subtitle}</p>

            <ul className="task-list">
              {taskDetails.items.map((item) => (
                <li key={item} className="task-link">
                  <span>{item}</span>
                  <span className="subtle">Done</span>
                </li>
              ))}
            </ul>
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