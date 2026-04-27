import { GoldDivider } from "@/components/common/GoldDivider";
import { _DiagonalCardsRow } from "./_DiagonalCardsRow";
import items from "@/data/home/shop-by-relations.json";

export function ShopByRelations() {
  return (
    <section className="py-14 bg-white">
      <div className="page-width">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-[#1a1a1a] lg:text-4xl" style={{ fontFamily: "Georgia, serif" }}>
            Shop by <span className="underline decoration-[#a4722c] decoration-2 underline-offset-4">Relations</span>
          </h2>
          <GoldDivider />
        </div>
        <_DiagonalCardsRow items={items} />
      </div>
    </section>
  );
}
