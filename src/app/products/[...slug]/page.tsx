import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { _Gallery } from "./_Gallery";
import { _Purchase } from "./_Purchase";
import { VideoPreview } from "@/components/product/VideoPreview";
import { PersonalizationWrapper } from "./_PersonalizationWrapper";
import productsData from "@/data/all-products.json";

type Props = { params: Promise<{ slug: string[] }> };

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const fullSlug = slug.join('/');
  const product = (productsData as any[]).find((p: any) => p.slug === fullSlug);

  if (!product) notFound();

  // Build images array: main image repeated with slight variation for demo thumbnails
  const images = [product.img, product.img, product.img, product.img];

  // Related products: same category, different slug
  const related = (productsData as any[]).filter((p: any) => p.category === product.category && p.slug !== product.slug).slice(0, 4);

  // Build product object with formatted price and default specs
  const numericPrice = typeof product.price === 'number' ? product.price : parseInt(String(product.price).replace(/[^\d]/g, '')) || 0;
  const displayProduct: any = {
    ...product,
    numericPrice,
    price: typeof product.price === 'number' ? `₹${product.price.toLocaleString('en-IN')}` : product.price,
    features: product.features || [`Premium quality item`, `Beautifully packaged`, `Perfect Islamic gift`],
    specs: product.specs || {
      Material: "Mixed",
      Dimensions: "Standard",
      Weight: "Varies",
      Packaging: "Gift box",
      SKU: product.slug?.toUpperCase() || "SKU"
    },
    sku: product.sku || product.slug?.toUpperCase() || "SKU",
    rating: product.rating || 5,
    description: product.description || "A beautiful Islamic gift for special occasions."
  };

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
            <Link href={`/collections/${slug[0]}`} className="hover:text-[#a4722c] transition-colors">{displayProduct.category}</Link>
            <span>/</span>
            <span className="text-[#a4722c] line-clamp-1">{displayProduct.name}</span>
          </nav>
        </div>
      </div>

      <div className="mx-auto max-w-[1280px] px-5 py-6">
        {/* Video Preview Section */}
        <VideoPreview
          videoUrl={undefined}
          productName={displayProduct.name}
          thumbnail={undefined}
        />

        {/* Main product layout */}
        <div className="flex flex-col gap-6 lg:flex-row lg:gap-8">
          {/* Gallery */}
          <div className="w-full lg:w-[48%]">
            <_Gallery images={images} name={displayProduct.name} />
          </div>

          {/* Product details */}
          <div className="flex-1 min-w-0">
            {/* Category + Title */}
            <p className="text-[10.5px] font-bold uppercase tracking-[0.12em] text-[#a4722c] mb-1">
              {displayProduct.category}
            </p>
            <h1
              className="text-[22px] font-bold leading-snug text-[#1a1a1a] mb-2"
              style={{ fontFamily: "Georgia, serif" }}
            >
              {displayProduct.name}
            </h1>

            {/* Stars + SKU */}
            <div className="flex items-center gap-3 mb-3">
              <div className="flex gap-px">
                {[1,2,3,4,5].map(s => (
                  <svg key={s} width="13" height="13" viewBox="0 0 24 24" fill={s <= displayProduct.rating ? "#c9973a" : "#e0d5c5"}>
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
              <span className="text-[11px] text-[#aaa]">({displayProduct.rating}.0) · {displayProduct.sku}</span>
            </div>

            {/* Short description */}
            <p className="text-[13px] text-[#666] leading-relaxed mb-4">{displayProduct.description}</p>

            {/* Features */}
            <ul className="mb-5 flex flex-col gap-1.5">
              {displayProduct.features.map((f: string) => (
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
                isPersonalizable={displayProduct.features.some((f: string) => f.toLowerCase().includes("personalisation") || f.toLowerCase().includes("personalization"))}
              />
            </div>

            {/* Purchase controls (client) */}
            <_Purchase
              price={displayProduct.price}
              numericPrice={displayProduct.numericPrice}
              name={displayProduct.name}
              slug={displayProduct.slug}
              image={displayProduct.img}
            />
          </div>
        </div>

        {/* Tabs: Description | Specifications | Shipping */}
        <_DescriptionTabs product={displayProduct} />

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
              {related.map((p: any) => {
                const displayPrice = typeof p.price === 'number' ? `₹${p.price.toLocaleString('en-IN')}` : p.price;
                return (
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
                      <p className="mt-1 text-[12px] font-bold text-[#a4722c]">{displayPrice}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}

// Server-rendered tabs section
function _DescriptionTabs({ product }: { product: any }) {
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
            {product.features.map((f: string) => (
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
              {Object.entries(product.specs || {}).map(([key, val]: [string, any]) => (
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
