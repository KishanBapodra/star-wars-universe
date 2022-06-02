import React from "react";
import Nav from "../navbar/nav";

const MainPage = () => {
  return (
    <>
        <div className="bg-star-wars-2 flex flex-col h-screen">
          <Nav />
          <div className="text-gray-200 font-medium text-4xl font-galaxy h-screen flex justify-center items-center ">
            A long time ago in a galaxy far, far away . . .
          </div>
        </div>
    </>
  );
}

export default MainPage;