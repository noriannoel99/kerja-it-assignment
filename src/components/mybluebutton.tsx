function MyBlueButton(props: any) {
  return (
    <button className="py-2 px-5 w-[200px] hover:border rounded-md mx-3 text-white bg-blue-500">
      {props.text}
    </button>
  );
}

export default MyBlueButton;
