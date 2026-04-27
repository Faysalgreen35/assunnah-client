import { GoldDivider } from "@/components/common/GoldDivider";
import { _ArchCard } from "./_ArchCard";
import items from "@/data/home/most-loved-gifts.json";

export function MostLovedGifts() {
  return (
    <section className="py-14" style={{ background: "#faf6ef" }}>
      <div className="page-width">
        <div className="text-center mb-10">
          <h2
            className="text-4xl font-bold text-[#a4722c]"
            style={{ fontFamily: "Georgia, serif", fontStyle: "italic" }}
          >
            Most Loved{" "}
            <span className="underline decoration-[#a4722c] decoration-2 underline-offset-4">
              Gifts
            </span>
          </h2>
          <GoldDivider />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
          {items.map(item => (
            <_ArchCard key={item.slug} name={item.name} slug={item.slug} img={item.img} />
          ))}
        </div>
      </div>
    </section>
  );
}
