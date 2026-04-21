import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ProductCard } from "./_ProductCard";

const allProducts = [
  { slug: "quran-gift-set-1",       name: "Barkat-e-Jariyah Quran Hamper",         category: "Quran Gift Sets",   price: "₹1,690", img: "/all-pic/AL-HADAYA/Pastel_Pink_Barkat-e-Jariyah_Resin_Quran_Hamper_Luxury_Islamic_Gift_Set.jpg", rating: 5 },
  { slug: "velvet-quran-set",        name: "Personalised Velvet Quran Gift Set",      category: "Quran Gift Sets",   price: "₹1,950", img: "/all-pic/AL-HADAYA/Personalised_Velvet_Quran_Gift_Set.png",  rating: 5 },
  { slug: "royal-blue-quran",        name: "Royal Blue Barkat-e-Jariyah Quran Set",   category: "Quran Gift Sets",   price: "₹2,250", img: "/all-pic/AL-HADAYA/Royal_Blue_Barkat-e-Jariyah_Resin_Quran_Gift_Hamper_Luxury_Islamic_Set_76043a65-8444-4dba-9443-446fcb9397b6.jpg", rating: 5 },
  { slug: "kaaba-gift-set",          name: "Kaaba Luxury Islamic Gift Set",           category: "Prayer Essentials", price: "₹2,490", img: "/all-pic/AL-HADAYA/Kaaba_Design_Cylinder_Gift_Box_with_Taffeta_Prayer_Rug_Tasbih_Luxury_Islamic_Gift_Set.jpg", rating: 5 },
  { slug: "prayer-mat-set",          name: "Premium Prayer Mat Gift Set",             category: "Prayer Essentials", price: "₹890",   img: "/all-pic/AL-HADAYA/Prayer_mats.png",  rating: 4 },
  { slug: "quran-set-gift",          name: "Quran Al-Kareem Gift Set",                category: "Quran Gift Sets",   price: "₹1,190", img: "/all-pic/AL-HADAYA/1---Quran-Gift-Set.png", rating: 5 },
  { slug: "nikah-hamper",            name: "Nikah Wedding Return Hamper",             category: "Nikah Collection",  price: "₹1,490", img: "/all-pic/AL-HADAYA/Nikah_Return.png",  rating: 5 },
  { slug: "resin-art-products",      name: "Resin Art Islamic Gift Set",              category: "Resin Art",         price: "₹1,290", img: "/all-pic/AL-HADAYA/Resin_Art_Products.png", rating: 4 },
  { slug: "ramadan-hamper",          name: "Ramadan Essentials Hamper",               category: "Ramadan Gifts",     price: "₹1,490", img: "/all-pic/AL-HADAYA/Ramadan_Hamper.jpg", rating: 5 },
  { slug: "hajj-umrah-set",          name: "Hajj & Umrah Travel Set",                 category: "Hajj & Umrah",      price: "₹1,790", img: "/all-pic/AL-HADAYA/Hajj_Umrah_medium.png", rating: 5 },
  { slug: "kids-gift-set",           name: "Happy Kids Islamic Gift Collection",      category: "Kids Gifts",        price: "₹750",   img: "/all-pic/AL-HADAYA/Kids_Gifts.png", rating: 5 },
  { slug: "corporate-gift-set",      name: "Premium Corporate Gift Set",              category: "Corporate Gifts",   price: "₹3,500", img: "/all-pic/AL-HADAYA/9---Corporate-Gifts.png", rating: 4 },
  { slug: "festivals-gifts",         name: "Festivals Celebration Gift Box",          category: "Ramadan Gifts",     price: "₹990",   img: "/all-pic/AL-HADAYA/Festivals_Gifts.png", rating: 4 },
  { slug: "personalized-gift",       name: "Personalised Islamic Gift Set",           category: "Quran Gift Sets",   price: "₹1,350", img: "/all-pic/AL-HADAYA/Personalized_Gift_medium.png", rating: 5 },
  { slug: "prayer-essentials-set",   name: "Prayer Essentials Gift Bundle",           category: "Prayer Essentials", price: "₹1,100", img: "/all-pic/AL-HADAYA/2---Prayer-Essentials.png", rating: 4 },
  { slug: "return-favors-set",       name: "Hajj & Umrah Return Favors",             category: "Return Favors",     price: "₹350",   img: "/all-pic/AL-HADAYA/6---Return-Favors.png", rating: 4 },
  { slug: "resin-art-2",             name: "Wine Elegance Resin Quran Hamper",        category: "Resin Art",         price: "₹1,890", img: "/all-pic/AL-HADAYA/Wine_Elegance_Resin_Quran_Hamper_Barkat-e-Jariyah_Islamic_Gift_Set.jpg", rating: 5 },
  { slug: "home-decor-set",          name: "Islamic Home Decor Gift Set",             category: "Home Decor",        price: "₹1,990", img: "/all-pic/AL-HADAYA/5---Home-Decor.png", rating: 4 },
  { slug: "clothing-set",            name: "Islamic Modest Fashion Collection",       category: "Attar & Fragrance", price: "₹1,250", img: "/all-pic/AL-HADAYA/7---Clothing.png", rating: 4 },
  { slug: "eid-hamper",              name: "Tawakkul Eid Hamper Gift Set",            category: "Ramadan Gifts",     price: "₹1,690", img: "/all-pic/AL-HADAYA/Tawakkul_Eid_Hamper.png", rating: 5 },
  { slug: "anniversary-gift",        name: "Anniversary Celebration Gift Box",        category: "Nikah Collection",  price: "₹1,490", img: "/all-pic/AL-HADAYA/Anniversary_Gifts.png", rating: 4 },
  { slug: "birthday-gift",           name: "Birthday Gift Celebration Set",           category: "Kids Gifts",        price: "₹890",   img: "/all-pic/AL-HADAYA/Birthday_Gift.png", rating: 5 },
  { slug: "zamzam-water-set",        name: "Zamzam Water Premium Gift Set",           category: "Hajj & Umrah",      price: "₹650",   img: "/all-pic/AL-HADAYA/5_Liter_Zamzam_Water_Cane_Pure_Holy_Zamzam_from_Makkah.png", rating: 5 },
  { slug: "premium-gifts",           name: "Premium Islamic Gift Collection",         category: "Corporate Gifts",   price: "₹2,800", img: "/all-pic/AL-HADAYA/Premium_Gifts_6ee2b317-8c44-4376-8403-a46e659c2ef4.png", rating: 5 },
];

