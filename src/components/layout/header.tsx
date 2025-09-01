"use client";

import { useState } from "react";
import { useLogout } from "@/hooks/useLogout";
import { FiUser, FiMenu, FiLogOut } from "react-icons/fi";
import { Spinner } from "@/components/common/spinner";
import "@/styles/header.css";

export default function Header({
  onToggleSidebar,
}: {
  onToggleSidebar: () => void;
}) {
  const [open, setOpen] = useState(false);
  const { logout, loading } = useLogout();

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
              <div className="dropdown-menu bg-slate-200">
                <button
                  onClick={logout}
                  disabled={loading}
                  aria-busy={loading}
                  className=" text-black rounded w-full px-3 py-2 hover:bg-slate-300 disabled:opacity-50 disabled:cursor-not-allowed transition"
                >
                  {loading ? (
                    <>
                      <Spinner />
                    </>
                  ) : (
                    <div className="flex items-center justify-between">
                      Logout <FiLogOut size={15} strokeWidth={3} />
                    </div>
                  )}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
