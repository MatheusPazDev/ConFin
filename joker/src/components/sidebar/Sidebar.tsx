import React from "react";

import { IconContext } from "react-icons";
import * as AiIcons from "react-icons/ai";
import * as GiIcons from "react-icons/gi";

import Transition from "../utils/Transition";
import FocusTrap from "../utils/FocusTrap";

import { MenuData } from "../../utils/menu-data";
import SidebarItem from "./SidebarItem";

function Sidebar({ isStatic, isSidebar, showSidebar }: any) {
  let depth = 1;
  let depthStep = 10;

  return (
    <>
      <Transition
        appear={false}
        show={isStatic || !isSidebar}
        enter="transition-all duration-500"
        enterFrom="-ml-64"
        enterTo="ml-0"
        leave="transition-all duration-500"
        leaveTo="-ml-64"
      >
        <aside
          className={`z-20 bg-indigo-900 w-64 h-screen flex flex-col ${
            isStatic ? "" : "fixed"
          }
          overflow-auto scrollbar-thin scrollbar-thumb-blue-900 scrollbar-track-gray-100`}
        >
          <FocusTrap isActive={!isStatic}>
            <IconContext.Provider
              value={{
                color: "rgba(229, 231, 235, 1)",
                className: "global-class-name",
              }}
            >
              <div className="bg-gray-900 bg-opacity-50 text-gray-200 px-4 h-14 flex items-center justify-between">
                {!isStatic && (
                  <button
                    /*TODO: RESOLVER O PROBLEMA DO AUTOFOCUS QUEBRANDO A ANIMAÇÃO DE ABRIR O SIDEBAR*/
                    // autoFocus
                    id="closeMenu"
                    aria-label="Close Menu"
                    title="Close Menu"
                    className="p-1"
                    onClick={showSidebar}
                  >
                    <AiIcons.AiOutlineClose size={30} />
                  </button>
                )}
                <span className="text-blue-400 font-bold py-2 text-3xl flex items-center ">
                  <GiIcons.GiCash color="rgba(96, 165, 250, 1)" />
                  <span className="ml-3">ConFin</span>
                </span>
              </div>

              <div className="mx-2 mt-3">
                <ul>
                  {MenuData.map((MenuItem) => (
                    <React.Fragment key={MenuItem.cod_menu}>
                      <SidebarItem
                        depth={depth}
                        depthStep={depthStep}
                        items={MenuItem}
                        showSidebar={showSidebar}
                      />
                    </React.Fragment>
                  ))}
                </ul>
              </div>
            </IconContext.Provider>
          </FocusTrap>
        </aside>
      </Transition>
      <Transition
        appear={true}
        show={!isStatic && !isSidebar}
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-50"
        leave="transition-opacity duration-300"
        leaveFrom="opacity-50"
        leaveTo="opacity-0"
      >
        <div
          className="fixed inset-0 bg-black opacity-0"
          onClick={showSidebar}
        />
      </Transition>
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
