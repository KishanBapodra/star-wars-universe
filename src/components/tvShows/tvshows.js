import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Card from "../cards/card";

const Shows = () => {
    
    const [isLoading, setLoading] = useState(true);
    const [shows, SetShows] = useState(null);
    
    useEffect(() => {
        const apiurl = "https://api.themoviedb.org/3/search/tv?api_key="+process.env.REACT_APP_API_KEY+"&language=en-US&page=1&query=Star%20Wars&include_adult=false"
        axios.get(apiurl).then((showsData) => {
            const starWarsShows = showsData.data;
            SetShows(starWarsShows);
            setLoading(false);
        });

    }, []);

    if(!isLoading) {
        return(
            <div className="bg-star-wars-5 bg-cover">
                <div className="flex flex-wrap justify-around sm:px-10 sm:m-0 sm:grid pt-[7.2rem] pb-10 w-full 3xl:grid-cols-8 2xl:grid-cols-7 xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3">
                    {shows.results.map((show, index) => {
                        return(
                            <div key={index} className="sm:ml-0 sm:px-5 mt-5">
                                <Card data={show} title={show.original_name} description={show.overview} image={show.poster_path}/>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    } else
    return(
        <div className="bg-star-wars-5 bg-cover">
            <h1 className="flex justify-center items-center h-screen text-6xl font-extrabold">Loading...</h1>
        </div>
    );
}

export default Shows;