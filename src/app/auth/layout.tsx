import Image from "next/image";

const Links = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center gap-[51px] h-[100vh] justify-center">
        <div className="flex items-center">
          <Image width={40} height={40} src="/logo.svg" alt="" />
          <h1>devlinks</h1>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};
export default Links;
