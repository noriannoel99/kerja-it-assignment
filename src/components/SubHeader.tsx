import MyButton from "./mybutton";
import MyBlackButton from "./myblackbutton copy";

function SubHeader() {
  return (
    <div className="flex  flex-col  items-center px-[100px] h-[120px] bg-black">
      <p className="text-white my-4">
        Tired of being ghosted by employers? Apply for jobs through referrals
        instead with CariKabel.com
      </p>
      <div>
        {" "}
        <MyButton text="Go to CariKabel.com" />
        <MyBlackButton text="No, thank you." />
      </div>
    </div>
  );
}

export default SubHeader;
