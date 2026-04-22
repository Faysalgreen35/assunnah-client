import { GoldDivider } from "@/components/common/GoldDivider";
import { BotanicalCorner } from "@/components/common/BotanicalCorner";
import { SwiperRow } from "@/components/common/SwiperRow";
import { _StoryCard } from "./_StoryCard";
import stories from "@/data/home/our-story.json";

export function OurStory() {
  return (
    <section className="relative overflow-hidden py-14" style={{ background: "#faf6ef" }}>
      <div className="absolute top-0 left-0 opacity-55 pointer-events-none"><BotanicalCorner /></div>
      <div className="absolute top-0 right-0 opacity-55 pointer-events-none"><BotanicalCorner flip /></div>

      <div className="page-width relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#a4722c] lg:text-4xl" style={{ fontFamily: "Georgia, serif", fontStyle: "italic" }}>
            Our Story
          </h2>
          <GoldDivider />
        </div>
        <SwiperRow gridClassName="grid-cols-1 md:grid-cols-3" spaceBetween={32}>
          {stories.map(story => (
            <_StoryCard key={story.title} title={story.title} desc={story.desc} img={story.img} />
          ))}
        </SwiperRow>
      </div>
    </section>
  );
}
