export function InputComponent({ text }: any) {
  return (
    <input
      type={text}
      style={{ border: "none", borderBottom: "2px solid black" }}
    />
  );
}
