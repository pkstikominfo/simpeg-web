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
  { title: "Dashboard", href: "/master/dashboard" },
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
  { title: "Riwayat Jabatan", href: "/master/riwayat-jabatan" },
  { title: "Riwayat Subunit", href: "/master/riwayat-subunit" },
];

export default function Sidebar({ isOpen }: { isOpen: boolean }) {
  const pathname = usePathname();
  const [open, setOpen] = useState<string | null>(null);

  return (
    <aside
      className="sidebar"
      style={{ width: isOpen ? "240px" : "0px", overflow: "hidden" }}
    >
      <h1>SIMPEG BOLTARA</h1>
      <nav>
        {menuItems.map((item) => (
          <div key={item.title}>
            {item.children ? (
              <>
                <button
                  onClick={() =>
                    setOpen(open === item.title ? null : item.title)
                  }
                  className={`menuButton ${
                    open === item.title ? "expanded" : ""
                  }`}
                  aria-expanded={open === item.title}
                  aria-controls={`submenu-${item.title}`}
                >
                  {item.title}
                </button>

                <div
                  id={`submenu-${item.title}`}
                  className={`submenu ${open === item.title ? "open" : ""}`}
                >
                  <div className="submenuInner">
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
                </div>
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
