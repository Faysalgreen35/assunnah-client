"use client";

import { useState, useEffect } from "react";
import slidesData from "@/data/home/slides.json";
import { _Slide } from "./_Slide";
import { _SlideControls } from "./_SlideControls";

export function HeroSlideshow() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive(a => (a + 1) % slidesData.length), 5000);
    return () => clearInterval(t);
  }, []);

  const prev = () => setActive(a => (a - 1 + slidesData.length) % slidesData.length);
  const next = () => setActive(a => (a + 1) % slidesData.length);

  return (
    <div className="relative w-full overflow-hidden" style={{ height: "520px" }}>
      {slidesData.map((s, i) => (
        <_Slide key={s.id} img={s.img} title={s.title} active={i === active} />
      ))}
      <_SlideControls
        total={slidesData.length}
        active={active}
        onDot={setActive}
        onPrev={prev}
        onNext={next}
      />
    </div>
  );
}
