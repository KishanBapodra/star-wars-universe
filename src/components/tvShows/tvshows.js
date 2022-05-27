import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const Shows = () => {
    
    const [appState, SetAppState] = useState({shows: null});
    
    useEffect(() => {
        const apiurl = "https://api.themoviedb.org/3/search/tv?api_key="+process.env.REACT_APP_API_KEY+"&language=en-US&page=1&query=Star%20Wars&include_adult=false"
        axios.get(apiurl).then((showsData) => {
            const starWarsShows = showsData.data;
            SetAppState({shows: starWarsShows});
        });

    }, []);

    return(
        <>
            <h1>Shows</h1>
        </>
    );
}

export default Shows;