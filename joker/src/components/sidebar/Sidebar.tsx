import React from "react";
import Link from "next/link";
// import handler from "../../pages/api/menu/index";

function Sidebar() {
  // console.log("handler", handler);
  return (
    <div className="bg-red-400">
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
  );
}

export default Sidebar;
