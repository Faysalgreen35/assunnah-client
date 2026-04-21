import Image from "next/image";
import { GoldDivider } from "@/components/common/GoldDivider";
import { BotanicalCorner } from "@/components/common/BotanicalCorner";
import { _PriceBox } from "./_PriceBox";
import priceBoxes from "@/data/home/shop-by-price.json";

export function ShopByPrice() {
  return (
    <section className="relative overflow-hidden py-14" style={{ background: "#faf6ef" }}>
      <div className="absolute top-0 right-0 opacity-40"><BotanicalCorner flip /></div>
      <div className="absolute bottom-0 left-0 opacity-30" style={{ transform: "rotate(180deg)" }}><BotanicalCorner /></div>

      <div className="page-width relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-[#1a1a1a] lg:text-4xl" style={{ fontFamily: "Georgia, serif" }}>
            Shop by <span className="underline decoration-[#a4722c] decoration-2 underline-offset-4">Price</span>
          </h2>
          <GoldDivider />
        </div>
        <div className="relative flex items-center justify-center" style={{ minHeight: "380px" }}>
          <div className="relative h-80 w-72 z-10">
            <Image src="/all-pic/AL-HADAYA/price-image.png" alt="Shop by price" fill className="object-contain" sizes="288px" />
          </div>
          {priceBoxes.map(box => (
            <_PriceBox key={box.price} label={box.label} price={box.price} pos={box.pos} />
          ))}
        </div>
      </div>
    </section>
  );
}
