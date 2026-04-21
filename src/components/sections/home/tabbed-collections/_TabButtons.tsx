interface Tab { id: string; label: string; icon: string; }

interface Props {
  tabs: Tab[];
  active: string;
  onChange: (id: string) => void;
}

export function _TabButtons({ tabs, active, onChange }: Props) {
  return (
    <div className="mb-8 flex gap-2 overflow-x-auto justify-center flex-wrap pb-1">
      {tabs.map(tab => (
        <button
          key={tab.id}
          onClick={() => onChange(tab.id)}
          className={`flex items-center gap-1.5 whitespace-nowrap rounded-full border px-5 py-2 text-sm font-semibold transition-all ${
            active === tab.id
              ? "border-[#a4722c] bg-[#a4722c] text-white shadow-sm"
              : "border-[#d4c4b0] bg-white text-[#666] hover:border-[#a4722c] hover:text-[#a4722c]"
          }`}
        >
          <span className="text-[15px] leading-none">{tab.icon}</span>
          {tab.label}
        </button>
      ))}
    </div>
  );
}
