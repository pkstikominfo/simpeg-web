"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "@/styles/sidebar.css";

type MenuItem = {
  title: string;
  href?: string;
  children?: { title: string; href: string }[];
};

const menuItems: MenuItem[] = [
  { title: "Dashboard", href: "/" },
  {
    title: "Master Data",
    children: [
      { title: "Pegawai", href: "/master/pegawai" },
      { title: "Unit", href: "/master/unit" },
      { title: "Subunit", href: "/master/subunit" },
      { title: "Jabatan", href: "/master/jabatan" },
      { title: "Golongan", href: "/master/golongan" },
    ],
  },
  { title: "Riwayat Jabatan", href: "/riwayat-jabatan" },
  { title: "Riwayat Subunit", href: "/riwayat-subunit" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState<string | null>(null);

  return (
    <aside className="sidebar">
      <h1>SIMPEG</h1>
      <nav>
        {menuItems.map((item) => (
          <div key={item.title}>
            {item.children ? (
              <>
                <button
                  onClick={() =>
                    setOpen(open === item.title ? null : item.title)
                  }
                >
                  {item.title}
                </button>
                {open === item.title && (
                  <div className="submenu">
                    {item.children.map((child) => {
                      const active = pathname === child.href;
                      return (
                        <Link
                          key={child.title}
                          href={child.href}
                          className={active ? "active" : ""}
                        >
                          {child.title}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </>
            ) : (
              <Link
                href={item.href || "#"}
                className={pathname === item.href ? "active" : ""}
              >
                {item.title}
              </Link>
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
}
