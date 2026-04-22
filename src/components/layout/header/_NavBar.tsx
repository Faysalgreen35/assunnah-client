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
  return (
    <div className="hidden border-b border-[#ebebeb] bg-white lg:block">
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
                className="flex items-center gap-0.5 whitespace-nowrap px-2.5 py-3 text-[11px] font-bold tracking-[0.05em] text-[#2a2a2a] hover:text-[#a4722c] transition-colors"
              >
                {item.label}
                {hasSubmenu && (
                  <svg width="7" height="4" viewBox="0 0 10 6" fill="currentColor" className="mt-0.5 opacity-50">
                    <path d="M0 0l5 6 5-6z"/>
                  </svg>
                )}
              </Link>

              {hasSubmenu && isOpen && (
                <div
                  className="absolute left-0 top-full z-50 rounded-b-lg border border-t-0 border-[#e8e8e8] bg-white shadow-xl"
                  style={{
                    width: isRecipient ? "900px" : "550px",
                    minHeight: isRecipient ? "400px" : "auto",
                  }}
                >
                  {isRecipient ? (
                    <div className="flex h-full">
                      {/* First 3 columns with lists */}
                      <div className="flex flex-1">
                        {/* Column 1 */}
                        <div className="flex-1 border-r border-[#f0f0f0] px-6 py-6">
                          {item.submenu.slice(0, 6).map(sub => (
                            <Link
                              key={sub.label}
                              href={sub.href}
                              className="block py-2 text-[12px] text-[#444] hover:text-[#a4722c] hover:font-semibold transition-colors"
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>

                        {/* Column 2 */}
                        <div className="flex-1 border-r border-[#f0f0f0] px-6 py-6">
                          {item.submenu.slice(6, 12).map(sub => (
                            <Link
                              key={sub.label}
                              href={sub.href}
                              className="block py-2 text-[12px] text-[#444] hover:text-[#a4722c] hover:font-semibold transition-colors"
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>

                        {/* Column 3 */}
                        <div className="flex-1 border-r border-[#f0f0f0] px-6 py-6">
                          {item.submenu.slice(12).map(sub => (
                            <Link
                              key={sub.label}
                              href={sub.href}
                              className="block py-2 text-[12px] text-[#444] hover:text-[#a4722c] hover:font-semibold transition-colors"
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      </div>

                      {/* Column 4 - Image */}
                      {item.image && (
                        <div className="w-56 relative overflow-hidden rounded-br-lg">
                          <Image
                            src={item.image}
                            alt={item.label}
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-300"
                            sizes="224px"
                          />
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="flex">
                      {/* List on left */}
                      <div className="flex-1 px-6 py-4 space-y-1">
                        {item.submenu.map(sub => (
                          <Link
                            key={sub.label}
                            href={sub.href}
                            className="block py-2.5 text-[12px] text-[#444] hover:bg-[#fdf6ee] hover:text-[#a4722c] hover:font-semibold transition-colors px-2 rounded"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>

                      {/* Image on right */}
                      {item.image && (
                        <div className="w-48 relative overflow-hidden rounded-br-lg">
                          <Image
                            src={item.image}
                            alt={item.label}
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-300"
                            sizes="192px"
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
      </nav>
    </div>
  );
}
