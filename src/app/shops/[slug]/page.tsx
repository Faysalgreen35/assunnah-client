import { notFound } from "next/navigation";
import { Card, CardBody } from "@/components/ui/nextui";

import { PageShell } from "@/components/layout/page-shell";
import { getShopBySlug, products } from "@/lib/site-data";

type ShopDetailsProps = {
  params: Promise<{ slug: string }>;
};

export default async function ShopDetailsPage({ params }: ShopDetailsProps) {
  const { slug } = await params;
  const shop = getShopBySlug(slug);

  if (!shop) {
    notFound();
  }

  const shopProducts = products.filter((product) => product.shop === shop.name);

  return (
    <PageShell title={shop.name} description={shop.specialty}>
      <section className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
        <Card shadow="none" className="surface-card rounded-[1.75rem]">
          <CardBody className="gap-4 p-6">
            <p className="text-sm uppercase tracking-[0.25em] text-warning-300">Vendor profile</p>
            <p className="text-sm leading-7 text-white/70">
              Shop pages are arranged to support backend shop profile data, policies, ratings and seller-level product
              analytics.
            </p>
            <p className="text-sm text-white/70">Current rating: {shop.rating} / 5</p>
          </CardBody>
        </Card>

        <div className="grid gap-4 md:grid-cols-2">
          {shopProducts.map((product) => (
            <Card key={product.slug} shadow="none" className="surface-card rounded-[1.5rem]">
              <CardBody className="gap-3 p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-warning-300">{product.category}</p>
                <h2 className="text-lg font-semibold text-white">{product.name}</h2>
                <p className="text-sm leading-6 text-white/70">{product.shortDescription}</p>
                <p className="text-sm font-medium text-warning-300">{product.price}</p>
              </CardBody>
            </Card>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
