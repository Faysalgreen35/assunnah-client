import Image from "next/image";
import type { ITrustBadge } from "@/types/footer";

export function _TrustBadges({ badges }: { badges: ITrustBadge[] }) {
  return (
    <div className="py-6" style={{ background: "#faf6ef" }}>
      <div className="mx-auto max-w-[1280px] px-5">
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          {badges.map((badge, i) => (
            <div key={i} className="flex items-center gap-3 rounded-2xl border border-[#e8dcc8] bg-white px-4 py-4 shadow-sm">
              <div className="relative h-10 w-10 shrink-0">
                <Image src={badge.img} alt={badge.title} fill className="object-contain" sizes="40px" />
              </div>
              <p className="text-[12px] leading-5 text-[#666]">
                <span className="font-semibold text-[#333]">{badge.title} </span>
                {badge.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
