import React, { useContext } from "react";
import Card from "../cards/card";
import { WatchlistContext } from "../context/WatchlistState";

const Watchlist = () => {

    const {watchlist} = useContext(WatchlistContext);
    return(
        <div className="bg-star-wars-4 bg-cover">
            <div className="flex flex-wrap justify-around sm:m-0 sm:grid pt-[7.2rem] pb-10 w-full 3xl:grid-cols-8 2xl:grid-cols-7 xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3">   
                    {watchlist.map((movie, index) => {
                        return(
                            <li key={index} className="sm:pl-10 mt-5">
                                <Card className="w-96" data={movie} title={movie.original_title} description={movie.overview} image={movie.poster_path} />
                            </li>
                            )
                        })}
                </div>
        </div>
    )
}

export default Watchlist;