import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { WatchlistContext } from "../context/WatchlistState";
import { useLocation } from "react-router-dom";
import { RiPlayListAddFill } from "react-icons/ri";
import { CgPlayListRemove } from "react-icons/cg";
import { CgPlayListAdd } from "react-icons/cg";

const Card = ({data ,title, description, image}) => {

  const { addToWatchlist, watchlist } = useContext(WatchlistContext);
  const location = useLocation()
  const isWatchlist = location.pathname === '/watchlist' ? true : false;

  let storedMovie = watchlist.find(i => i.title === title)
  let storedShow = watchlist.find(i => i.original_name === title)
  const btnDisable = storedMovie || storedShow ? true : false;

  return(
        <div className="relative group flex flex-column w-[10rem] h-[24rem] shadow-md hover:shadow-[0_45px_85px_-18px_rgba(0,0,0,1)] text-ellipsis overflow-hidden">
            <div className="rounded-lg shadow-lg max-w-xs text-ellipsis bg-white bg-opacity-50">
              <Link to={title.replace(/\//g,'-').replace(/\s+/g,'-').replace(/:+/g,'').toLowerCase()} state={{data: data}}>
                <img className="rounded-t-lg align-middle" src={"https://image.tmdb.org/t/p/w200/"+image} alt=""/>
                <div className="p-6">
                  <h5 className="flex justify-center items-center w-full h-full text-gray-900 text-lg font-medium mb-2">{title}</h5>
                </div>
              </Link>
            </div>
            <button disabled={btnDisable} onClick={() => addToWatchlist(data)} className={`hidden text-neutral-400 hover:text-white p-2 font-semibold hover:font-extrabold rounded-lg ${!btnDisable ? "group-hover:block" : null} absolute hover:cursor-pointer w-14 h-14 bg-slate-900 `}>
              <CgPlayListAdd className="font-extrabold text-[2.85rem]" />
            </button>
            <button disabled={!btnDisable} onClick={() => addToWatchlist(data)} className={`hidden right-0 text-neutral-400 hover:text-white p-[0.4rem] font-semibold hover:font-extrabold rounded-lg ${btnDisable ? "group-hover:block" : null} absolute hover:cursor-pointer w-14 h-14 bg-slate-900 `}>
              <CgPlayListRemove className="font-extrabold text-5xl" />
            </button>
            
        </div>
  );
}

export default Card