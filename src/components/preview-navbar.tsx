import Link from "next/link";
import ButtonPrimary from "./button-primary";
import ButtonSecondary from "./button-secondary";
import { LINKS_ROUTE, PROFILE_ROUTE } from "@/constants/routes";

const PreviewNavbar = () => {
  return (
    <div className="w-full rounded-xl bg-white flex justify-between px-6 py-4">
      <div>
        <Link href={PROFILE_ROUTE}>
          <ButtonSecondary text="Back to Editor" />
        </Link>
      </div>
      <div>
        <Link href={LINKS_ROUTE}>
          <ButtonPrimary text="Share Link" />
        </Link>
      </div>
    </div>
  );
};
export default PreviewNavbar;
