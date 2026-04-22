"use client";

import { useTheme } from "@/providers/theme-provider";
import Link from "next/link";
import Image from "next/image";
import type { INavItem } from "@/types/navbar";

interface Props {
  navItems: INavItem[];
  openMenu: string | null;
  onEnter: (label: string) => void;
  onLeave: () => void;
}

export function _NavBar({ navItems, openMenu, onEnter, onLeave }: Props) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const bgClass = isDark ? "bg-[#1a2655]" : "bg-white";
  const textClass = isDark ? "text-white" : "text-[#2a2a2a]";

  return (
    <div className={`hidden md:block border-b ${isDark ? "border-[#2a3a6a]" : "border-[#ebebeb]"} ${bgClass}`}>
      <nav className="mx-auto flex max-w-[1280px] items-center justify-center px-4">
        {navItems.map(item => {
          const hasSubmenu = item.submenu && item.submenu.length > 0;
          const isOpen = openMenu === item.label;
          const columnCount = item.columns || 4;

          // Divide submenu items into equal columns
          const itemsPerColumn = Math.ceil(item.submenu ? item.submenu.length / columnCount : 0);

          // Generate columns dynamically
          const columns = Array.from({ length: columnCount }, (_, i) =>
            item.submenu.slice(i * itemsPerColumn, (i + 1) * itemsPerColumn)
          );

          return (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => onEnter(item.label)}
              onMouseLeave={onLeave}
            >
              <Link
                href={item.href}
                className={`flex items-center gap-0.5 whitespace-nowrap px-2.5 py-3 text-[11px] font-bold tracking-[0.05em] ${textClass} hover:text-[#a4722c] transition-colors`}
              >
                {item.label}
                {hasSubmenu && (
                  <svg width="7" height="4" viewBox="0 0 10 6" fill="currentColor" className="mt-0.5 opacity-50">
                    <path d="M0 0l5 6 5-6z"/>
                  </svg>
                )}
              </Link>

              {hasSubmenu && isOpen && (
                <div className={`absolute left-1/2 -translate-x-1/2 top-full z-50 w-screen ${isDark ? "bg-[#1a2655]" : "bg-white"} shadow-2xl border-t ${isDark ? "border-[#2a3a6a]" : "border-[#ebebeb]"}`}>
                  <div className={`mx-auto max-w-[1400px] px-8 py-8 flex gap-8 items-start ${columnCount === 1 ? "flex-row-reverse" : ""}`}>
                    {/* IMAGE */}
                    {item.image && (
                      <div className="flex-shrink-0">
                        <div className="relative group">
                          <div className="w-72 h-80 relative rounded-lg overflow-hidden shadow-lg">
                            <Image
                              src={item.image}
                              alt={item.label}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-300"
                              sizes="288px"
                              priority
                            />
                          </div>
                          {/* Image Label */}
                          <p className={`text-center mt-3 text-[13px] font-semibold ${isDark ? "text-white" : "text-[#333]"}`}>
                            {item.label}
                          </p>
                          {/* Wishlist Heart */}
                          <button className={`absolute bottom-3 right-3 p-2 rounded-full ${isDark ? "bg-white/20 hover:bg-white/30" : "bg-black/20 hover:bg-black/30"} transition-colors`}>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                            </svg>
                          </button>
                        </div>
                      </div>
                    )}

                    {/* SUBMENU ITEMS */}
                    {columnCount === 1 ? (
                      // Single column: show items in a simple list
                      <div className="flex-1 space-y-3">
                        {columns[0]?.map(sub => (
                          <Link
                            key={sub.label}
                            href={sub.href}
                            className={`block text-[13px] font-medium ${isDark ? "text-white" : "text-[#333]"} hover:text-[#a4722c] hover:font-bold transition-colors`}
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    ) : (
                      // Multiple columns: grid layout
                      <div className={`flex-1 grid gap-8 ${columnCount === 3 ? "grid-cols-3" : columnCount === 5 ? "grid-cols-5" : "grid-cols-4"}`}>
                        {columns.map((columnItems, idx) => (
                          <div key={idx} className="space-y-3">
                            {columnItems.map(sub => (
                              <Link
                                key={sub.label}
                                href={sub.href}
                                className={`block text-[13px] font-medium ${isDark ? "text-white" : "text-[#333]"} hover:text-[#a4722c] hover:font-bold transition-colors`}
                              >
                                {sub.label}
                              </Link>
                            ))}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </div>
  );
}
