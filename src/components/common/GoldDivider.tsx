export function GoldDivider() {
  return (
    <div className="mt-3 flex items-center justify-center gap-3">
      <div className="h-px w-20 bg-gradient-to-r from-transparent to-gold-divider" />
      <span className="text-gold-divider text-[10px]">✦</span>
      <div className="h-px w-20 bg-gradient-to-l from-transparent to-gold-divider" />
    </div>
  );
}
