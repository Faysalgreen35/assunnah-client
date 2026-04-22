import { memo } from "react";
import Image from "next/image";

interface Props {
  title: string;
  desc: string;
  img: string;
}

export const _StoryCard = memo(function StoryCard({ title, desc, img }: Props) {
  return (
    <div
      className="flex flex-col rounded-2xl overflow-hidden"
      style={{ background: "#f5ede0", boxShadow: "0 2px 14px rgba(0,0,0,0.09)" }}
    >
      <div className="px-5 pt-5 pb-0">
        <div className="relative w-full overflow-hidden" style={{ aspectRatio: "3 / 4", borderRadius: "999px 999px 0 0" }}>
          <Image src={img} alt={title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
        </div>
      </div>
      <div className="px-5 py-4">
        <h3 className="mb-1.5 text-[15px] font-bold text-[#1a1a1a]">{title}</h3>
        <p className="text-[12.5px] leading-6 text-[#888]">{desc}</p>
      </div>
    </div>
  );
});
