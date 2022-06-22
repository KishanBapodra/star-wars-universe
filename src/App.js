import React from "react";
import {
  Route, 
  Routes} from 'react-router-dom';
import { WatchlistProvider } from "./components/context/WatchlistState";
import MainPage from "./components/main/main";
import Movies from "./components/movies/movies";
import Shows from "./components/tvShows/tvshows";
import Watchlist from "./components/watchlist/Watchlist";
import Movie from "./components/movies/movie";
import Show from "./components/tvShows/show";
import Nav from "./components/navbar/nav";

function App() {

  return (
    <WatchlistProvider>
      <Nav />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/watchlist" element={<Watchlist />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<Movie />} />
        <Route path="/shows" element={<Shows />} />
        <Route path="/shows/:id" element={<Show />} />
      </Routes>
    </WatchlistProvider>
  );
}

export default App;
