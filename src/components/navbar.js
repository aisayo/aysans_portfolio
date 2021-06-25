import React from "react";
import NavLink from "./navLink";
import MenuBar from "./menuBar";
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
          <MenuBar />
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
