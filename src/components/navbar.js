import React from 'react';
import { Link } from 'gatsby';


const NavBar = () => {
    return (
        <React.Fragment>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/projects'>Projects</Link>
        </React.Fragment>
    )
}

export default NavBar;