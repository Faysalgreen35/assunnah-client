export const navigationLinks = [
  { label: "Home", href: "/" },
  { label: "Categories", href: "/categories" },
  { label: "Collections", href: "/collections" },
  { label: "Shops", href: "/shops" },
  { label: "Wishlist", href: "/wishlist" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Corporate", href: "/corporate-gifting" },
  { label: "Contact", href: "/contact" },
];

export const categoryHighlights = [
  {
    title: "Quran & Prayer Sets",
    slug: "quran-prayer-sets",
    description:
      "Curated gift boxes with prayer mats, Qurans, tasbih and elegant keepsakes.",
  },
  {
    title: "Modest Fashion",
    slug: "modest-fashion",
    description:
      "Abayas, panjabis and Islamic wear for men, women and children.",
  },
  {
    title: "Home Décor",
    slug: "home-decor",
    description:
      "Islamic calligraphy, resin art and rehal stands for meaningful homes.",
  },
  {
    title: "Corporate Gifting",
    slug: "corporate-gifting",
    description:
      "Bulk-friendly collections for Ramadan, Eid and premium appreciation gifts.",
  },
  {
    title: "Kids Collection",
    slug: "kids-collection",
    description: "Books, modest wear and thoughtful learning bundles for children.",
  },
  {
    title: "Attar & Sunnah Lifestyle",
    slug: "attar-sunnah-lifestyle",
    description: "Attar, tasbih, caps and everyday essentials inspired by sunnah living.",
  },
];

export const featuredCollections = [
  {
    name: "Ramadan Essentials",
    subtitle: "Prayer-friendly bundles with personalization support.",
    price: "From ৳1,490",
    href: "/collections/ramadan-essentials-box",
  },
  {
    name: "Wedding Sunnah Gifts",
    subtitle: "Elegant hampers for couples, families and nikah events.",
    price: "From ৳2,250",
    href: "/collections/wedding-sunnah-gift-hamper",
  },
  {
    name: "Kids Islamic Corner",
    subtitle: "Books, outfits and soft learning accessories for little hearts.",
    price: "From ৳890",
    href: "/collections/kids-islamic-learning-set",
  },
];

export const occasionTags = [
  "Wedding",
  "Hajj & Umrah",
  "Aqiqah",
  "Ramadan",
  "Eid",
  "Corporate",
  "Graduation",
  "Baby Shower",
];

export const recipientTags = [
  "Him",
  "Her",
  "Kids",
  "Couples",
  "Corporate",
  "Teacher",
  "Parents",
  "Student",
];

export const shopHighlights = [
  {
    title: "Verified sellers",
    description: "Frontend structure is prepared to consume shop and vendor endpoints.",
  },
  {
    title: "Wishlist-ready UX",
    description: "Cards and actions are organized for future wishlist integration.",
  },
  {
    title: "API-aligned sections",
    description: "Categories, shops, products and occasion discovery map cleanly to backend modules.",
  },
];

export const products = [
  {
    slug: "ramadan-essentials-box",
    name: "Ramadan Essentials Box",
    category: "Quran & Prayer Sets",
    shop: "Noor Gift Studio",
    price: "৳1,490",
    shortDescription: "Prayer mat, tasbih, premium Quran and thoughtful gift card packaging.",
    occasions: ["Ramadan", "Eid"],
    recipients: ["Her", "Parents", "Corporate"],
    isPersonalizable: true,
    rating: "4.9",
  },
  {
    slug: "wedding-sunnah-gift-hamper",
    name: "Wedding Sunnah Gift Hamper",
    category: "Corporate Gifting",
    shop: "Barakah Creations",
    price: "৳2,250",
    shortDescription: "Elegant couple-ready hamper with dua cards, decor and keepsake essentials.",
    occasions: ["Wedding"],
    recipients: ["Couples", "Her", "Him"],
    isPersonalizable: true,
    rating: "4.8",
  },
  {
    slug: "kids-islamic-learning-set",
    name: "Kids Islamic Learning Set",
    category: "Kids Collection",
    shop: "Little Ummah",
    price: "৳890",
    shortDescription: "Storybook, prayer cap, flash cards and a beginner tasbih for young learners.",
    occasions: ["Aqiqah", "Birthday"],
    recipients: ["Kids", "Student"],
    isPersonalizable: false,
    rating: "4.7",
  },
  {
    slug: "hajj-umrah-travel-set",
    name: "Hajj & Umrah Travel Set",
    category: "Quran & Prayer Sets",
    shop: "Safa Journey Shop",
    price: "৳1,790",
    shortDescription: "Ihram-friendly essentials, dua guide and travel pouch for spiritual journeys.",
    occasions: ["Hajj & Umrah"],
    recipients: ["Him", "Her", "Parents"],
    isPersonalizable: true,
    rating: "4.9",
  },
  {
    slug: "premium-attar-collection",
    name: "Premium Attar Collection",
    category: "Attar & Sunnah Lifestyle",
    shop: "Misk Fragrance House",
    price: "৳1,150",
    shortDescription: "Layered attar set crafted for gifting, occasions and daily sunnah-inspired wear.",
    occasions: ["Eid", "Corporate"],
    recipients: ["Him", "Her", "Corporate"],
    isPersonalizable: false,
    rating: "4.6",
  },
  {
    slug: "calligraphy-wall-art-frame",
    name: "Calligraphy Wall Art Frame",
    category: "Home Décor",
    shop: "Sakinah Decor",
    price: "৳1,990",
    shortDescription: "Luxury Islamic wall frame designed for homes, offices and meaningful gift moments.",
    occasions: ["Wedding", "Housewarming"],
    recipients: ["Couples", "Parents", "Corporate"],
    isPersonalizable: false,
    rating: "4.8",
  },
];

export const shops = [
  {
    slug: "noor-gift-studio",
    name: "Noor Gift Studio",
    specialty: "Prayer-ready gift boxes and Quran bundles",
    rating: "4.9",
  },
  {
    slug: "barakah-creations",
    name: "Barakah Creations",
    specialty: "Wedding, couple and premium occasion hampers",
    rating: "4.8",
  },
  {
    slug: "little-ummah",
    name: "Little Ummah",
    specialty: "Islamic toys, books and modest kids essentials",
    rating: "4.7",
  },
  {
    slug: "sakinah-decor",
    name: "Sakinah Decor",
    specialty: "Islamic home styling, resin art and wall decor",
    rating: "4.8",
  },
];

export const blogPosts = [
  {
    slug: "how-to-choose-an-islamic-gift",
    title: "How to choose an Islamic gift that feels meaningful",
    excerpt: "A practical guide to matching recipients, occasions and useful product types.",
    category: "Gift Guide",
  },
  {
    slug: "ramadan-gifting-ideas-for-families",
    title: "Ramadan gifting ideas for families, teachers and teams",
    excerpt: "Bundle inspiration for iftar visits, Eid preparation and corporate appreciation.",
    category: "Ramadan",
  },
  {
    slug: "corporate-sunnah-gifting-checklist",
    title: "Corporate sunnah gifting checklist for bulk orders",
    excerpt: "What to prepare before requesting branded hampers, invoices and delivery planning.",
    category: "Corporate",
  },
];

export const faqs = [
  {
    question: "Do you support personalization on selected gifts?",
    answer:
      "Yes. The backend documentation includes personalizable products and order-line personalization notes. This storefront scaffold highlights those flows in product and checkout pages.",
  },
  {
    question: "Can customers shop by occasion or recipient?",
    answer:
      "Yes. The server documentation defines occasion and recipient tags on products, and these pages are structured to surface those filters clearly.",
  },
  {
    question: "Is there support for corporate or bulk inquiries?",
    answer:
      "A dedicated corporate gifting page has been scaffolded around the documented corporate inquiry flow so the feature can connect cleanly once the API is exposed.",
  },
  {
    question: "Will wishlist, blog and returns be supported?",
    answer:
      "Yes. The UI includes wishlist, blog, FAQ and return-aware customer journeys aligned with the planned backend roadmap.",
  },
];

export const stats = [
  { label: "Product-ready sections", value: "10+" },
  { label: "Reference-inspired pages", value: "11" },
  { label: "Backend-aligned modules", value: "Products • Shops • Blog • FAQ • Corporate" },
];

export const trustHighlights = [
  "Cash on delivery and online payment ready",
  "Vendor and product modules aligned with backend routes",
  "Built for occasion-based Islamic gifting discovery",
  "Prepared for wishlist, return and corporate inquiry flows",
];

export const policyHighlights = [
  "Shipping timeline: 2-5 business days (city dependent)",
  "Return window: 7 days for eligible products",
  "Sensitive products may be non-returnable",
  "Support channels: WhatsApp, email and contact form",
];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getBlogBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function getCategoryBySlug(slug: string) {
  return categoryHighlights.find((category) => category.slug === slug);
}

export function getShopBySlug(slug: string) {
  return shops.find((shop) => shop.slug === slug);
}