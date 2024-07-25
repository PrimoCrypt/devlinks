import PreviewCard from "@/components/preview-card";
import PreviewNavbar from "@/components/preview-navbar";
import { userData } from "../home/layout";
const PreviewPage = () => {
  return (
    <div className="h-full w-full flex flex-col items-center">
      <div className="bg-primary-default w-full h-[40%] rounded-b-3xl  p-6">
        <PreviewNavbar />
      </div>
      <div className="bg-white max-w-[349px] w-full relative top-[-15%] rounded-2xl">
        <PreviewCard {...userData} />
      </div>
    </div>
  );
};
export default PreviewPage;
