interface Props {
  copyright: string;
}

export function _FooterBottom({ copyright }: Props) {
  return (
    <div className="border-t border-[#e0d4c8] bg-[#f5f0ea]">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-2 px-6 py-3 text-[11px] text-[#999] sm:flex-row">
        <p>All Rights Reserved © {new Date().getFullYear()}, {copyright}</p>
        <p className="font-medium text-[#777]">100% Secure &nbsp;|&nbsp; Hand Made Gifting &nbsp;|&nbsp; Values First</p>
      </div>
    </div>
  );
}
