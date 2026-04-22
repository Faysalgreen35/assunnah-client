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
          const isRecipient = item.label === "SHOP BY RECIPIENT";
          const hasSubmenu = item.submenu && item.submenu.length > 0;
          const isOpen = openMenu === item.label;

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
                  <div className="px-8 py-8 w-full">
                    <div className="flex items-start gap-16 justify-between">
                      {/* LEFT SIDE - Menu Items */}
                      <div className="flex-1">
                        {isRecipient ? (
                          <div className="grid grid-cols-3 gap-16">
                            {/* Column 1 */}
                            <div className="space-y-4">
                              {item.submenu.slice(0, 6).map(sub => (
                                <Link
                                  key={sub.label}
                                  href={sub.href}
                                  className={`block text-[14px] font-medium ${isDark ? "text-white" : "text-[#333]"} hover:text-[#a4722c] hover:font-bold transition-colors`}
                                >
                                  {sub.label}
                                </Link>
                              ))}
                            </div>

                            {/* Column 2 */}
                            <div className="space-y-4">
                              {item.submenu.slice(6, 12).map(sub => (
                                <Link
                                  key={sub.label}
                                  href={sub.href}
                                  className={`block text-[14px] font-medium ${isDark ? "text-white" : "text-[#333]"} hover:text-[#a4722c] hover:font-bold transition-colors`}
                                >
                                  {sub.label}
                                </Link>
                              ))}
                            </div>

                            {/* Column 3 */}
                            <div className="space-y-4">
                              {item.submenu.slice(12).map(sub => (
                                <Link
                                  key={sub.label}
                                  href={sub.href}
                                  className={`block text-[14px] font-medium ${isDark ? "text-white" : "text-[#333]"} hover:text-[#a4722c] hover:font-bold transition-colors`}
                                >
                                  {sub.label}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ) : (
                          <div className="space-y-4">
                            {item.submenu.map(sub => (
                              <Link
                                key={sub.label}
                                href={sub.href}
                                className={`block text-[14px] font-medium ${isDark ? "text-white" : "text-[#333]"} hover:text-[#a4722c] hover:font-bold transition-colors`}
                              >
                                {sub.label}
                              </Link>
                            ))}
                          </div>
                        )}

                        {/* View All link */}
                        <Link
                          href={item.href}
                          className={`inline-block mt-6 text-[12px] font-bold text-[#a4722c] hover:underline`}
                        >
                          View All {item.label} →
                        </Link>
                      </div>

                      {/* RIGHT SIDE - Picture */}
                      {item.image && (
                        <div className="flex-shrink-0 pr-8">
                          <div className="w-96 h-96 relative rounded-lg overflow-hidden shadow-lg">
                            <Image
                              src={item.image}
                              alt={item.label}
                              fill
                              className="object-cover hover:scale-105 transition-transform duration-300"
                              sizes="384px"
                              priority
                            />
                          </div>
                        </div>
                      )}
                    </div>
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
