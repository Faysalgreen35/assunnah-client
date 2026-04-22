import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import productsData from "@/data/products.json";

// Keep this mapping for category slug to collection slug
const categoryToCollectionMap: Record<string, string> = {
  "quran-gift-sets": "quran-gift-sets",
  "prayer-essentials": "prayer-essentials",
  "nikah-collection": "nikah-collection",
  "ramadan-gifts": "ramadan-2026",
  "hajj-umrah": "hajj-umrah",
  "kids-gifts": "kids-gifts",
  "resin-art": "resin-art",
  "corporate-gifts": "corporate-gifts",
  "home-decor": "home-decor",
  "attar-fragrance": "attar-fragrance",
  "return-favors": "return-favors",
};

const allProducts = [
  { slug: "quran-gift-set-1",       name: "Barkat-e-Jariyah Quran Hamper",         category: "Quran Gift Sets",   price: "From ₹1,690", img: "/all-pic/AL-HADAYA/Pastel_Pink_Barkat-e-Jariyah_Resin_Quran_Hamper_Luxury_Islamic_Gift_Set.jpg", rating: 5 },
  { slug: "velvet-quran-set",        name: "Personalised Velvet Quran Gift Set",      category: "Quran Gift Sets",   price: "From ₹1,950", img: "/all-pic/AL-HADAYA/Personalised_Velvet_Quran_Gift_Set.png",  rating: 5 },
  { slug: "royal-blue-quran",        name: "Royal Blue Barkat-e-Jariyah Quran Set",   category: "Quran Gift Sets",   price: "From ₹2,250", img: "/all-pic/AL-HADAYA/Royal_Blue_Barkat-e-Jariyah_Resin_Quran_Gift_Hamper_Luxury_Islamic_Set_76043a65-8444-4dba-9443-446fcb9397b6.jpg", rating: 5 },
  { slug: "kaaba-gift-set",          name: "Kaaba Luxury Islamic Gift Set",           category: "Prayer Essentials", price: "From ₹2,490", img: "/all-pic/AL-HADAYA/Kaaba_Design_Cylinder_Gift_Box_with_Taffeta_Prayer_Rug_Tasbih_Luxury_Islamic_Gift_Set.jpg", rating: 5 },
  { slug: "prayer-mat-set",          name: "Premium Prayer Mat Gift Set",             category: "Prayer Essentials", price: "From ₹890",   img: "/all-pic/AL-HADAYA/Prayer_mats.png",  rating: 4 },
  { slug: "quran-set-gift",          name: "Quran Al-Kareem Gift Set",                category: "Quran Gift Sets",   price: "From ₹1,190", img: "/all-pic/AL-HADAYA/1---Quran-Gift-Set.png", rating: 5 },
  { slug: "nikah-hamper",            name: "Nikah Wedding Return Hamper",             category: "Nikah Collection",  price: "From ₹1,490", img: "/all-pic/AL-HADAYA/Nikah_Return.png",  rating: 5 },
  { slug: "resin-art-products",      name: "Resin Art Islamic Gift Set",              category: "Resin Art",         price: "From ₹1,290", img: "/all-pic/AL-HADAYA/Resin_Art_Products.png", rating: 4 },
  { slug: "ramadan-hamper",          name: "Ramadan Essentials Hamper",               category: "Ramadan Gifts",     price: "From ₹1,490", img: "/all-pic/AL-HADAYA/Ramadan_Hamper.jpg", rating: 5 },
  { slug: "hajj-umrah-set",          name: "Hajj & Umrah Travel Set",                 category: "Hajj & Umrah",      price: "From ₹1,790", img: "/all-pic/AL-HADAYA/Hajj_Umrah_medium.png", rating: 5 },
  { slug: "kids-gift-set",           name: "Happy Kids Islamic Gift Collection",      category: "Kids Gifts",        price: "From ₹750",   img: "/all-pic/AL-HADAYA/Kids_Gifts.png", rating: 5 },
  { slug: "corporate-gift-set",      name: "Premium Corporate Gift Set",              category: "Corporate Gifts",   price: "From ₹3,500", img: "/all-pic/AL-HADAYA/9---Corporate-Gifts.png", rating: 4 },
  { slug: "festivals-gifts",         name: "Festivals Celebration Gift Box",          category: "Ramadan Gifts",     price: "From ₹990",   img: "/all-pic/AL-HADAYA/Festivals_Gifts.png", rating: 4 },
  { slug: "personalized-gift",       name: "Personalised Islamic Gift Set",           category: "Quran Gift Sets",   price: "From ₹1,350", img: "/all-pic/AL-HADAYA/Personalized_Gift_medium.png", rating: 5 },
  { slug: "prayer-essentials-set",   name: "Prayer Essentials Gift Bundle",           category: "Prayer Essentials", price: "From ₹1,100", img: "/all-pic/AL-HADAYA/2---Prayer-Essentials.png", rating: 4 },
  { slug: "return-favors-set",       name: "Hajj & Umrah Return Favors",             category: "Return Favors",     price: "From ₹350",   img: "/all-pic/AL-HADAYA/6---Return-Favors.png", rating: 4 },
  { slug: "resin-art-2",             name: "Wine Elegance Resin Quran Hamper",        category: "Resin Art",         price: "From ₹1,890", img: "/all-pic/AL-HADAYA/Wine_Elegance_Resin_Quran_Hamper_Barkat-e-Jariyah_Islamic_Gift_Set.jpg", rating: 5 },
  { slug: "home-decor-set",          name: "Islamic Home Decor Gift Set",             category: "Home Decor",        price: "From ₹1,990", img: "/all-pic/AL-HADAYA/5---Home-Decor.png", rating: 4 },
  { slug: "clothing-set",            name: "Islamic Modest Fashion Collection",       category: "Attar & Fragrance", price: "From ₹1,250", img: "/all-pic/AL-HADAYA/7---Clothing.png", rating: 4 },
  { slug: "eid-hamper",              name: "Tawakkul Eid Hamper Gift Set",            category: "Ramadan Gifts",     price: "From ₹1,690", img: "/all-pic/AL-HADAYA/Tawakkul_Eid_Hamper.png", rating: 5 },
  { slug: "anniversary-gift",        name: "Anniversary Celebration Gift Box",        category: "Nikah Collection",  price: "From ₹1,490", img: "/all-pic/AL-HADAYA/Anniversary_Gifts.png", rating: 4 },
  { slug: "birthday-gift",           name: "Birthday Gift Celebration Set",           category: "Kids Gifts",        price: "From ₹890",   img: "/all-pic/AL-HADAYA/Birthday_Gift.png", rating: 5 },
  { slug: "zamzam-water-set",        name: "Zamzam Water Premium Gift Set",           category: "Hajj & Umrah",      price: "From ₹650",   img: "/all-pic/AL-HADAYA/5_Liter_Zamzam_Water_Cane_Pure_Holy_Zamzam_from_Makkah.png", rating: 5 },
  { slug: "premium-gifts",           name: "Premium Islamic Gift Collection",         category: "Corporate Gifts",   price: "From ₹2,800", img: "/all-pic/AL-HADAYA/Premium_Gifts_6ee2b317-8c44-4376-8403-a46e659c2ef4.png", rating: 5 },
];

