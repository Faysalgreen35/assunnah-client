import Image from "next/image";
import { BotanicalCorner } from "@/components/common/BotanicalCorner";
import { _StatItem } from "./_StatItem";

export function StatsAndMap() {
  return (
    <section className="relative overflow-hidden py-14" style={{ background: "#f5ede0" }}>
      <div className="absolute left-0 top-0 bottom-0 opacity-20 pointer-events-none"><BotanicalCorner /></div>
      <div className="page-width relative z-10">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="relative">
            <div className="flex gap-12 mb-6 ml-8">
              <_StatItem value="16+" label="Countries<br/>Reached" />
              <_StatItem value="19+" label="Cities<br/>Worldwide" />
            </div>
            <div className="flex gap-12 mb-4">
              <_StatItem value="18K+" label="Hearts<br/>Touched" size="lg" />
              <div className="self-end pb-2">
                <_StatItem value="11K+" label="Gifts<br/>Dispatched" size="lg" />
              </div>
            </div>
            <p className="text-[12px] text-[#999] italic">Serving 50k+ customers worldwide with Faith &amp; Care</p>
          </div>
          <div className="relative h-56 w-full">
            <Image src="/all-pic/AL-HADAYA/map.png" alt="Worldwide delivery map" fill className="object-contain opacity-75" sizes="(max-width:768px) 100vw, 50vw" />
          </div>
        </div>
      </div>
    </section>
  );
}
