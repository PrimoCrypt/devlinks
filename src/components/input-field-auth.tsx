"use client";
import { useState } from "react";
import Image from "next/image";
import { InputFieldAuthTypes } from "@/types/FormTypes";

const InputFieldAuth = ({
  name = "",
  flexDirection = "flex-col",
  flexAlignItems = "items-start",
  flexJustify = "justify-start",
  type = "email",
  image = "/email-icon.svg",
  placeholder = "ben@example.com",
  label = "Email address",
  register,
  error,
}: InputFieldAuthTypes) => {
  const [isActive, setIsActive] = useState(false);
  const handleFocus = () => {
    setIsActive(true);
  };

  const handleBlur = () => {
    setIsActive(false);
  };

  return (
    <div
      className={`w-full gap-[0.25rem] text-left text-[0.75rem] ${!isActive && error ? "text-red-500" : " text-grey-dark"} flex ${flexDirection} ${flexAlignItems} ${flexJustify}`}
    >
      <label className="leading-[150%] inline-block">{label}</label>
      <div
        className={`w-full max-w-[25rem] h-[3rem] flex flex-row gap-[0.75rem] py-[0.75rem] px-[1rem] rounded-lg border-solid border-[1px] ${
          isActive
            ? "border-primary-default shadow-[0px_0px_32px_rgba(99,_60,_255,_0.25)] "
            : "border-grey-light"
        } ${
          error
            ? "border-red-500 shadow-[0px_0px_32px_rgba(255,_60,_99,_0.25)] "
            : "border-grey-light"
        }`}
      >
        <Image width={16} height={16} src={image} alt="" />
        <input
          {...register(name)}
          className={`w-full bg-inherit outline-none ${
            isActive ? "opcaity-[1]" : "opacity-[0.75]"
          }`}
          type={type}
          name={name}
          id={`field_${name}`}
          placeholder={placeholder}
          onFocus={handleFocus}
          onBlur={handleBlur}
          autoComplete="off"
        />
        {error ? (
          <span className="w-full text-red-500 text-right">
            {error.message}
          </span>
        ) : (
          <span></span>
        )}
      </div>
    </div>
  );
};
export default InputFieldAuth;
