"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import type { INavItem } from "@/types/navbar";

interface Props {
  navItems: INavItem[];
}

export function _MegaNavBar({ navItems }: Props) {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [navbarHeight, setNavbarHeight] = useState<number>(0);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (navRef.current) {
      setNavbarHeight(navRef.current.offsetHeight);
    }

    const handleResize = () => {
      if (navRef.current) {
        setNavbarHeight(navRef.current.offsetHeight);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMouseEnter = (label: string) => {
    setOpenMenu(label);
  };

  const handleMouseLeave = () => {
    setOpenMenu(null);
  };

  const calculateColumns = (itemCount: number): number => {
    if (itemCount <= 4) return 1;
    if (itemCount <= 8) return 2;
    if (itemCount <= 12) return 3;
    return 4;
  };

  const getGridCols = (columns: number): string => {
    const gridMap: Record<number, string> = {
      1: "grid-cols-1",
      2: "grid-cols-2",
      3: "grid-cols-3",
      4: "grid-cols-4",
    };
    return gridMap[columns] || "grid-cols-4";
  };

  const activeItem = navItems.find(item => item.label === openMenu);

  return (
    <>
      {/* Navbar Container */}
      <nav
        ref={navRef}
        className="hidden md:block sticky top-0 z-40 w-full bg-[#f5efe6] border-b border-[#e8ddd1] shadow-sm"
        onMouseLeave={handleMouseLeave}
      >
        <div className="mx-auto max-w-[1920px] px-2 py-0">
          {/* Menu Items */}
          <div className="flex items-center justify-center gap-0">
            {navItems.map((item) => (
              <div
                key={item.label}
                onMouseEnter={() => handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
                {/* Menu Item Button */}
                <Link
                  href={item.href}
                  className="flex items-center gap-1 px-2 py-4 text-[12px] font-semibold tracking-wide text-[#3d3d3d] uppercase whitespace-nowrap transition-all duration-200 hover:text-[#8b6f47] border-b-2 border-transparent hover:border-[#8b6f47]"
                  style={{
                    borderColor: openMenu === item.label ? "#8b6f47" : "transparent",
                    color: openMenu === item.label ? "#8b6f47" : "#3d3d3d",
                  }}
                >
                  {item.label}
                  {item.submenu && item.submenu.length > 0 && (
                    <svg
                      width="6"
                      height="4"
                      viewBox="0 0 10 6"
                      fill="currentColor"
                      className="ml-1 opacity-50"
                    >
                      <path d="M0 0l5 6 5-6z" />
                    </svg>
                  )}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </nav>

      {/* GLOBAL MEGA DROPDOWN - FIXED FULL-WIDTH */}
      <AnimatePresence>
        {openMenu && activeItem?.submenu && activeItem.submenu.length > 0 && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="fixed inset-0 z-30 bg-black/0"
              onMouseLeave={handleMouseLeave}
              style={{ top: `calc(100px + 40px)` }}
            />

            {/* Mega Dropdown Panel */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="fixed left-0 right-0 w-full z-40 bg-white shadow-2xl border-b-2 border-[#e8ddd1]"
              style={{ top: "calc(100px + 48px)" }}
              onMouseLeave={handleMouseLeave}
              onMouseEnter={() => setOpenMenu(activeItem.label)}
            >
              {/* Inner Container - MAX WIDTH */}
              <div className="mx-auto max-w-[1920px] px-6 py-12">
                {(() => {
                  const itemColumns = calculateColumns(activeItem.submenu.length);

                  return (
                    <div className="flex items-start gap-8">
                      {/* Menu Items Grid */}
                      <div className="flex-1">
                        {activeItem.submenu.length <= 4 ? (
                          // Single Column for ≤4 items
                          <div className="space-y-3">
                            {activeItem.submenu.map((sub, idx) => (
                              <Link
                                key={idx}
                                href={sub.href}
                                className="block text-sm font-medium text-[#3d3d3d] hover:text-[#8b6f47] hover:font-semibold transition-colors duration-150"
                              >
                                {sub.label}
                              </Link>
                            ))}
                          </div>
                        ) : (
                          // Multi-Column Grid for >4 items
                          <div
                            className={`grid ${getGridCols(
                              itemColumns
                            )} gap-x-4 gap-y-3`}
                          >
                            {activeItem.submenu.map((sub, idx) => (
                              <Link
                                key={idx}
                                href={sub.href}
                                className="block text-sm font-medium text-[#3d3d3d] hover:text-[#8b6f47] hover:font-semibold transition-colors duration-150 whitespace-nowrap"
                              >
                                {sub.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Featured Image - Right Side */}
                      {activeItem.image && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: 0.05 }}
                          className="flex-shrink-0"
                        >
                      <div className="relative w-64 h-72 rounded-lg overflow-hidden shadow-lg bg-[#f9f6f1] hover:shadow-xl transition-shadow duration-300">
                        <Image
                          src={activeItem.image}
                          alt={activeItem.label}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-500"
                          priority
                          sizes="(max-width: 768px) 100vw, 320px"
                        />

                        {/* Image Label */}
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                          <p className="text-sm font-semibold text-white text-center">
                            {activeItem.label}
                          </p>
                        </div>

                        {/* Wishlist Button */}
                        <button
                          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 hover:bg-white flex items-center justify-center transition-all duration-200 shadow-md hover:shadow-lg"
                          aria-label="Add to wishlist"
                        >
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#8b6f47"
                            strokeWidth="2"
                            className="hover:fill-[#8b6f47]"
                          >
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                          </svg>
                        </button>
                      </div>
                        </motion.div>
                      )}
                    </div>
                  );
                })()}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Mobile Hamburger Menu - Coming Soon */}
      <div className="md:hidden bg-[#f5efe6] border-b border-[#e8ddd1] px-4 py-4">
        <button className="text-[#3d3d3d] hover:text-[#8b6f47]">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>
    </>
  );
}
