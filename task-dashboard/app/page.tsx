import Link from "next/link";

export default function HomePage() {
  return (
    <main className="page-shell page-shell-home">
      <div className="page-frame hero stack-lg" style={{ textAlign: "center" }}>
        <div className="stack" style={{ justifyItems: "center" }}>
          <h1 className="hero-title">Task Management Dashboard</h1>
          <p className="subtle" style={{ maxWidth: 720 }}>
            Explore the dashboard, stream analytics, and open tasks.
          </p>
        </div>

        <div className="actions" style={{ justifyContent: "center" }}>
          <Link className="button" href="/dashboard">
            Go to Dashboard
          </Link>

          <Link className="button-secondary" href="/tasks">
            Go to Tasks
          </Link>
        </div>
      </div>
    </main>
  );
}