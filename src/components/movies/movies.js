import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const Movies = () => {

    const [appState, SetAppState] = useState({loading: false, movies: null});
    
    useEffect(() => {
        SetAppState({loading: true})
        const apiurl = "https://api.themoviedb.org/3/search/movie?api_key="+process.env.REACT_APP_API_KEY+"&language=en-US&query=Star%20Wars&page=1&include_adult=false"
        axios.get(apiurl).then((moviesData) => {
            const starWarsMovies = moviesData.data;
            SetAppState({loading: false ,movies: starWarsMovies});
        });

    }, []);

    return(
        <>
            <h1>Movies</h1>
        </>
    );
}

export default Movies;