import { ButtonType } from "@/types/ButtonTypes";

const ButtonPrimary = ({ text }: ButtonType) => {
  return (
    <button className="w-full h-[2.875rem] cursor-pointer py-[0.687rem] px-[1.687rem] rounded-lg bg-primary-default active:bg-primary-active disabled:bg-primary-disabled flex flex-col justify-center items-center border-box text-[1rem] text-white">
      <div>{text}</div>
    </button>
  );
};
export default ButtonPrimary;
