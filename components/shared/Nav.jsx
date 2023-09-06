"use client";

import { headerLogo } from "@/assets/images";
import { hamburger } from "@/assets/icons";
import { navLinks } from "../constants/index.js";

import Image from "next/image";

import { useState } from "react";

const Nav = () => {
  const [sideBar, setSideBar] = useState(false);
  console.log(sideBar);

  return (
    <header className="padding-x py-8 absolute z-20 w-full ">
      <nav className="flex items-center justify-between max-container">
        <a href="/">
          <Image src={headerLogo} alt="Logo" width={130} height={29} />
        </a>

        <section>
          <ul className="flex-1 flex justify-center items-center gap-32 max-xl:hidden">
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

        <div>
          <Image
            src={hamburger}
            alt="Hamburger"
            height={25}
            width={25}
            className="xl:hidden cursor-pointer"
            onClick={() => setSideBar(!sideBar)}
          />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
