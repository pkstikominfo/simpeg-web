import type { Metadata } from "next";
import "../globals.css";
import Layouts from "@/components/layout/layouts";

export const metadata: Metadata = {
  title: "My App",
  description: "Next.js App with Simple Sidebar",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Layouts>{children}</Layouts>;
}
