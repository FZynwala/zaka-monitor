import data from '../api/data';
import { FETCH_TODAY, FETCH_NAME, POST_NAME } from './types';

export const fetchToday = () => async dispatch => {
    const response = await data.get('/');
    console.log(response.data);
    dispatch({ type: FETCH_TODAY, payload: response.data });
};

export const fetchName = () => async dispatch => {
    const response = await data.get('/sensor');
    console.log(response);

    dispatch({ type: FETCH_NAME, payload: response.data });
};

export const postName = (formValues) => async dispatch => {
    const response = await data.post('/sensor', formValues);
    console.log(response);
    
    dispatch({ type: POST_NAME, payload: response.data });
};
