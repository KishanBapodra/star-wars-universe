import React from "react";
import { useState, useEffect } from "react";
import {
  Route, 
  Routes} from 'react-router-dom';
import MainPage from "./components/main/main";
import Movies from "./components/movies/movies";
import Shows from "./components/tvShows/tvshows";
import Games from "./components/games/Games";
import Watchlist from "./components/watchlist/Watchlist";
import Movie from "./components/movies/movie";
import Show from "./components/tvShows/show";
import Nav from "./components/navbar/nav";
import { useLocation } from "react-router-dom";

function App() {
  
  const [isMain, setMain] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    if (location.pathname === "/") {
      setMain(true);
    } else {
      setMain(false);
    }
  }, [location]);

  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
      {isMain? null : <Nav />}
      <Routes>
        <Route path="/watchlist" element={<Watchlist />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<Movie />} />
        <Route path="/shows" element={<Shows />} />
        <Route path="/shows/:id" element={<Show />} />
        <Route path="/games" element={<Games />} />
      </Routes>
    </>
  );
}

export default App;
