import Image from "next/image";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import {
  HeroSlideshow,
  WelcomeSection,
  MostLovedGifts,
  FaithInspiredBanner,
  TabbedCollections,
  FeelBeforeYouBuy,
  ShopByRelations,
  ShopByPrice,
  SameDayDelivery,
  SendGiftsAbroad,
  GoogleReviews,
  IndustryLeaders,
  StatsAndMap,
  InstagramFeed,
  OurStory,
  LatestNews,
} from "@/components/sections/home";

export default function Home() {
  return (
    <div className="min-h-screen bg-bg text-heading">
      <Header />
      <HeroSlideshow />
      <WelcomeSection />
      <MostLovedGifts />
      <FaithInspiredBanner />
      <TabbedCollections />
      <FeelBeforeYouBuy />
      <ShopByRelations />
      <ShopByPrice />
      <SameDayDelivery />
      <SendGiftsAbroad />
      <GoogleReviews />
      <IndustryLeaders />
      <StatsAndMap />
      <InstagramFeed />
      <OurStory />
      <LatestNews />

      {/* Life is a Journey Banner */}
      <section className="py-8 bg-white">
        <div className="page-width">
          <div className="relative w-full overflow-hidden rounded-2xl shadow-sm" style={{ border: "1px solid #e8dcc8", aspectRatio: "1200 / 160" }}>
            <Image src="/al-hadaya/before-footer.png" alt="Life is a Journey from Allah, to Allah" fill className="object-cover object-center" sizes="(max-width: 1280px) 100vw, 1200px" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
