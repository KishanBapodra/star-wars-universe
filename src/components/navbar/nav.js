import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Nav = () => {
    
    const [searchClicked, setSearchClicked] = useState(false);
    // const [user, setUser] = useState(false);
    const [navBackground, setNavBackground] = useState(false);
    const [mobileNav, setMobileNav] = useState(false);
    const [hideButton, setHideButton] = useState(false);

    function handleSearch() {
        setSearchClicked(!searchClicked);
    }

    function changeBackground() {
      if(window.scrollY >= 35) {
        setNavBackground(true);
      } else {
        setNavBackground(false);
      }
    }
    useEffect(() => {
      window.addEventListener('scroll', changeBackground)
    })

    // function getUser() {
    //     fetch('http://localhost:8000/users')
    //       .then(response => {
    //         return response.text();
    //       })
    //       .then(data => {
    //         setUser(data);
    //       });
    // }

    function createUser() {
    //     let name = prompt('Enter user name');
    //     let password = prompt('Enter password');
    //     fetch('http://localhost:8000/', {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify({name, password}),
    //     })
    //       .then(response => {
    //         return response.text();
    //       })
    //       .then(data => {
    //         alert(data);
    //         // getUser();
    //       });
    }

    function handleNav() {
        setMobileNav(!mobileNav);
        setHideButton(true);
    }

    return(
        <nav className={`fixed z-10 w-full px-2 sm:px-4 py-6 rounded bg-slate-900 bg-opacity-0 top-0 ${navBackground ? 'bg-opacity-100 text-white' : null}`} >
            <div className="px-0 lg:px-20 font-galaxy flex flex-wrap justify-between items-center w-full">
                <Link to="/" className="flex items-center">
                    <span className="self-center text-3xl font-semibold whitespace-nowrap text-white/80 hover:text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0  md:p-0 dark:text-white/80 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">STAR WARS</span>
                </Link>

                <button onClick={handleNav} data-collapse-toggle="mobile-menu" type="button" className={` pb-4 p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-white/80 dark:hover:bg-gray-700 dark:focus:ring-gray-600 ${hideButton ? "hidden" : ""}`} aria-controls="mobile-menu" aria-expanded="false">
                  <span className="sr-only">Open main menu</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                  <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </button>
                {/* {mobileNav && <div>
                    
                            <Link to="/watchlist" className=" list-none">Watchlist</Link>
                            <Link to="/shows" className="">Tv-Shows</Link>
                            <Link to="/movies" className="">Movies</Link>
                         
                            </div>} */}
                <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
                    <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                        <li>
                            <Link to="/watchlist" className="text-lg block py-2 pr-4 pl-3 text-white/80 hover:text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0  md:p-0 dark:text-white/80 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Watchlist</Link>
                        </li>
                        <li>
                            <Link to="/shows" className="text-lg py-2 pr-4 pl-3 text-white/80 hover:text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0  md:p-0 dark:text-white/80 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Tv-Shows</Link>
                        </li>
                        <li>
                            <Link to="/movies" className="text-lg py-2 pr-4 pl-3 text-white/80 hover:text-white hover:bg-gray-50 md:hover:bg-transparent md:border-0  md:p-0 dark:text-white/80 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Movies</Link>
                        </li>
                        {/* <li>
                            <button onClick={createUser} className="text-lg pr-4 pl-3 text-white/80 hover:text-white hover:bg-gray-50 md:hover:bg-transparent md:border-0  md:pl-0 dark:text-white/80 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Login</button>
                        </li> */}
                        {/* <li>
                        {!searchClicked? <button className=" text-white/80 hover:bg-gray-50 md:hover:bg-transparent md:border-0  md:p-0 md:pl-1 dark:text-white/80 md:dark:hover:text-white dark:hover:bg-white/80 dark:hover:text-white md:dark:hover:bg-transparent" onClick={handleSearch}>
                                        <FontAwesomeIcon className="py-1 text-sm" icon={faSearch} />
                                        </button> :
                                        <input
                                        className=" font-sans font-normal bg-opacity-40 bg-transparent rounded-lg text-white border-white border pl-2 mb-2 text-base"
                                        type="text"
                                        placeholder="Search"
                                        onKeyPress={event => {
                                            if (event.key === "Enter") {
                                                handleSearch();
                                            }
                                        }}
                                        />
                        }
                      </li> */}
                  </ul>
              </div>
            </div>
        </nav>
    )
}

export default Nav;