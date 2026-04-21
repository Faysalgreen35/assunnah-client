import Link from "next/link";
import { Card, CardBody } from "@/components/ui/nextui";

import { PageShell } from "@/components/layout/page-shell";
import { shopHighlights, shops } from "@/lib/site-data";

export default function ShopsPage() {
  return (
    <PageShell
      title="Trusted Shops"
      description="Discover seller storefronts prepared for your vendor and shop modules with room for ratings, catalogs and policy badges."
    >
      <section className="grid gap-5 md:grid-cols-3">
        {shopHighlights.map((item) => (
          <Card key={item.title} shadow="none" className="surface-card rounded-[1.5rem]">
            <CardBody className="gap-3 p-6">
              <h2 className="text-xl font-semibold text-white">{item.title}</h2>
              <p className="text-sm leading-6 text-white/70">{item.description}</p>
            </CardBody>
          </Card>
        ))}
      </section>

      <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {shops.map((shop) => (
          <Card key={shop.slug} shadow="none" className="surface-card rounded-[1.5rem]">
            <CardBody className="gap-3 p-6">
              <p className="text-xs uppercase tracking-[0.25em] text-warning-300">Rating {shop.rating}</p>
              <h3 className="text-xl font-semibold text-white">{shop.name}</h3>
              <p className="text-sm leading-6 text-white/70">{shop.specialty}</p>
              <Link href={`/shops/${shop.slug}`} className="text-sm font-medium text-warning-300">
                Visit shop →
              </Link>
            </CardBody>
          </Card>
        ))}
      </section>
    </PageShell>
  );
}
