"use client";

import { headerLogo } from "@/assets/images";
import { hamburger } from "@/assets/icons";
import { navLinks } from "../constants/index.js";

import Image from "next/image";

import { useEffect, useState } from "react";
import Link from "next/link.js";

const Nav = () => {
  const [sideBar, setSideBar] = useState(false);

  const handleResize = () => {
    if (window.innerWidth > 1024) {
      setSideBar(false);
    }
  };

  useEffect(() => {
    // Add a window resize event listener
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="padding-x py-8 absolute z-20 w-full">
      <nav className="flex items-center justify-between max-container ">
        <a href="/">
          <Image src={headerLogo} alt="Logo" width={130} height={29} />
        </a>

        <section>
          <ul className=" flex-1 flex justify-center items-center gap-32 max-lg:hidden ">
            {navLinks.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.isRoute ? `/${item.href}` : `/#${item.href}`}
                  className="font-montserrat leading-normal text-lg text-slate-gray hover:text-coral-red"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {sideBar && (
          <section
            className={
              "rightsidebar rounded-bl-3xl bg-coral-red bg-opacity-100 lg:hidden" +
              (sideBar ? "w-fit " : "w-0")
            }
          >
            <ul className="flex flex-col justify-center items-center gap-24 py-20 transition-al">
              {navLinks.map((item) => (
                <li
                  key={item.label}
                  className="text-right w-full px-10 max-sm:px-4"
                >
                  <Link
                    href={item.isRoute ? `/${item.href}` : `/#${item.href}`}
                    className="font-montserrat leading-normal text-lg text-black hover:text-white transition-all"
                  >
                    {item.label}
                  </Link>
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
            className={
              "lg:hidden cursor-pointer transition-all" +
              (sideBar ? " rotate-90" : "")
            }
            onClick={() => setSideBar(!sideBar)}
          />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
