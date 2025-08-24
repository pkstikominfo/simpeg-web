"use client";

import { useState } from "react";
import Sidebar from "./sidebar";
import Header from "./header";
import "@/app/globals.css";

export default function Layouts({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div style={{ display: "flex" }}>
      <Sidebar isOpen={isSidebarOpen} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          transition: "transition-all duration-300",
          marginLeft: isSidebarOpen ? "240px" : "0px",
        }}
      >
        <Header onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
        <main>{children}</main>
      </div>
    </div>
  );
}
