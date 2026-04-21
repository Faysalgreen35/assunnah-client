interface Props {
  heading: string;
  placeholder: string;
}

export function _Newsletter({ heading, placeholder }: Props) {
  return (
    <div className="border-t border-[#e8ded4] bg-white py-8">
      <div className="mx-auto max-w-[560px] px-6 text-center">
        <h3 className="mb-4 text-lg font-bold text-[#1a1a1a]">{heading}</h3>
        <div className="flex overflow-hidden rounded-full border border-[#d4c4b0] bg-white shadow-sm">
          <input
            type="email"
            placeholder={placeholder}
            className="flex-1 bg-transparent px-5 py-3 text-sm outline-none placeholder:text-[#aaa]"
          />
          <button
            className="flex items-center justify-center rounded-full bg-[#a4722c] px-5 py-3 text-white hover:bg-[#8b5e24] transition-colors"
            aria-label="Subscribe"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
