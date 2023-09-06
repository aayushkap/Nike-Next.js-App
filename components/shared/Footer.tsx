import { copyrightSign } from "@/assets/icons";
import { footerLogo } from "@/assets/images";
import { footerLinks, socialMedia } from "../constants/index.js";

import Image from "next/image";

const Footer = () => {
  return (
    <footer className="max-container ">
      <div className="flex justify-between items-start flex-wrap flex-col">
        <div className="flex flex-col items-start">
          <a href="#">
            <Image
              src={footerLogo}
              width={150}
              height={46}
              alt={"Footer Logo"}
            />
          </a>
          <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm font-bold cursor-pointer">
            FIND A STORE
          </p>

          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((social) => (
              <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full cursor-pointer hover:bg-slate-gray">
                <Image
                  src={social.src}
                  alt={social.alt}
                  width={24}
                  height={24}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap mt-10 w-full">
          {footerLinks.map((link) => (
            <div>
              <h4 className="text-white font-montserrat text-2xl leading-normal font-medium ">
                {link.title}
              </h4>
              <ul>
                {link.links.map((link) => (
                  <li
                    key={link.name}
                    className="mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-slate-gray"
                  >
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between items-center text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 items-center justify-start font-montserrat cursor-pointer ">
          <Image
            src={copyrightSign}
            alt="Copyright"
            width={20}
            height={20}
            className="rounded-full"
          />
          <p>Copyright. All rights reserved.</p>
        </div>
        <p className=" font-montserrat cursor-pointer">Terms & Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
