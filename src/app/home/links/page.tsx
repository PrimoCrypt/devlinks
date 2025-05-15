"use client";
import ButtonPrimary from "@/components/button-primary";
import ButtonSecondary from "@/components/button-secondary";
import DropDown from "@/components/dropdown";
import InputField from "@/components/input-field";
import useLinksStore from "@/store/links.store";
import { LinkTypes, LinkContentTypes } from "@/types/LinkTypes";
import { useState } from "react";

const LinksPage = () => {
    const allLinks = useLinksStore((state) => state.initialLinks);
    const addLink = useLinksStore((state) => state.addLink);
    const updateLink = useLinksStore((state) => state.updateLink);

    const handleAddNewLink = () => {
        addLink({
            id: allLinks.length,
            name: "",
            icon: "",
            url: "",
        });
    };

	const handleLinkUpdate = (linkId: number, field: keyof LinkContentTypes, value: string) => {
        const linkToUpdate = allLinks.find(link => link.id === linkId);
        if (linkToUpdate) {
            updateLink({
                ...linkToUpdate,
                [field]: value
            });
        }
    };

    const handleSaveButton = () => {
        console.log(allLinks);
    };

    return (
        <div className="p-[2.5rem] flex flex-col gap-[2.5rem] max-h-[49rem]">
            <div>
                <h1 className="leading-[3rem] font-bold text-[2rem] text-grey-dark">
                    Customize your links
                </h1>
                <p className="font-normal text-[1rem] text-grey-medium leading-[1.5rem]">
                    Add/edit/remove links below and then share all your profiles
                    with the world!
                </p>
            </div>
            <div className="flex flex-col gap-[1.5rem] md:overflow-auto">
                <div
                    onClick={handleAddNewLink}
                >
                    <ButtonSecondary text="+ Add new link" />
                </div>
                <div className="flex flex-col gap-[1.5rem] md:overflow-auto">
                    {allLinks.map((link) => {
                        return (
                            <div
                                key={link.id}
                                className="bg-grey-verylight rounded-lg p-[1.25rem]"
                            >
                                <DropDown key={link.id} {...link} onNameChange={(name)=> handleLinkUpdate(link.id, 'name', name)} />
                                <InputField
                                    label="Link"
                                    type="url"
                                    image="/link.svg"
                                    placeholder="e.g. https://www.github.com/johnappleseed"
									value={link.url}
                                    onChange={(e) => handleLinkUpdate(link.id, 'url', e.target.value)}
                                />
                            </div>
                        );
                    })}
                </div>
                <div onClick={handleSaveButton} className="self-end">
                    <ButtonPrimary text="Save"></ButtonPrimary>
                </div>
            </div>
        </div>
    );
};
export default LinksPage;
