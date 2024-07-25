/* eslint-disable no-console */
"use client";
import ButtonPrimary from "@/components/button-primary";
import InputFieldAuth from "@/components/input-field-auth";
import { LOGIN_ROUTE, PROFILE_ROUTE } from "@/constants/routes";
import { registerValidation } from "@/validationSchema/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Link from "next/link";
import { auth } from "../../../../firebase/clientApp";
import { useRouter } from "next/navigation";
const SignUpPage = () => {
  const router = useRouter();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = registerValidation();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const submitForm = async (values: any) => {
    console.log("Register form values", values);
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then(() => {
        alert("User registered successfully");
        router.push(PROFILE_ROUTE);
      })
      .catch((error) => {
        console.log("Catch", error.message);
        alert("Something went wrong please try again");
      });
  };

  return (
    <div className="md:p-[2.5rem] bg-white flex flex-col gap-[2.5rem] rounded-lg">
      <div className="text-grey-dark w-full flex flex-col gap-[0.5rem]  leading-[150%]">
        <b className="text-[2rem] inline-block leading-[150%]">
          Create account
        </b>
        <p className="text-[1rem] text-grey-medium">
          Let&apos;s get you started sharing your links!
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
          placeholder="alex@example.com"
        />
        <InputFieldAuth
          register={register}
          error={errors.password}
          label="Create password"
          name="password"
          type="password"
          image="/password-icon.svg"
          placeholder="At least 8 characters"
        />
        <InputFieldAuth
          register={register}
          error={errors.cnfPassword}
          label="Confirm password"
          name="cnfPassword"
          type="password"
          image="/password-icon.svg"
          placeholder="At least 8 characters"
        />
        <p>Password must contain at least 8 characters</p>
        <ButtonPrimary text="Create new account" />
        <div className="text-center flex flex-col md:inline">
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
