import { GoldDivider } from "@/components/common/GoldDivider";
import { CircleCardsRow } from "@/components/common/CircleCardsRow";
import items from "@/data/home/shop-by-occasion.json";

export function ShopByOccasion() {
  return (
    <section className="py-14" style={{ background: "#faf6ef" }}>
      <div className="page-width">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-[#1a1a1a] lg:text-4xl" style={{ fontFamily: "Georgia, serif" }}>
            Shop by <span className="underline decoration-[#a4722c] decoration-2 underline-offset-4">Occasion</span>
          </h2>
          <GoldDivider />
        </div>
        <CircleCardsRow items={items} />
      </div>
    </section>
  );
}
