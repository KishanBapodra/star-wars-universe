import React from "react";
import { useLocation } from "react-router-dom";

const Movie = (props) => {

    const location = useLocation();
    const data = location.state?.data;
    console.log(data)
    return(
        <div className="ml-12">
            <h1>
                {data ? data.original_title : "Loading..."}
            </h1>
            <p>
                {data ? data.overview : "Loading..."}
            </p>
        </div>
    )
}

export default Movie;