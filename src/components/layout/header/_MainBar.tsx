import Link from "next/link";
import { _ThemeToggle } from "./_ThemeToggle";

const actionIcons = [
  {
    href: "/contact",
    label: "Chat",
    badge: null,
    path: <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>,
  },
  {
    href: "/collections",
    label: "Cart",
    badge: "0",
    path: <><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></>,
  },
  {
    href: "/wishlist",
    label: "Wishlist",
    badge: null,
    path: <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>,
  },
  {
    href: "/contact",
    label: "Log In",
    badge: null,
    path: <><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></>,
  },
];

interface Props {
  onMenuToggle: () => void;
}

export function _MainBar({ onMenuToggle }: Props) {
  return (
    <div className="border-b border-border-subtle bg-surface">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-4 px-5 py-3">

        {/* Left — hamburger + search */}
        <div className="flex flex-1 items-center gap-3 min-w-0">
          <button
            className="shrink-0 rounded p-1 text-body hover:text-primary lg:hidden"
            onClick={onMenuToggle}
            aria-label="Toggle menu"
          >
            <svg width="22" height="18" viewBox="0 0 22 18" fill="none">
              <path d="M1 1h20M1 9h20M1 17h20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
            </svg>
          </button>

          {/* Location pill — desktop only */}
          <button className="hidden lg:flex shrink-0 items-center gap-1.5 rounded-full border border-border-subtle px-3 py-1.5 text-[11px] text-body hover:border-primary transition-colors">
            <svg width="10" height="13" viewBox="0 0 12 15" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M6 1C3.79 1 2 2.79 2 5c0 3.5 4 9 4 9s4-5.5 4-9c0-2.21-1.79-4-4-4z"/>
              <circle cx="6" cy="5" r="1.5"/>
            </svg>
            <span className="font-semibold text-heading">Where to deliver?</span>
            <span className="text-muted">India ▼</span>
          </button>

          {/* Search */}
          <div className="relative flex-1 max-w-[280px]">
            <input
              type="text"
              placeholder="Search gifts, occasions..."
              className="w-full rounded-full border border-border bg-muted-bg py-2 pl-4 pr-9 text-[12px] outline-none focus:border-primary focus:bg-bg transition-colors"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 text-subtle hover:text-primary">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Center — Logo */}
        <Link href="/" className="flex shrink-0 items-center gap-2.5">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-gold-divider bg-gradient-to-br from-[#f9eed8] to-[#e8cc88] shadow-sm">
            <span className="text-[15px] font-extrabold tracking-wider text-primary-dark">AS</span>
          </div>
          <div className="leading-tight">
            <p className="text-[15px] font-extrabold tracking-[0.2em] text-heading">AS-SUNNAH</p>
            <p className="text-[9px] tracking-[0.16em] text-subtle uppercase font-medium">Islamic Gifting</p>
          </div>
        </Link>

        {/* Right — Action Icons */}
        <div className="flex flex-1 items-center justify-end gap-0.5 sm:gap-1">
          {actionIcons.map(item => (
            <Link
              key={item.label}
              href={item.href}
              className="relative flex flex-col items-center gap-0.5 px-2 py-1 text-body hover:text-primary transition-colors"
              aria-label={item.label}
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                {item.path}
              </svg>
              <span className="hidden text-[9px] font-semibold uppercase tracking-[0.07em] text-muted lg:block">{item.label}</span>
              {item.badge !== null && (
                <span className="absolute -right-0.5 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-[#a4722c] text-[9px] font-bold text-white">
                  {item.badge}
                </span>
              )}
            </Link>
          ))}
          <_ThemeToggle />
        </div>

      </div>
    </div>
  );
}
