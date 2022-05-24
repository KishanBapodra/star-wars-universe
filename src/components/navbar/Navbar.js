import React from "react";
import { Link } from "react-router-dom" 

const Navbar = () => {
    return(
        <nav className="absolute w-screen top-0 z-10 flex flex-wrap items-center justify-between px-2 py-5 text-white/75">
            <div className="container font-galaxy text-xl  mx-auto flex flex-wrap items-center justify-between">
                <div>
                    <Link className="text-3xl font-galaxy italic hover:text-white/100 hover:font-semibold" to="/">STAR WARS</Link>
                </div>
                <ul className="flex">
                    <li className="px-6 hover:text-white/100 hover:font-bold">
                        <Link to="games">Games</Link>       
                    </li>
                    <li className="px-6 hover:text-white/100 hover:font-bold">
                        <Link to="shows">Tv-Shows</Link>       
                    </li>
                    <li className="px-6 hover:text-white/100 hover:font-bold">
                        <Link to="movies">Movies</Link>      
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;