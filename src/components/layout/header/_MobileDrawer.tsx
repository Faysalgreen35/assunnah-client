import Link from "next/link";
import type { INavItem } from "@/types/navbar";

interface Props {
  navItems: INavItem[];
  onClose: () => void;
}

export function _MobileDrawer({ navItems, onClose }: Props) {
  return (
    <div className="border-t border-[#e8e8e8] bg-white lg:hidden">
      <div className="mx-auto max-w-[1280px] px-4 py-4">
        {/* Search */}
        <div className="relative mb-4">
          <input
            type="text"
            placeholder="Search gifts, occasions..."
            className="w-full rounded-full border border-[#ddd] px-4 py-2.5 text-sm outline-none focus:border-[#a4722c]"
          />
          <svg className="absolute right-4 top-1/2 -translate-y-1/2 text-[#999]" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
            <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
          </svg>
        </div>

        {/* Nav Items */}
        {navItems.map(item => (
          <Link
            key={item.label}
            href={item.href}
            className="flex items-center justify-between border-b border-[#f3f3f3] py-3 text-[12px] font-bold tracking-[0.06em] text-[#2a2a2a] hover:text-[#a4722c] transition-colors"
            onClick={onClose}
          >
            {item.label}
            {item.submenu && item.submenu.length > 0 && (
              <svg width="6" height="10" viewBox="0 0 6 10" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M1 1l4 4-4 4"/>
              </svg>
            )}
          </Link>
        ))}

        {/* Mobile quick links */}
        <div className="mt-4 grid grid-cols-2 gap-2">
          <Link href="/collections" onClick={onClose} className="rounded-full border border-[#c9973a] py-2 text-center text-[11px] font-bold text-[#a4722c]">
            All Collections
          </Link>
          <Link href="/corporate-gifting" onClick={onClose} className="rounded-full bg-[#a4722c] py-2 text-center text-[11px] font-bold text-white">
            Corporate Gifting
          </Link>
        </div>
      </div>
    </div>
  );
}
