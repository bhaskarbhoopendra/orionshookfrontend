import { useState } from "react";
import { NavLink } from "react-router-dom";
export default function SidebarItem({ item, index }: any) {
  const [open, setOpen] = useState(false);

  if (item.childrens) {
    return (
      <div className={open ? "sidebar-item open" : "sidebar-item"}>
        <div className="sidebar-title">
          <span>
            {item.icon && <i className={item.icon}></i>}
            <NavLink to={`${item.path}`} key={index}>
              {item.title}
            </NavLink>
            {item.path}
          </span>
          <i
            className="bi-chevron-down toggle-btn"
            onClick={() => setOpen(!open)}
          ></i>
        </div>
        <div className="sidebar-content">
          {item.childrens.map((child: any, index: any) => (
            <SidebarItem key={index} item={child} />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="sidebar-item">
        <div className="sidebar-title">
          <a href={item.path}>
            <span>
              {item.icon && <i className={item.icon}></i>}
              {item.title}
            </span>
          </a>
        </div>
      </div>
    );
  }
}
