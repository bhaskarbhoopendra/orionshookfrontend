import "../styles/btnstyles.css";

export default function ButtonComponent({ text, type }: any) {
  return (
    <button type={type} className="bttn">
      {text}
    </button>
  );
}
