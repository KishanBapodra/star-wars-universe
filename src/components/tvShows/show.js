import React from "react";
import { useLocation } from "react-router-dom";

const Show = (props) => {
    
    const location = useLocation();
    const data = location.state?.data;

    return(
        <div className="mt-24 ml-12">
            <h1>
                {data ? data.original_name : "Loading..."}
            </h1>
            <p>
                {data ? data.overview : "Loading..."}
            </p>
        </div>
    )
}

export default Show;