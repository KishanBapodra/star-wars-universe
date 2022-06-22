import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { WatchlistContext } from "../context/WatchlistState";

const Card = ({data ,title, description, image}) => {

  const { addToWatchlist, watchlist } = useContext(WatchlistContext);

  let storedMovie = watchlist.find(i => i.title === title)
  let storedShow = watchlist.find(i => i.original_name === title)
  const btnDisable = storedMovie || storedShow ? true : false;

  return(
        <div className="relative group flex flex-column w-[10rem] h-[24rem] shadow-md hover:shadow-[0_45px_85px_-18px_rgba(0,0,0,1)] text-ellipsis overflow-hidden">
            <div className="rounded-lg shadow-lg max-w-xs text-ellipsis bg-white bg-opacity-40 group-hover:opacity-70">
              <Link to={title.replace(/\//g,'-').replace(/\s+/g,'-').replace(/:+/g,'').toLowerCase()} state={{data: data}}>
                <img className="rounded-t-lg align-middle" src={"https://image.tmdb.org/t/p/w200/"+image} alt=""/>
                <div className="p-6">
                  <h5 className="flex justify-center items-center w-full h-full text-gray-900 text-lg font-medium mb-2">{title}</h5>
                </div>
              </Link>
            </div>
            <button disabled={btnDisable} onClick={() => addToWatchlist(data)} className="hidden rounded-lg group-hover:block absolute hover:cursor-pointer top- w-full h-10 left-1/2 bg-gray-200 bg-opacity-70 -translate-x-1/2 -translate-y-1/2 ">Add to watchlist</button>  
        </div>
  );
}

export default Card