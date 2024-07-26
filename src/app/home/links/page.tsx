"use client";
import ButtonSecondary from "@/components/button-secondary";
import DropDown from "@/components/dropdown";
import InputField from "@/components/input-field";
import { initialLinks } from "@/data/data";
import { LinkTypes } from "@/types/LinkTypes";

const LinksPage = ({ links = initialLinks }: LinkTypes) => {
  return (
    <div className="p-[2.5rem] flex flex-col gap-[2.5rem] max-h-[49rem]">
      <div>
        <h1 className="leading-[3rem] font-bold text-[2rem] text-grey-dark">
          Customize your links
        </h1>
        <p className="font-normal text-[1rem] text-grey-medium leading-[1.5rem]">
          Add/edit/remove links below and then share all your profiles with the
          world!
        </p>
      </div>
      <div className="flex flex-col gap-[1.5rem] md:overflow-auto">
        <div onClick={() => links.push({ name: "nhame", icon: "", url: "" })}>
          <ButtonSecondary text="+ Add new link" />
        </div>
        <div className="flex flex-col gap-[1.5rem] md:overflow-auto">
          {links.map((link) => {
            return (
              <div
                key={link.name}
                className="bg-grey-verylight rounded-lg p-[1.25rem]"
              >
                <DropDown key={link.name} {...link} />
                <InputField
                  label="Link"
                  type="url"
                  image="/link.svg"
                  placeholder="e.g. https://www.github.com/johnappleseed"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default LinksPage;
