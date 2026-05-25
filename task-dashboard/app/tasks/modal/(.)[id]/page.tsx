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

  return (
    <div className="modal-backdrop">
      <div className="modal-card stack">
        <span className="pill" style={{ width: "fit-content" }}>
          Modal View
        </span>
        <h1 className="section-title">Task {id}</h1>
        <p className="subtle">Opened as a modal overlay from the tasks route.</p>

        <div className="actions" style={{ justifyContent: "flex-end" }}>
          <button className="button-secondary" onClick={() => router.back()}>
            Close
          </button>
        </div>
      </div>
    </div>
  )
}