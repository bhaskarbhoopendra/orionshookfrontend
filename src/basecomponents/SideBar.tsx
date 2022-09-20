import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBriefcase,
  faPaperPlane,
  faQuestion,
  faImage,
  faCopy,
} from "@fortawesome/free-solid-svg-icons";
import { NavItem, NavLink, Nav } from "react-bootstrap";
import classNames from "classnames";
import { Link } from "react-router-dom";
import SubMenu from "./subMenu";

export default function SideBar ( {isOpen, toggle}:any ) {
  return(
  <>  
  <div className={classNames("sidebar", { "is-open": isOpen })}>
    <div className="sidebar-header">
      <span color="info" onClick={toggle} style={{ color: "#fff" }}>
        &times;
      </span>
      <h3>Bootstrap Sidebar</h3>
    </div>
    <div className="side-menu">
      <Nav className="list-unstyled pb-3">
        <p>Dummy Heading</p>
        <SubMenu title="About" icon={faHome} items={submenus[0]} />
        <NavItem>
          <NavLink as={Link} to={"/about"}>
            <FontAwesomeIcon icon={faBriefcase} className="mr-2" />
            About
          </NavLink>
        </NavItem>
        {/* <SubMenu title="Pages" icon={faCopy} items={submenus[1]} />
        <NavItem>
          <NavLink as={Link} to={"/pages"}>
            <FontAwesomeIcon icon={faImage} className="mr-2" />
            Portfolio
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink as={Link} to={"/faq"}>
            <FontAwesomeIcon icon={faQuestion} className="mr-2" />
            FAQ
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink as={Link} to={"/contact"}>
            <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
            Contact
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink as={Link} to={"/signup"}>
            <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
            Signup
          </NavLink>
        </NavItem> */}
      </Nav>
    </div>
  </div>
  </>)

};

const submenus = [
  [
    {
      title: "Home 1",
      target: "Home-1",
    },
    {
      title: "Home 2",
      target: "Home-2",
    },
    {
      title: "Home 3",
      target: "Home-3",
    },
  ],
  [
    {
      title: "Page 1",
      target: "Page-1",
    },
    {
      title: "Page 2",
      target: "Page-2",
    },
  ],
];
