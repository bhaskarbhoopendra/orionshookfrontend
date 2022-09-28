import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClipboard,
  faImage,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { Nav, NavItem } from "react-bootstrap";
import classNames from "classnames";
import SubMenu from "./SubMenu";
import { NavLink } from "react-router-dom";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import ProfileComponent from "./ProfileComponent";

export default function SideBar({ isOpen, toggle }: any) {
  return (
    <>
      <div className={classNames("sidebar", { "is-open": isOpen })}>
        <div className="sidebar-header">
          <ProfileComponent />

          <hr
            style={{
              border: ".5px solid #707070",
              width: "80%",
              marginLeft: "25px",
            }}
          />
        </div>
        <div className="side-menu">
          <Nav className="pb-3 d-flex flex-column ">
            <SubMenu
              title="Profile"
              icon={faUserCircle}
              className="me-3"
              items={submenus[0]}
            />
            <NavItem>
              <Nav.Link style={{ color: "#4B4A4A" }} as={NavLink} to={"/leave"}>
                <FontAwesomeIcon icon={faImage} className="me-3" />
                Leave
              </Nav.Link>
            </NavItem>
            <NavItem>
              <Nav.Link
                style={{ color: "#4B4A4A" }}
                as={NavLink}
                to={"/attendance"}
              >
                <FontAwesomeIcon icon={faCalendar} className="me-3" />
                Attendance
              </Nav.Link>
            </NavItem>
            <NavItem>
              <Nav.Link
                style={{ color: "#4B4A4A" }}
                as={NavLink}
                to={"/hrDocument"}
              >
                <FontAwesomeIcon icon={faClipboard} className="me-3" />
                HR Document
              </Nav.Link>
            </NavItem>
          </Nav>
        </div>
      </div>
    </>
  );
}

const submenus = [
  [
    {
      title: "Home 1",
      target: "/Home-1",
    },
    {
      title: "Home 2",
      target: "/Home-2",
    },
    {
      title: "Home 3",
      target: "/Home-3",
    },
  ],
  [
    {
      title: "Page 1",
      target: "/Page-1",
    },
    {
      title: "Page 2",
      target: "/Page-2",
    },
  ],
];
