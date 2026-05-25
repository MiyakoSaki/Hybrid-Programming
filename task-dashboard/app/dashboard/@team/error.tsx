"use client"

export default function TeamError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="error-card stack" role="alert">
      <h2 className="section-title">Team Section Error</h2>

      <p className="subtle">{error.message}</p>

      <div className="actions">
        <button className="button-secondary" onClick={() => reset()}>
          Try Again
        </button>
      </div>
    </div>
  )
}