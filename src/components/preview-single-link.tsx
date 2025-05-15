import { getPlatformStyle } from "@/data";
import { LinkContentTypes } from "@/types/LinkTypes";
import Image from "next/image";


const PreviewSingleLink = ({ name, icon }: LinkContentTypes) => {
  const platformStyle = getPlatformStyle(name);

  return (
    <div className="w-full">
      <button
        // style={{ backgroundColor: bgColor, color: color }}
        className={`${platformStyle.bgColor} ${platformStyle.textColor} w-full flex gap-[0.5rem] p-4 rounded-[0.5rem] text-[0.75rem]`}
      >
        {platformStyle.icon && (
                    <Image src={platformStyle.icon} alt="" width={16} height={16} />
                )}
        <span className="w-full text-left">{name}</span>
        <Image src="/arrow-right.svg" alt="" width={16} height={16} />
      </button>
    </div>
  );
};
export default PreviewSingleLink;
