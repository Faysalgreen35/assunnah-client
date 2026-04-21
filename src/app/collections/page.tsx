import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const categories = [
  {
    slug: "quran-gift-sets",
    name: "Quran Gift Sets",
    count: "26 products",
    img: "/all-pic/AL-HADAYA/1---Quran-Gift-Set.png",
    aspect: "portrait",
  },
  {
    slug: "prayer-essentials",
    name: "Prayer Essentials",
    count: "18 products",
    img: "/all-pic/AL-HADAYA/2---Prayer-Essentials.png",
    aspect: "portrait",
  },
  {
    slug: "nikah-collection",
    name: "Nikah Collection",
    count: "14 products",
    img: "/all-pic/AL-HADAYA/Nikah_Return.png",
    aspect: "portrait",
  },
  {
    slug: "ramadan-gifts",
    name: "Ramadan Gifts",
    count: "22 products",
    img: "/all-pic/AL-HADAYA/Ramadan_Hamper.jpg",
    aspect: "square",
  },
  {
    slug: "hajj-umrah",
    name: "Hajj & Umrah",
    count: "16 products",
    img: "/all-pic/AL-HADAYA/Hajj_Umrah_medium.png",
    aspect: "portrait",
  },
  {
    slug: "kids-gifts",
    name: "Kids Gifts",
    count: "20 products",
    img: "/all-pic/AL-HADAYA/Kids_Gifts.png",
    aspect: "portrait",
  },
  {
    slug: "resin-art",
    name: "Resin Art",
    count: "12 products",
    img: "/all-pic/AL-HADAYA/Resin_Art_Products.png",
    aspect: "square",
  },
  {
    slug: "corporate-gifts",
    name: "Corporate Gifts",
    count: "10 products",
    img: "/all-pic/AL-HADAYA/9---Corporate-Gifts.png",
    aspect: "portrait",
  },
  {
    slug: "home-decor",
    name: "Home Decor",
    count: "15 products",
    img: "/all-pic/AL-HADAYA/5---Home-Decor.png",
    aspect: "square",
  },
  {
    slug: "return-favors",
    name: "Return Favors",
    count: "18 products",
    img: "/all-pic/AL-HADAYA/6---Return-Favors.png",
    aspect: "portrait",
  },
  {
    slug: "eid-gifts",
    name: "Eid Gifts",
    count: "24 products",
    img: "/all-pic/AL-HADAYA/Tawakkul_Eid_Hamper.png",
    aspect: "portrait",
  },
  {
    slug: "personalized-gifts",
    name: "Personalised Gifts",
    count: "19 products",
    img: "/all-pic/AL-HADAYA/Personalized_Gift_medium.png",
    aspect: "square",
  },
  {
    slug: "clothing",
    name: "Clothing",
    count: "8 products",
    img: "/all-pic/AL-HADAYA/7---Clothing.png",
    aspect: "portrait",
  },
  {
    slug: "festivals-gifts",
    name: "Festivals Gifts",
    count: "11 products",
    img: "/all-pic/AL-HADAYA/Festivals_Gifts.png",
    aspect: "square",
  },
  {
    slug: "birthday-gifts",
    name: "Birthday Gifts",
    count: "13 products",
    img: "/all-pic/AL-HADAYA/Birthday_Gift.png",
    aspect: "portrait",
  },
  {
    slug: "on-trend",
    name: "On Trend",
    count: "30 products",
    img: "/all-pic/AL-HADAYA/8---On-Trend.png",
    aspect: "portrait",
  },
  {
    slug: "international",
    name: "International Gifts",
    count: "9 products",
    img: "/all-pic/AL-HADAYA/10---International.png",
    aspect: "square",
  },
  {
    slug: "shop-by-occasion",
    name: "Shop by Occasion",
    count: "All occasions",
    img: "/all-pic/AL-HADAYA/3---Shop-by-Occasion_d2baa224-9fe0-431f-8c90-4ddf1a933c09.png",
    aspect: "portrait",
  },
];

export default function CollectionsPage() {
  return (
    <div className="min-h-screen bg-[#faf6ef] text-[#1a1a1a]">
      <Header />

      {/* Breadcrumb */}
      <div className="border-b border-[#e8dcc8] bg-white">
        <div className="mx-auto max-w-[1280px] px-5 py-2.5">
          <nav className="flex items-center gap-1.5 text-[12px] text-[#888]">
            <Link href="/" className="hover:text-[#a4722c] transition-colors">Home</Link>
            <span className="text-[#ccc]">/</span>
            <span className="text-[#a4722c] font-semibold">Collections</span>
          </nav>
        </div>
      </div>

      {/* Page Header */}
      <div className="border-b border-[#e8dcc8] bg-white">
        <div className="mx-auto max-w-[1280px] px-5 py-5">
          <h1 className="text-2xl font-bold text-[#1a1a1a]" style={{ fontFamily: "Georgia, serif" }}>
            All Collections
          </h1>
          <p className="mt-1 text-[13px] text-[#888]">
            Browse {categories.length} curated gift collections
          </p>
        </div>
      </div>

      {/* Masonry Category Grid */}
      <div className="mx-auto max-w-[1280px] px-5 py-8">
        <div
          className="gap-3"
          style={{
            columnCount: 3,
            columnGap: "12px",
          }}
        >
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/collections/${cat.slug}`}
              className="group relative mb-3 block overflow-hidden rounded-2xl border border-[#e8dcc8] bg-white transition-all hover:shadow-lg hover:border-[#c4a87a]"
              style={{ breakInside: "avoid" }}
            >
              {/* Image */}
              <div
                className="relative w-full overflow-hidden"
                style={{ aspectRatio: cat.aspect === "portrait" ? "3/4" : "1/1" }}
              >
                <Image
                  src={cat.img}
                  alt={cat.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                {/* Dark gradient overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                {/* Text overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h2 className="text-[15px] font-bold text-white leading-5 mb-0.5">
                    {cat.name}
                  </h2>
                  <p className="text-[11px] text-white/75 font-medium">{cat.count}</p>
                </div>

                {/* Arrow on hover */}
                <div className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/0 text-white opacity-0 transition-all duration-300 group-hover:bg-white/20 group-hover:opacity-100">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
