export function InputComponent({ text, placeholder, typeOfInput }: any) {
  return (
    <>
      <input
        placeholder={placeholder}
        type={typeOfInput}
        style={{ border: "none", borderBottom: "0.5px solid black" }}
      />
    </>
  );
}
