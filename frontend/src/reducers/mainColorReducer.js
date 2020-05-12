import { MAIN_COLOR } from '../actions/types';



export default (state={}, action) => {
    switch(action.type) {
        case MAIN_COLOR:
            return { ...state, color: action.payload };
        default:
            return state;
    };
};