import { FETCH_NAME, POST_NAME } from '../actions/types';



export default (state={}, action) => {
    switch(action.type) {
        case FETCH_NAME:
            return { ...state,  ...action.payload };
        case POST_NAME:
            return { ...state, ...action.payload };
        default:
            return state;
    };
};