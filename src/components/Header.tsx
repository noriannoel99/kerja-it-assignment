import MyButton from "./mybutton";

function Header() {
  return (
    <div className="flex justify-between items-center mx-[200px] h-[80px]">
      <h1 className="text-xl font-bold">Kerja-IT</h1>
      <div className="space-x-2">
        <MyButton text="Talents" />
        <MyButton text="post jobs" />
        <MyButton text="Norian noel" />
      </div>
    </div>
  );
}

export default Header;
