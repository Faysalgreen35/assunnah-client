import Link from "next/link";
import { Card, CardBody, Chip } from "@/components/ui/nextui";

import { PageShell } from "@/components/layout/page-shell";
import { occasionTags, products, recipientTags } from "@/lib/site-data";

export default function ProductsPage() {
  return (
    <PageShell
      title="All Products"
      description="Browse storefront-ready product cards aligned to backend product, review, coupon and flash-sale modules."
    >
      <section className="surface-card rounded-[1.75rem] p-6">
        <p className="text-sm uppercase tracking-[0.25em] text-warning-300">Occasions</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {occasionTags.map((tag) => (
            <Chip key={tag} variant="bordered" className="border-white/20 text-white/80">
              {tag}
            </Chip>
          ))}
        </div>
        <p className="mt-6 text-sm uppercase tracking-[0.25em] text-warning-300">Recipients</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {recipientTags.map((tag) => (
            <Chip key={tag} variant="bordered" className="border-white/20 text-white/80">
              {tag}
            </Chip>
          ))}
        </div>
      </section>

      <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {products.map((product) => (
          <Card key={product.slug} shadow="none" className="surface-card rounded-[1.5rem]">
            <CardBody className="gap-4 p-6">
              <p className="text-xs uppercase tracking-[0.25em] text-warning-300">{product.category}</p>
              <h2 className="text-2xl font-semibold text-white">{product.name}</h2>
              <p className="text-sm leading-6 text-white/70">{product.shortDescription}</p>
              <div className="flex flex-wrap gap-2">
                {product.recipients.map((recipient) => (
                  <Chip key={recipient} size="sm" variant="flat" className="bg-white/10 text-white/80">
                    {recipient}
                  </Chip>
                ))}
              </div>
              <div className="flex items-center justify-between">
                <p className="text-lg font-semibold text-warning-300">{product.price}</p>
                <Link href={`/products/${product.slug}`} className="text-sm font-medium text-warning-300">
                  View details →
                </Link>
              </div>
            </CardBody>
          </Card>
        ))}
      </section>
    </PageShell>
  );
}
