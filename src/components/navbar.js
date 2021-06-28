import React from "react";
import NavLink from "./navLink";
import MenuBar from "./menuBar";
import { Link } from "gatsby";

const NavBar = () => {
  return (
    <nav className="relative flex items-center justify-between px-2 py-3 mb-3 h-20 bg-indigo-400 bg-opacity-50 shadow" role="navigation">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <Link
            to="/"
            className="text-xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
          >
            Aysan Isayo
          </Link>
        </div>
        <div className="px-4 cursor-pointer md:hidden">
          <MenuBar />
        </div>
        <div id="navbar-links" className="pr-8 md:block hidden">
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <NavLink
              url="/about"
              text="About"
            />
            <NavLink
              url="/projects"
              text="Projects"
            />
            <NavLink
              url="/contact"
              text="Contact"
            />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
