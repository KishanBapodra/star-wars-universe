import React from "react";
import Navbar from "./components/navbar/Navbar";
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

function App() {
  return (
    <>
      <Navbar className="z-10"/>
      <Routes>
        <Route path="/" element={<MainPage />} />
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
