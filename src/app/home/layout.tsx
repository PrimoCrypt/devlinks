"use client"
import NavBar from "@/components/navbar";
import MobileSection from "./mobile-section";

export const userData = {
  name: "",
  email: "ben@example.com",
  links: [
    {
      name: "github",
      url: "https://github.com",
      icon: "/github-solid.svg",
      bgColor: "black",
    },
    {
      name: "youtube",
      url: "https://youtube.com",
      icon: "/youtube-fill.svg",
      bgColor: "red",
    },
    {
      name: "github",
      url: "https://github.com",
      icon: "/github-solid.svg",
      bgColor: "black",
    },
  ],
};

const Links = ({ children }: { children: React.ReactNode }) => {

  return (
    <div className="p-[1.5rem] flex flex-col gap-[1.5rem] max-h-full">
      <NavBar type="links" />
      <div className="flex lg:flex-row md:flex-col gap-[10px] min-h-[60vh]">
        <div className="min-w-[40%] hidden lg:block">
          <MobileSection {...userData} />
        </div>
        <div className="w-full bg-white rounded-lg md:h-[49.125rem]">
          {children}
        </div>
      </div>
    </div>
  );
};
export default Links;
