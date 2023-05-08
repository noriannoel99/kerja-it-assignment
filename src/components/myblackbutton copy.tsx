function MyBlackButton(props: any) {
  return (
    <button className="py-2 px-5 hover:border rounded-md text-white bg-black border-2 border-white">
      {props.text}
    </button>
  );
}

export default MyBlackButton;
