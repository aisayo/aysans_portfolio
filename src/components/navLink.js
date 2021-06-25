import React from "react";
import { Link } from "gatsby";

const NavLink = ({ url, style, text }) => {
  return (
    <li className="nav-item">
      <Link to={url} className={style}>
        <span className="ml-2">{text}</span>
      </Link>
    </li>
  );
};

export default NavLink;
