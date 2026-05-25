export default function Loading() {
  return (
    <div className="skeleton-card stack" aria-busy="true" aria-live="polite">
      <h2 className="section-title">Loading analytics...</h2>

      <div className="skeleton-lines">
        <div className="skeleton-line" />
        <div className="skeleton-line short" />
        <div className="skeleton-line medium" />
      </div>
    </div>
  )
}