import { Card, CardBody } from "@/components/ui/nextui";

import { PageShell } from "@/components/layout/page-shell";

export default function ContactPage() {
  return (
    <PageShell
      title="Contact Us"
      description="Reach our support team for order help, product guidance, vendor support and corporate gifting inquiries."
    >
      <section className="grid gap-5 lg:grid-cols-3">
        {[
          { title: "Customer Support", value: "+880 1XXX-XXXXXX", note: "Daily 9:00 AM - 10:00 PM" },
          { title: "Email", value: "support@assunnah.store", note: "Response within 24 hours" },
          { title: "WhatsApp", value: "+880 1XXX-XXXXXX", note: "Quick updates on orders" },
        ].map((item) => (
          <Card key={item.title} shadow="none" className="surface-card rounded-[1.5rem]">
            <CardBody className="gap-2 p-6">
              <p className="text-xs uppercase tracking-[0.25em] text-warning-300">{item.title}</p>
              <p className="text-lg font-semibold text-white">{item.value}</p>
              <p className="text-sm text-white/70">{item.note}</p>
            </CardBody>
          </Card>
        ))}
      </section>
    </PageShell>
  );
}
