import React, { ReactNode } from "react";
import Head from "next/head";

type Props = {
  children?: ReactNode;
  title?: string;
};

function Layout({ children, title = "Confin - Controle Financeiro" }: Props) {
  return (
    <div className="bg-gray-100 flex">
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

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
      <main className="flex-grow flex flex-col min-h-screen">
        <header className="bg-white border-b h-10 flex items-center justify-center">
          <div className="flex flex-grow items-center justify-between px-3">
            <span className="flex items-center">
              [LOGO]
              <h1>ConFin</h1>
            </span>
            <button className="text-blue-700 underline"> Log In</button>
          </div>
        </header>
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
