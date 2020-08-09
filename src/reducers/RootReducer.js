import initialState from '../store';

console.log(initialState)

const RootReducer = (state=initialState, action) => {
    switch (action.type) {
        case "INCREASE_COUNT": 
        return {
            ...state,
            count: state.count + 1
        };
        case "FETCH_POSTS_WATCH": 
        return {
            ...state,
            data: state.data.concat(action.payload)
        };
        case "FETCH_POSTS_WATCH":
    
        default:
            return state;
    }
};

export default RootReducer;