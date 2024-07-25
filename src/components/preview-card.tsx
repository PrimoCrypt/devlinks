import { initialLinks } from "@/data/data";
import PreviewSingleLink from "./preview-single-link";

interface Link {
  name: string;
  icon: string;
  url: string;
  color?: string;
  bgColor?: string;
}

interface LinksPageProperties {
  name: string;
  email: string;
  links: Link[];
}
const PreviewCard = ({
  name = "",
  email = "",
  links = initialLinks,
}: LinksPageProperties) => {
  return (
    <div className=" self-start top-[11rem] flex flex-col items-center gap-[3.5rem] w-full p-12 bg-white shadow-[0px_0px_32px_rgba(111,_111,_111,_0.25)] rounded-2xl">
      <div className="flex flex-col items-center gap-[1.563rem]">
        <div className="bg-grey-light h-[6rem] rounded-[50%] w-[6rem]"></div>
        <div className="flex flex-col items-center gap-[0.813rem]">
          {name == "" ? (
            <div className="bg-grey-light h-[1rem] w-[10rem] rounded-[10px]"></div>
          ) : (
            <h1 className="text-[1.125rem]">{name}</h1>
          )}
          {email == "" ? (
            <div className="bg-grey-light h-[0.5rem] w-[4.5rem] rounded-[10px]"></div>
          ) : (
            <h1 className="text-[0.875rem]">{email}</h1>
          )}
        </div>
      </div>
      <div className="max-h-[18.75rem] overflow-auto w-full items-center flex flex-col gap-[20px]">
        {links.map((link) => {
          return <PreviewSingleLink key={link.name} {...link} />;
        })}
      </div>
    </div>
  );
};
export default PreviewCard;
