import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import fetchCovidReducer from './fetchCovidReducer';
import fetchDayByDateReducer from './fetchDayByDateReducer';
import fetchDayReducer from './fetchDayReducer';
import sensorNamesReducer from './sensorNamesReducer';

export default combineReducers({
    data: fetchDayReducer,
    covid: fetchCovidReducer,
    form: formReducer,
    names: sensorNamesReducer,
    day: fetchDayByDateReducer,
});
