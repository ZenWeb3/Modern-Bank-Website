import React, { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../Constant";

const Navbar = () => {
  const [Toggle, setToggle] = useState(false);
  return (
    <nav className="w-full justify-between  flex py-6 items-center navbar">
      <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" />
      <ul className="list-none sm:flex hidden justify-end  items-center flex-1 ">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins cursor-pointer font-normal text-[16px]
                       ${
                         index === navLinks.length - 1 ? "mr-0" : "mr-10"
                       } text-white`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden justify-end items-center flex flex-1">
        <img
          src={Toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[close] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />

        <div
          className={`${Toggle ? "flex" : "hidden"}
                p-6 bg-black-gradient absolute top-20 right-0 
                mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end  items-center flex-1 ">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins cursor-pointer font-normal text-[16px]
                    ${
                      index === navLinks.length - 1 ? "mb-0" : "mb-4"
                    } text-white`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
