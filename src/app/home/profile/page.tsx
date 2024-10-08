"use client";
import ButtonPrimary from "@/components/button-primary";
import InputField from "@/components/input-field";
import { LinkTypes } from "@/types/LinkTypes";
import Image from "next/image";

const ProfilePage = ({ displayPicture = "" }: LinkTypes) => {
  return (
    <div className="p-6 md:p-[2.5rem] flex flex-col gap-[2.5rem]">
      <div>
        <h1 className="leading-[3rem] font-bold text-[2rem] text-grey-dark">
          Profile Details
        </h1>
        <p className="font-normal text-[1rem] text-grey-medium leading-[1.5rem]">
          Add your details to create a personal touch to your profile.
        </p>
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col rounded-lg md:flex-row md:items-center justify-center gap-6 p-5 bg-grey-verylight">
          <p className="font-normal text-base text-grey-medium w-full">
            Profile picture
          </p>
          <div className="w-full max-w-[193px] h-[193px] bg-primary-disabled rounded-lg">
            {displayPicture === "" ? (
              <div className="flex flex-col items-center justify-center w-full h-full text-primary-default">
                <Image
                  src={`/image-icon.svg`}
                  alt="profile picture"
                  width={40}
                  height={40}
                />
                <h4 className="font-semibold text-base">+ Upload Image</h4>
              </div>
            ) : (
              <Image
                src={displayPicture}
                alt="profile picture"
                width={193}
                height={193}
              />
            )}
          </div>
          <p className="text-xs/[1.125rem] text-[#888] font-normal w-full">
            Image must be below 1024x1024px,
            <br />
            Use PNG orJPG format
          </p>
        </div>
        <div className="p-5 rounded-lg bg-grey-verylight flex flex-col gap-3">
          <InputField
            label="First name*"
            name="firstname"
            type="text"
            image=""
            placeholder="e.g. John"
            flexJustify="justify-between"
            flexAlignItems="items-start md:items-center"
            flexDirection="flex-col md:flex-row"
          />
          <InputField
            label="Last name*"
            name="lastname"
            type="text"
            image=""
            placeholder="e.g. Appleseed"
            flexJustify="justify-between"
            flexAlignItems="items-start md:items-center"
            flexDirection="flex-col md:flex-row"
          />
          <InputField
            label="Email"
            name="email"
            type="email"
            image=""
            placeholder="e.g. email@example.com"
            flexJustify="justify-between"
            flexAlignItems="items-start md:items-center"
            flexDirection="flex-col md:flex-row"
          />
        </div>
      </div>
      <div className="w-full flex justify-end">
        <div className="md:max-w-full w-full md:w-auto">
          <ButtonPrimary text="Save" />
        </div>
      </div>
    </div>
  );
};
export default ProfilePage;
