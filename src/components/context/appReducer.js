const appReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_WATCHLIST":
            return {
                ...state, 
                watchlist: [action.payload, ...state.watchlist]
            };
        case "ADD_TO_WATCHED":
            return {
                ...state,
                watched: [action.payload, ...state.watched]
            };
        default:
            return state; 
    }
};
export default appReducer;