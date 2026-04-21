"use client";

import { useState } from "react";
import navMenuData from "@/data/layout/nav-menu.json";
import collectionStripData from "@/data/layout/collection-strip.json";
import type { INavItem, ICollectionStripItem } from "@/types/navbar";
import { _AnnouncementBar } from "./_AnnouncementBar";
import { _MainBar } from "./_MainBar";
import { _NavBar } from "./_NavBar";
import { _CollectionStrip } from "./_CollectionStrip";
import { _MobileDrawer } from "./_MobileDrawer";

const navItems = navMenuData as INavItem[];
const stripItems = collectionStripData as ICollectionStripItem[];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  return (
    <header className="bg-surface shadow-sm">
      <_AnnouncementBar />
      <_MainBar onMenuToggle={() => setMobileOpen(v => !v)} />
      <_NavBar
        navItems={navItems}
        openMenu={openMenu}
        onEnter={setOpenMenu}
        onLeave={() => setOpenMenu(null)}
      />
      <_CollectionStrip items={stripItems} />
      {mobileOpen && (
        <_MobileDrawer navItems={navItems} onClose={() => setMobileOpen(false)} />
      )}
    </header>
  );
}
