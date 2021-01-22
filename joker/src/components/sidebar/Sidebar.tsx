import React, { useState } from "react";
import Link from "next/link";

import { Menu } from "../../interfaces";
import { MenuData } from "../../utils/menu-data";

interface SidebarMenu {
  items: Menu;
  depth: number;
  depthStep: number;
}

function Sidebar() {
  let depth = 0;
  let depthStep = 10;

  return (
    <div className="bg-gray-500 h-full">
      <ul>
        {MenuData.map((MenuItem) => (
          <React.Fragment key={MenuItem.cod_menu}>
            <SidebarItem depth={depth} depthStep={depthStep} items={MenuItem} />
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
}

function SidebarItem(menu: SidebarMenu) {
  const { cod_menu, str_label, str_url, /*str_classe,*/ sub_menu } = menu.items;
  const { depth, depthStep } = menu;

  const [isClosed, setClosed] = useState(true);
  const handleClick = () => setClosed(!isClosed);

  let expandIcon;
  if (Array.isArray(sub_menu) && sub_menu.length) {
    expandIcon = !isClosed ? <span>+</span> : <span>-</span>;
  }

  return (
    <>
      <li onClick={handleClick} key={cod_menu} className="p-3">
        <div
          style={{ paddingLeft: depth * depthStep }}
          className="bg-purple-400 flex items-center justify-between px-3 text-white hover:bg-purple-800"
        >
          {Array.isArray(sub_menu) && sub_menu.length ? (
            <div>{str_label}</div>
          ) : (
            <div>
              <Link href={str_url}>
                <a className="h-full w-full">{str_label}</a>
              </Link>
            </div>
          )}
          <span>{expandIcon}</span>
        </div>
      </li>
      <div>
        {Array.isArray(sub_menu) ? (
          <span className="">
            {sub_menu.map((subItem, index) => (
              <React.Fragment key={`${subItem.cod_menu} ${index}`}>
                <SidebarItem
                  depth={depth + 1}
                  depthStep={depthStep}
                  items={subItem}
                />
              </React.Fragment>
            ))}
          </span>
        ) : null}
      </div>
    </>
  );
}

export default Sidebar;

/*

export const getStaticProps: GetStaticProps = async () => {
  const items: Menu[] = MenuData;
  return { props: { items } };
};

<li className="p-3">
            <Link href="/mov/entrada">
              <a>Entrada</a>
            </Link>
          </li>
          <li className="p-3">
            <Link href="/mov/saida">
              <a>Saida</a>
            </Link>
          </li>
          <li className="p-3">
            <Link href="/mov/saldo">
              <a>Saldo</a>
            </Link>
          </li>
          <li className="p-3">
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li className="p-3">
            <Link href="/users">
              <a>Users</a>
            </Link>
          </li>

          */
