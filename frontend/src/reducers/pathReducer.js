import { CURRENT_PATH } from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case CURRENT_PATH:
            return action.payload;
        default:
            return state;
    }
};
