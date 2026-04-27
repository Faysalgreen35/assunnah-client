interface Tab { id: string; label: string; icon: string; }

interface Props {
  tabs: Tab[];
  active: string;
  onChange: (id: string) => void;
}

export function _TabButtons({ tabs, active, onChange }: Props) {
  const displayedTabs = tabs.slice(0, 4);
  const allTabs = tabs;

  return (
    <>
      {/* Mobile: Show first 4 tabs in one row with vertical layout */}
      <div className="md:hidden mb-0 flex gap-0 justify-center pb-1">
        {displayedTabs.map((tab, index) => (
          <button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            className={`flex-1 flex flex-col items-center justify-start pt-3 pb-2 rounded-t-2xl border border-b-0 text-xs font-semibold transition-all ${
              active === tab.id
                ? "border-[#e8dcc8] bg-white text-[#a4722c] shadow-md"
                : "border-[#e8dcc8] bg-[#faf6f0] text-[#888] hover:text-[#a4722c]"
            } ${index !== 3 ? "border-r-0" : ""}`}
          >
            <span className="text-[24px] leading-none mb-1">{tab.icon}</span>
            <span className="text-[10px] text-center line-clamp-2 px-1">{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Desktop: Show all tabs with card-like styling */}
      <div className="hidden md:flex mb-0 gap-4 justify-center flex-wrap pb-1">
        {allTabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            className={`flex flex-col items-center justify-start pt-4 pb-3 px-4 rounded-t-2xl border border-b-0 text-sm font-semibold transition-all w-32 ${
              active === tab.id
                ? "border-[#e8dcc8] bg-white text-[#a4722c] shadow-lg"
                : "border-[#e8dcc8] bg-[#faf6f0] text-[#888] hover:text-[#a4722c]"
            }`}
          >
            <span className="text-[32px] leading-none mb-2">{tab.icon}</span>
            <span className="text-[12px] text-center line-clamp-2">{tab.label}</span>
          </button>
        ))}
      </div>
    </>
  );
}
