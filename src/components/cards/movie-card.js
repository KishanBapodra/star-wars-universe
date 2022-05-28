import React from "react";

const Card = ({title, description, image}) => {
    return(
        <div className="flex flex-column w-80">
            <div className="rounded-lg shadow-lg max-w-xs">
              <a href="#!">
                <img className="rounded-t-lg" src={"https://image.tmdb.org/t/p/w342/"+image} alt=""/>
              </a>
              <div className="p-6">
                <h5 className="text-gray-900 text-xl font-medium mb-2">{title}</h5>
                <p className="text-gray-700 text-base mb-4">
                  {description}
                </p>
              </div>
            </div>
        </div>
  );
}

export default Card