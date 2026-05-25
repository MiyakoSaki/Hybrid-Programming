import Link from "next/link"

const tasks = [
  { id: 1, title: "Finish report" },
  { id: 2, title: "Fix bugs" },
]

export default function TasksPage() {
  return (
    <main className="page-shell">
      <div className="page-frame stack-lg">
        <section className="card dashboard-intro">
          <div className="stack dashboard-intro-copy">
            <h2 className="section-title">Your tasks.</h2>
            <p className="subtle">Click a task to test soft navigation. A hard refresh still lands on the standalone route.</p>
          </div>

          <div className="page-actions page-actions-spread dashboard-intro-actions">
            <Link className="button-secondary" href="/">
              Home
            </Link>
            <Link className="button-secondary" href="/dashboard">
              Go to Dashboard
            </Link>
          </div>
        </section>

        <section className="card stack">
          <h2 className="section-title">Assigned work</h2>

          <ul className="task-list">
            {tasks.map((task) => (
              <li key={task.id}>
                <Link className="task-link" href={`/tasks/${task.id}`}>
                  <span>{task.title}</span>
                  <span className="subtle">Open</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  )
}