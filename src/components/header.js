import React from 'react';
import { Link } from 'gatsby';


const Header = () => {
    return (
        <header className="header">
            <Link to="/">Aysan Isayo</Link>
            <Link to="/">
                <div className="header-logo">
                    <img src="https://image.shutterstock.com/image-vector/brush-on-computer-icon-vector-260nw-1692671215.jpg" alt="header-logo"/>
                </div>
            </Link>
        </header>
    )
}

export default Header;