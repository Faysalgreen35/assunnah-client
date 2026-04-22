import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { _Gallery } from "./_Gallery";
import { _Purchase } from "./_Purchase";
import { VideoPreview } from "@/components/product/VideoPreview";
import { PersonalizationWrapper } from "./_PersonalizationWrapper";

const allProducts = [
  { slug: "quran-gift-set-1",       name: "Barkat-e-Jariyah Quran Hamper",         category: "Quran Gift Sets",   price: "From ₹1,690", img: "/all-pic/AL-HADAYA/Pastel_Pink_Barkat-e-Jariyah_Resin_Quran_Hamper_Luxury_Islamic_Gift_Set.jpg", rating: 5,
    description: "A beautifully curated Barkat-e-Jariyah Quran Hamper that makes the perfect Islamic gift. Includes a premium Quran, prayer essentials, and elegant resin art packaging — ideal for weddings, Eid, and special occasions.",
    features: ["Premium quality Quran with beautiful binding", "Handcrafted resin art box", "Pastel pink themed packaging", "Includes tasbih and prayer accessories", "Free personalisation available"],
    specs: { Material: "Resin & Fabric", Dimensions: "30×25×12 cm", Weight: "1.2 kg", "Packaging": "Gift-ready box", SKU: "AH-QGS-001" },
    sku: "AH-QGS-001",
  },
  { slug: "velvet-quran-set",        name: "Personalised Velvet Quran Gift Set",      category: "Quran Gift Sets",   price: "From ₹1,950", img: "/all-pic/AL-HADAYA/Personalised_Velvet_Quran_Gift_Set.png",  rating: 5,
    description: "Luxurious velvet Quran gift set with personalised name engraving. A timeless Islamic keepsake for nikah, graduation, and religious milestones.",
    features: ["Premium velvet box", "Name personalisation included", "Comes with tasbih & bookmark", "Available in multiple colors", "Ideal for Nikah & Eid gifts"],
    specs: { Material: "Velvet & Hardcover", Dimensions: "28×22×10 cm", Weight: "1.0 kg", Packaging: "Velvet gift box", SKU: "AH-QGS-002" },
    sku: "AH-QGS-002",
  },
  { slug: "royal-blue-quran",        name: "Royal Blue Barkat-e-Jariyah Quran Set",   category: "Quran Gift Sets",   price: "From ₹2,250", img: "/all-pic/AL-HADAYA/Royal_Blue_Barkat-e-Jariyah_Resin_Quran_Gift_Hamper_Luxury_Islamic_Set_76043a65-8444-4dba-9443-446fcb9397b6.jpg", rating: 5,
    description: "The Royal Blue Barkat-e-Jariyah Quran Gift Hamper is a stunning luxury Islamic gift set with deep blue resin art. Perfect for men, husbands, and fathers.",
    features: ["Royal blue resin art box", "Premium hardcover Quran", "Includes misbaah & attar", "Elegant satin ribbon", "Free name personalisation"],
    specs: { Material: "Resin & Velvet", Dimensions: "32×26×14 cm", Weight: "1.4 kg", Packaging: "Luxury gift hamper", SKU: "AH-QGS-003" },
    sku: "AH-QGS-003",
  },
  { slug: "kaaba-gift-set",          name: "Kaaba Luxury Islamic Gift Set",           category: "Prayer Essentials", price: "From ₹2,490", img: "/all-pic/AL-HADAYA/Kaaba_Design_Cylinder_Gift_Box_with_Taffeta_Prayer_Rug_Tasbih_Luxury_Islamic_Gift_Set.jpg", rating: 5,
    description: "A premium Kaaba-design cylinder gift box containing a taffeta prayer rug and tasbih. A meaningful luxury Islamic gift set for Hajj, Umrah, and Eid.",
    features: ["Kaaba-themed cylinder box", "Taffeta prayer rug included", "Prayer beads (tasbih)", "Exquisite finishing", "Great for Hajj return gifts"],
    specs: { Material: "Taffeta & Velvet", Dimensions: "Cylinder 20cm dia × 30cm h", Weight: "1.1 kg", Packaging: "Cylinder gift box", SKU: "AH-PE-001" },
    sku: "AH-PE-001",
  },
  { slug: "prayer-mat-set",          name: "Premium Prayer Mat Gift Set",             category: "Prayer Essentials", price: "From ₹890",   img: "/all-pic/AL-HADAYA/Prayer_mats.png",  rating: 4,
    description: "High-quality prayer mat gift set designed for comfort and durability. A thoughtful Islamic gift for daily worship.",
    features: ["Thick padded foam base", "Anti-slip bottom", "Beautiful Islamic patterns", "Easy to clean", "Compact & portable"],
    specs: { Material: "Polyester & Foam", Dimensions: "120×70 cm", Weight: "0.6 kg", Packaging: "Gift bag", SKU: "AH-PE-002" },
    sku: "AH-PE-002",
  },
  { slug: "quran-set-gift",          name: "Quran Al-Kareem Gift Set",                category: "Quran Gift Sets",   price: "From ₹1,190", img: "/all-pic/AL-HADAYA/1---Quran-Gift-Set.png", rating: 5,
    description: "A classic Quran Al-Kareem gift set — the perfect Islamic gift for any occasion. Elegantly packaged for gifting.",
    features: ["Premium Quran with tajweed marks", "Elegant hardcover binding", "Comes with tasbih", "Gift-ready packaging", "Multiple script sizes available"],
    specs: { Material: "Hardcover", Dimensions: "24×18×5 cm", Weight: "0.8 kg", Packaging: "Gift box", SKU: "AH-QGS-004" },
    sku: "AH-QGS-004",
  },
  { slug: "nikah-hamper",            name: "Nikah Wedding Return Hamper",             category: "Nikah Collection",  price: "From ₹1,490", img: "/all-pic/AL-HADAYA/Nikah_Return.png",  rating: 5,
    description: "A beautifully curated Nikah wedding return hamper for distributing at Islamic wedding ceremonies. Elegant, meaningful, and memorable.",
    features: ["Includes prayer essentials", "Quran booklet with dua", "Scented candle", "Personalised message card", "Bulk discounts available"],
    specs: { Material: "Mixed", Dimensions: "25×20×10 cm", Weight: "0.9 kg", Packaging: "Luxury box", SKU: "AH-NC-001" },
    sku: "AH-NC-001",
  },
  { slug: "resin-art-products",      name: "Resin Art Islamic Gift Set",              category: "Resin Art",         price: "From ₹1,290", img: "/all-pic/AL-HADAYA/Resin_Art_Products.png", rating: 4,
    description: "Handcrafted resin art Islamic gift set featuring stunning calligraphy. A unique and artistic Muslim gift.",
    features: ["Handcrafted resin art", "Islamic calligraphy design", "Available in various colors", "Comes gift-wrapped", "One-of-a-kind pieces"],
    specs: { Material: "Epoxy Resin", Dimensions: "20×15×5 cm", Weight: "0.7 kg", Packaging: "Bubble wrap + gift box", SKU: "AH-RA-001" },
    sku: "AH-RA-001",
  },
  { slug: "ramadan-hamper",          name: "Ramadan Essentials Hamper",               category: "Ramadan Gifts",     price: "From ₹1,490", img: "/all-pic/AL-HADAYA/Ramadan_Hamper.jpg", rating: 5,
    description: "Everything you need for a blessed Ramadan in one beautiful hamper. Includes dates, prayer essentials, and Islamic books.",
    features: ["Premium Medjool dates", "Quran with translation", "Prayer mat & tasbih", "Dua cards", "Elegant Ramadan packaging"],
    specs: { Material: "Mixed", Dimensions: "35×28×15 cm", Weight: "1.8 kg", Packaging: "Ramadan themed box", SKU: "AH-RG-001" },
    sku: "AH-RG-001",
  },
  { slug: "hajj-umrah-set",          name: "Hajj & Umrah Travel Set",                 category: "Hajj & Umrah",      price: "From ₹1,790", img: "/all-pic/AL-HADAYA/Hajj_Umrah_medium.png", rating: 5,
    description: "A comprehensive Hajj & Umrah travel set with all spiritual essentials for your blessed journey to Makkah and Madinah.",
    features: ["Ihram cloth (2 pieces)", "Travel dua book", "Zamzam bottle", "Tasbih & prayer mat", "Travel organizer bag"],
    specs: { Material: "Cotton & Mixed", Dimensions: "40×30×15 cm", Weight: "2.0 kg", Packaging: "Travel bag", SKU: "AH-HU-001" },
    sku: "AH-HU-001",
  },
  { slug: "kids-gift-set",           name: "Happy Kids Islamic Gift Collection",      category: "Kids Gifts",        price: "From ₹750",   img: "/all-pic/AL-HADAYA/Kids_Gifts.png", rating: 5,
    description: "Fun and educational Islamic gift collection for children. Includes colorful books, a mini prayer mat, and learning tools.",
    features: ["Islamic alphabet book", "Mini prayer mat", "Colorful tasbih", "Dua flash cards", "Age-appropriate activities"],
    specs: { Material: "Paper & Cotton", Dimensions: "28×22×8 cm", Weight: "0.7 kg", Packaging: "Colorful gift box", SKU: "AH-KG-001" },
    sku: "AH-KG-001",
  },
  { slug: "corporate-gift-set",      name: "Premium Corporate Gift Set",              category: "Corporate Gifts",   price: "From ₹3,500", img: "/all-pic/AL-HADAYA/9---Corporate-Gifts.png", rating: 4,
    description: "Elegant premium corporate gift set for Eid and Ramadan business gifting. Perfect for clients, employees, and business partners.",
    features: ["Custom logo branding available", "Premium packaging", "Quran + prayer essentials", "Bulk order discounts", "Pan-India delivery"],
    specs: { Material: "Mixed Premium", Dimensions: "40×32×18 cm", Weight: "2.5 kg", Packaging: "Corporate gift box", SKU: "AH-CG-001" },
    sku: "AH-CG-001",
  },
  { slug: "festivals-gifts",         name: "Festivals Celebration Gift Box",          category: "Ramadan Gifts",     price: "From ₹990",   img: "/all-pic/AL-HADAYA/Festivals_Gifts.png", rating: 4,
    description: "A delightful Islamic festival celebration gift box for Eid, Ramadan, and other special occasions.",
    features: ["Festive Islamic packaging", "Sweets & snacks included", "Prayer accessories", "Personalised greeting card", "Same-day dispatch available"],
    specs: { Material: "Mixed", Dimensions: "30×24×12 cm", Weight: "1.2 kg", Packaging: "Festive gift box", SKU: "AH-RG-002" },
    sku: "AH-RG-002",
  },
  { slug: "personalized-gift",       name: "Personalised Islamic Gift Set",           category: "Quran Gift Sets",   price: "From ₹1,350", img: "/all-pic/AL-HADAYA/Personalized_Gift_medium.png", rating: 5,
    description: "A fully personalised Islamic gift set with custom name engraving and message. The perfect thoughtful gift for any occasion.",
    features: ["Name & message personalisation", "Premium gift wrapping", "Quran with tasbih", "Custom greeting card", "Ready in 2-3 days"],
    specs: { Material: "Mixed Premium", Dimensions: "28×22×10 cm", Weight: "1.0 kg", Packaging: "Custom gift box", SKU: "AH-QGS-005" },
    sku: "AH-QGS-005",
  },
  { slug: "prayer-essentials-set",   name: "Prayer Essentials Gift Bundle",           category: "Prayer Essentials", price: "From ₹1,100", img: "/all-pic/AL-HADAYA/2---Prayer-Essentials.png", rating: 4,
    description: "A complete prayer essentials gift bundle with everything needed for daily Islamic worship. A thoughtful and practical Muslim gift.",
    features: ["Prayer mat (anti-slip)", "Premium tasbih", "Quran stand (rehal)", "Attar fragrance", "Elegant gift box"],
    specs: { Material: "Mixed", Dimensions: "32×26×12 cm", Weight: "1.3 kg", Packaging: "Gift bundle box", SKU: "AH-PE-003" },
    sku: "AH-PE-003",
  },
  { slug: "return-favors-set",       name: "Hajj & Umrah Return Favors",              category: "Return Favors",     price: "From ₹350",   img: "/all-pic/AL-HADAYA/6---Return-Favors.png", rating: 4,
    description: "Beautiful Hajj & Umrah return favor sets for distributing to family and friends after pilgrimage. Available in bulk.",
    features: ["Mini Quran booklet", "Zamzam water bottle", "Small tasbih", "Dua card", "Bulk packs of 10/20/50"],
    specs: { Material: "Mixed", Dimensions: "15×12×5 cm", Weight: "0.2 kg per set", Packaging: "Mini gift pouch", SKU: "AH-RF-001" },
    sku: "AH-RF-001",
  },
  { slug: "resin-art-2",             name: "Wine Elegance Resin Quran Hamper",        category: "Resin Art",         price: "From ₹1,890", img: "/all-pic/AL-HADAYA/Wine_Elegance_Resin_Quran_Hamper_Barkat-e-Jariyah_Islamic_Gift_Set.jpg", rating: 5,
    description: "A stunning wine-colored resin Quran hamper with Barkat-e-Jariyah finish. A luxury Islamic gift for the discerning Muslim.",
    features: ["Deep wine resin art box", "Luxury Quran with binding", "Scented tasbih", "Gold foil detailing", "Free personalisation"],
    specs: { Material: "Resin & Velvet", Dimensions: "32×26×14 cm", Weight: "1.5 kg", Packaging: "Luxury hamper box", SKU: "AH-RA-002" },
    sku: "AH-RA-002",
  },
  { slug: "home-decor-set",          name: "Islamic Home Decor Gift Set",             category: "Home Decor",        price: "From ₹1,990", img: "/all-pic/AL-HADAYA/5---Home-Decor.png", rating: 4,
    description: "Transform any home with this beautiful Islamic home decor gift set featuring calligraphy art and decorative pieces.",
    features: ["Arabic calligraphy frame", "Decorative tasbih holder", "Islamic wall art", "Comes gift-wrapped", "Ready to display"],
    specs: { Material: "Wood & Resin", Dimensions: "35×30×8 cm", Weight: "1.2 kg", Packaging: "Protective gift box", SKU: "AH-HD-001" },
    sku: "AH-HD-001",
  },
  { slug: "clothing-set",            name: "Islamic Modest Fashion Collection",       category: "Attar & Fragrance", price: "From ₹1,250", img: "/all-pic/AL-HADAYA/7---Clothing.png", rating: 4,
    description: "A curated Islamic modest fashion collection featuring premium attar and fragrance accessories.",
    features: ["Premium attar collection (3 scents)", "Elegant attar holder", "Rose water spray", "Oud chips", "Luxury packaging"],
    specs: { Material: "Glass & Crystal", Dimensions: "25×20×10 cm", Weight: "0.8 kg", Packaging: "Luxury attar box", SKU: "AH-AF-001" },
    sku: "AH-AF-001",
  },
  { slug: "eid-hamper",              name: "Tawakkul Eid Hamper Gift Set",            category: "Ramadan Gifts",     price: "From ₹1,690", img: "/all-pic/AL-HADAYA/Tawakkul_Eid_Hamper.png", rating: 5,
    description: "The Tawakkul Eid Hamper is a premium Eid gift set filled with blessings and joy. Perfect for family, friends, and loved ones.",
    features: ["Premium dates & sweets", "Eid Quran set", "Scented candle", "Personalised Eid card", "Eid-themed box"],
    specs: { Material: "Mixed", Dimensions: "38×30×16 cm", Weight: "2.0 kg", Packaging: "Eid gift hamper", SKU: "AH-RG-003" },
    sku: "AH-RG-003",
  },
  { slug: "anniversary-gift",        name: "Anniversary Celebration Gift Box",        category: "Nikah Collection",  price: "From ₹1,490", img: "/all-pic/AL-HADAYA/Anniversary_Gifts.png", rating: 4,
    description: "Celebrate your Islamic anniversary with this beautiful couple's gift box featuring meaningful keepsakes.",
    features: ["Couple's Quran set", "Prayer mats × 2", "His & Hers tasbih", "Personalised dua frame", "Luxury couple packaging"],
    specs: { Material: "Mixed Premium", Dimensions: "40×32×14 cm", Weight: "1.8 kg", Packaging: "Anniversary gift box", SKU: "AH-NC-002" },
    sku: "AH-NC-002",
  },
  { slug: "birthday-gift",           name: "Birthday Gift Celebration Set",           category: "Kids Gifts",        price: "From ₹890",   img: "/all-pic/AL-HADAYA/Birthday_Gift.png", rating: 5,
    description: "An Islamic birthday gift celebration set that combines fun with faith. Perfect for Muslim children and adults alike.",
    features: ["Islamic birthday book", "Fun tasbih for kids", "Mini prayer mat", "Birthday dua card", "Colorful packaging"],
    specs: { Material: "Mixed", Dimensions: "28×22×10 cm", Weight: "0.8 kg", Packaging: "Birthday gift box", SKU: "AH-KG-002" },
    sku: "AH-KG-002",
  },
  { slug: "zamzam-water-set",        name: "Zamzam Water Premium Gift Set",           category: "Hajj & Umrah",      price: "From ₹650",   img: "/all-pic/AL-HADAYA/5_Liter_Zamzam_Water_Cane_Pure_Holy_Zamzam_from_Makkah.png", rating: 5,
    description: "Authentic 5-liter Zamzam water from Makkah — a precious Islamic gift for Hajj returnees and loved ones.",
    features: ["Authentic Zamzam from Makkah", "5L sealed cane container", "Certificate of authenticity", "Safe 3-layer packaging", "Free delivery across India"],
    specs: { Volume: "5 Liters", Origin: "Makkah Al-Mukarramah", Container: "Sealed cane", Shelf_Life: "2 years sealed", SKU: "AH-HU-002" },
    sku: "AH-HU-002",
  },
  { slug: "premium-gifts",           name: "Premium Islamic Gift Collection",         category: "Corporate Gifts",   price: "From ₹2,800", img: "/all-pic/AL-HADAYA/Premium_Gifts_6ee2b317-8c44-4376-8403-a46e659c2ef4.png", rating: 5,
    description: "An ultra-premium Islamic gift collection for the most special occasions. Crafted with the finest materials and attention to detail.",
    features: ["Premium leather-bound Quran", "24K gold-accented tasbih", "Luxury prayer mat", "Oud perfume", "Bespoke gift packaging"],
    specs: { Material: "Leather, Gold, Velvet", Dimensions: "45×38×20 cm", Weight: "3.0 kg", Packaging: "Bespoke luxury box", SKU: "AH-CG-002" },
    sku: "AH-CG-002",
  },
];

