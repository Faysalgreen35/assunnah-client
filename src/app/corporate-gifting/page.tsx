import { Card, CardBody } from "@/components/ui/nextui";

import { PageShell } from "@/components/layout/page-shell";
import { trustHighlights } from "@/lib/site-data";

export default function CorporateGiftingPage() {
  return (
    <PageShell
      title="Corporate & Bulk Gifting"
      description="A dedicated page for institutional Ramadan, Eid and appreciation gifting flows prepared for the corporate inquiry backend module."
    >
      <section className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
        <Card shadow="none" className="surface-card rounded-[1.75rem]">
          <CardBody className="gap-4 p-6 lg:p-8">
            <h2 className="text-2xl font-semibold text-white">How this flow is prepared</h2>
            <p className="text-sm leading-7 text-white/70">
              The backend roadmap includes corporate inquiries with quantity, budget, occasion, delivery target and
              admin response. This page is structured so you can plug in a form and connect directly to
              <span className="text-warning-300"> /api/v1/corporate-inquiry</span>.
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                "Company and contact details",
                "Product and quantity requirements",
                "Budget and expected delivery date",
                "Status updates from admin team",
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/75">
                  {item}
                </div>
              ))}
            </div>
          </CardBody>
        </Card>

        <Card shadow="none" className="surface-card rounded-[1.75rem]">
          <CardBody className="gap-3 p-6">
            <p className="text-sm uppercase tracking-[0.25em] text-warning-300">Why brands choose us</p>
            {trustHighlights.map((item) => (
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
