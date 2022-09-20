import SidebarItem from "./sideBarItem";
import items from "../Data/sideBar.json";
import { Card } from "react-bootstrap";

export function SideBar() {
  return (
    <>
      <div className="main">
        <div>
        <Card style={{ width: '16.2rem', borderRadius:"0px" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
        </div>
        <div className="sidebar">
          {items.map((item, index) => (
            <SidebarItem key={index} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}
