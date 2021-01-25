import Link from "next/link";
import React from "react";

const AboutPage = () => (
  <div className="bg-blue-100">
    <h2>Relatórios</h2>
    <h1>
      Saldo:
      <span>
        <Link href="/">
          <a>Saldo</a>
        </Link>
      </span>
    </h1>
  </div>
);

export default AboutPage;
