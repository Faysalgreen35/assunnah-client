interface Props {
  total: number;
  active: number;
  onDot: (i: number) => void;
  onPrev: () => void;
  onNext: () => void;
}

export function _SlideControls({ total, active, onDot, onPrev, onNext }: Props) {
  return (
    <>
      {/* Dot indicators */}
      <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2 z-10">
        {Array.from({ length: total }).map((_, i) => (
          <button
            key={i}
            onClick={() => onDot(i)}
            className={`h-1.5 rounded-full transition-all ${i === active ? "w-8 bg-white" : "w-2 bg-white/50"}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Prev */}
      <button
        onClick={onPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/20 hover:bg-black/40 text-white text-2xl transition-colors"
        aria-label="Previous slide"
      >‹</button>

      {/* Next */}
      <button
        onClick={onNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/20 hover:bg-black/40 text-white text-2xl transition-colors"
        aria-label="Next slide"
      >›</button>
    </>
  );
}
