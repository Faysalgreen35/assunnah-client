import Link from "next/link";
import { Card, CardBody, Chip } from "@/components/ui/nextui";

import { PageShell } from "@/components/layout/page-shell";
import { products } from "@/lib/site-data";

const wishlistPreview = products.slice(0, 3);

export default function WishlistPage() {
  return (
    <PageShell
      title="My Wishlist"
      description="A saved-items experience prepared for the wishlist API flow so customers can collect products before checkout."
    >
      <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {wishlistPreview.map((product) => (
          <Card key={product.slug} shadow="none" className="surface-card rounded-[1.5rem]">
            <CardBody className="gap-4 p-6">
              <p className="text-xs uppercase tracking-[0.25em] text-warning-300">{product.category}</p>
              <h2 className="text-xl font-semibold text-white">{product.name}</h2>
              <p className="text-sm leading-6 text-white/70">{product.shortDescription}</p>
              <div className="flex items-center justify-between">
                <Chip size="sm" variant="flat" className="bg-white/10 text-white/80">
                  Rating {product.rating}
                </Chip>
                <Link href={`/products/${product.slug}`} className="text-sm font-medium text-warning-300">
                  Open product →
                </Link>
              </div>
            </CardBody>
          </Card>
        ))}
      </section>
    </PageShell>
  );
}
