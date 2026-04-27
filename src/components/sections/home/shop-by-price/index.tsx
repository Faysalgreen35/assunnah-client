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

        {/* Desktop Layout */}
        <div className="hidden md:flex relative items-center justify-center" style={{ minHeight: "600px" }}>
          <div className="relative" style={{ height: "500px", width: "450px" }}>
            <Image src="/all-pic/AL-HADAYA/price-image.png" alt="Shop by price" fill className="object-contain" sizes="450px" />
          </div>
          {priceBoxes.map(box => (
            <_PriceBox key={box.price} label={box.label} price={box.price} pos={box.pos} />
          ))}
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden relative" style={{
          minHeight: "520px",
          backgroundImage: "url(/all-pic/AL-HADAYA/price-image.png)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center"
        }}>
          {/* Gray Overlay */}
          <div className="absolute inset-0 bg-gray-400 opacity-20"></div>

          <div className="absolute inset-0 flex flex-col items-center p-4 pt-16">
            {/* Top Row - 2 boxes */}
            <div className="flex gap-8 justify-center w-full mb-20">
              <_PriceBox label={priceBoxes[0].label} price={priceBoxes[0].price} pos="" isMobile />
              <_PriceBox label={priceBoxes[1].label} price={priceBoxes[1].price} pos="" isMobile />
            </div>

            {/* Middle - 1 box */}
            <div className="flex justify-center mb-20 flex-1 flex-col justify-center">
              <_PriceBox label={priceBoxes[2].label} price={priceBoxes[2].price} pos="" isMobile />
            </div>

            {/* Bottom Row - 2 boxes */}
            <div className="flex gap-8 justify-center w-full">
              <_PriceBox label={priceBoxes[3].label} price={priceBoxes[3].price} pos="" isMobile />
              <_PriceBox label={priceBoxes[4].label} price={priceBoxes[4].price} pos="" isMobile />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
