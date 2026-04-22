import { memo, type ReactNode } from "react";

interface Props {
  title: string;
  desc: string;
  icon: ReactNode;
  bordered: boolean;
}

export const _FeatureCard = memo(function FeatureCard({ title, desc, icon, bordered }: Props) {
  return (
    <div className={`flex flex-col items-center text-center px-8 py-10 ${bordered ? "md:border-r border-border" : ""}`}>
      <div
        className="mb-5 flex items-center justify-center rounded-full bg-surface-raised"
        style={{ width: 72, height: 72, border: "1px solid var(--color-border)" }}
      >
        {icon}
      </div>
      <h3 className="mb-3 text-[15px] font-bold text-heading">{title}</h3>
      <p className="text-[13px] leading-7 text-muted">{desc}</p>
    </div>
  );
});
