"use client";

import { useState } from "react";
import { useTheme } from "@/providers/theme-provider";
import Link from "next/link";
import Image from "next/image";
import type { INavItem } from "@/types/navbar";

interface Props {
  navItems: INavItem[];
  onClose: () => void;
}

export function _MobileDrawer({ navItems, onClose }: Props) {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);

  const bgClass = isDark ? "bg-[#1a2655]" : "bg-white";
  const textClass = isDark ? "text-white" : "text-[#2a2a2a]";
  const borderClass = isDark ? "border-[#2a3a6a]" : "border-[#f3f3f3]";
  const inputBgClass = isDark ? "bg-[#263550] border-[#3a4a7a] text-white" : "bg-white border-[#ddd]";

  const toggleMenu = (label: string) => {
    setExpandedMenu(expandedMenu === label ? null : label);
  };

  return (
    <div className={`fixed inset-0 z-40 top-[120px] overflow-y-auto md:hidden border-t ${borderClass} ${bgClass}`}>
      <div className="px-4 py-4">
        {/* Search */}
        <div className="relative mb-6">
          <input
            type="text"
            placeholder="Search gifts..."
            className={`w-full rounded-full border px-4 py-2.5 text-sm outline-none focus:border-[#a4722c] ${inputBgClass}`}
          />
          <svg className={`absolute right-4 top-1/2 -translate-y-1/2 ${isDark ? "text-[#888]" : "text-[#999]"}`} width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
            <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
          </svg>
        </div>

        {/* Nav Items */}
        {navItems.map(item => {
          const hasSubmenu = item.submenu && item.submenu.length > 0;
          const isExpanded = expandedMenu === item.label;
          const isRecipient = item.label === "SHOP BY RECIPIENT";

          return (
            <div key={item.label}>
              <div className={`flex items-center justify-between border-b ${borderClass} py-3`}>
                <Link
                  href={item.href}
                  className={`flex-1 text-[12px] font-bold tracking-[0.06em] ${textClass} hover:text-[#a4722c] transition-colors`}
                  onClick={() => !hasSubmenu && onClose()}
                >
                  {item.label}
                </Link>
                {hasSubmenu && (
                  <button
                    onClick={() => toggleMenu(item.label)}
                    className={`ml-2 p-1 transition-transform ${isExpanded ? "rotate-90" : ""}`}
                  >
                    <svg width="6" height="10" viewBox="0 0 6 10" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M1 1l4 4-4 4"/>
                    </svg>
                  </button>
                )}
              </div>

              {/* Submenu */}
              {hasSubmenu && isExpanded && (
                <div className={`${isDark ? "bg-[#0f1a3a]" : "bg-[#f9f9f9]"} py-4`}>
                  {isRecipient ? (
                    <div className="space-y-4">
                      {/* Recipient items in a single column for mobile */}
                      {item.submenu?.map(sub => (
                        <Link
                          key={sub.label}
                          href={sub.href}
                          className={`block px-4 py-2 text-[12px] font-medium ${isDark ? "text-[#ccc]" : "text-[#444]"} hover:text-[#a4722c] transition-colors`}
                          onClick={onClose}
                        >
                          {sub.label}
                        </Link>
                      ))}

                      {/* Image below for mobile */}
                      {item.image && (
                        <div className="mx-4 mt-4 w-full h-40 relative rounded-lg overflow-hidden">
                          <Image
                            src={item.image}
                            alt={item.label}
                            fill
                            className="object-cover"
                            sizes="100vw"
                          />
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="space-y-2">
                      {item.submenu?.map(sub => (
                        <Link
                          key={sub.label}
                          href={sub.href}
                          className={`block px-4 py-2 text-[12px] font-medium ${isDark ? "text-[#ccc]" : "text-[#444]"} hover:text-[#a4722c] transition-colors`}
                          onClick={onClose}
                        >
                          {sub.label}
                        </Link>
                      ))}

                      {/* Image below for mobile */}
                      {item.image && (
                        <div className="mx-4 mt-4 w-full h-40 relative rounded-lg overflow-hidden">
                          <Image
                            src={item.image}
                            alt={item.label}
                            fill
                            className="object-cover"
                            sizes="100vw"
                          />
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}

        {/* Mobile quick links */}
        <div className="mt-6 grid grid-cols-2 gap-3 pb-6">
          <Link
            href="/collections"
            onClick={onClose}
            className={`rounded-full border border-[#c9973a] py-2.5 text-center text-[11px] font-bold text-[#a4722c] transition-colors hover:bg-[#f9f3ee]`}
          >
            All Collections
          </Link>
          <Link
            href="/corporate-gifting"
            onClick={onClose}
            className="rounded-full bg-[#a4722c] py-2.5 text-center text-[11px] font-bold text-white hover:bg-[#8b5e24] transition-colors"
          >
            Corporate Gifting
          </Link>
        </div>
      </div>
    </div>
  );
}
