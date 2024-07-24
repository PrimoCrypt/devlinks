"use client";
import { Link as LinkIcon, CircleUserRound } from "lucide-react";
import Image from "next/image";
import ButtonSecondary from "./button-secondary";
import Link from "next/link";

const NavBar = ({ type }: { type?: string }) => {
  return (
    <div>
      <div className="w-full relative rounded-xl  bg-white overflow-hidden flex flex-col items-start justify-start py-[1rem] pr-[1rem] pl-[1.5rem] box-border text-left text-[1rem]">
        <div className="self-stretch flex flex-row items-center justify-between">
          <div className="w-[9.125rem] gap-[0.375rem] h-[2rem] flex items-center">
            <Image width={32} height={32} alt="" src="/logo.svg" />
            <h1 className="text-[1.313rem] font-bold">devlinks</h1>
          </div>
          <div className="flex flex-row items-start justify-start gap-[1rem]">
            <Link href="/home/links">
              <div
                className={`rounded-lg  cursor-pointer ${
                  type === "links"
                    ? "bg-primary-disabled text-primary-default"
                    : "bg-transparent text-grey-dark"
                }  flex flex-row items-center justify-start py-[0.687rem] px-[1.687rem] gap-[0.5rem]`}
              >
                <LinkIcon />
                <div className="relative leading-[150%] font-semibold">
                  Links
                </div>
              </div>
            </Link>
            <Link href="/home/profile">
              <div
                className={`rounded-lg  cursor-pointer ${
                  type === "profile"
                    ? "bg-primary-disabled text-primary-default"
                    : "bg-transparent text-grey-dark"
                }  flex flex-row items-center justify-start py-[0.687rem] px-[1.687rem] gap-[0.5rem]`}
              >
                <CircleUserRound />
                <div className="relative leading-[150%] font-semibold">
                  Profile Details
                </div>
              </div>
            </Link>
          </div>
          <div className=" rounded-lg flex flex-col items-start justify-start">
            <ButtonSecondary text="Preview" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
