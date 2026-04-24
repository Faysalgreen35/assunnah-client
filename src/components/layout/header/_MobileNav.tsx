"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface Props {
  onMenuOpen: () => void;
}

export function _MobileNav({ onMenuOpen }: Props) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("home");

  const categories = [
    { id: "quran", label: "Quran\nGifts", icon: "📖", href: "/collections/quran-gift-sets" },
    { id: "prayer", label: "Prayer\nEssentials", icon: "🤲", href: "/collections/prayer-essentials" },
    { id: "wedding", label: "Wedding\nGifts", icon: "💍", href: "/collections/nikah-collection" },
    { id: "home", label: "Home\nDecor", icon: "🏠", href: "/collections/home-decor" },
  ];

  const bottomNav = [
    { id: "home", label: "Home", icon: "🏠", href: "/" },
    { id: "search", label: "Search", icon: "🔍", onClick: () => {} },
    { id: "category", label: "Category", icon: "📂", onClick: onMenuOpen },
    { id: "cart", label: "Cart", icon: "🛍️", href: "/cart" },
    { id: "menu", label: "Menu", icon: "☰", onClick: onMenuOpen },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-[#ede8df]">
      {/* Category Tabs */}
      <div className="overflow-x-auto">
        <div className="flex gap-2 px-3 py-2 min-w-min">
          {categories.map(cat => (
            <Link
              key={cat.id}
              href={cat.href}
              className="flex flex-col items-center gap-1 px-4 py-2 rounded-lg hover:bg-[#f5efe6] transition-colors whitespace-nowrap"
            >
              <span className="text-lg">{cat.icon}</span>
              <span className="text-[10px] font-semibold text-[#3d3d3d] text-center">{cat.label}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="flex items-center justify-around border-t border-[#ede8df] bg-white">
        {bottomNav.map(item => (
          <button
            key={item.id}
            onClick={() => {
              setActiveTab(item.id);
              if ("onClick" in item && item.onClick) {
                item.onClick();
              } else if ("href" in item) {
                router.push(item.href);
              }
            }}
            className={`flex flex-col items-center gap-1 py-3 px-3 flex-1 transition-colors ${
              activeTab === item.id
                ? "text-[#a4722c] bg-[#f5efe6]"
                : "text-[#666] hover:text-[#a4722c]"
            }`}
          >
            <span className="text-xl">{item.icon}</span>
            <span className="text-[9px] font-semibold">{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
