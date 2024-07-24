import SingleLink from "@/components/single-link";
import Image from "next/image";
import Link from "next/link";

interface Link {
  name: string;
  icon: string;
  url: string;
  color?: string;
  bgColor?: string;
}

interface LinksPageProps {
  name: string;
  email: string;
  links: Link[];
}

const MobileSection = ({
  name = "",
  email = "",
  links = [
    {
      name: "github",
      url: "https://github.com",
      icon: "/github-solid.svg",
      bgColor: "black",
    },
  ],
}: LinksPageProps) => {
  return (
    <div className=" bg-white rounded-lg flex justify-center items-center py-[5rem] h-[49.125rem] relative">
      <div className="self-start px-[2rem]">
        <Image width={307} height={631} src="/preview-section.svg" alt="" />
      </div>
      <div className="absolute self-start top-[9rem] flex flex-col items-center gap-[3.5rem] w-full max-w-[307px] px-[10px]">
        <div className="flex flex-col items-center gap-[1.563rem]">
          <div className="bg-grey-light h-[6rem] rounded-[50%] w-[6rem]"></div>
          <div className="flex flex-col items-center gap-[0.813rem]">
            {name != "" ? (
              <h1 className="text-[1.125rem]">{name}</h1>
            ) : (
              <div className="bg-grey-light h-[1rem] w-[10rem] rounded-[10px]"></div>
            )}
            {email != "" ? (
              <h1 className="text-[0.875rem]">{email}</h1>
            ) : (
              <div className="bg-grey-light h-[0.5rem] w-[4.5rem] rounded-[10px]"></div>
            )}
          </div>
        </div>
        <div className="max-h-[18.75rem] overflow-auto w-full items-center flex flex-col gap-[8px] px-[25px]">
          {links.map((link) => {
            return <SingleLink key={link.name} {...link} />;
          })}
        </div>
      </div>
    </div>
  );
};
export default MobileSection;
