import React, { ReactNode, useState } from "react";
import Head from "next/head";
import * as AiIcons from "react-icons/ai";

import useBreakpoint from "./utils/useBreakpoint";

import Sidebar from "./sidebar/Sidebar";

type Props = {
  children?: ReactNode;
  title?: string;
};

function Layout({ children, title = "Confin - Controle Financeiro" }: Props) {
  const isStatic = useBreakpoint("sm");
  const [isSidebar, setSidebar] = useState(true);
  const showSidebar = () => setSidebar(!isSidebar);

  return (
    <div className="bg-gray-100 flex border-r">
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Sidebar
        isStatic={isStatic}
        isSidebar={isSidebar}
        showSidebar={showSidebar}
      />

      <main className="flex-grow flex flex-col min-h-screen">
        <header className="bg-indigo-900 h-14 flex items-center justify-center">
          <div className="bg-gray-900 bg-opacity-50  px-3 h-14 text-white flex flex-grow items-center justify-between ">
            {!isStatic && (
              <button
                tabIndex={1}
                aria-hidden={!isSidebar}
                aria-label="Open Menu"
                title="Open Menu"
                className="p-1"
                onClick={showSidebar}
              >
                <AiIcons.AiOutlineBars size={32} color="rgba(0,0,0,0.6)" />
              </button>
            )}

            <span className="text-blue-400 font-bold text-xl flex items-center">
              <span className="text-white">
                <span className="text-blue-400 text-2xl"> Alberto Camargo</span>
              </span>
            </span>
            <button className="text-blue-700 underline text-2xl">Log In</button>
          </div>
        </header>

        <div className="bg-green-200 m-2 p-2">
          <>{children}</>
        </div>
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
