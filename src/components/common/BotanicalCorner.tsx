export function BotanicalCorner({ flip }: { flip?: boolean }) {
  return (
    <svg
      width="160" height="150" viewBox="0 0 160 150" fill="none"
      className="pointer-events-none select-none"
      style={{ transform: flip ? "scaleX(-1)" : undefined }}
    >
      <path d="M20 20 C30 5 60 2 85 22 C110 42 115 72 95 90 C75 108 45 100 28 76" stroke="#c9973a" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
      <path d="M8 58 C22 38 50 32 68 52" stroke="#c9973a" strokeWidth="1" fill="none" strokeLinecap="round"/>
      <path d="M5 90 C20 78 38 82 42 98" stroke="#c9973a" strokeWidth="0.8" fill="none" strokeLinecap="round"/>
      <ellipse cx="86" cy="25" rx="13" ry="6" fill="#c9973a" fillOpacity="0.3" transform="rotate(-38 86 25)"/>
      <ellipse cx="98" cy="78" rx="11" ry="5" fill="#c9973a" fillOpacity="0.25" transform="rotate(28 98 78)"/>
      <ellipse cx="60" cy="54" rx="9" ry="4" fill="#c9973a" fillOpacity="0.22" transform="rotate(-12 60 54)"/>
      <ellipse cx="38" cy="90" rx="7" ry="3" fill="#c9973a" fillOpacity="0.2" transform="rotate(18 38 90)"/>
      <circle cx="84" cy="23" r="2.5" fill="#c9973a" fillOpacity="0.45"/>
      <circle cx="96" cy="76" r="2" fill="#c9973a" fillOpacity="0.38"/>
      <circle cx="58" cy="52" r="1.8" fill="#c9973a" fillOpacity="0.32"/>
    </svg>
  );
}
