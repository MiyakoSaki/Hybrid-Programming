export const dynamic = "force-dynamic";

type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
};

type Cart = {
  id: number;
  total: number;
  discountedTotal: number;
  totalProducts: number;
  totalQuantity: number;
};

type UsersResponse = {
  users: User[];
};

type CartsResponse = {
  carts: Cart[];
};

async function getDashboardData() {
  const usersPromise = fetch("https://dummyjson.com/users", {
    cache: "no-store",
  });

  const cartsPromise = fetch("https://dummyjson.com/carts", {
    cache: "no-store",
  });

  const [usersResponse, cartsResponse] = await Promise.all([
    usersPromise,
    cartsPromise,
  ]);

  if (!usersResponse.ok || !cartsResponse.ok) {
    throw new Error("Failed to load dashboard data.");
  }

  const [users, carts] = (await Promise.all([
    usersResponse.json() as Promise<UsersResponse>,
    cartsResponse.json() as Promise<CartsResponse>,
  ])) as [UsersResponse, CartsResponse];

  return {
    users: users.users,
    carts: carts.carts,
  };
}

export default async function DashboardPage() {
  const { users, carts } = await getDashboardData();
  const highlightedUser = users[0];
  const highlightedCart = carts[0];

  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-10">
      <section className="flex flex-col gap-3">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
          Server-side rendered
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-slate-900">
          Dashboard
        </h1>
        <p className="max-w-2xl text-sm leading-6 text-slate-600">
          This page fetches users and carts at request time with concurrent
          requests, so the content is always fresh when the route is visited.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-medium text-slate-500">Current user</p>
          <h2 className="mt-2 text-2xl font-semibold text-slate-900">
            {highlightedUser
              ? `${highlightedUser.firstName} ${highlightedUser.lastName}`
              : "No user found"}
          </h2>
          <dl className="mt-6 grid gap-4 text-sm text-slate-600">
            <div>
              <dt className="font-medium text-slate-500">Email</dt>
              <dd>{highlightedUser?.email ?? "N/A"}</dd>
            </div>
            <div>
              <dt className="font-medium text-slate-500">Role</dt>
              <dd>{highlightedUser?.role ?? "N/A"}</dd>
            </div>
            <div>
              <dt className="font-medium text-slate-500">Users loaded</dt>
              <dd>{users.length}</dd>
            </div>
          </dl>
        </article>

        <article className="rounded-3xl border border-slate-200 bg-slate-950 p-6 text-white shadow-sm">
          <p className="text-sm font-medium text-slate-300">Shopping cart</p>
          <h2 className="mt-2 text-2xl font-semibold">
            {highlightedCart ? `Cart #${highlightedCart.id}` : "No cart found"}
          </h2>
          <dl className="mt-6 grid gap-4 text-sm text-slate-300">
            <div>
              <dt className="font-medium text-slate-400">Products</dt>
              <dd>{highlightedCart?.totalProducts ?? 0}</dd>
            </div>
            <div>
              <dt className="font-medium text-slate-400">Quantity</dt>
              <dd>{highlightedCart?.totalQuantity ?? 0}</dd>
            </div>
            <div>
              <dt className="font-medium text-slate-400">Total</dt>
              <dd>${highlightedCart?.total?.toFixed(2) ?? "0.00"}</dd>
            </div>
          </dl>
        </article>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">Live snapshot</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {users.slice(0, 3).map((user) => (
            <div key={user.id} className="rounded-2xl bg-slate-50 p-4">
              <p className="font-medium text-slate-900">
                {user.firstName} {user.lastName}
              </p>
              <p className="mt-1 text-sm text-slate-600">{user.email}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
