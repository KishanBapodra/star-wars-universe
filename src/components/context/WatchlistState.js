import React from "react";
import { createContext, useEffect, useReducer } from "react";
import appReducer from "./appReducer";

const init = {
    watchlist: localStorage.getItem('watchlist') ? JSON.parse(localStorage.getItem('watchlist')): [],
    watched: localStorage.getItem('watched') ? JSON.parse(localStorage.getItem('watched')): [],
}

export const WatchlistContext = createContext(init);

export const WatchlistProvider = props => {
    
    const [state, dispatch] = useReducer(appReducer, init);

    useEffect(() => {
        localStorage.setItem('watchlist', JSON.stringify(state.watchlist));
        localStorage.setItem('watched', JSON.stringify(state.watched));
    }, [state])

    const addToWatchlist = movie => {
        dispatch({type: "ADD_TO_WATCHLIST", payload: movie})
    }

    const addToWatched = movie => {
        dispatch({type: "ADD_TO_WATCHED", payload: movie})
    }

    return (
        <WatchlistContext.Provider 
            value={{
                watchlist: state.watchlist, 
                watched: state.watched, 
                addToWatchlist, 
                addToWatched
            }}
        >
            {props.children}
        </WatchlistContext.Provider>
    )
}