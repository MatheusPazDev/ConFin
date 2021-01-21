import React, { useState } from "react";

import Head from "next/head";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { AiFillCloseCircle } from "react-icons/ai";

import useBreakpoint from "./hooks/Breakpoint";
import Transition from "./hooks/Transition";

import Sidebar from "./menu/Sidebar";

export default function Layout({ title, children }) {
  // Estado da Sidebar
  const [isClosed, setClosed] = useState(true);

  const isStatic = useBreakpoint("sm");

  return (
    <div className="bg-gray-100 flex">
      <Head>
        <title>{title}</title>
        <link
          rel="icon"
          href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXZkDo2JBej0yQPtvWnFtNKNqO-K7WiHjFpQ&usqp=CAU"
        />
      </Head>

      <div className="z-20">
        <Transition
          appear={true}
          show={isStatic || !isClosed}
          enter="transition-all duration-500"
          enterFrom="-ml-64"
          enterTo="ml-0"
          leave="transition-all duration-500"
          leaveTo="-ml-64"
        >
          <Sidebar
            isStatic={isStatic}
            closeSidebar={(value) => setClosed(value)}
          />
        </Transition>
      </div>

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
        <div
          className="fixed inset-0 bg-black opacity-0"
          onClick={() => setClosed(true)}
        ></div>
      </Transition>

      <main className="flex-grow flex flex-col min-h-screen">
        <header className="bg-white border-b h-10 flex items-center justify-center">
          <div className="flex flex-grow items-center justify-between px-3">
            {!isStatic && (
              <button
                tabIndex={1}
                aria-label="Open Menu"
                aria-hidden={!isClosed}
                title="Open Menu"
                className="w-10 p-1"
                onClick={() => setClosed(false)}
              >
                <AiOutlineMenuUnfold size={30} color="#15b6d6" />
              </button>
            )}

            <h1>Home</h1>
            <button className="text-blue-700">Log in</button>
          </div>
        </header>

        <main className="container mx-auto max-w-xl pt-8 min-h-screen">
          {children}
        </main>
      </main>
    </div>
  );
}
