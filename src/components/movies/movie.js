import React from "react";
import { useLocation } from "react-router-dom";

const Movie = (props) => {

    const location = useLocation();
    const data = location.state?.data;

    if(data) {
    return(
        <div className="py-24 bg-sky-900 h-screen w-full">
            <div className="h-full flex flex-col my-4 sm:flex-row sm:justify-around items-center mx-10 lg:mx-20">
                <div className="my-4 sm:my-0 h-fit min-h-[50%] sm:min-h-fit bg-cyan-300 relative overflow-y-scroll scrollbar-hide max-w-3xl rounded-3xl border-2 border-red-400 text-white/80 shadow-red-800 shadow-xl">
                    <h1 className="flex content-center justify-center font-extrabold text-sky-900 text-2xl p-4 ">
                        {data ? data.original_title : "Loading..."}
                    </h1>
                    <p className="p-2 px-4 font-semibold text-sky-900 text-justify">
                        {data ? data.overview : "Loading..."}
                    </p>
                </div>
                <div className="flex justify-center mt-5 my-2 sm:my-0 sm:ml-8 md:min-h-fit sm:block sm:min-w-[23%] sm:min-h-[50%] lg:min-h-fit lg:min-w-fit">
                    <img className="shadow-lg shadow-red-800 rounded-t-lg max-h-[75%] sm:mx-3 lg:mx-8 align-middle" src={"https://image.tmdb.org/t/p/w300/"+data.poster_path} alt=""/>
                </div>
            </div>
        </div>
    )} else {
        return(
            <div className="bg-slate-800 h-screen">
                <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[1.75rem] text-white bg-red-700 p-3 border-2 shadow-xl shadow-purple-700 border-purple-600 rounded-xl">
                SORRY, Cant access directly. Goto Movies/shows -&gt; click on card. Voila
                </p>
            </div>
        )
    } 
}

export default Movie;