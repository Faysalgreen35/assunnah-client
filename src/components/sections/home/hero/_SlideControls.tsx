import { memo } from "react";

interface Props {
  total: number;
  active: number;
  onDot: (i: number) => void;
  onPrev: () => void;
  onNext: () => void;
}

export const _SlideControls = memo(function SlideControls({ total, active, onDot }: Props) {
  return (
    <div className="w-full flex justify-center gap-4 py-8 pb-16 bg-white border-t border-gray-200 relative z-20">
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          onClick={() => onDot(i)}
          className={`rounded-full transition-all cursor-pointer hover:scale-110 ${i === active ? "h-4 w-12" : "h-4 w-4 bg-gray-300 hover:bg-gray-400"}`}
          style={i === active ? { backgroundColor: "#a4722c" } : {}}
          aria-label={`Go to slide ${i + 1}`}
        />
      ))}
    </div>
  );
});
