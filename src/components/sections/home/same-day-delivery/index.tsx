import { GoldDivider } from "@/components/common/GoldDivider";
import { SwiperRow } from "@/components/common/SwiperRow";
import { _DeliveryCard } from "./_DeliveryCard";
import items from "@/data/home/same-day-delivery.json";

export function SameDayDelivery() {
  return (
    <section className="py-14 bg-white">
      <div className="page-width">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-[#1a1a1a] lg:text-4xl" style={{ fontFamily: "Georgia, serif" }}>
            Same Day <span className="underline decoration-[#a4722c] decoration-2 underline-offset-4">Delivery</span>
          </h2>
          <GoldDivider />
        </div>
        <SwiperRow
          gridClassName="grid-cols-2 md:grid-cols-4"
          mobileSlides={3}
          autoplay
          autoplayDelay={2000}
        >
          {items.map(item => (
            <_DeliveryCard key={item.label} label={item.label} img={item.img} />
          ))}
        </SwiperRow>
      </div>
    </section>
  );
}
