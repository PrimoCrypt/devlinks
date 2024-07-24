import InputField from "./input-field";
const LinkDetails = () => {
  return (
    <div className="bg-grey-verylight rounded-lg p-[1.25rem] flex flex-col gap-[0.75rem]">
      <div>
        <h2 className="font-bold text-base text-grey-medium ">Link #{1}</h2>
        <div className="font-normal text-base text-[#888]">Remove</div>
      </div>
      <InputField type="dropdown" />
    </div>
  );
};
export default LinkDetails;
