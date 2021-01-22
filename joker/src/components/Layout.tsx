import React, { ReactNode, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import * as AiIcons from "react-icons/ai";

import Transition from "./utils/Transition";
import useBreakpoint from "./utils/useBreakpoint";
import FocusTrap from "./utils/FocusTrap";

type Props = {
  children?: ReactNode;
  title?: string;
};

function Layout({ children, title = "Confin - Controle Financeiro" }: Props) {
  const [isClosed, setClosed] = useState(false);
  const isStatic = useBreakpoint("sm");

  return (
    <div className="bg-gray-100 flex">
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Transition
        appear={false}
        show={isStatic || !isClosed}
        enter="transition-all duration-500"
        enterFrom="-ml-64"
        enterTo="ml-0"
        leave="transition-all duration-500"
        leaveTo="-ml-64"
      >
        <aside
          className={`z-20 bg-white w-64 min-h-screen flex flex-col ${
            isStatic ? "" : "fixed"
          }`}
        >
          <FocusTrap isActive={!isStatic}>
            <div className="bg-white border-r border-b px-4 h-10 flex items-center justify-between">
              <span className="text-blue py-2"> Aplication </span>
              {!isStatic && (
                <button
                  /*TODO: RESOLVER O PROBLEMA DO AUTOFOCUS QUEBRANDO A ANIMAÇÃO DE ABRIR O SIDEBAR*/
                  // autoFocus
                  id="closeMenu"
                  aria-label="Close Menu"
                  title="Close Menu"
                  className="p-1"
                  onClick={() => setClosed(true)}
                >
                  <AiIcons.AiOutlineClose size={26} color="rgba(0,0,0,0.6)" />
                </button>
              )}
            </div>

            <div className="border-r flex-grow ">
              <nav>
                <ul>
                  <li className="p-3">
                    <Link href="/">
                      <a>Home</a>
                    </Link>
                  </li>
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
                </ul>
              </nav>
            </div>
          </FocusTrap>
        </aside>
      </Transition>

      <Transition
        appear={true}
        show={!isStatic && !isClosed}
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-50"
        leave="transition-opacity duration-300"
        leaveFrom="opacity-50"
        leaveTo="opacity-0"
      >
        <div className="fixed inset-0 bg-black opacity-0"></div>
      </Transition>

      <main className="flex-grow flex flex-col min-h-screen">
        <header className="bg-white border-b h-10 flex items-center justify-center">
          {!isStatic && (
            <button
              tabIndex={1}
              aria-hidden={!isClosed}
              aria-label="Open Menu"
              title="Open Menu"
              className="p-1"
              onClick={() => setClosed(false)}
            >
              <AiIcons.AiOutlineBars size={32} color="rgba(0,0,0,0.6)" />
            </button>
          )}

          <div className="flex flex-grow items-center justify-between px-3">
            <span className="flex items-center">
              [LOGO]
              <h1>ConFin</h1>
            </span>
            <button className="text-blue-700 underline"> Log In</button>
          </div>
        </header>
        <div className="bg-green-200">{children}</div>
      </main>
    </div>
  );
}

export default Layout;

/*

import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";
import Sidebar from "./sidebar/Sidebar";
type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <Sidebar />
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>{" "}
        |{" "}
        <Link href="/about">
          <a>About</a>
        </Link>{" "}
        |{" "}
        <Link href="/users">
          <a>Users List</a>
        </Link>{" "}
        | <a href="/api/users">Users API</a> | <a href="/api/menu">Menu API</a>
      </nav>
    </header>
    {children}
    <footer>
      <hr />
      <span>I'm here to stay (Footer2)</span>
    </footer>
  </div>
);


export default Layout;
*/
