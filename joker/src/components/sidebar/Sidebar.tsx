import React, { useState } from "react";
import Link from "next/link";

import { TiPlus, TiMinus } from "react-icons/ti";

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
    <div className="mx-3 list-none">
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
  const showSubMenu = () => setClosed(!isClosed);

  let expandIcon;
  if (Array.isArray(sub_menu) && sub_menu.length) {
    expandIcon = !isClosed ? <TiMinus /> : <TiPlus />;
  }

  return (
    <>
      <span onClick={showSubMenu} key={cod_menu} className="p-3">
        <div
          style={{ paddingLeft: depth * depthStep }}
          className="flex items-center justify-between  text-white hover:bg-purple-800"
        >
          {Array.isArray(sub_menu) && sub_menu.length ? (
            <span className="">{str_label}</span>
          ) : (
            <span className="">
              <Link href={str_url}>
                <a className=" bg-black inline-block">{str_label}</a>
              </Link>
            </span>
          )}
          <span>{expandIcon}</span>
        </div>
      </span>
      {!isClosed &&
        sub_menu.map((subItem, index) => (
          <React.Fragment key={`${subItem.cod_menu} ${index}`}>
            <SidebarItem
              depth={depth + 1}
              depthStep={depthStep}
              items={subItem}
            />
          </React.Fragment>
        ))}
    </>
  );
}

export default Sidebar;

/*        {Array.isArray(sub_menu) ? (
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
        */

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
