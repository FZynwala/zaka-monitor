import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import fetchDayReducer from './fetchDayReducer';
import sensorNamesReducer from './sensorNamesReducer';

export default combineReducers({
    data: fetchDayReducer,
    form: formReducer,
    names: sensorNamesReducer
});