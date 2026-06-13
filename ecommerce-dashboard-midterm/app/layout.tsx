import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <nav>
          <Link href="/">Home</Link>

          <Link href="/products">Clothing</Link>

          <Link href="/dashboard">Dashboard</Link>

          <Link href="/posts">Posts</Link>

          <Link href="/todos">Todos</Link>
        </nav>

        {children}
      </body>
    </html>
  );
}
