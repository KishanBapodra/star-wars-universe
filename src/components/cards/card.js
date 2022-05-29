import React from "react";

const Card = ({title, description, image}) => {
    return(
        <div className="flex flex-column w-[10rem] h-[24rem] shadow-md hover:shadow-2xl text-ellipsis overflow-hidden">
            <div className="rounded-lg shadow-lg max-w-xs text-ellipsis">
              <a href="#!">
                <img className="rounded-t-lg align-middle" src={"https://image.tmdb.org/t/p/w200/"+image} alt=""/>
              </a>
              <div className="p-6 ">
                <h5 className="flex justify-center items-center w-full h-full text-gray-900 text-lg font-medium mb-2">{title}</h5>
                {/* <p className="text-gray-700 text-base mb-4">
                  {description}
                </p> */}
              </div>
            </div>
        </div>
  );
}

export default Card