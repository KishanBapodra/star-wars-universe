import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Card from "../cards/movie-card";

const Movies = () => {

    const [isLoading, setLoading] = useState(true)
    const [appState, SetAppState] = useState(null)

    useEffect(() => {
        const apiurl = "https://api.themoviedb.org/3/search/movie?api_key="+process.env.REACT_APP_API_KEY+"&language=en-US&query=Star%20Wars&page=1&include_adult=false"
        axios.get(apiurl).then((moviesData) => {
            const starWarsMovies = moviesData.data;
            SetAppState(starWarsMovies);
            setLoading(false);
        });
    }, []);
    // console.log(appState.results[3].original_title) // for title

    if(!isLoading) {
        return(
            <div className="flex flex-wrap">
            <div className="mt-28 w-full ml-12 flex flex-row ">   
                {appState.results.map((movie) => {
                    console.log(movie);
                    return(
                        <div className="pl-10">
                            <Card className="w-96" title={movie.original_title} description={movie.overview} image={movie.poster_path} />
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

export default Movies;