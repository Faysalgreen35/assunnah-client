import Image from "next/image";

export function _CircleImage() {
  return (
    <div className="relative flex self-end justify-start pl-4" style={{ flex: "0 0 26%" }}>
      <div
        className="relative overflow-hidden bg-white shadow-sm"
        style={{
          width: 210,
          height: 280,
          border: "1.5px solid #ddc9a0",
          borderBottom: "none",
          borderRadius: "50% 50% 0 0 / 42% 42% 0 0",
        }}
      >
        <Image
          src="/all-pic/AL-HADAYA/hero-2.png"
          alt="Luxury Quran Gift"
          fill
          className="object-cover"
          sizes="220px"
        />
      </div>
    </div>
  );
}
