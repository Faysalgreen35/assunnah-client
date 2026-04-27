import Image from "next/image";

export function _CurvedImage() {
  return (
    <div className="relative flex md:self-start justify-end md:pr-4" style={{ flex: "0 0 26%" }}>
      <div
        className="relative overflow-hidden bg-white shadow-sm hidden md:block"
        style={{
          width: 260,
          height: 340,
          borderLeft: "2.5px solid #ddc9a0",
          borderBottom: "16px solid #ddc9a0",
          borderTop: "none",
          borderRight: "16px solid #ddc9a0",
          borderRadius: "0 0 50% 50% / 0 0 42% 42%",
          marginRight: "24px",
        }}
      >
        <Image
          src="/all-pic/AL-HADAYA/faith-image.png"
          alt="Faith gifts"
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
          borderLeft: "2.5px solid #ddc9a0",
          borderBottom: "6.5px solid #ddc9a0",
          borderTop: "none",
          borderRight: "6.5px solid #ddc9a0",
          borderRadius: "0 0 50% 50% / 0 0 42% 42%",
        }}
      >
        <Image
          src="/all-pic/AL-HADAYA/faith-image.png"
          alt="Faith gifts"
          fill
          className="object-cover"
          sizes="220px"
        />
      </div>
    </div>
  );
}
