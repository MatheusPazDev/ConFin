import Link from "next/link";
import React from "react";

const AboutPage = () => (
  <div className="">
    <h2>Relatórios</h2>
    <div className="grid grid-cols-3 gap-4">
      <Link href="/report/balance">
        <button className="bg-gray-300 rounded-full h-24 w-24 flex items-center justify-center">
          <a>Saldo</a>
        </button>
      </Link>
      <Link href="/report/detailed">
        <button className="bg-gray-300 rounded-full p-3 flex items-center justify-between">
          <a>Extrato</a>
        </button>
      </Link>
    </div>
  </div>
);

export default AboutPage;
