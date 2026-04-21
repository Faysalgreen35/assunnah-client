import { GoldDivider } from "@/components/common/GoldDivider";
import { _HeroCard } from "./_HeroCard";
import { _AbroadCard } from "./_AbroadCard";
import abroadData from "@/data/home/send-gifts-abroad.json";

export function SendGiftsAbroad() {
  return (
    <section className="py-14" style={{ background: "#faf6ef" }}>
      <div className="page-width">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-[#1a1a1a] lg:text-4xl" style={{ fontFamily: "Georgia, serif" }}>
            Send Gifts <span className="underline decoration-[#a4722c] decoration-2 underline-offset-4">Abroad</span>
          </h2>
          <GoldDivider />
        </div>
        <div className="grid grid-cols-3 gap-3 sm:grid-cols-5 lg:grid-cols-6">
          <_HeroCard img={abroadData.hero.img} label={abroadData.hero.label} subtitle={abroadData.hero.subtitle} />
          {abroadData.items.map(item => (
            <_AbroadCard key={item.label} img={item.img} label={item.label} flag={item.flag ?? undefined} />
          ))}
        </div>
      </div>
    </section>
  );
}
