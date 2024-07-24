"use client";
import { useState, useRef } from "react";
import Image from "next/image";

interface InputFieldProps {
  label?: string;
  type?: string;
  image?: string;
  placeholder?: string;
}

const DropDown = ({
  type = "email",
  image = "/email-icon.svg",
  placeholder = "ben@example.com",
  label = "Email address",
}: InputFieldProps) => {
  const [selectedValue, setSelectedValue] = useState("Pick one"); // Initial value

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div className="w-full gap-[0.25rem] rounded-lg text-left text-[0.75rem] text-grey-dark flex flex-col items-start justify-start">
      <label className={`form-control rounded-lg w-full`}>
        <div className="label">
          <span className="label-text">Pick the best fantasy franchise</span>
        </div>
        <Image width={16} height={16} src={image} alt="" />
        <select
          className={
            "w-full h-[3rem] bg-white flex flex-row gap-[0.75rem] py-[0.75rem] px-[1rem] rounded-lg border-solid border-[1px] border-grey-light active:border-primary-default outline-none active:shadow-[0px_0px_32px_rgba(99,_60,_255,_0.25)]"
          }
          value={selectedValue}
          onChange={handleChange}
        >
          <option>Pick one</option>
          <option>Star Wars</option>
          <option>Harry Potter</option>
          <option>Lord of the Rings</option>
          <option>Planet of the Apes</option>
          <option>Star Trek</option>
        </select>
      </label>
    </div>
  );
};
export default DropDown;
