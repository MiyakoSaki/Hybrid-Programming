async function getAnalytics() {
  await new Promise((resolve) =>
    setTimeout(resolve, 3000)
  )

  return {
    tasks: 120,
    completed: 80,
  }
}

export default async function AnalyticsPage() {
  const data = await getAnalytics()

  return (
    <div className="stack">
      <h2 className="section-title">Analytics</h2>

      <div className="metric-grid">
        <div className="metric">
          <span>Total Tasks</span>
          <strong>{data.tasks}</strong>
        </div>
        <div className="metric">
          <span>Completed</span>
          <strong>{data.completed}</strong>
        </div>
      </div>
    </div>
  )
}