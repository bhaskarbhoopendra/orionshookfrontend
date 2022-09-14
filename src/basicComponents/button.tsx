// import { Button } from "react-bootstrap";
import "../styles/button.css";

export function ButtonComponent({ text }: any) {
  return (
    <>
      <button type="submit">{text}</button>
    </>
  );
}
