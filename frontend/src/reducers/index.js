import { combineReducers } from 'redux';
import fetchDayReducer from './fetchDayReducer';

export default combineReducers({
    data: fetchDayReducer
});