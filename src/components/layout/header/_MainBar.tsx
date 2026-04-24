import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { _ThemeToggle } from "./_ThemeToggle";

const actionIcons = [
  {
    href: "/contact",
    label: "Chat",
    badge: null,
    path: <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>,
  },
  {
    href: "/cart",
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
    href: "/login",
    label: "Log In",
    badge: null,
    path: <><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></>,
  },
];

interface Props {
  onMenuToggle: () => void;
}

const TYPEWRITER_TEXT = "Search gifts, occasions...";

export function _MainBar({ onMenuToggle }: Props) {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < TYPEWRITER_TEXT.length) {
        setDisplayText(TYPEWRITER_TEXT.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="border-b border-border-subtle bg-surface h-20">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-4 px-5 py-0 h-full">

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


          {/* Search */}
          <div className="relative flex-1 max-w-[280px]">
            <input
              type="text"
              placeholder={displayText}
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
        <Link href="/" className="flex shrink-0 items-center -my-8">
          <div className="relative h-40 w-40 hover:opacity-80 transition-opacity">
            <Image
              src="/logo/bg_remove_logo_black.png"
              alt="As-Sunnah Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Right — Action Icons */}
        <div className="flex flex-1 items-center justify-end gap-0.5 sm:gap-1">
          {actionIcons.map(item => (
            <Link
              key={item.label}
              href={item.href}
              className={`relative flex flex-col items-center gap-0.5 px-2 py-1 text-body hover:text-primary transition-colors ${
                item.label === "Chat" ? "hidden md:flex" : ""
              }`}
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
