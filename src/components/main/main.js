import React from "react";
import Nav from "../navbar/nav";

const MainPage = () => {
  return (
    <>
        <div className="bg-star-wars-2">
          <Nav />
          <div className="text-gray-200 font-medium text-4xl font-galaxy flex justify-center items-center h-screen">
            A long time ago in a galaxy far, far away . . .
          </div>
        </div>
    </>
  );
}

export default MainPage;