const filterCategories = [
  "All",
  "Quran Gift Sets",
  "Prayer Essentials",
  "Nikah Collection",
  "Ramadan Gifts",
  "Hajj & Umrah",
  "Kids Gifts",
  "Resin Art",
  "Corporate Gifts",
  "Home Decor",
  "Attar & Fragrance",
  "Return Favors",
];

const slugToCategory: Record<string, string> = {
  "quran-gift-sets":   "Quran Gift Sets",
  "quran-set-gift":    "Quran Gift Sets",
  "prayer-essentials": "Prayer Essentials",
  "nikah-collection":  "Nikah Collection",
  "ramadan-gifts":     "Ramadan Gifts",
  "ramadan-2026":      "Ramadan Gifts",
  "hajj-umrah":        "Hajj & Umrah",
  "kids-gifts":        "Kids Gifts",
  "resin-art-collection": "Resin Art",
  "resin-art":         "Resin Art",
  "corporate-gifts":   "Corporate Gifts",
  "home-decor":        "Home Decor",
  "attar-fragrance":   "Attar & Fragrance",
  "return-favors":     "Return Favors",
};

function slugToLabel(slug: string): string {
  return slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
}

type Props = { params: Promise<{ slug: string }> };

export default async function CollectionSlugPage({ params }: Props) {
  const { slug } = await params;
  const label = slugToLabel(slug);
  const matchedCategory = slugToCategory[slug];
  const filtered = matchedCategory ? allProducts.filter(p => p.category === matchedCategory) : allProducts;
  const displayProducts = filtered.length > 0 ? filtered : allProducts;

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

      {/* Page title */}
      <div className="bg-white border-b border-[#ede8df]">
        <div className="mx-auto max-w-[1280px] px-5 py-4">
          <h1 className="text-xl font-bold text-[#1a1a1a]" style={{ fontFamily: "Georgia, serif" }}>{label}</h1>
          <p className="mt-0.5 text-[12px] text-[#aaa]">{displayProducts.length} products</p>
        </div>
      </div>

      <div className="mx-auto max-w-[1280px] px-5 py-5">
        {/* Sort bar */}
        <div className="mb-4 flex items-center justify-between rounded border border-[#ede8df] bg-white px-4 py-2">
          <button className="flex items-center gap-1.5 text-[12px] font-semibold text-[#555] hover:text-[#a4722c] transition-colors">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="4" y1="6" x2="20" y2="6" /><line x1="8" y1="12" x2="20" y2="12" /><line x1="12" y1="18" x2="20" y2="18" />
            </svg>
            Sort by
          </button>
          <div className="flex items-center gap-3 text-[12px] text-[#888]">
            {["Featured", "Best selling", "Price: low to high", "Price: high to low"].map(opt => (
              <button key={opt} className="hover:text-[#a4722c] transition-colors first:font-semibold first:text-[#1a1a1a]">{opt}</button>
            ))}
            <span className="text-[#bbb]">{displayProducts.length} products</span>
          </div>
        </div>

        <div className="flex gap-5 items-start">
          {/* Sidebar */}
          <aside className="w-[200px] shrink-0 rounded border border-[#ede8df] bg-white p-4 sticky top-4 text-[12px]">
            <p className="mb-3 text-[10.5px] font-bold uppercase tracking-widest text-[#a4722c]">Filter</p>

            {/* Product Category */}
            <div className="mb-4">
              <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.06em] text-[#333] flex items-center justify-between">
                Product Category
                <svg width="9" height="5" viewBox="0 0 10 6" fill="#999"><path d="M0 0l5 6 5-6z"/></svg>
              </p>
              <div className="flex flex-col gap-1.5">
                {filterCategories.map(cat => (
                  <label key={cat} className="flex items-center gap-2 cursor-pointer group">
                    <input
                      type="checkbox"
                      readOnly
                      defaultChecked={matchedCategory ? cat === matchedCategory : cat === "All"}
                      className="h-3 w-3 rounded-sm border-[#c4a87a] accent-[#a4722c] cursor-pointer"
                    />
                    <span className="text-[11.5px] text-[#555] group-hover:text-[#a4722c] transition-colors leading-4">{cat}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="mb-4 border-t border-[#f0e8da] pt-3">
              <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.06em] text-[#333] flex items-center justify-between">
                Availability
                <svg width="9" height="5" viewBox="0 0 10 6" fill="#999"><path d="M0 0l5 6 5-6z"/></svg>
              </p>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" readOnly defaultChecked className="h-3 w-3 rounded-sm border-[#c4a87a] accent-[#a4722c]" />
                <span className="text-[11.5px] text-[#555]">In Stock ({displayProducts.length})</span>
              </label>
            </div>

            {/* Price */}
            <div className="border-t border-[#f0e8da] pt-3">
              <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.06em] text-[#333] flex items-center justify-between">
                Price
                <svg width="9" height="5" viewBox="0 0 10 6" fill="#999"><path d="M0 0l5 6 5-6z"/></svg>
              </p>
              <p className="mb-2 text-[11px] text-[#888]">₹0 — ₹5,000</p>
              <div className="relative h-1 w-full rounded-full bg-[#e8dcc8]">
                <div className="absolute left-0 top-0 h-full w-full rounded-full bg-[#a4722c]" />
                <div className="absolute left-0 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full border-2 border-[#a4722c] bg-white shadow-sm cursor-pointer" />
                <div className="absolute right-0 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full border-2 border-[#a4722c] bg-white shadow-sm cursor-pointer" />
              </div>
              <div className="mt-1.5 flex justify-between text-[10px] text-[#bbb]">
                <span>₹0</span><span>₹5,000</span>
              </div>
            </div>
          </aside>

          {/* Product grid */}
          <div className="flex-1 min-w-0">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {displayProducts.map(product => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