type Props = { params: Promise<{ slug: string }> };

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = allProducts.find(p => p.slug === slug);

  if (!product) notFound();

  // Build images array: main image repeated with slight variation for demo thumbnails
  const images = [product.img, product.img, product.img, product.img];

  // Related products: same category, different slug
  const related = allProducts.filter(p => p.category === product.category && p.slug !== product.slug).slice(0, 4);

  return (
    <div className="min-h-screen text-[#1a1a1a]" style={{ background: "#faf8f4" }}>
      <Header />

      {/* Breadcrumb */}
      <div className="border-b border-[#ede8df] bg-white">
        <div className="mx-auto max-w-[1280px] px-5 py-2">
          <nav className="flex items-center gap-1 text-[11px] text-[#aaa] flex-wrap">
            <Link href="/" className="hover:text-[#a4722c] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/collections" className="hover:text-[#a4722c] transition-colors">Collections</Link>
            <span>/</span>
            <Link href={`/collections/${slug}`} className="hover:text-[#a4722c] transition-colors">{product.category}</Link>
            <span>/</span>
            <span className="text-[#a4722c] line-clamp-1">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="mx-auto max-w-[1280px] px-5 py-6">
        {/* Video Preview Section */}
        <VideoPreview
          videoUrl={undefined}
          productName={product.name}
          thumbnail={undefined}
        />

        {/* Main product layout */}
        <div className="flex flex-col gap-6 lg:flex-row lg:gap-8">
          {/* Gallery */}
          <div className="w-full lg:w-[48%]">
            <_Gallery images={images} name={product.name} />
          </div>

          {/* Product details */}
          <div className="flex-1 min-w-0">
            {/* Category + Title */}
            <p className="text-[10.5px] font-bold uppercase tracking-[0.12em] text-[#a4722c] mb-1">
              {product.category}
            </p>
            <h1
              className="text-[22px] font-bold leading-snug text-[#1a1a1a] mb-2"
              style={{ fontFamily: "Georgia, serif" }}
            >
              {product.name}
            </h1>

            {/* Stars + SKU */}
            <div className="flex items-center gap-3 mb-3">
              <div className="flex gap-px">
                {[1,2,3,4,5].map(s => (
                  <svg key={s} width="13" height="13" viewBox="0 0 24 24" fill={s <= product.rating ? "#c9973a" : "#e0d5c5"}>
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
              <span className="text-[11px] text-[#aaa]">({product.rating}.0) · {product.sku}</span>
            </div>

            {/* Short description */}
            <p className="text-[13px] text-[#666] leading-relaxed mb-4">{product.description}</p>

            {/* Features */}
            <ul className="mb-5 flex flex-col gap-1.5">
              {product.features.map(f => (
                <li key={f} className="flex items-start gap-2 text-[12px] text-[#555]">
                  <svg className="shrink-0 mt-0.5" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#a4722c" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  {f}
                </li>
              ))}
            </ul>

            {/* Personalization Options */}
            <div className="mb-5 py-4 border-t border-b border-[#e0d5c5]">
              <PersonalizationWrapper
                isPersonalizable={product.features.some(f => f.toLowerCase().includes("personalisation") || f.toLowerCase().includes("personalization"))}
                onNoteChange={() => {}}
              />
            </div>

            {/* Purchase controls (client) */}
            <_Purchase price={product.price} name={product.name} slug={product.slug} image={product.img} />
          </div>
        </div>

        {/* Tabs: Description | Specifications | Shipping */}
        <_DescriptionTabs product={product} />

        {/* Related products */}
        {related.length > 0 && (
          <div className="mt-10">
            <h2
              className="mb-4 text-[18px] font-bold text-[#1a1a1a]"
              style={{ fontFamily: "Georgia, serif" }}
            >
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {related.map(p => (
                <Link
                  key={p.slug}
                  href={`/products/${p.slug}`}
                  className="group flex flex-col bg-white overflow-hidden transition-all duration-200 hover:shadow-[0_4px_20px_rgba(0,0,0,0.10)]"
                  style={{ borderRadius: 8, border: "1px solid #ede8df" }}
                >
                  <div className="relative w-full overflow-hidden bg-[#fdfaf5]" style={{ aspectRatio: "1/1" }}>
                    <Image
                      src={p.img}
                      alt={p.name}
                      fill
                      className="object-contain p-3 transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 50vw, 25vw"
                    />
                  </div>
                  <div className="px-2.5 py-2">
                    <p className="text-[11.5px] font-medium text-[#1a1a1a] leading-[1.35] line-clamp-2 group-hover:text-[#a4722c] transition-colors">
                      {p.name}
                    </p>
                    <p className="mt-1 text-[12px] font-bold text-[#a4722c]">{p.price}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}

// Server-rendered tabs section
function _DescriptionTabs({ product }: { product: typeof allProducts[0] }) {
  return (
    <div className="mt-8 rounded border border-[#ede8df] bg-white overflow-hidden">
      {/* Tab headers */}
      <div className="flex border-b border-[#ede8df]">
        {["Description", "Specifications", "Shipping & Returns"].map((tab, i) => (
          <div
            key={tab}
            className="px-5 py-3 text-[12px] font-semibold"
            style={{
              color: i === 0 ? "#a4722c" : "#888",
              borderBottom: i === 0 ? "2px solid #a4722c" : "none",
              marginBottom: i === 0 ? -1 : 0,
            }}
          >
            {tab}
          </div>
        ))}
      </div>

      {/* Description tab content (always visible) */}
      <div className="p-5 grid gap-6 lg:grid-cols-2">
        {/* Description */}
        <div>
          <h3 className="mb-2 text-[13px] font-bold text-[#333]">Product Description</h3>
          <p className="text-[12.5px] text-[#666] leading-relaxed">{product.description}</p>

          <h3 className="mt-4 mb-2 text-[13px] font-bold text-[#333]">Key Features</h3>
          <ul className="flex flex-col gap-1.5">
            {product.features.map(f => (
              <li key={f} className="flex items-start gap-2 text-[12px] text-[#555]">
                <svg className="shrink-0 mt-0.5" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#a4722c" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                {f}
              </li>
            ))}
          </ul>
        </div>

        {/* Specs + Shipping */}
        <div>
          <h3 className="mb-2 text-[13px] font-bold text-[#333]">Specifications</h3>
          <table className="w-full text-[12px]">
            <tbody>
              {Object.entries(product.specs).map(([key, val]) => (
                <tr key={key} className="border-b border-[#f5efe5]">
                  <td className="py-1.5 pr-4 font-semibold text-[#555] w-[40%]">{key}</td>
                  <td className="py-1.5 text-[#777]">{val}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h3 className="mt-4 mb-2 text-[13px] font-bold text-[#333]">Shipping & Returns</h3>
          <ul className="flex flex-col gap-1.5">
            {[
              "Free shipping on all orders across India",
              "Estimated delivery: 3–7 business days",
              "3-layer protective packaging for safe delivery",
              "Return window: 7 days for eligible products",
              "Contact us via WhatsApp for return requests",
            ].map(item => (
              <li key={item} className="flex items-start gap-2 text-[12px] text-[#555]">
                <svg className="shrink-0 mt-0.5" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#a4722c" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
