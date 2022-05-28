import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Card from "../cards/movie-card";

const Shows = () => {
    
    const [isLoading, setLoading] = useState(true);
    const [appState, SetAppState] = useState(null);
    
    useEffect(() => {
        const apiurl = "https://api.themoviedb.org/3/search/tv?api_key="+process.env.REACT_APP_API_KEY+"&language=en-US&page=1&query=Star%20Wars&include_adult=false"
        axios.get(apiurl).then((showsData) => {
            const starWarsShows = showsData.data;
            SetAppState(starWarsShows);
            setLoading(false);
        });

    }, []);

    if(!isLoading) {
        return(
            <div className="flex flex-wrap">
                <div className="mt-28 w-full ml-12 flex flex-row ">
                    {appState.results.map((show) => {
                        return(
                            <div className="pl-10">
                                <Card title={show.original_name} description={show.overview} image={show.poster_path}/>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    } else
    return(
        <>
            <h1>Loading...</h1>
        </>
    );
}

export default Shows;