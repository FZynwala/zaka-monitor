import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import fetchDayReducer from './fetchDayReducer';
import sensorNamesReducer from './sensorNamesReducer';
import fetchCovidReducer from './fetchCovidReducer';

export default combineReducers({
    data: fetchDayReducer,
    covid: fetchCovidReducer,
    form: formReducer,
    names: sensorNamesReducer
});