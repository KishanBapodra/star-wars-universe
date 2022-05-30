import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom"
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {

    const [searchClicked, setSearchClicked] = useState(false);

    function handleSearch() {
        setSearchClicked(!searchClicked);
    }

    return(
        <nav className="absolute bg-gray-900 bg-opacity-30 w-screen top-0 z-50 flex flex-wrap items-center justify-between px-2 py-5 text-white/75">
            <div className="container font-galaxy text-xl  mx-auto flex flex-wrap items-center justify-between">
                <div>
                    <Link className="text-3xl font-galaxy italic hover:text-white/100 hover:font-semibold" to="/">STAR WARS</Link>
                </div>
                <ul className="flex">
                    <li className="px-6 hover:text-white/100 hover:font-bold">
                        <Link to="watchlist">Watchlist</Link>       
                    </li>
                    <li className="px-6 hover:text-white/100 hover:font-bold">
                        <Link to="games">Games</Link>       
                    </li>
                    <li className="px-6 hover:text-white/100 hover:font-bold">
                        <Link to="shows">Tv-Shows</Link>       
                    </li>
                    <li className="px-6 hover:text-white/100 hover:font-bold">
                        <Link to="movies">Movies</Link>      
                    </li>
                    <li className="px-6 hover:text-white/100 hover:font-bold">
                    {!searchClicked? <button onClick={handleSearch}>
                                        <FontAwesomeIcon icon={faSearch} />
                                    </button> :
                                    <input 
                                        className=" font-sans font-normal bg-opacity-40 bg-transparent rounded-lg border-white border pl-2 mb-2 text-base"
                                        type="text" 
                                        placeholder="Search" 
                                        onKeyPress={event => {
                                            if (event.key === "Enter") {
                                                handleSearch();
                                            }
                                        }}
                                    />
                    }
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;