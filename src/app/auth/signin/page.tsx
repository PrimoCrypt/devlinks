/* eslint-disable no-console */
"use client";
import ButtonPrimary from "@/components/button-primary";
import InputFieldAuth from "@/components/input-field-auth";
import { HOME_ROUTE, REGISTER_ROUTE } from "@/constants/routes";
import Link from "next/link";
import { loginValidation } from "@/validationSchema/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../../firebase/clientApp";
import { useRouter } from "next/navigation";

const SignInPage = () => {
  const router = useRouter();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = loginValidation();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const submitForm = (values: any) => {
    console.log("form values", values);
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then((response) => {
        console.log("Login Response", response);
        router.push(HOME_ROUTE);
      })
      .catch((error) => {
        console.log("Login Error", error.message);
        alert("Please try again");
      });
  };
  return (
    <div className="md:p-[2.5rem] bg-white flex flex-col gap-[2.5rem] rounded-lg">
      <div className="text-grey-dark w-full leading-[150%] flex flex-col gap-[0.5rem]">
        <b className="text-[2rem] inline-block h-[2rem]">Login</b>
        <p className="text-[1rem]">
          Add your details below to get back into the app
        </p>
      </div>
      <form
        onSubmit={handleSubmit(submitForm)}
        className="flex flex-col gap-[1.5rem]"
      >
        <InputFieldAuth
          register={register}
          error={errors.email}
          label="Email address"
          name="email"
          type="email"
          image="/email-icon.svg"
          placeholder="ben@example.com"
        />
        <InputFieldAuth
          register={register}
          error={errors.password}
          label="Password"
          name="password"
          type="password"
          image="/password-icon.svg"
          placeholder="Enter your password"
        />
        <ButtonPrimary text="Login" />
        <div className="text-center flex flex-col md:inline">
          Don&apos;t have an account?
          <Link href={REGISTER_ROUTE} className="text-primary-default">
            Create account
          </Link>
        </div>
      </form>
    </div>
  );
};
export default SignInPage;
