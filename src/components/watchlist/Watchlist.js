import React, { useContext } from "react";
import Card from "../cards/card";
import { WatchlistContext } from "../context/WatchlistState";

const Watchlist = () => {

    const {watchlist} = useContext(WatchlistContext);
    
    return(
        <div className="bg-star-wars-4 bg-cover">
            <div className="flex flex-wrap justify-around sm:px-10 sm:m-0 sm:grid pt-[7.2rem] pb-10 w-full 3xl:grid-cols-8 2xl:grid-cols-7 xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3">   
                    {watchlist.map((item, index) => {
                        let isShow = item.original_title === undefined ? true : false;
                        return(
                            <div key={index} className="sm:ml-0 sm:px-5 mt-5">
                                {!isShow ? <Card className="w-96" data={item} title={item.original_title} description={item.overview} image={item.poster_path} /> 
                                : <Card className="w-96" data={item} title={item.original_name} description={item.overview} image={item.poster_path} /> }
                            </div>
                            )
                        })}
                </div>
        </div>
    )
}

export default Watchlist;