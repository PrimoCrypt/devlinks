"use client";
import { useState } from "react";
import { platformOptions } from "@/data";


interface DropDownProps {
    onNameChange: (name: string) => void;
    initialValue?: string;
    label?: string;
}

const DropDown = ({
    onNameChange, initialValue = "Pick one",
    label = "Pick a platform",
}: DropDownProps) => {
    const [selectedValue, setSelectedValue] = useState(initialValue);

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newValue = event.target.value;
        setSelectedValue(newValue);
        onNameChange(newValue);
    };

    return (
        <div className="w-full gap-[0.25rem] rounded-lg text-left text-[0.75rem] text-grey-dark flex flex-col items-start justify-start">
            <label className={`form-control rounded-lg w-full`}>
                <div className="label">
                    <span className="label-text">{label}</span>
                </div>
                <select
                    className={
                        "w-full h-[3rem] bg-white flex flex-row gap-[0.75rem] py-[0.75rem] px-[1rem] rounded-lg border-solid border-[1px] border-grey-light active:border-primary-default outline-none active:shadow-[0px_0px_32px_rgba(99,_60,_255,_0.25)]"
                    }
                    value={selectedValue}
                    onChange={handleChange}
                >
                    <option disabled>Pick one</option>
                    {platformOptions.map((platform) => (
                        <option key={platform} value={platform}>
                            {platform}
                        </option>
                    ))}
                </select>
            </label>
        </div>
    );
};

export default DropDown;
