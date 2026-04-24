"use client";

import { useState } from "react";
import navMenuData from "@/data/layout/nav-menu.json";
import collectionStripData from "@/data/layout/collection-strip.json";
import type { INavItem, ICollectionStripItem } from "@/types/navbar";
import { _AnnouncementBar } from "./_AnnouncementBar";
import { _MainBar } from "./_MainBar";
import { _MegaNavBar } from "./_MegaNavBar";
import { _CollectionStrip } from "./_CollectionStrip";
import { _MobileDrawer } from "./_MobileDrawer";

const navItems = navMenuData as INavItem[];
const stripItems = collectionStripData as ICollectionStripItem[];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  return (
    <header className="bg-surface">
      <_AnnouncementBar />
      <_MainBar onMenuToggle={() => setMobileOpen(v => !v)} />
      <_MegaNavBar navItems={navItems} />
      <_CollectionStrip items={stripItems} />
      {mobileOpen && (
        <_MobileDrawer navItems={navItems} onClose={() => setMobileOpen(false)} />
      )}
    </header>
  );
}
