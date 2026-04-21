import Link from "next/link";
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
        {navItems.map(item => (
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
              {item.submenu && item.submenu.length > 0 && (
                <svg width="7" height="4" viewBox="0 0 10 6" fill="currentColor" className="mt-0.5 opacity-50">
                  <path d="M0 0l5 6 5-6z"/>
                </svg>
              )}
            </Link>

            {item.submenu && item.submenu.length > 0 && openMenu === item.label && (
              <div className="absolute left-0 top-full z-50 min-w-[200px] rounded-b-lg border border-t-0 border-[#e8e8e8] bg-white py-2 shadow-xl">
                {item.submenu.map(sub => (
                  <Link
                    key={sub.label}
                    href={sub.href}
                    className="block px-5 py-2 text-[12px] text-[#444] hover:bg-[#fdf6ee] hover:text-[#a4722c] transition-colors"
                  >
                    {sub.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
}
