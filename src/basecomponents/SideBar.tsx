import SidebarItem from "./sideBarItem";
import items from "../Data/sideBar.json";

export function SideBar() {
  return (
    <>
      <div className="main">
        <div className="sidebar">
          {items.map((item, index) => (
            <SidebarItem key={index} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}
