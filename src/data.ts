export const platformOptions = [
    "GitHub",
    "Twitter",
    "LinkedIn",
    "FaceBook",
    "FrontendMentor",
    "YouTube",
    "Dev.to",
    "Codepen",
    "Hashnode",
    "Others..",
] as const;

export const platformStyles = {
    GitHub: {
        bgColor: "bg-[#181717]",
        textColor: "text-white",
        icon: "/github-icon.svg",
    },
    Twitter: {
        bgColor: "bg-[#1DA1F2]",
        textColor: "text-white",
        icon: "/twitter-icon.svg",
    },
    LinkedIn: {
        bgColor: "bg-[#0A66C2]",
        textColor: "text-white",
        icon: "/linkedin-icon.svg",
    },
    FaceBook: {
        bgColor: "bg-[#1877F2]",
        textColor: "text-white",
        icon: "/facebook-icon.svg",
    },
    FrontendMentor: {
        bgColor: "bg-[#3F54A3]",
        textColor: "text-white",
        icon: "/frontendmentor-icon.svg",
    },
    YouTube: {
        bgColor: "bg-[#FF0000]",
        textColor: "text-white",
        icon: "/youtube-icon.svg",
    },
    "Dev.to": {
        bgColor: "bg-black",
        textColor: "text-white",
        icon: "/devto-icon.svg",
    },
    Codepen: {
        bgColor: "bg-[#000000]",
        textColor: "text-white",
        icon: "/codepen-icon.svg",
    },
    Hashnode: {
        bgColor: "bg-[#2962FF]",
        textColor: "text-white",
        icon: "/hashnode-icon.svg",
    },
    "Others..": {
        bgColor: "bg-grey-light",
        textColor: "text-grey-dark",
        icon: "/link-icon.svg",
    },
};
export const getPlatformStyle = (platform: string) => {
    return (
        platformStyles[platform as keyof typeof platformStyles] ||
        platformStyles["Others.."]
    );
};
