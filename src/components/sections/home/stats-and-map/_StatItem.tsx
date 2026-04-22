import { memo } from "react";

interface Props {
  value: string;
  label: string;
  size?: "lg" | "sm";
}

export const _StatItem = memo(function StatItem({ value, label, size = "sm" }: Props) {
  return (
    <div>
      <p
        className={`font-extrabold text-[#a4722c] ${size === "lg" ? "text-5xl" : "text-3xl"}`}
        style={{ fontFamily: "Georgia, serif" }}
      >
        {value}
      </p>
      <p className="text-[12px] text-[#888] font-medium leading-4 mt-1" dangerouslySetInnerHTML={{ __html: label }} />
    </div>
  );
});
