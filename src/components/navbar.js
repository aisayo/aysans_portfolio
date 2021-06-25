import React from 'react';
import { Link } from 'gatsby';


const NavBar = () => {
    return (
        <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link to='/'
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white" 
            >
              Aysan Isayo
            </Link>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <Link 
                    to='/about' 
                    className="fab text-lg leading-lg text-white opacity-75">
                    <span className="ml-2">
                        About
                    </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                        to='/projects' 
                        className="fab text-lg leading-lg text-white opacity-75">
                        <span className="ml-2">
                            Projects
                        </span>
                    </Link>              
                </li>
                <li className="nav-item">
                <Link 
                        to='/contact' 
                        className="fab text-lg leading-lg text-white opacity-75">
                        <span className="ml-2">
                            Contact
                        </span>
                    </Link>              
                </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default NavBar;