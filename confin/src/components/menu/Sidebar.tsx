import React, { useState } from "react";
import Link from "next/link";

import { menuItems } from "../../services/MenuItems";
import { AiFillCloseCircle } from "react-icons/ai";

interface Menu {
  cod_menu: number;
  str_label: string;
  // str_class: string;
  str_url: string;
  sub_menu: Menu[];
}

interface SidebarMenu {
  items: Menu;
  depth: number;
  depthStep: number;
}

function Sidebar(props) {
  // console.log(props);
  let depth = 0;
  let depthStep = 10;

  return (
    // <nav className="fixed w-60 h-full bg-cor transition duration-500 hover:bg-purple-700">
    <>
      <aside
        className={`bg-white w-64 min-h-screen flex flex-col ${
          props.isStatic ? "" : "fixed"
        }`}
      >
        <div className="bg-white border-r border-b px-4 h-10 flex items-center justify-between">
          <span className="text-blue py-2">Confin</span>
          {!props.isStatic && (
            <button
              tabIndex={1}
              aria-label="Close Menu"
              title="Close Menu"
              className="w-10 p-1"
              onClick={() => props.closeSidebar(true)}
            >
              <AiFillCloseCircle size={30} color="#15b6d6" />
            </button>
          )}
        </div>
        <div className="border-r flex-grow">
          <nav>
            <ul>
              {menuItems.map((menuItem) => (
                <React.Fragment key={menuItem.cod_menu}>
                  <SidebarItem
                    depth={depth}
                    depthStep={depthStep}
                    items={menuItem}
                  />
                </React.Fragment>
              ))}
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
}

function SidebarItem(menu: SidebarMenu) {
  const { cod_menu, str_label, str_url, sub_menu } = menu.items;
  const { depth, depthStep } = menu;

  // Estado do SubMenu
  const [collapsed, setCollapsed] = useState(true);
  const handleClick = () => setCollapsed(!collapsed);

  let expandIcon;

  if (Array.isArray(sub_menu) && sub_menu.length) {
    expandIcon = !collapsed ? <span>+</span> : <span>-</span>;
  }

  return (
    <>
      <li onClick={handleClick} key={cod_menu} className="p-3">
        <div
          style={{ paddingLeft: depth * depthStep }}
          className="sidebar-item-content"
        >
          {Array.isArray(sub_menu) && sub_menu.length ? (
            <div className="sidebar-item-text">{str_label}</div>
          ) : (
            <Link href={str_url}>
              <a className="text-2xl underline">{str_label}</a>
            </Link>
          )}
        </div>
        {expandIcon}
      </li>
    </>
  );
}

export default Sidebar;
