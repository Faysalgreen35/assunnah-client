import { GoldDivider } from "@/components/common/GoldDivider";
import { BotanicalCorner } from "@/components/common/BotanicalCorner";
import { _FeatureCard } from "./_FeatureCard";

const features = [
  {
    title: "Faith-Centered & Meaningful",
    desc: "Every gift is designed to be more than just beautiful — it's rooted in faith and carries spiritual meaning & love.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 48 48" fill="none" stroke="#a4722c" strokeWidth="1.4" strokeLinecap="round">
        <circle cx="24" cy="15" r="7"/>
        <path d="M12 40c0-6.627 5.373-12 12-12s12 5.373 12 12"/>
        <path d="M24 8L24 4M17 10.5L14 7.5M31 10.5L34 7.5"/>
        <circle cx="24" cy="15" r="3" fill="#a4722c" stroke="none" fillOpacity="0.2"/>
      </svg>
    ),
  },
  {
    title: "Thoughtful Gifting",
    desc: "Crafted to bring joy, strengthen bonds, and inspire hearts. Our gifts carry intention, faith, and love — making them truly unforgettable.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 48 48" fill="none" stroke="#a4722c" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <rect x="8" y="20" width="32" height="22" rx="2"/>
        <path d="M8 26h32M24 20v22"/>
        <path d="M24 20C24 20 16 16 16 10c0-3 2.5-5 5-5 1.5 0 3 1 3 1s1.5-1 3-1c2.5 0 5 2 5 5 0 6-8 10-8 10Z"/>
      </svg>
    ),
  },
  {
    title: "Personalizable",
    desc: "From names to special messages, our gifts can be personalised to make every occasion uniquely yours.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 48 48" fill="none" stroke="#a4722c" strokeWidth="1.4" strokeLinecap="round">
        <rect x="8" y="8" width="32" height="32" rx="3"/>
        <path d="M15 20h18M15 26h12M15 32h8"/>
        <path d="M30 8v10l8-8Z" fill="#a4722c" fillOpacity="0.15" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

export function WelcomeSection() {
  return (
    <section className="relative overflow-hidden py-14 -mt-10 z-10 bg-surface" style={{ borderRadius: "40px 40px 0 0" }}>
      <div className="absolute top-0 left-0 opacity-60"><BotanicalCorner /></div>
      <div className="absolute top-0 right-0 opacity-60"><BotanicalCorner flip /></div>

      <div className="page-width relative z-10">
        <div className="mb-10 text-center">
          <p className="mb-1 text-[22px] text-primary" style={{ fontFamily: "Georgia, serif", letterSpacing: "0.04em" }}>
            السلام عليكم ورحمة الله وبركاته
          </p>
          <p className="text-3xl font-bold italic text-[#a4722c]" style={{ fontFamily: "Georgia, serif" }}>
            Welcome to As-Sunnah
          </p>
          <GoldDivider />
        </div>

        <div className="grid md:grid-cols-3">
          {features.map((feat, i) => (
            <_FeatureCard key={feat.title} {...feat} bordered={i < 2} />
          ))}
        </div>
      </div>
    </section>
  );
}
