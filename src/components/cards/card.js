import React from "react";
import { Link } from "react-router-dom";

const Card = ({data ,title, description, image}) => {

  return(
        <div className="flex flex-column w-[10rem] h-[24rem] shadow-md hover:shadow-2xl text-ellipsis overflow-hidden">
            <div className="rounded-lg shadow-lg max-w-xs text-ellipsis bg-white bg-opacity-40 ">
              {/* <Link to={title.split(" ").join("-").split(":").join("").toLowerCase()}> */}
              <Link to={title.replace(/\//g,'-').replace(/\s+/g,'-').replace(/:+/g,'').toLowerCase()} state={{data: data}}>
                <img className="rounded-t-lg align-middle" src={"https://image.tmdb.org/t/p/w200/"+image} alt=""/>
                <div className="p-6">
                  <h5 className="flex justify-center items-center w-full h-full text-gray-900 text-lg font-medium mb-2">{title}</h5>
                  {/* <p className="text-gray-700 text-base mb-4">
                    {description}
                  </p> */}
                </div>
              </Link>
            </div>
        </div>
  );
}

export default Card