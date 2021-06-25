import React from "react";
import NavLink from "./navLink";
import { Link } from "gatsby";

const NavBar = () => {
  return (
    <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 mb-3">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <Link
            to="/"
            className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-black"
          >
            Aysan Isayo
          </Link>
        </div>
        <div className="px-4 cursor-pointer md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
        <div id="navbar-links">
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
          <NavLink 
            url="/about"
            style="p-1 fab text-lg leading-lg text-black opacity-75"
            text="About"
          />
          <NavLink 
            url="/projects"
            style="p-1 fab text-lg leading-lg text-black opacity-75"
            text="Projects"
          />
          <NavLink 
            url="/contact"
            style="p-1 fab text-lg leading-lg text-black opacity-75"
            text="Contact"
          />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
