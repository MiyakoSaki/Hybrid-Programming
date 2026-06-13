"use client";

import { useEffect, useMemo, useState } from "react";

type Todo = {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
};

type TodosResponse = {
  todos: Todo[];
};

export default function TodosPage() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [query, setQuery] = useState("");
  const [showCompletedOnly, setShowCompletedOnly] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let active = true;

    async function loadTodos() {
      setIsLoading(true);
      const res = await fetch("https://dummyjson.com/todos?limit=20");
      const data = (await res.json()) as TodosResponse;

      if (active) {
        setTodos(data.todos);
        setIsLoading(false);
      }
    }

    loadTodos();

    return () => {
      active = false;
    };
  }, []);

  const filteredTodos = useMemo(() => {
    return todos.filter((todo) => {
      const matchesQuery = todo.todo
        .toLowerCase()
        .includes(query.toLowerCase());
      const matchesStatus = showCompletedOnly ? todo.completed : true;

      return matchesQuery && matchesStatus;
    });
  }, [todos, query, showCompletedOnly]);

  return (
    <main className="mx-auto flex w-full max-w-4xl flex-col gap-8 px-6 py-10">
      <section className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
          Client-side rendering
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-slate-900">
          Todos
        </h1>
        <p className="max-w-2xl text-sm leading-6 text-slate-600">
          This list loads in the browser and filters locally to keep the
          interaction instant.
        </p>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <label className="flex-1">
            <span className="sr-only">Search todos</span>
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search todos"
              className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-slate-400"
            />
          </label>

          <label className="flex items-center gap-3 text-sm text-slate-600">
            <input
              type="checkbox"
              checked={showCompletedOnly}
              onChange={(event) => setShowCompletedOnly(event.target.checked)}
              className="h-4 w-4 rounded border-slate-300"
            />
            Show completed only
          </label>
        </div>

        <div className="mt-6 space-y-3">
          {isLoading ? (
            <div className="rounded-3xl bg-slate-100 p-6 text-sm text-slate-500">
              Loading todos...
            </div>
          ) : filteredTodos.length === 0 ? (
            <div className="rounded-3xl bg-slate-100 p-6 text-sm text-slate-500">
              No todos match your filters.
            </div>
          ) : (
            filteredTodos.map((todo) => (
              <article
                key={todo.id}
                className="flex items-center justify-between gap-4 rounded-3xl border border-slate-200 px-5 py-4"
              >
                <div>
                  <p className="font-medium text-slate-900">{todo.todo}</p>
                  <p className="text-sm text-slate-500">User {todo.userId}</p>
                </div>
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] ${
                    todo.completed
                      ? "bg-emerald-100 text-emerald-700"
                      : "bg-amber-100 text-amber-700"
                  }`}
                >
                  {todo.completed ? "Done" : "Open"}
                </span>
              </article>
            ))
          )}
        </div>
      </section>
    </main>
  );
}
