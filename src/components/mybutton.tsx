function MyButton(props: any) {
  return (
    <button className="py-2 px-5  hover:border rounded-md mx-3 bg-white">
      {props.text}
    </button>
  );
}

export default MyButton;
