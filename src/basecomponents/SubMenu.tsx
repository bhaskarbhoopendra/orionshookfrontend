import { useState } from "react";
import classNames from "classnames";
import { Collapse, NavItem } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";

export default function SubMenu(props: any) {
  const [collapsed, setCollapsed] = useState(true);
  const toggle = () => setCollapsed(!collapsed);
  const { icon, title, items } = props;

  return (
    <div>
      <span>
        <NavItem
          onClick={toggle}
          className={classNames({ "menu-open": !collapsed })}
        >
          <Nav.Link style={{ color: "#4B4A4A" }} className="dropdown-toggle">
            <FontAwesomeIcon icon={icon} className="me-3" />
            {title}
          </Nav.Link>
        </NavItem>
      </span>
      <Collapse
        isOpen={!collapsed}
        navbar
        className={classNames("items-menu", { "mb-1": !collapsed })}
      >
        {items.map((item: any, index: any) => {
          return (
            <NavItem key={index} className="pl-4">
              <Nav.Link
                style={{ color: "#4B4A4A" }}
                to={item.target}
                as={NavLink}
              >
                {item.title}
              </Nav.Link>
            </NavItem>
          );
        })}
      </Collapse>
    </div>
  );
}
