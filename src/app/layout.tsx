import type { Metadata } from "next";
import "./globals.css";
import Layout from "@/components/layout/layout";

export const metadata: Metadata = {
  title: "My App",
  description: "Next.js App with Simple Sidebar",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
