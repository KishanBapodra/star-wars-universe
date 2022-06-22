import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Card from "../cards/card";

const Movies = () => {

    const [isLoading, setLoading] = useState(true)
    const [movies, setMovies] = useState([])
    
    useEffect(() => {
        // const apiurl1 = "https://api.themoviedb.org/3/search/movie?api_key="+process.env.REACT_APP_API_KEY+"&language=en-US&query=Star%20Wars&page=1&include_adult=false"
        const apiurl = "https://api.themoviedb.org/3/collection/10?api_key="+process.env.REACT_APP_API_KEY+"&language=en-US"
        axios.get(apiurl).then((collectionData) => {
            const collection = collectionData.data;
            setMovies(collection.parts)
            setLoading(false)
        })
        // axios.get(apiurl1).then((moviesData) => {
            // const starWarsMovies = moviesData.data;
            // setMovies([...movies, ...starWarsMovies.results])
            // setLoading(false);
        // });
    }, []);


    if(!isLoading) {
        return(
            <div className="bg-star-wars-2 bg-fixed">
                <div className="flex flex-wrap justify-around sm:m-0 sm:grid pt-[7.2rem] pb-10 w-full 3xl:grid-cols-8 2xl:grid-cols-7 xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3">   
                    {movies.map((movie, index) => {
                        return(
                            <li key={index} className="sm:pl-10 mt-5">
                                <Card className="w-96" data={movie} title={movie.original_title} description={movie.overview} image={movie.poster_path} />
                            </li>
                            )
                        })}
                </div>
            </div>
        )
    } else
    return(
        <div className="bg-star-wars-6 bg-cover">
            <h1 className="flex justify-center items-center h-screen text-6xl font-extrabold">Loading...</h1>
        </div>
    );
    
}

export default Movies;