import type { ReactNode } from "react";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

type PageShellProps = {
  title: string;
  description: string;
  children: ReactNode;
  actions?: ReactNode;
};

export function PageShell({ title, description, children, actions }: PageShellProps) {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(250,204,21,0.14),_transparent_25%),linear-gradient(180deg,_#07111f_0%,_#081325_100%)]">
      <Header />
      <main className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <section className="surface-card rounded-[2rem] p-6 lg:p-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.3em] text-warning-300">As-Sunnah Store</p>
              <h1 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">{title}</h1>
              <p className="max-w-3xl text-sm leading-7 text-white/70 sm:text-base">{description}</p>
            </div>
            {actions ? <div className="flex flex-wrap gap-3">{actions}</div> : null}
          </div>
        </section>
        {children}
      </main>
      <Footer />
    </div>
  );
}
