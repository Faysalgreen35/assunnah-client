import Image from "next/image";

export function _CircleImage() {
  return (
    <div className="relative flex md:self-end justify-start md:pl-4" style={{ flex: "0 0 26%" }}>
      <div
        className="relative overflow-hidden bg-white shadow-sm hidden md:block"
        style={{
          width: 260,
          height: 340,
          borderTop: "16.px solid #ddc9a0",
          borderRight: "2.5px solid #ddc9a0",
          borderBottom: "none",
          borderLeft: "16px solid #ddc9a0",
          borderRadius: "50% 50% 0 0 / 42% 42% 0 0",
          marginLeft: "24px",
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
      <div
        className="relative overflow-hidden bg-white shadow-sm md:hidden"
        style={{
          width: 124,
          height: 164,
          borderTop: "6.5px solid #ddc9a0",
          borderRight: "2.5px solid #ddc9a0",
          borderBottom: "none",
          borderLeft: "6.5px solid #ddc9a0",
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
