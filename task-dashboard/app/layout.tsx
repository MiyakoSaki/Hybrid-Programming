import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Task Management Dashboard",
  description: "Next.js 15 Parallel and Intercepting Routes Demo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}