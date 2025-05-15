import SingleLink from "@/components/single-link";
import useLinksStore from "@/store/links.store";
import useUserStore from "@/store/user.store";
import Image from "next/image";
import Link from "next/link";

interface Link {
    name: string;
    icon: string;
    url: string;
    color?: string;
    bgColor?: string;
}

interface LinksPageProperties {
    name: string;
    email: string;
    links: Link[];
}

const MobileSection = () => {
    const links = useLinksStore((state) => state.initialLinks);
    const user = useUserStore((state) => state.user);
    const name = `${user.firstName ? user.firstName : ""} ${
        user.lastName ? user.lastName : ""
    }`.trim();

    return (
        <div className=" bg-white rounded-lg flex justify-center items-center py-[5rem] h-full md:h-[49.125rem] relative">
            <div className="self-start px-[2rem]">
                <Image
                    width={307}
                    height={631}
                    src="/preview-section.svg"
                    alt=""
                />
            </div>
            <div className="absolute self-start top-[9rem] flex flex-col items-center gap-[3.5rem] w-full max-w-[307px] px-[10px]">
                <div className="flex flex-col items-center gap-[1.563rem]">
                    {user.profilePicture ? (
                        <Image
                            src={user.profilePicture}
                            alt="profile picture"
                            width={500}
                            height={500}
                            className="bg-grey-light h-[6rem] w-[6rem] rounded-full"
                        />
                    ) : (
                        <div className="bg-grey-light h-[6rem] rounded-full w-[6rem]"></div>
                    )}
                    <div className="flex flex-col items-center gap-[0.813rem]">
                        {!name ? (
                            <div className="bg-grey-light h-[1rem] w-[10rem] rounded-[10px]"></div>
                        ) : (
                            <h1 className="text-[1.125rem]">{name}</h1>
                        )}
                        {!user?.email?.length ? (
                            <div className="bg-grey-light h-[0.5rem] w-[4.5rem] rounded-[10px]"></div>
                        ) : (
                            <h1 className="text-[0.875rem]">{user.email}</h1>
                        )}
                    </div>
                </div>
                <div className="max-h-[18.75rem] overflow-auto w-full items-center flex flex-col gap-[8px] px-[25px]">
                    {links.map((link, index) => {
                        return <SingleLink key={index} {...link} />;
                    })}
                </div>
            </div>
        </div>
    );
};
export default MobileSection;
