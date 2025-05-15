"use client";
import ButtonPrimary from "@/components/button-primary";
import InputField from "@/components/input-field";
import { LinkTypes } from "@/types/LinkTypes";
import imageIcon from "@/../public/image-icon.svg";
import Image from "next/image";
import { useState } from "react";
import useUserStore from "@/store/user.store";

const ProfilePage = () => {
    const updateUser = useUserStore(state=> state.updateUser)
    const user = useUserStore(state=> state.user)
    const [displayPicture, setDisplayPicture] = useState<string | null>(null);
    const [firstName, setFirstName] = useState<string>(user.firstName)
    const [lastName, setLastName] = useState<string>(user.lastName)
    const [email, setEmail] = useState<string>("")

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]; // Use optional chaining to avoid null/undefined errors
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                if (typeof reader.result === "string") {
                    setDisplayPicture(reader.result);
                    updateUser({
                        ...user, // Keep the existing user object intact
                        profilePicture: reader.result, // Update the profilePicture field
                      });// Set the base64 string of the image
                }
            };
            reader.readAsDataURL(file);
        }
    };

    const handleFirstNameChange=(event: React.ChangeEvent<HTMLInputElement>)=>{
        setFirstName(event.target.value)
    }
    const handleLastNameChange=(event: React.ChangeEvent<HTMLInputElement>)=>{
        setLastName(event.target.value)
    }
    const handleEmailChange=(event: React.ChangeEvent<HTMLInputElement>)=>{
        setEmail(event.target.value)
    }
    const handleSaveButton =()=>{
        const updatedUser = {
            ...user,
            ...(firstName && { firstName }),
            ...(lastName && { lastName }),
            ...(email && { email }),
          };
          updateUser(updatedUser);
        console.log(updatedUser)
    }
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

                    <label
                        htmlFor="fileInput"
                        className="w-full max-w-[193px] h-[193px] bg-primary-disabled cursor-pointer rounded-lg hover:bg-primary-active hover:bg-opacity-40 flex items-center justify-center"
                    >
                        {!displayPicture ? (
                            <div className="flex flex-col items-center justify-center w-full h-full text-primary-default">
                                <Image
                                    src={`/image-icon.svg`}
                                    alt="profile picture"
                                    width={40}
                                    height={40}
                                />
                                <h4 className="font-semibold text-base">
                                    + Upload Image
                                </h4>
                            </div>
                        ) : (
                            <Image
                                src={displayPicture}
                                alt="profile picture"
                                className="w-full h-full object-cover object-top rounded-xl"
                                width={500}
                                height={500}
                            />
                        )}
                        <input
                            id="fileInput"
                            type="file"
                            accept="image/*"
                            onChange={handleImageUpload}
                            className="hidden"
                        />
                    </label>
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
                        onChange={handleFirstNameChange}
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
                        onChange={handleLastNameChange}
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
                        onChange={handleEmailChange}
                        placeholder="e.g. email@example.com"
                        flexJustify="justify-between"
                        flexAlignItems="items-start md:items-center"
                        flexDirection="flex-col md:flex-row"
                    />
                </div>
            </div>
            <div className="w-full flex justify-end">
                <div  className="md:max-w-full w-full md:w-auto">
                    <ButtonPrimary onClick={handleSaveButton} text="Save" />
                </div>
            </div>
        </div>
    );
};
export default ProfilePage;
