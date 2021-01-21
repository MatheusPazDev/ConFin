import Link from "next/link";
import React from "react";
import Layout from "../components/Layout";

const AboutPage = () => (
  <Layout title="About | ConFin">
    <div className="bg-blue-100">
      <h1>About</h1>
      <p>This is the about page</p>
      <p>
        <Link href="/">
          <a>Go home</a>
        </Link>
      </p>
    </div>
  </Layout>
);

export default AboutPage;
