export default function DashboardLayout({
  children,
  team,
  analytics,
}: {
  children: React.ReactNode
  team: React.ReactNode
  analytics: React.ReactNode
}) {
  return (
    <main className="page-shell">
      <div className="page-frame stack-lg">
        {children}

        <div className="dashboard-grid">
          <section className="panel stack">{team}</section>
          <section className="panel stack">{analytics}</section>
        </div>
      </div>
    </main>
  )
}