"use client";
import { Link as LinkIcon, CircleUserRound } from "lucide-react";
import Image from "next/image";
import ButtonSecondary from "./button-secondary";
import Link from "next/link";
import { PREVIEW_ROUTE } from "@/constants/routes";
import { usePathname } from "next/navigation";

const NavBar = ({ type }: { type?: string }) => {
  const pathname = usePathname()

  return (
    <div>
      <div className="w-full relative rounded-xl  bg-white overflow-hidden flex flex-col items-start justify-center py-[1rem] pr-[1rem] pl-[1.5rem] box-border text-left text-[1rem]">
        <div className="max-w-[85%] md:max-w-full w-full flex flex-row items-center justify-between">
          <div className=" gap-[0.375rem] h-[2rem] flex items-center">
            <Image width={32} height={32} alt="" src="/logo.svg" />
            <h1 className="text-[1.313rem] font-bold md:block hidden">
              devlinks
            </h1>
          </div>
          <div className="flex flex-row items-start justify-center gap-4">
            <Link href="/home/links">
              <div
                className={`rounded-lg  cursor-pointer ${
                  pathname === "/home/links"
                    ? "bg-primary-disabled text-primary-default"
                    : "bg-transparent text-grey-dark"
                }  flex flex-row items-center justify-start md:py-[0.687rem] p-2 md:px-[1.687rem] gap-[0.5rem]`}
              >
                <LinkIcon />
                <div className="relative leading-[150%] font-semibold md:block hidden">
                  Links
                </div>
              </div>
            </Link>
            <Link href="/home/profile">
              <div
                className={`rounded-lg  cursor-pointer ${
                  pathname === "/home/profile"
                    ? "bg-primary-disabled text-primary-default"
                    : "bg-transparent text-grey-dark"
                }  flex flex-row items-center justify-start md:py-[0.687rem] p-2 md:px-[1.687rem] gap-[0.5rem]`}
              >
                <CircleUserRound />
                <div className="relative leading-[150%] font-semibold md:block hidden">
                  Profile Details
                </div>
              </div>
            </Link>
          </div>
          <Link href={PREVIEW_ROUTE}>
            <div className="hidden md:flex rounded-lg flex-col items-start justify-start">
              <ButtonSecondary text="Preview" />
            </div>
            <div className="rounded-lg flex max-w-6 md:hidden flex-col items-start justify-start">
              <ButtonSecondary text="preview" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
