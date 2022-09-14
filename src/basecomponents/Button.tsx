import { Button } from "react-bootstrap";
import "../styles/button.css";

export function ButtonComponent({ text, buttonVariant }: any) {
  return (
    <Button className="butt" variant="primary">
      {text}
    </Button>
  );
}
