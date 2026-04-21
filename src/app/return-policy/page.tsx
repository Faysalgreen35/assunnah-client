import { Card, CardBody } from "@/components/ui/nextui";

import { PageShell } from "@/components/layout/page-shell";

export default function ReturnPolicyPage() {
  return (
    <PageShell
      title="Return & Refund Policy"
      description="A storefront policy page aligned with the planned return module and customer-friendly eligibility guidance."
    >
      <section className="grid gap-5 lg:grid-cols-2">
        <Card shadow="none" className="surface-card rounded-[1.75rem]">
          <CardBody className="gap-4 p-6 lg:p-8">
            <h2 className="text-2xl font-semibold text-white">Eligible return conditions</h2>
            <ul className="list-disc space-y-2 pl-5 text-sm leading-7 text-white/70">
              <li>Damaged or incorrect item received</li>
              <li>Product materially different from listing</li>
              <li>Return request submitted within 7 days of delivery</li>
              <li>Item must be unused with original packaging</li>
            </ul>
          </CardBody>
        </Card>

        <Card shadow="none" className="surface-card rounded-[1.75rem]">
          <CardBody className="gap-4 p-6 lg:p-8">
            <h2 className="text-2xl font-semibold text-white">How the process works</h2>
            <ol className="list-decimal space-y-2 pl-5 text-sm leading-7 text-white/70">
              <li>Customer submits a return request with reason and item details.</li>
              <li>Admin reviews and marks request as approved or rejected.</li>
              <li>After approval, return pickup/drop is coordinated.</li>
              <li>Refund is processed based on payment method and status.</li>
            </ol>
            <p className="text-sm text-white/70">
              This flow is designed to connect cleanly with <span className="text-warning-300">/api/v1/return</span>.
            </p>
          </CardBody>
        </Card>
      </section>
    </PageShell>
  );
}
