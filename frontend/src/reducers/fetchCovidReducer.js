import { FETCH_COVID, FETCH_COVID_PL } from '../actions/types';



export default (state={}, action) => {
    switch(action.type) {
        case FETCH_COVID:
            return { ...state,  world: action.payload };
        case FETCH_COVID_PL:
            return { ...state, poland: action.payload };
        default:
            return state;
    };
};