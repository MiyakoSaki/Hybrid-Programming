"use client"

import { use } from "react"
import { useRouter } from "next/navigation"

export default function ModalTaskPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = use(params)
  const router = useRouter()

  const taskDetails =
    id === "1"
      ? {
          title: "Finish report",
          subtitle: "Quick look at the report checklist before you jump back out.",
          items: ["Sales numbers checked", "Charts reviewed", "Proofreading left", "PDF export ready"],
        }
      : {
          title: "Fix bugs",
          subtitle: "Quick look at the bug list before closing the overlay.",
          items: ["Issue reproduced", "Patch in progress", "QA still needed", "Cross-device check"],
        }

  return (
    <div className="modal-backdrop">
      <div className="modal-card stack">
        <span className="pill" style={{ width: "fit-content" }}>
          Modal View
        </span>
        <h1 className="section-title">{taskDetails.title}</h1>
        <p className="subtle">{taskDetails.subtitle}</p>

        <ul className="task-list">
          {taskDetails.items.map((item) => (
            <li key={item} className="task-link">
              <span>{item}</span>
              <span className="subtle">Note</span>
            </li>
          ))}
        </ul>

        <div className="actions" style={{ justifyContent: "flex-end" }}>
          <button className="button-secondary" onClick={() => router.back()}>
            Close
          </button>
        </div>
      </div>
    </div>
  )
}