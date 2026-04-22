export interface ISubMenuItem {
  label: string;
  href: string;
  image?: string;
}

export interface INavItem {
  label: string;
  href: string;
  image?: string;
  submenu?: ISubMenuItem[];
}

export interface ICollectionStripItem {
  label: string;
  slug: string;
  src: string;
}

export interface IActionIcon {
  href: string;
  label: string;
  badge?: string;
  icon: "chat" | "cart" | "wishlist" | "user";
}
