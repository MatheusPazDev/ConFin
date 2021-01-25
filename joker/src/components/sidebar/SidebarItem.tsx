import React, { useState } from "react";
import Link from "next/link";

import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

import { Menu } from "../../interfaces";

interface SidebarMenu {
  items: Menu;
  depth: number;
  depthStep: number;
  showSidebar: any;
}

function SidebarItem(menu: SidebarMenu) {
  const { cod_menu, str_label, str_url, /*str_classe,*/ sub_menu } = menu.items;
  const { depth, depthStep } = menu;

  const [isClosed, setClosed] = useState(true);
  const showSubMenu = () => setClosed(!isClosed);

  let expandIcon;
  if (Array.isArray(sub_menu) && sub_menu.length) {
    expandIcon = !isClosed ? <IoIosArrowUp /> : <IoIosArrowDown />;
  }

  return (
    <div className="border-t text-white ">
      <span
        key={cod_menu}
        className="flex items-center mb-2 mt-1 justify-between rounded-lg hover:bg-purple-800"
      >
        <Link
          href={Array.isArray(sub_menu) && sub_menu.length ? str_url : str_url}
        >
          <a
            style={{ paddingLeft: depth * depthStep }}
            className="h-full w-full p-3 flex items-center justify-between  "
            onClick={
              !(Array.isArray(sub_menu) && sub_menu.length)
                ? menu.showSidebar
                : menu.showSidebar
            }
          >
            {str_label}
          </a>
        </Link>
        {expandIcon ? (
          <span
            className="bg-indigo-900  py-3 px-2 border-r-2 border-l-2 border-purple-400 rounded-full cursor-pointer flex items-center justify-center"
            onClick={showSubMenu}
          >
            {expandIcon}
          </span>
        ) : (
          ""
        )}
      </span>
      <div className="bg-gray-400 bg-opacity-40 rounded-b-lg">
        {!isClosed &&
          sub_menu.map((subItem, index) => (
            <React.Fragment key={`${subItem.cod_menu} ${index}`}>
              <SidebarItem
                depth={depth + 1}
                depthStep={depthStep}
                items={subItem}
                showSidebar={menu.showSidebar}
              />
            </React.Fragment>
          ))}
      </div>
    </div>
  );
}

export default SidebarItem;
