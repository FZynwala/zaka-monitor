import { FETCH_DAY_BY_DATE } from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_DAY_BY_DATE:
            return { ...state, ...action.payload };
        default:
            return state;
    }
};
