import Image from "next/image";

interface Props {
  img: string;
  title: string;
  active: boolean;
}

export function _Slide({ img, title, active }: Props) {
  return (
    <div
      className="absolute inset-0 transition-opacity duration-700"
      style={{ opacity: active ? 1 : 0 }}
    >
      <Image src={img} alt={title} fill className="object-cover object-center" sizes="100vw" />
    </div>
  );
}
