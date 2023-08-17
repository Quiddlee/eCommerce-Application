export default function CustomRegForm(props: { children: React.ReactNode }) {
  const { children } = props;
  return (
    <form
      className=" 
      ml-3 
      mr-3 
      box-border 
      w-full
      font-medium
      text-text-grey
      "
    >
      {children}
    </form>
  );
}
