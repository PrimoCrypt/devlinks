import Image from "next/image";

const Links = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col w-full md:w-auto p-8 md:p-0 md:justify-center md:items-center gap-[64px] md:gap-[51px] h-[100vh] bg-white md:bg-inherit">
        <div className="flex items-center">
          <Image width={40} height={40} src="/logo.svg" alt="" />
          <h1 className="text-[26.25px] font-bold text-grey-dark">devlinks</h1>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};
export default Links;
