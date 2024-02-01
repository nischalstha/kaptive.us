import React, { useState } from "react";
import { close, menu, logoenlarged } from "../assets";
import { navLinks } from "../constants";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Navbar = ({ handleNavigation }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <Link to="/">
        <img src={logoenlarged} alt="hoobank" className="w-[125px] h-[100%]" />
      </Link>
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, i) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              i === navLinks.length - 1 ? "mr-0" : "mr-10"
            } text-white`}
          >
            {nav.id === "book" ? (
              <a
                href="https://calendly.com/kaptivus/staffing-discovery-call?month=2024-01"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link"
                // onClick={handleNavigation} // Call handleNavigation when this link is clicked
              >
                {nav.title}
              </a>
            ) : (
              <NavLink
                to={nav.id === "home" ? "/" : `/${nav.id}`}
                className={({ isActive }) =>
                  isActive
                    ? "nav-link border-b-2 border-yellow-400"
                    : "nav-link"
                }
                onClick={handleNavigation} // Call handleNavigation when this link is clicked
                exact
              >
                {nav.title}
              </NavLink>
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
          <ul className="list-none flex flex-col justify-start items-start flex-1">
            {navLinks.map((nav, i) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${
                  i === navLinks.length - 1 ? "mb-0" : "mb-4"
                } text-white`}
              >
                <div className="flex items-center w-full">
                  {/* If you want to include icons later, you can add an img tag here */}
                  {nav.id === "book" ? (
                    <a
                      href="https://calendly.com/kaptivus/staffing-discovery-call?month=2024-01"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center w-full justify-start"
                    >
                      {nav.title}
                    </a>
                  ) : nav.id === "about" ? (
                    <Link
                      to="/about"
                      className="flex items-center w-full justify-start"
                    >
                      {nav.title}
                    </Link>
                  ) : nav.id === "home" ? (
                    <Link
                      to="/"
                      className="flex items-center w-full justify-start"
                    >
                      {nav.title}
                    </Link>
                  ) : nav.id === "contact" ? (
                    <Link
                      to="/contact"
                      className="flex items-center w-full justify-start"
                    >
                      {nav.title}
                    </Link>
                  ) : (
                    <a
                      href={`#${nav.id}`}
                      className="flex items-center w-full justify-start"
                    >
                      {nav.title}
                    </a>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
