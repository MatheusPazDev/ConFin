import React from "react";
import Head from "next/head";

export default function Layout({ title, children }) {
  return (
    <div className="bg-gray-300">
      <Head>
        <title>{title}</title>
        <link
          rel="icon"
          href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXZkDo2JBej0yQPtvWnFtNKNqO-K7WiHjFpQ&usqp=CAU"
        />
      </Head>

      <main className="container mx-auto max-w-xl pt-8 min-h-screen">
        {children}
      </main>
    </div>
  );
}
