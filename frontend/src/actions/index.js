import covid from '../api/covid';
import covidPoland from '../api/covidPoland';
import data from '../api/data';
import {
    CURRENT_PATH,
    FETCH_COVID,
    FETCH_COVID_PL,
    FETCH_DAY_BY_DATE,
    FETCH_NAME,
    FETCH_TODAY,
    POST_NAME,
} from './types';

export const fetchToday = () => async (dispatch) => {
    const response = await data.get('/');
    dispatch({ type: FETCH_TODAY, payload: response.data });
};

export const fetchName = () => async (dispatch) => {
    const response = await data.get('/sensor');

    dispatch({ type: FETCH_NAME, payload: response.data });
};

export const fetchDayByDate = (date) => async (dispatch) => {
    const response = await data.post('/day', { date });
    dispatch({ type: FETCH_DAY_BY_DATE, payload: response.data });
};

export const postName = (formValues) => async (dispatch) => {
    const response = await data.post('/sensor', formValues);

    dispatch({ type: POST_NAME, payload: response.data });
};

export const fetchCovid = () => async (dispatch) => {
    const response = await covid.get('/');

    dispatch({ type: FETCH_COVID, payload: response.data });
};

export const fetchCovidPoland = () => async (dispatch) => {
    const response = await covidPoland.get('/');

    dispatch({ type: FETCH_COVID_PL, payload: response.data });
};

export const postCurrentPath = (path) => async (dispatch) => {
    dispatch({ type: CURRENT_PATH, payload: path });
};
