import React from "react";
import { useLocation } from "react-router-dom";

const Movie = (props) => {

    const location = useLocation();
    const data = location.state?.data;
    console.log(data)
    return(
        <div className="p-24 bg-red-500/80 h-screen w-full">
            <div className="h-full flex items-center mx-20">
                <div className="h-48 bg-slate-700 max-w-3xl rounded-3xl border-2 border-blue-400 text-white/80 shadow-blue-700 shadow-xl">
                    <h1 className="flex content-center justify-center font-bold text-2xl p-4 ">
                        {data ? data.original_title : "Loading..."}
                    </h1>
                    <p className=" p-4 font-normal">
                        {data ? data.overview : "Loading..."}
                    </p>
                </div>
                <div className=" ml-8">
                    <img className="rounded-t-lg align-middle" src={"https://image.tmdb.org/t/p/w200/"+data.poster_path} alt=""/>
                </div>
            </div>
        </div>
    )
}

export default Movie;