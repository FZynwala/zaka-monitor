import data from '../api/data';
import { FETCH_TODAY } from './types';

export const fetchToday = () => async dispatch => {
    const response = await data.get('/');
    console.log(response);

    dispatch({ type: FETCH_TODAY, payload: response.data });
};

