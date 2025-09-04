import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SIMPEG BOLTARA",
  description: "Next.js App with Simple Sidebar",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
