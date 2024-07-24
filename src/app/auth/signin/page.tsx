import ButtonPrimary from "@/components/button-primary";
import ButtonSecondary from "@/components/button-secondary";
import InputField from "@/components/input-field";
import { REGISTER_ROUTE } from "@/constants/routes";
import Link from "next/link";

const SignInPage = () => {
  return (
    <div className="p-[2.5rem] bg-white flex flex-col gap-[2.5rem] rounded-lg">
      <div className="text-grey-dark w-full leading-[150%] flex flex-col gap-[0.5rem]">
        <b className="text-[2rem] inline-block h-[2rem]">Login</b>
        <p className="text-[1rem]">
          Add your details below to get back into the app
        </p>
      </div>
      <form className="flex flex-col gap-[1.5rem]">
        <InputField
          label="Email address"
          name="email"
          type="email"
          image="/email-icon.svg"
          placeholder="ben@example.com"
        />
        <InputField
          label="Password"
          name="password"
          type="password"
          image="/password-icon.svg"
          placeholder="Enter your password"
        />
        <ButtonPrimary text="Login"/>
        <div className="text-center">Don&apos;t have an account? <Link href={REGISTER_ROUTE} className="text-primary-default">Create account</Link></div>
      </form>
    </div>
  );
};
export default SignInPage;