const slugToCategory: Record<string, { label: string; category: string; description: string }> = {
  "quran-gift-sets":    { label: "Quran Gift Sets",   category: "Quran Gift Sets",   description: "Beautifully curated Quran hampers and Islamic gift sets for every occasion." },
  "prayer-essentials":  { label: "Prayer Essentials", category: "Prayer Essentials", description: "Everything needed for daily Islamic worship — prayer mats, tasbih, attars and more." },
  "nikah-collection":   { label: "Nikah Collection",  category: "Nikah Collection",  description: "Elegant Islamic gifts for weddings, nikah ceremonies, and anniversaries." },
  "ramadan-gifts":      { label: "Ramadan Gifts",     category: "Ramadan Gifts",     description: "Celebrate the blessed month of Ramadan with thoughtfully curated gift sets." },
  "hajj-umrah":         { label: "Hajj & Umrah",      category: "Hajj & Umrah",      description: "Spiritual travel essentials and return gifts for Hajj and Umrah pilgrims." },
  "kids-gifts":         { label: "Kids Gifts",        category: "Kids Gifts",        description: "Fun, faith-building Islamic gifts for little ones — books, mats, and more." },
  "kids-collection":    { label: "Kids Collection",   category: "Kids Gifts",        description: "Fun, faith-building Islamic gifts for little ones — books, mats, and more." },
  "resin-art":          { label: "Resin Art",         category: "Resin Art",         description: "Stunning handcrafted resin art Islamic gift sets with calligraphy designs." },
  "resin-art-collection": { label: "Resin Art",       category: "Resin Art",         description: "Stunning handcrafted resin art Islamic gift sets with calligraphy designs." },
  "corporate-gifts":    { label: "Corporate Gifts",   category: "Corporate Gifts",   description: "Premium Islamic corporate gift sets for Eid, Ramadan, and business gifting." },
  "home-decor":         { label: "Home Decor",        category: "Home Decor",        description: "Beautiful Islamic home décor pieces — calligraphy frames, resin art, and more." },
  "attar-fragrance":    { label: "Attar & Fragrance", category: "Attar & Fragrance", description: "Premium attars and Islamic fragrance collections inspired by Sunnah living." },
  "return-favors":      { label: "Return Favors",     category: "Return Favors",     description: "Beautiful return favor sets for Hajj, Umrah, Nikah, and special occasions." },
};

function slugToLabel(slug: string) {
  return slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
}

type Props = { params: Promise<{ slug: string }> };

