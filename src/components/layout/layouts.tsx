"use client";

import { useState } from "react";
import Sidebar from "./sidebar";
import Header from "./header";
import "@/app/globals.css";

export default function Layouts({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className={`relative`}>
      <Sidebar isOpen={isSidebarOpen} />
      {isSidebarOpen && (
        <div
          className={`fixed inset-0 bg-black z-10 sm:hidden transition-opacity duration-300 ${
            isSidebarOpen ? "opacity-30" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
      <div
        className={`lg:${isSidebarOpen ? "ml-[240px]" : "ml-0"} md:${
          isSidebarOpen ? "ml-[240px]" : "ml-0"
        } sm:${isSidebarOpen ? "ml-[240px]" : "ml-0"}`}
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          transition: "transition-all duration-300",
        }}
      >
        <Header onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
        <main>{children}</main>
      </div>
    </div>
  );
}
