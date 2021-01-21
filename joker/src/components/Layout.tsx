import React, { ReactNode, useState } from "react";
import Head from "next/head";
import { useMediaQuery } from "react-responsive";

import * as AiIcons from "react-icons/ai";

type Props = {
  children?: ReactNode;
  title?: string;
};
1;
function Layout({ children, title = "Confin - Controle Financeiro" }: Props) {
  const [isClosed, setClosed] = useState(false);

  const isStatic = useMediaQuery({
    query: "(min-width:640px)",
  });

  return (
    <div className="bg-gray-100 flex">
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      {(isStatic || !isClosed) && (
        <aside className="bg-white w-64 min-h-screen flex flex-col">
          <div className="bg-white border-r border-b px-4 h-10 flex items-center">
            <span className="text-blue py-2"> Aplication </span>
          </div>

          <div className="border-r flex-grow">
            <nav>
              <ul>
                <li className="p-3">
                  <a href="/">Home</a>
                </li>
                <li className="p-3">
                  <a href="/mov/entrada">Entrada</a>
                </li>
                <li className="p-3">
                  <a href="/mov/saida">Saida</a>
                </li>
                <li className="p-3">
                  <a href="/mov/saldo">Saldo</a>
                </li>
                <li className="p-3">
                  <a href="/about">About</a>
                </li>
              </ul>
            </nav>
          </div>
        </aside>
      )}
      <main className="flex-grow flex flex-col min-h-screen">
        <header className="bg-white border-b h-10 flex items-center justify-center">
          {!isStatic &&
            (isClosed ? (
              <button
                tabIndex={1}
                aria-label="Open Menu"
                title="Open Menu"
                className="p-1"
                onClick={() => setClosed(false)}
              >
                <AiIcons.AiOutlineBars size={32} color="rgba(0,0,0,0.6)" />
              </button>
            ) : (
              <button
                tabIndex={1}
                aria-label="Close Menu"
                title="Close Menu"
                className="p-1"
                onClick={() => setClosed(true)}
              >
                <AiIcons.AiOutlineCloseCircle
                  size={26}
                  color="rgba(0,0,0,0.6)"
                />
              </button>
            ))}

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
