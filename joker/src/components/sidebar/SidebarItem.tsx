import React, { useState } from "react";
import Link from "next/link";

import { TiPlus, TiMinus } from "react-icons/ti";

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
    expandIcon = !isClosed ? <TiMinus /> : <TiPlus />;
  }

  return (
    <>
      <span onClick={showSubMenu} key={cod_menu} className="">
        <div className="  text-white ">
          <Link
            href={Array.isArray(sub_menu) && sub_menu.length ? "#" : str_url}
          >
            <a
              style={{ paddingLeft: depth * depthStep }}
              className=" bg-black  w-full pl-2 mb-2 flex items-center justify-between hover:bg-purple-800"
              onClick={
                !(Array.isArray(sub_menu) && sub_menu.length)
                  ? menu.showSidebar
                  : ""
              }
            >
              {str_label} {expandIcon}
            </a>
          </Link>

          <span className="bg-green-"></span>
        </div>
      </span>
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
    </>
  );
}

export default SidebarItem;
