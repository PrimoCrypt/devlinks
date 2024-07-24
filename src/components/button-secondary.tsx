import { ButtonType } from "@/types/ButtonTypes";

const ButtonSecondary = ({ text }: ButtonType) => {
  return (
    <button className="w-full h-[2.875rem] cursor-pointer py-[0.687rem] px-[1.687rem] rounded-lg active:bg-primary-disabled disabled:opacity-[0.25] flex flex-col justify-center items-center border-box text-[1rem] text-primary-default font-semibold border-[1px] border-solid border-primary-default">
      <div>{text}</div>
    </button>
  );
};
export default ButtonSecondary;
