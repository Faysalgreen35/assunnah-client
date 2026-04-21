import { Card, CardBody } from "@/components/ui/nextui";

import { PageShell } from "@/components/layout/page-shell";
import { policyHighlights } from "@/lib/site-data";

export default function ShippingPolicyPage() {
  return (
    <PageShell
      title="Shipping Policy"
      description="A clear shipping information page inspired by commerce best practices and ready for backend-configured delivery logic."
    >
      <section className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
        <Card shadow="none" className="surface-card rounded-[1.75rem]">
          <CardBody className="gap-4 p-6 lg:p-8">
            <h2 className="text-2xl font-semibold text-white">Delivery coverage</h2>
            <p className="text-sm leading-7 text-white/70">
              We deliver across Bangladesh with zone-based timelines. Delivery fees and estimated dates can later be
              connected to backend shipping configuration and order checkout calculations.
            </p>
            <h3 className="text-lg font-semibold text-white">Estimated timelines</h3>
            <ul className="list-disc space-y-2 pl-5 text-sm leading-7 text-white/70">
              <li>Inside Dhaka: 1-2 business days</li>
              <li>Outside Dhaka: 2-5 business days</li>
              <li>Peak season (Ramadan/Eid): may take slightly longer</li>
            </ul>
          </CardBody>
        </Card>

        <Card shadow="none" className="surface-card rounded-[1.75rem]">
          <CardBody className="gap-3 p-6">
            <p className="text-sm uppercase tracking-[0.25em] text-warning-300">Key policy points</p>
            {policyHighlights.map((item) => (
              <p key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/75">
                {item}
              </p>
            ))}
          </CardBody>
        </Card>
      </section>
    </PageShell>
  );
}
