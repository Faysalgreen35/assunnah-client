import Link from "next/link";
import { Card, CardBody } from "@/components/ui/nextui";

import { PageShell } from "@/components/layout/page-shell";
import { categoryHighlights } from "@/lib/site-data";

export default function CategoriesPage() {
  return (
    <PageShell
      title="Shop by Category"
      description="Explore Islamic gifting collections mapped to your backend category module and ready for nested category growth."
    >
      <section className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {categoryHighlights.map((category) => (
          <Card key={category.slug} shadow="none" className="surface-card rounded-[1.5rem]">
            <CardBody className="gap-4 p-6">
              <p className="text-xs uppercase tracking-[0.25em] text-warning-300">Category</p>
              <h2 className="text-2xl font-semibold text-white">{category.title}</h2>
              <p className="text-sm leading-6 text-white/70">{category.description}</p>
              <Link href={`/categories/${category.slug}`} className="text-sm font-medium text-warning-300">
                View category details →
              </Link>
            </CardBody>
          </Card>
        ))}
      </section>
    </PageShell>
  );
}
