"use client";

import { Accordion, AccordionItem } from "@/components/ui/nextui";

import { PageShell } from "@/components/layout/page-shell";
import { faqs } from "@/lib/site-data";

export default function FaqPage() {
  return (
    <PageShell
      title="Frequently Asked Questions"
      description="Answers for shipping, returns, personalization, filters and bulk-order support based on your backend roadmap."
    >
      <section className="surface-card rounded-[1.75rem] p-4 sm:p-6">
        <Accordion selectionMode="multiple" itemClasses={{ title: "text-white", content: "text-white/70" }}>
          {faqs.map((faq) => (
            <AccordionItem key={faq.question} aria-label={faq.question} title={faq.question}>
              <p className="leading-7">{faq.answer}</p>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </PageShell>
  );
}
