"use client";

import { headerLogo } from "@/assets/images";
import { hamburger } from "@/assets/icons";
import { navLinks } from "../constants/index.js";

import Image from "next/image";

import { useState } from "react";

const Nav = () => {
  const [sideBar, setSideBar] = useState(false);

  window.addEventListener("resize", handleResize); //Close sidebar on resize.
  function handleResize() {
    setSideBar(false);
  }

  return (
    <header className="padding-x py-8 absolute z-20 w-full">
      <nav className="flex items-center justify-between max-container ">
        <a href="/">
          <Image src={headerLogo} alt="Logo" width={130} height={29} />
        </a>

        <section>
          <ul className=" flex-1   flex justify-center items-center gap-32 max-lg:hidden ">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="font-montserrat leading-normal text-lg text-slate-gray hover:text-coral-red"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </section>

        {sideBar && (
          <section
            className={"rightsidebar lg:hidden " + (sideBar ? "w-fit " : "w-0")}
          >
            <ul className="flex flex-col justify-center items-center gap-40 max-md:gap-10 py-28">
              {navLinks.map((item) => (
                <li
                  key={item.label}
                  className="text-right w-full px-10 max-sm:px-2"
                >
                  <a
                    href={item.href}
                    className="font-montserrat leading-normal text-lg text-slate-gray hover:text-coral-red"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        )}

        <div className="z-20">
          <Image
            src={hamburger}
            alt="Hamburger"
            height={25}
            width={25}
            className="lg:hidden cursor-pointer"
            onClick={() => setSideBar(!sideBar)}
          />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
