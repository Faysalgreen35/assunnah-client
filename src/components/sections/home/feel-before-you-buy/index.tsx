import { GoldDivider } from "@/components/common/GoldDivider";
import { SwiperRow } from "@/components/common/SwiperRow";
import { _ArchCard } from "./_ArchCard";
import products from "@/data/home/feel-before-you-buy.json";

export function FeelBeforeYouBuy() {
  return (
    <section className="py-14 bg-white">
      <div className="page-width">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-[#a4722c] lg:text-4xl" style={{ fontFamily: "Georgia, serif", fontStyle: "italic" }}>
            Feel Before You Buy
          </h2>
          <GoldDivider />
        </div>
        <SwiperRow gridClassName="grid-cols-2 md:grid-cols-4">
          {products.map(item => (
            <_ArchCard key={item.name} name={item.name} img={item.img} />
          ))}
        </SwiperRow>
      </div>
    </section>
  );
}
