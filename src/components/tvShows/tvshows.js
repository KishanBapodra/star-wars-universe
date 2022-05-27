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

    console.log(appState)
    if(!isLoading) {
        return(
            appState.results.map((show) => {
                console.log(show);
                return(
                   <Card title={show.original_name} description={show.overview} image={show.poster_path}/>
                )
            })
        )
    } else
    return(
        <>
            <h1>Loading...</h1>
        </>
    );
}

export default Shows;