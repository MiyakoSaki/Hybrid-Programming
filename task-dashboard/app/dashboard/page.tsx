import Link from "next/link"

export default function DashboardPage() {
  return (
    <section className="card dashboard-intro">
      <div className="stack dashboard-intro-copy">
        <h2 className="section-title">Welcome to the dashboard.</h2>
        <p className="subtle">Choose a slot below to see the team or analytics section update independently.</p>
      </div>

      <div className="page-actions page-actions-spread dashboard-intro-actions">
        <Link className="button-secondary" href="/">
          Home
        </Link>
        <Link className="button-secondary" href="/tasks">
          Go to Tasks
        </Link>
      </div>
    </section>
  )
}