export default async function CategorySlugPage({ params }: Props) {
  const { slug } = await params;
  const meta = slugToCategory[slug];
  const label = meta?.label ?? slugToLabel(slug);
  const description = meta?.description ?? "Explore our curated Islamic gift collections.";
  const filtered = meta ? productsData.filter((p: any) => p.category === meta.category) : productsData;
  const displayProducts = filtered.length > 0 ? filtered : productsData;

  // Related categories (exclude current)
  const relatedCategories = Object.entries(slugToCategory)
    .filter(([s]) => s !== slug && !s.includes("-collection") || s === "nikah-collection")
    .slice(0, 5);

  return (
    <div className="min-h-screen text-[#1a1a1a]" style={{ background: "#faf8f4" }}>
      <Header />

      {/* Breadcrumb */}
      <div className="border-b border-[#ede8df] bg-white">
        <div className="mx-auto max-w-[1280px] px-5 py-2">
          <nav className="flex items-center gap-1 text-[11px] text-[#aaa]">
            <Link href="/" className="hover:text-[#a4722c] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/collections" className="hover:text-[#a4722c] transition-colors">Collections</Link>
            <span>/</span>
            <span className="text-[#a4722c]">{label}</span>
          </nav>
        </div>
      </div>

      {/* Category hero */}
      <div className="bg-white border-b border-[#ede8df]">
        <div className="mx-auto max-w-[1280px] px-5 py-5">
          <h1 className="text-xl font-bold text-[#1a1a1a]" style={{ fontFamily: "Georgia, serif" }}>{label}</h1>
          <p className="mt-1 max-w-2xl text-[12.5px] text-[#777] leading-relaxed">{description}</p>
          <p className="mt-1.5 text-[11px] text-[#aaa]">{displayProducts.length} products</p>
        </div>
      </div>

      {/* Most Loved Gifts — matches Feel Before You Buy section style */}
      <section className="py-14 bg-white">
        <div className="mx-auto max-w-[1280px] px-5">

          {/* Section heading — italic gold + GoldDivider */}
          <div className="text-center mb-10">
            <h2
              className="text-3xl font-bold text-[#a4722c] lg:text-4xl"
              style={{ fontFamily: "Georgia, serif", fontStyle: "italic" }}
            >
              Most Loved Gifts
            </h2>
            {/* GoldDivider */}
            <div className="mt-3 flex items-center justify-center gap-3">
              <div className="h-px w-20 bg-gradient-to-r from-transparent to-[#c9973a]" />
              <span className="text-[#c9973a] text-[10px]">✦</span>
              <div className="h-px w-20 bg-gradient-to-l from-transparent to-[#c9973a]" />
            </div>
            <Link
              href={`/collections/${categoryToCollectionMap[slug] || slug}`}
              className="mt-4 inline-block text-[11.5px] font-semibold text-[#a4722c] hover:underline underline-offset-2"
            >
              View all {displayProducts.length} products →
            </Link>
          </div>

          {/* Arch card grid — same as Feel Before You Buy */}
          <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
            {displayProducts.map(product => (
              <Link
                key={product.slug}
                href={`/products/${product.slug}`}
                className="group flex flex-col items-center gap-3"
              >
                {/* Arch image */}
                <div
                  className="relative w-full overflow-hidden transition-all duration-300 group-hover:shadow-lg"
                  style={{ aspectRatio: "3/4", borderRadius: "9999px 9999px 16px 16px", border: "1.5px solid #ddc9a0", background: "#f5ede0" }}
                >
                  <Image
                    src={product.img}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                </div>

                {/* Card body */}
                <div className="text-center">
                  <p className="text-[12px] font-semibold text-[#333] group-hover:text-[#a4722c] transition-colors leading-5 line-clamp-2 mb-1">
                    {product.name}
                  </p>
                  <p className="text-[11.5px] font-bold text-[#a4722c] mb-1.5">
                    {typeof product.price === 'number' ? `From ₹${product.price.toLocaleString()}` : product.price}
                  </p>
                  <span className="inline-block text-[11px] font-bold text-[#a4722c] border border-[#c9973a] rounded-full px-3 py-0.5 group-hover:bg-[#a4722c] group-hover:text-white transition-colors">
                    Shop Now
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[1280px] px-5 py-6">

        {/* Browse other categories */}
        {relatedCategories.length > 0 && (
          <section>
            <h2 className="mb-4 text-[16px] font-bold text-[#1a1a1a]" style={{ fontFamily: "Georgia, serif" }}>
              Browse Other Categories
            </h2>
            <div className="flex flex-wrap gap-2">
              {Object.entries(slugToCategory)
                .filter(([s]) => s !== slug && !["resin-art-collection", "kids-gifts"].includes(s))
                .map(([s, info]) => (
                  <Link
                    key={s}
                    href={`/categories/${s}`}
                    className="rounded-full border border-[#ddc9a0] bg-white px-4 py-1.5 text-[12px] font-semibold text-[#555] hover:border-[#a4722c] hover:text-[#a4722c] transition-colors"
                  >
                    {info.label}
                  </Link>
                ))}
            </div>
          </section>
        )}
      </div>

      <Footer />
    </div>
  );
}
