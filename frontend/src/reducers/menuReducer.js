import { SHOW_MENU, HIDE_MENU } from '../actions/types';



export default (state={}, action) => {
    switch(action.type) {
        case SHOW_MENU:
            return { ...state, menu: action.payload };
        case HIDE_MENU:
            return { ...state, menu: action.payload };
        default:
            return { ...state, menu: "hide"};
    };
};