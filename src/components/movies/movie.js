import React from "react";
import { useLocation } from "react-router-dom";

const Movie = (props) => {

    const location = useLocation();
    const data = location.state?.data;
    console.log(data)
    return(
        <div className="py-24 bg-red-500/80 h-screen w-full">
            <div className="h-full flex justify-around items-center mx-20">
                <div className="h-48 min-h-full sm:min-h-fit bg-slate-700 relative overflow-y-scroll scrollbar-hide max-w-3xl rounded-3xl border-2 border-blue-400 text-white/80 shadow-blue-700 shadow-xl">
                    <h1 className="flex content-center justify-center font-bold text-2xl p-4 ">
                        {data ? data.original_title : "Loading..."}
                    </h1>
                    <p className=" p-4 font-normal text-justify">
                        {data ? data.overview : "Loading..."}
                    </p>
                </div>
                <div className="ml-8 md:min-h-fit hidden sm:block sm:min-w-[23%] sm:min-h-[50%] lg:min-h-fit lg:min-w-fit">
                    <img className="rounded-t-lg align-middle" src={"https://image.tmdb.org/t/p/w300/"+data.poster_path} alt=""/>
                </div>
            </div>
        </div>
    )
}

export default Movie;