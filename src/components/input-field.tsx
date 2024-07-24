"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import { InputFieldTypes } from "@/types/FormTypes";

const InputField = ({
  name = "",
  flexDirection = "flex-col",
  flexAlignItems = "items-start",
  flexJustify = "justify-start",
  type = "email",
  image = "/email-icon.svg",
  placeholder = "ben@example.com",
  label = "Email address",
}: InputFieldTypes) => {
  const [isActive, setIsActive] = useState(false);
  const inputReference = useRef(null);

  const handleFocus = () => {
    setIsActive(true);
  };

  const handleBlur = () => {
    setIsActive(false);
  };

  return (
    <div
      className={`w-full gap-[0.25rem] text-left text-[0.75rem] text-grey-dark flex ${flexDirection} ${flexAlignItems} ${flexJustify}`}
    >
      <label className="leading-[150%] inline-block">{label}</label>
      <div
        className={`w-full max-w-[25rem] h-[3rem] flex flex-row gap-[0.75rem] py-[0.75rem] px-[1rem] rounded-lg border-solid border-[1px] ${
          isActive
            ? "border-primary-default shadow-[0px_0px_32px_rgba(99,_60,_255,_0.25)] "
            : "border-grey-light"
        }`}
      >
        <Image width={16} height={16} src={image} alt="" />
        <input
          ref={inputReference}
          className={`w-full outline-none ${
            isActive ? "opcaity-[1] bg-transparent" : "opacity-[0.75]"
          }`}
          type={type}
          name={name}
          id={`field_${name}`}
          placeholder={placeholder}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </div>
    </div>
  );
};
export default InputField;
