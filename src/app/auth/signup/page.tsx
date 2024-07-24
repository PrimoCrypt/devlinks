import ButtonPrimary from "@/components/button-primary";
import ButtonSecondary from "@/components/button-secondary";
import InputField from "@/components/input-field";
import { LOGIN_ROUTE } from "@/constants/routes";
import Link from "next/link";

const SignUpPage = () => {
  return (
    <div className="w-[29.75rem] p-[2.5rem] bg-white flex flex-col gap-[2.5rem] rounded-lg">
      <div className="text-grey-dark w-full flex flex-col gap-[0.5rem]  leading-[150%]">
        <b className="text-[2rem] inline-block leading-[150%]">
          Create account
        </b>
        <p className="text-[1rem] text-grey-medium">
          Let&apos;s get you started sharing your links!
        </p>
      </div>
      <form className="flex flex-col gap-[1.5rem]">
        <InputField
          label="Email address"
          type="email"
          image="/email-icon.svg"
          placeholder="alex@example.com"
        />
        <InputField
          label="Create password"
          type="password"
          image="/password-icon.svg"
          placeholder="At least 8 characters"
        />
        <InputField
          label="Confirm password"
          name="cnfPassword"
          type="password"
          image="/password-icon.svg"
          placeholder="At least 8 characters"
        />
        <p>Password must contain at least 8 characters</p>
        <ButtonPrimary text="Create new account" />
        <div className="text-center">
          Already have an account?{" "}
          <Link href={LOGIN_ROUTE} className="text-primary-default">
            Login
          </Link>
        </div>
      </form>
    </div>
  );
};
export default SignUpPage;
