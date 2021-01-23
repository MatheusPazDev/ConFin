import Link from "next/link";
import React from "react";

const AboutPage = () => (
  <div className="bg-blue-100">
    <h1>About</h1>
    <p>This is the about page</p>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </div>
);

export default AboutPage;
