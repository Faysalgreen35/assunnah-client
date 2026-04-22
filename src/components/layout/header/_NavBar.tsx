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
                <div className="absolute left-1/2 transform -translate-x-1/2 top-full z-50 w-screen bg-[#1a2655] shadow-2xl">
                  <div className="mx-auto max-w-[1280px] px-4">
                    {isRecipient ? (
                      <div className="flex items-center gap-8 py-8">
                        {/* First 3 columns with lists */}
                        <div className="flex flex-1 gap-8">
                          {/* Column 1 */}
                          <div className="flex-1">
                            {item.submenu.slice(0, 6).map(sub => (
                              <Link
                                key={sub.label}
                                href={sub.href}
                                className="block py-2.5 text-[13px] text-white hover:text-[#a4722c] hover:font-semibold transition-colors"
                              >
                                {sub.label}
                              </Link>
                            ))}
                          </div>

                          {/* Column 2 */}
                          <div className="flex-1">
                            {item.submenu.slice(6, 12).map(sub => (
                              <Link
                                key={sub.label}
                                href={sub.href}
                                className="block py-2.5 text-[13px] text-white hover:text-[#a4722c] hover:font-semibold transition-colors"
                              >
                                {sub.label}
                              </Link>
                            ))}
                          </div>

                          {/* Column 3 */}
                          <div className="flex-1">
                            {item.submenu.slice(12).map(sub => (
                              <Link
                                key={sub.label}
                                href={sub.href}
                                className="block py-2.5 text-[13px] text-white hover:text-[#a4722c] hover:font-semibold transition-colors"
                              >
                                {sub.label}
                              </Link>
                            ))}
                          </div>
                        </div>

                        {/* Column 4 - Image */}
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
                        {/* List on left */}
                        <div className="flex-1 space-y-1">
                          {item.submenu.map(sub => (
                            <Link
                              key={sub.label}
                              href={sub.href}
                              className="block py-2.5 text-[13px] text-white hover:text-[#a4722c] hover:font-semibold transition-colors"
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>

                        {/* Image on right */}
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
