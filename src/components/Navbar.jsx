import React, { useState } from "react";
import { close, menu, logoenlarged } from "../assets";
import { navLinks } from "../constants";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logoenlarged} alt="hoobank" className="w-[125px] h-[100%]" />
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, i) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              i === navLinks.length - 1 ? "mr-0" : "mr-10"
            } text-white mr-10`}
          >
            {nav.id === "book" ? (
              <a
                href="https://calendly.com/kaptivus/staffing-discovery-call?month=2024-01"
                target="_blank"
                rel="noopener noreferrer"
              >
                {nav.title}
              </a>
            ) : nav.id === "about" ? (
              <Link to="/about">{nav.title}</Link>
            ) : nav.id === "home" ? (
              <Link to="/">{nav.title}</Link>
            ) : (
              <a href={`#${nav.id}`}>{nav.title}</a>
            )}
          </li>
        ))}
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(previous => !previous)}
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, i) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${
                  i === navLinks.length - 1 ? "mr-0" : "mb-4"
                } text-white mr-10`}
              >
                {navLinks.map((nav, i) => (
                  <li
                    key={nav.id}
                    className={`font-poppins font-normal cursor-pointer text-[16px] ${
                      i === navLinks.length - 1 ? "mr-0" : "mr-10"
                    } text-white mr-10`}
                  >
                    {nav.id === "book" ? (
                      <a
                        href="https://calendly.com/kaptivus/staffing-discovery-call?month=2024-01"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {nav.title}
                      </a>
                    ) : nav.id === "about" ? (
                      <Link to="/about">{nav.title}</Link>
                    ) : nav.id === "home" ? (
                      <Link to="/">{nav.title}</Link>
                    ) : (
                      <a href={`#${nav.id}`}>{nav.title}</a>
                    )}
                  </li>
                ))}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
