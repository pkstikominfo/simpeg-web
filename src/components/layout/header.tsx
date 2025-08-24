"use client";

import { useState } from "react";
import { FiUser, FiMenu } from "react-icons/fi";
import Link from "next/link";
import "@/styles/header.css";

export default function Header({
  onToggleSidebar,
}: {
  onToggleSidebar: () => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-content">
        <div className="header-left">
          <button onClick={onToggleSidebar} className="toggle-sidebar-btn">
            <FiMenu size={20} />
          </button>
        </div>
        <div className="header-right">
          <div className="dropdown">
            <button className="dropdown-btn" onClick={() => setOpen(!open)}>
              <FiUser size={22} />
            </button>
            {open && (
              <div className="dropdown-menu">
                <Link href="/logout" className="dropdown-item">
                  Logout
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
