import { Button } from "react-bootstrap";
import "../Styles/button.css";

export function ButtonComponent({ text, buttonVariant }: any) {
  return (
    <Button className="butt" variant="primary">
      {text}
    </Button>
  );
}
