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
  const textHoverClass = isDark ? "hover:text-[#a4722c]" : "hover:text-[#a4722c]";

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
              className="relative group"
              onMouseEnter={() => onEnter(item.label)}
              onMouseLeave={onLeave}
            >
              <Link
                href={item.href}
                className={`flex items-center gap-0.5 whitespace-nowrap px-2.5 py-3 text-[11px] font-bold tracking-[0.05em] ${textClass} ${textHoverClass} transition-colors`}
              >
                {item.label}
                {hasSubmenu && (
                  <svg width="7" height="4" viewBox="0 0 10 6" fill="currentColor" className="mt-0.5 opacity-50">
                    <path d="M0 0l5 6 5-6z"/>
                  </svg>
                )}
              </Link>

              {hasSubmenu && isOpen && (
                <div className={`absolute left-1/2 transform -translate-x-1/2 top-full z-50 w-screen ${isDark ? "bg-[#1a2655]" : "bg-white"} shadow-2xl`}>
                  <div className="mx-auto max-w-[1280px] px-4">
                    {isRecipient ? (
                      <div className="flex items-center gap-8 py-8">
                        <div className="flex flex-1 gap-8">
                          <div className="flex-1">
                            {item.submenu.slice(0, 6).map(sub => (
                              <Link
                                key={sub.label}
                                href={sub.href}
                                className={`block py-2.5 text-[13px] ${isDark ? "text-white" : "text-[#444]"} hover:text-[#a4722c] hover:font-semibold transition-colors`}
                              >
                                {sub.label}
                              </Link>
                            ))}
                          </div>

                          <div className="flex-1">
                            {item.submenu.slice(6, 12).map(sub => (
                              <Link
                                key={sub.label}
                                href={sub.href}
                                className={`block py-2.5 text-[13px] ${isDark ? "text-white" : "text-[#444]"} hover:text-[#a4722c] hover:font-semibold transition-colors`}
                              >
                                {sub.label}
                              </Link>
                            ))}
                          </div>

                          <div className="flex-1">
                            {item.submenu.slice(12).map(sub => (
                              <Link
                                key={sub.label}
                                href={sub.href}
                                className={`block py-2.5 text-[13px] ${isDark ? "text-white" : "text-[#444]"} hover:text-[#a4722c] hover:font-semibold transition-colors`}
                              >
                                {sub.label}
                              </Link>
                            ))}
                          </div>
                        </div>

                        {item.image && (
                          <div className="w-64 h-64 relative flex-shrink-0 rounded-lg overflow-hidden">
                            <Image
                              src={item.image}
                              alt={item.label}
                              fill
                              className="object-cover hover:scale-110 transition-transform duration-300"
                              sizes="256px"
                            />
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="flex items-center gap-8 py-8">
                        <div className="flex-1 space-y-1">
                          {item.submenu.map(sub => (
                            <Link
                              key={sub.label}
                              href={sub.href}
                              className={`block py-2.5 text-[13px] ${isDark ? "text-white" : "text-[#444]"} hover:text-[#a4722c] hover:font-semibold transition-colors`}
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>

                        {item.image && (
                          <div className="w-56 h-56 relative flex-shrink-0 rounded-lg overflow-hidden">
                            <Image
                              src={item.image}
                              alt={item.label}
                              fill
                              className="object-cover hover:scale-110 transition-transform duration-300"
                              sizes="224px"
                            />
                          </div>
                        )}
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
