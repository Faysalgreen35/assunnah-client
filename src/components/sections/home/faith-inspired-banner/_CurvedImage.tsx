import Image from "next/image";

export function _CurvedImage() {
  return (
    <div className="relative flex self-start justify-end pr-4" style={{ flex: "0 0 26%" }}>
      <div
        className="relative overflow-hidden bg-white shadow-sm"
        style={{
          width: 210,
          height: 280,
          border: "1.5px solid #ddc9a0",
          borderTop: "none",
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
