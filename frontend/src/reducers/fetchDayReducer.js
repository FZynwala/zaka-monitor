import { FETCH_TODAY } from '../actions/types';



export default (state={}, action) => {
    switch(action.type) {
        case FETCH_TODAY:
            return { ...state,  ...action.payload }
        default:
            return state;
    };
};
