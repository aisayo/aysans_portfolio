import React from "react";
import { Link } from "gatsby";

const NavLink = ({ url, text }) => {
  return (
    <li className="nav-item">
      <Link
        to={url}
        className="p-1 fab text-lg leading-lg text-white opacity-75"
      >
        <span className="ml-2">{text}</span>
      </Link>
    </li>
  );
};

export default NavLink;
