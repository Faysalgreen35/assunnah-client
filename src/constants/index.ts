export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5001/api/v1";

export const ROUTES = {
  HOME: "/",
  COLLECTIONS: "/collections",
  BLOG: "/blog",
  CONTACT: "/contact",
  FAQ: "/faq",
  CORPORATE: "/corporate-gifting",
  WISHLIST: "/wishlist",
  SHIPPING_POLICY: "/shipping-policy",
  RETURN_POLICY: "/return-policy",
} as const;

export const OCCASION_TAGS = [
  "Wedding",
  "Hajj & Umrah",
  "Aqiqah",
  "Ramadan",
  "Eid",
  "Corporate",
  "Graduation",
  "Birthday",
  "Festival",
] as const;

export const RECIPIENT_TAGS = [
  "Him",
  "Her",
  "Kids",
  "Couples",
  "Corporate",
  "Teacher",
  "Parents",
  "Student",
] as const;

export const SORT_OPTIONS = [
  { label: "Default", value: "" },
  { label: "Price: Low to High", value: "price" },
  { label: "Price: High to Low", value: "-price" },
  { label: "Newest First", value: "-createdAt" },
  { label: "Best Rating", value: "-averageRating" },
] as const;
