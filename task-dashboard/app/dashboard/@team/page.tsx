"use client"

let shouldFail = true

export default function TeamPage() {
  if (shouldFail) {
    shouldFail = false
    throw new Error("Team data failed to load")
  }

  const teamMembers = ["Avery", "Morgan", "Jordan"]

  return (
    <div className="stack">
      <h2 className="section-title">Team Members</h2>

      <ul className="task-list">
        {teamMembers.map((member) => (
          <li key={member} className="task-link">
            <span>{member}</span>
            <span className="subtle">Active</span>
          </li>
        ))}
      </ul>
    </div>
  )
}