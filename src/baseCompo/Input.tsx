import "../baseCompo/styles.css";

export default function InputComponent({ type, label, fn }: any) {
  console.log({ fn });
  return (
    <div className="d-flex flex-column m-20 p-10">
      <label className="m-10 p-2 lbl" htmlFor="name">
        {label}
      </label>
      <input
        className="p-1 m-3"
        style={{ border: "none", borderBottom: "0.5px solid black" }}
        type={type}
        onChange={fn}
      />
    </div>
  );
}
