import React from 'react';
import { Link } from 'gatsby';


const Header = ({ children }) => {
    return (
        <header className="header">
            <Link to="/">
            </Link>
            <div>
                <main id="home">{ children }</main>
            </div>
        </header>
    )
}

export default Header;