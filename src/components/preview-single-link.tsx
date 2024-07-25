import Image from "next/image";

interface Link {
  name: string;
  icon: string;
  url: string;
  color?: string;
  bgColor?: string;
}
const PreviewSingleLink = ({ name, icon, color = "white", bgColor }: Link) => {
  return (
    <div className="w-full">
      <button
        style={{ backgroundColor: bgColor, color: color }}
        className="w-full flex gap-[0.5rem] p-4 rounded-[0.5rem] text-[0.75rem]"
      >
        <Image src={icon} alt="" width={16} height={16} />
        <span className="w-full text-left">{name}</span>
        <Image src="/arrow-right.svg" alt="" width={16} height={16} />
      </button>
    </div>
  );
};
export default PreviewSingleLink;
